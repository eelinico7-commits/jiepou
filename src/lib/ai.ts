import OpenAI from "openai";
import type { GeneratedContent, StructuredKnowledgePoint } from "./types";

export const DEEPSEEK_MODEL = process.env.DEEPSEEK_MODEL || "deepseek-chat";
const FALLBACK_MODEL = "deepseek-chat";

const anatomySystemPrompt = `你是一个医学教育助手，专门帮助医学生学习《正常人体解剖学》第三版（申国明、黎辉主编，杨茂友主审）。你的任务不是泛泛总结，而是把用户提供的课件、笔记、复习资料或教材节选整理为适合考前复习的结构化知识库。
必须遵守：
1. 只基于用户提供的资料整理，不要编造资料中没有的内容。
2. 重点关注结构、位置、形态、毗邻关系、功能意义、临床联系、易混点和考试常问法。
3. 输出要简洁、准确、适合医学生背诵。
4. 如果资料信息不足，要明确写出“不足以判断”或“资料未提供”。
5. 只能返回合法 JSON，不要返回 Markdown，不要用代码块包裹。`;

const chapterSchemaHint = `返回 JSON 对象，字段为：
- chapterTitle: string
- summary: string
- knowledgeTree: Array<{ title: string; children: string[] }>
- keyPoints: Array<{ title: string; explanation: string; examHint: string }>
- terms: Array<{ term: string; definition: string; memoryTip: string }>
- flashcards: Array<{ front: string; back: string; tag: string }>
- quiz: Array<{ question: string; options: string[]; answer: "A" | "B" | "C" | "D"; explanation: string; relatedPoint: string }>
- reviewPlan: Array<{ day: string; task: string }>
不要输出“示例”“具体内容”“题干”等占位词。`;

const knowledgeImportSchemaHint = `返回 JSON 对象，字段为：
- batchTitle: string
- knowledgePoints: Array<{
  systemChapter: string,
  name: string,
  plainExplanation: string,
  examFocus: string,
  confusingPoints: string,
  memoryMethod: string,
  multipleChoice: { question: string, options: string[], answer: "A" | "B" | "C" | "D" },
  shortAnswer: { question: string, answer: string },
  standardAnswer: string
}>
要求：
- 每个知识点都必须来自用户资料。
- options 必须有 4 个选项，并且 answer 只能是 A、B、C、D。
- systemChapter 尽量归入骨学、关节学、肌学、消化系统、呼吸系统、泌尿系统、生殖系统、心血管系统、淋巴系统、神经系统、感觉器、内分泌系统等章节或系统。
- 控制在 5 到 30 个高价值知识点，优先整理考试常考内容。`;

function getClient() {
  const apiKey = process.env.DEEPSEEK_API_KEY;
  if (!apiKey) {
    throw new Error("未配置 DEEPSEEK_API_KEY，请在本地 .env.local 或 Vercel Project 的 Environment Variables 中添加。");
  }
  return new OpenAI({
    apiKey,
    baseURL: "https://api.deepseek.com",
  });
}

function extractJson(raw: string) {
  const trimmed = raw.trim().replace(/^```(?:json)?/i, "").replace(/```$/i, "").trim();
  try {
    return JSON.parse(trimmed);
  } catch {
    const start = trimmed.indexOf("{");
    const end = trimmed.lastIndexOf("}");
    if (start >= 0 && end > start) {
      return JSON.parse(trimmed.slice(start, end + 1));
    }
    throw new Error("AI 返回 JSON 解析失败，请减少输入长度后重试。");
  }
}

function stringValue(value: unknown, fallback = "") {
  return typeof value === "string" ? value : fallback;
}

function stringArray(value: unknown, limit = 20) {
  return Array.isArray(value) ? value.map((item) => stringValue(item)).filter(Boolean).slice(0, limit) : [];
}

function normalizeGeneratedContent(value: unknown, fallbackTitle: string): GeneratedContent {
  const obj = (value && typeof value === "object" ? value : {}) as Record<string, unknown>;
  return {
    chapterTitle: stringValue(obj.chapterTitle, fallbackTitle),
    summary: stringValue(obj.summary, "AI 未返回章节概述。"),
    knowledgeTree: Array.isArray(obj.knowledgeTree)
      ? obj.knowledgeTree.map((item) => {
          const node = (item && typeof item === "object" ? item : {}) as Record<string, unknown>;
          return {
            title: stringValue(node.title, "未命名知识点"),
            children: stringArray(node.children),
          };
        })
      : [],
    keyPoints: Array.isArray(obj.keyPoints)
      ? obj.keyPoints.map((item) => {
          const point = (item && typeof item === "object" ? item : {}) as Record<string, unknown>;
          return {
            title: stringValue(point.title, "重点"),
            explanation: stringValue(point.explanation),
            examHint: stringValue(point.examHint),
          };
        })
      : [],
    terms: Array.isArray(obj.terms)
      ? obj.terms.map((item) => {
          const term = (item && typeof item === "object" ? item : {}) as Record<string, unknown>;
          return {
            term: stringValue(term.term, "名词"),
            definition: stringValue(term.definition),
            memoryTip: stringValue(term.memoryTip),
          };
        })
      : [],
    flashcards: Array.isArray(obj.flashcards)
      ? obj.flashcards
          .map((item) => {
            const card = (item && typeof item === "object" ? item : {}) as Record<string, unknown>;
            return {
              front: stringValue(card.front),
              back: stringValue(card.back),
              tag: stringValue(card.tag),
            };
          })
          .filter((card) => card.front && card.back)
      : [],
    quiz: Array.isArray(obj.quiz)
      ? obj.quiz
          .map((item) => {
            const quiz = (item && typeof item === "object" ? item : {}) as Record<string, unknown>;
            return {
              question: stringValue(quiz.question),
              options: stringArray(quiz.options, 4),
              answer: stringValue(quiz.answer).trim().slice(0, 1).toUpperCase(),
              explanation: stringValue(quiz.explanation),
              relatedPoint: stringValue(quiz.relatedPoint),
            };
          })
          .filter((quiz) => quiz.question && quiz.options.length >= 2 && /^[A-D]$/.test(quiz.answer))
      : [],
    reviewPlan: Array.isArray(obj.reviewPlan)
      ? obj.reviewPlan
          .map((item) => {
            const plan = (item && typeof item === "object" ? item : {}) as Record<string, unknown>;
            return {
              day: stringValue(plan.day),
              task: stringValue(plan.task),
            };
          })
          .filter((item) => item.day && item.task)
      : [],
  };
}

function normalizeKnowledgePoint(value: unknown): StructuredKnowledgePoint | null {
  const obj = (value && typeof value === "object" ? value : {}) as Record<string, unknown>;
  const mc = (obj.multipleChoice && typeof obj.multipleChoice === "object" ? obj.multipleChoice : {}) as Record<string, unknown>;
  const shortAnswer = (obj.shortAnswer && typeof obj.shortAnswer === "object" ? obj.shortAnswer : {}) as Record<string, unknown>;
  const point: StructuredKnowledgePoint = {
    systemChapter: stringValue(obj.systemChapter, "未分类"),
    name: stringValue(obj.name),
    plainExplanation: stringValue(obj.plainExplanation),
    examFocus: stringValue(obj.examFocus),
    confusingPoints: stringValue(obj.confusingPoints),
    memoryMethod: stringValue(obj.memoryMethod),
    multipleChoice: {
      question: stringValue(mc.question),
      options: stringArray(mc.options, 4),
      answer: stringValue(mc.answer, "A").trim().slice(0, 1).toUpperCase(),
    },
    shortAnswer: {
      question: stringValue(shortAnswer.question),
      answer: stringValue(shortAnswer.answer),
    },
    standardAnswer: stringValue(obj.standardAnswer),
  };

  if (!point.name) return null;
  if (!/^[A-D]$/.test(point.multipleChoice.answer)) point.multipleChoice.answer = "A";
  while (point.multipleChoice.options.length < 4) {
    point.multipleChoice.options.push("资料未提供");
  }
  return point;
}

function normalizeKnowledgeImport(value: unknown, fallbackTitle: string) {
  const obj = (value && typeof value === "object" ? value : {}) as Record<string, unknown>;
  const knowledgePoints = Array.isArray(obj.knowledgePoints)
    ? obj.knowledgePoints.map(normalizeKnowledgePoint).filter((item): item is StructuredKnowledgePoint => Boolean(item))
    : [];
  return {
    batchTitle: stringValue(obj.batchTitle, fallbackTitle),
    knowledgePoints,
  };
}

function collectStrings(value: unknown): string[] {
  if (typeof value === "string") return [value];
  if (Array.isArray(value)) return value.flatMap(collectStrings);
  if (value && typeof value === "object") {
    return Object.values(value as Record<string, unknown>).flatMap(collectStrings);
  }
  return [];
}

function extractChineseTerms(text: string) {
  const stopChars = new Set(["由", "和", "与", "及", "对", "的", "有", "含", "为", "是", "可", "在", "于", "中"]);
  const phrases: string[] = [];
  let current = "";

  for (let index = 0; index < text.length; index += 1) {
    const char = text.charAt(index);
    if (char >= "一" && char <= "鿿") {
      current += char;
    } else if (current) {
      phrases.push(current);
      current = "";
    }
  }
  if (current) phrases.push(current);

  const terms = new Set<string>();
  for (const phrase of phrases) {
    for (let index = 0; index < phrase.length - 1; index += 1) {
      const term = phrase.slice(index, index + 2);
      if (!stopChars.has(term.charAt(0)) && !stopChars.has(term.charAt(1))) {
        terms.add(term);
      }
    }
  }

  return Array.from(terms)
    .filter((term) => !["教材", "原文", "课堂", "笔记", "人体", "解剖", "重要", "作用"].includes(term))
    .slice(0, 20);
}

function usesSourceTerms(content: GeneratedContent, sourceText: string) {
  const terms = extractChineseTerms(sourceText);
  if (terms.length === 0) return !sourceText.trim();
  const generatedText = collectStrings(content).join("\n");
  const hitCount = terms.filter((term) => generatedText.includes(term)).length;
  return hitCount >= Math.min(2, terms.length);
}

async function requestJson(model: string, messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[]) {
  const completion = await getClient().chat.completions.create({
    model,
    response_format: { type: "json_object" },
    messages,
    temperature: 0.2,
  });
  return completion.choices[0]?.message?.content || "";
}

export async function generateAnatomyContent(chapterTitle: string, courseName: string, sourceText: string) {
  const models = DEEPSEEK_MODEL === FALLBACK_MODEL ? [DEEPSEEK_MODEL] : [DEEPSEEK_MODEL, FALLBACK_MODEL];
  let lastError: unknown;

  for (const model of models) {
    for (let attempt = 0; attempt < 2; attempt += 1) {
      try {
        const sourceKeywords = extractChineseTerms(sourceText).slice(0, 8);
        const raw = await requestJson(model, [
          { role: "system", content: anatomySystemPrompt },
          {
            role: "user",
            content: `${chapterSchemaHint}

课程名称：${courseName}
章节名称：${chapterTitle}
必须覆盖的原文关键词：${sourceKeywords.join("、") || "无"}
章节文本：${sourceText}`,
          },
        ]);
        if (!raw) throw new Error("AI 请求失败：DeepSeek 未返回内容。");
        const content = normalizeGeneratedContent(extractJson(raw), chapterTitle);
        if (!usesSourceTerms(content, sourceText)) {
          throw new Error("AI 返回内容和原资料关联不足，请重新生成或增加资料文本。");
        }
        return content;
      } catch (error) {
        lastError = error;
      }
    }
  }

  throw lastError instanceof Error ? lastError : new Error("AI 请求失败，请稍后重试。");
}

export async function generateKnowledgeImport(batchTitle: string, sourceText: string) {
  const models = DEEPSEEK_MODEL === FALLBACK_MODEL ? [DEEPSEEK_MODEL] : [DEEPSEEK_MODEL, FALLBACK_MODEL];
  let lastError: unknown;

  for (const model of models) {
    for (let attempt = 0; attempt < 2; attempt += 1) {
      try {
        const raw = await requestJson(model, [
          { role: "system", content: anatomySystemPrompt },
          {
            role: "user",
            content: `${knowledgeImportSchemaHint}

资料标题：${batchTitle}
待整理资料：
${sourceText}`,
          },
        ]);
        if (!raw) throw new Error("AI 请求失败：DeepSeek 未返回内容。");
        const result = normalizeKnowledgeImport(extractJson(raw), batchTitle);
        if (result.knowledgePoints.length === 0) {
          throw new Error("AI 没有整理出可导入的知识点，请增加资料内容后重试。");
        }
        return result;
      } catch (error) {
        lastError = error;
      }
    }
  }

  throw lastError instanceof Error ? lastError : new Error("AI 请求失败，请稍后重试。");
}
