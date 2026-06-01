import OpenAI from "openai";
import type { GeneratedContent } from "./types";

export const DEEPSEEK_MODEL = process.env.DEEPSEEK_MODEL || "deepseek-chat";
const FALLBACK_MODEL = "deepseek-chat";

const systemPrompt = `你是一个医学教育助手，专门帮助医学生学习《人体解剖学》。你的任务不是泛泛总结，而是把教材内容转化为适合背诵、考试复习和自测的学习材料。
生成内容时必须遵守：
1. 只基于用户提供的章节文本，不要编造教材中没有的内容。
2. 重点关注人体解剖学中的结构、位置、形态、毗邻关系、功能意义、易混淆点。
3. 名词解释要简洁准确，适合期末考试背诵。
4. 背诵卡片要一问一答，不要太长。
5. 自测题要围绕关键结构、位置关系、功能意义和易错点。
6. 如果原文信息不足，要在 summary 中提醒“本章输入内容较少，生成结果可能不完整”。
7. 只能返回合法 JSON，不要返回 Markdown，不要返回解释性文字，不要用代码块包裹。`;

const schemaHint = `请严格输出以下 JSON 结构：
{
  "chapterTitle": "章节标题",
  "summary": "本章简要概述",
  "knowledgeTree": [{"title": "一级知识点", "children": ["二级知识点", "二级知识点"]}],
  "keyPoints": [{"title": "重点标题", "explanation": "解释", "examHint": "常考方式"}],
  "terms": [{"term": "名词", "definition": "定义", "memoryTip": "记忆提示"}],
  "flashcards": [{"front": "卡片正面问题", "back": "卡片背面答案", "tag": "所属知识点"}],
  "quiz": [{"question": "题干", "options": ["A. 选项", "B. 选项", "C. 选项", "D. 选项"], "answer": "A", "explanation": "解析", "relatedPoint": "关联知识点"}],
  "reviewPlan": [{"day": "第 1 天", "task": "复习任务"}]
}`;

function getClient() {
  const apiKey = process.env.DEEPSEEK_API_KEY;
  if (!apiKey) {
    throw new Error("未配置 DEEPSEEK_API_KEY，请在 .env.local 中添加你的 DeepSeek API Key。");
  }
  return new OpenAI({
    apiKey,
    baseURL: "https://api.deepseek.com"
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
            children: Array.isArray(node.children) ? node.children.map((child) => stringValue(child)).filter(Boolean) : []
          };
        })
      : [],
    keyPoints: Array.isArray(obj.keyPoints)
      ? obj.keyPoints.map((item) => {
          const point = (item && typeof item === "object" ? item : {}) as Record<string, unknown>;
          return {
            title: stringValue(point.title, "重点"),
            explanation: stringValue(point.explanation),
            examHint: stringValue(point.examHint)
          };
        })
      : [],
    terms: Array.isArray(obj.terms)
      ? obj.terms.map((item) => {
          const term = (item && typeof item === "object" ? item : {}) as Record<string, unknown>;
          return {
            term: stringValue(term.term, "名词"),
            definition: stringValue(term.definition),
            memoryTip: stringValue(term.memoryTip)
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
              tag: stringValue(card.tag)
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
              options: Array.isArray(quiz.options) ? quiz.options.map((option) => stringValue(option)).filter(Boolean).slice(0, 4) : [],
              answer: stringValue(quiz.answer).trim().slice(0, 1).toUpperCase(),
              explanation: stringValue(quiz.explanation),
              relatedPoint: stringValue(quiz.relatedPoint)
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
              task: stringValue(plan.task)
            };
          })
          .filter((item) => item.day && item.task)
      : []
  };
}

async function requestDeepSeek(model: string, chapterTitle: string, courseName: string, sourceText: string) {
  const client = getClient();
  const completion = await client.chat.completions.create({
    model,
    response_format: { type: "json_object" },
    messages: [
      { role: "system", content: systemPrompt },
      {
        role: "user",
        content: `${schemaHint}

课程名称：${courseName}
章节名称：${chapterTitle}
章节文本：${sourceText}`
      }
    ],
    temperature: 0.2
  });
  return completion.choices[0]?.message?.content || "";
}

export async function generateAnatomyContent(chapterTitle: string, courseName: string, sourceText: string) {
  let raw = "";
  try {
    raw = await requestDeepSeek(DEEPSEEK_MODEL, chapterTitle, courseName, sourceText);
  } catch (error) {
    if (DEEPSEEK_MODEL !== FALLBACK_MODEL) {
      raw = await requestDeepSeek(FALLBACK_MODEL, chapterTitle, courseName, sourceText);
    } else {
      throw error;
    }
  }
  if (!raw) {
    throw new Error("AI 请求失败：DeepSeek 未返回内容。");
  }
  return normalizeGeneratedContent(extractJson(raw), chapterTitle);
}
