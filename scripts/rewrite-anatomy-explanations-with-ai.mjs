import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const projectDir = path.resolve(scriptDir, "..");
const dataFile = path.join(projectDir, "src", "data", "anatomy", "anatomyChoiceQuestions.ts");

const args = parseArgs(process.argv.slice(2));
const batchSize = Math.max(1, Math.min(Number(args.batchSize ?? 4), 8));
const limit = Math.max(0, Number(args.limit ?? 0));
const startAfter = args.startAfter ? String(args.startAfter) : "";
const dryRun = Boolean(args.dryRun);

await loadEnvFile(path.join(projectDir, ".env"));
await loadEnvFile(path.join(projectDir, ".env.local"), true);

const apiKey = process.env.DEEPSEEK_API_KEY;
const model = process.env.DEEPSEEK_MODEL || "deepseek-chat";
const baseUrl = (process.env.DEEPSEEK_BASE_URL || "https://api.deepseek.com").replace(/\/$/, "");

if (!apiKey) {
  throw new Error("DEEPSEEK_API_KEY is missing. Put it in medmemo/.env.local or medmemo/.env.");
}

let source = await readFile(dataFile, "utf8");
let records = parseQuestionBlocks(source);
let targets = records;

if (startAfter) {
  const index = targets.findIndex((record) => record.id === startAfter);
  if (index === -1) throw new Error(`startAfter id not found: ${startAfter}`);
  targets = targets.slice(index + 1);
}

if (limit > 0) targets = targets.slice(0, limit);

console.log(`Target questions: ${targets.length}`);
console.log(`Batch size: ${batchSize}`);
console.log(`Model: ${model}`);
console.log(dryRun ? "Dry run: no files will be written." : "Writing explanations after each batch.");

let updated = 0;
for (let index = 0; index < targets.length; index += batchSize) {
  const batch = targets.slice(index, index + batchSize);
  console.log(`Batch ${Math.floor(index / batchSize) + 1}/${Math.ceil(targets.length / batchSize)}: ${batch.map((item) => item.id).join(", ")}`);
  const result = dryRun ? previewItems(batch) : await askDeepSeek(batch, { apiKey, model, baseUrl });
  const patches = new Map();

  for (const record of batch) {
    const item = result.find((candidate) => candidate.id === record.id);
    if (!item) {
      console.warn(`Missing response for ${record.id}`);
      continue;
    }

    const answer = normalizeAnswer(item.answer ?? record.answer, record);
    if (!answer) {
      console.warn(`Invalid answer for ${record.id}: ${JSON.stringify(item.answer)}`);
      continue;
    }

    const explanation = normalizeExplanation(item.explanation, record, answer);
    if (!explanation) {
      console.warn(`Invalid explanation for ${record.id}`);
      continue;
    }

    patches.set(record.id, { answer, explanation });
  }

  if (dryRun) {
    for (const [id, patch] of patches) {
      console.log(`\n--- ${id} ---\nanswer=${JSON.stringify(patch.answer)}\n${patch.explanation}`);
    }
    continue;
  }

  source = applyPatches(source, patches);
  await writeFile(dataFile, source, "utf8");
  updated += patches.size;
  records = parseQuestionBlocks(source);
  console.log(`Updated ${updated}/${targets.length}; last=${batch.at(-1)?.id}`);
}

console.log(`Done. Updated ${updated} questions in ${path.relative(projectDir, dataFile)}.`);

function parseArgs(argv) {
  const parsed = {};
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (!arg.startsWith("--")) continue;
    const key = arg.slice(2).replace(/-([a-z])/g, (_, char) => char.toUpperCase());
    const next = argv[index + 1];
    if (!next || next.startsWith("--")) {
      parsed[key] = true;
    } else {
      parsed[key] = next;
      index += 1;
    }
  }
  return parsed;
}

async function loadEnvFile(file, override = false) {
  let text = "";
  try {
    text = await readFile(file, "utf8");
  } catch {
    return;
  }

  for (const rawLine of text.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;
    const match = line.match(/^([A-Za-z_][A-Za-z0-9_]*)=(.*)$/);
    if (!match) continue;
    const key = match[1];
    let value = match[2].trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (override || !process.env[key]) process.env[key] = value;
  }
}

function parseQuestionBlocks(text) {
  const blockPattern = /  \{\r?\n    id: "([^"]+)",[\s\S]*?\r?\n  \}/g;
  const blocks = [];
  let match;

  while ((match = blockPattern.exec(text))) {
    const block = match[0];
    const optionsBlock = block.match(/options: \{\r?\n([\s\S]*?)\r?\n    \}/)?.[1] ?? "";
    const options = {};
    for (const optionMatch of optionsBlock.matchAll(/\s+([A-E]): "((?:\\.|[^"\\])*)",/g)) {
      options[optionMatch[1]] = unescapeJsonString(optionMatch[2]);
    }

    blocks.push({
      id: match[1],
      start: match.index,
      end: match.index + block.length,
      block,
      chapter: readStringField(block, "chapter"),
      section: readStringField(block, "section"),
      knowledgePoint: readStringField(block, "knowledgePoint"),
      questionType: readStringField(block, "questionType"),
      question: readStringField(block, "question"),
      options,
      answer: readAnswerField(block),
      explanation: readStringField(block, "explanation"),
      status: readStringField(block, "status"),
    });
  }

  return blocks;
}

function readStringField(block, field) {
  const match = block.match(new RegExp(`${field}: "((?:\\\\.|[^"\\\\])*)"`));
  return match ? unescapeJsonString(match[1]) : "";
}

function readAnswerField(block) {
  const stringMatch = block.match(/answer: "((?:\\.|[^"\\])*)"/);
  if (stringMatch) return unescapeJsonString(stringMatch[1]);

  const arrayMatch = block.match(/answer: \[([^\]]*)\]/);
  if (!arrayMatch) return "";
  return [...arrayMatch[1].matchAll(/"([A-E])"/g)].map((match) => match[1]);
}

function unescapeJsonString(value) {
  return JSON.parse(`"${value}"`);
}

async function askDeepSeek(batch, config) {
  const response = await fetch(`${config.baseUrl}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${config.apiKey}`,
    },
    body: JSON.stringify({
      model: config.model,
      messages: [
        {
          role: "system",
          content:
            "你是正常人体解剖学教师。你要逐题写选择题解析，不能套模板糊弄。必须基于题干、选项和给定答案，解释每个选项为什么选或不选。输出严格 JSON，不要 Markdown。",
        },
        {
          role: "user",
          content: buildPrompt(batch),
        },
      ],
      response_format: { type: "json_object" },
      temperature: 0,
      max_tokens: 6000,
      stream: false,
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`DeepSeek API failed: ${response.status} ${response.statusText}\n${body}`);
  }

  const payload = await response.json();
  const content = payload.choices?.[0]?.message?.content;
  if (!content) throw new Error(`DeepSeek API returned no content: ${JSON.stringify(payload)}`);

  const parsed = parseModelJson(stripCodeFence(content));
  if (Array.isArray(parsed)) return parsed;
  if (!Array.isArray(parsed.items)) {
    throw new Error(`Expected {"items":[...]}, got: ${content}`);
  }
  return parsed.items;
}

function buildPrompt(batch) {
  return JSON.stringify({
    task: "请为这些正常人体解剖学选择题逐题重写解析。要求：1）第一行明确题型和答案；多选题必须写“本题为多选题，答案为 A、C……，需要全部选对”。2）逐项解释 A/B/C/D/E，每一项都要结合具体选项内容说明为什么选或不选，不能写泛泛的“与考点不符”。3）最后写“知识点解析：”，用2-4句话讲清本题考点、易错点和记忆方式。4）如你认为给定答案明显错误，可以修正 answer，但必须仍符合题型：单选为字符串，多选为按字母升序数组。5）不要编造题干没有涉及的临床扩展。",
    outputSchema: {
      items: [
        {
          id: "题目 id",
          answer: "单选填 A；多选填数组如 ['A','C']",
          explanation: "分行中文解析，包含题型答案、逐项解析、知识点解析",
        },
      ],
    },
    questions: batch.map((record) => ({
      id: record.id,
      chapter: record.chapter,
      section: record.section,
      knowledgePoint: record.knowledgePoint || record.section || record.chapter,
      questionType: record.questionType,
      question: record.question,
      options: record.options,
      currentAnswer: record.answer,
      currentExplanation: extractKnowledgeExplanation(record.explanation),
    })),
  });
}

function stripCodeFence(content) {
  return content.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/i, "").trim();
}

function parseModelJson(content) {
  try {
    return JSON.parse(content);
  } catch {
    // Some models occasionally emit invalid escapes like "\B" inside JSON strings.
    const repaired = escapeControlCharsInJsonStrings(content).replace(/\\(?!["\\/bfnrtu])/g, "");
    return JSON.parse(repaired);
  }
}

function escapeControlCharsInJsonStrings(content) {
  let output = "";
  let inString = false;
  let escaped = false;

  for (const char of content) {
    if (escaped) {
      output += char;
      escaped = false;
      continue;
    }

    if (char === "\\") {
      output += char;
      escaped = true;
      continue;
    }

    if (char === '"') {
      output += char;
      inString = !inString;
      continue;
    }

    if (inString && char === "\n") {
      output += "\\n";
      continue;
    }

    if (inString && char === "\r") {
      output += "\\r";
      continue;
    }

    output += char;
  }

  return output;
}

function extractKnowledgeExplanation(explanation) {
  const marker = "知识点解析：";
  if (explanation.includes(marker)) {
    return explanation.slice(explanation.lastIndexOf(marker) + marker.length).trim();
  }
  return explanation.trim();
}

function normalizeAnswer(answer, record) {
  const validKeys = new Set(Object.keys(record.options));
  const letters = Array.isArray(answer)
    ? answer
    : String(answer)
        .split(/[、，,\s]+/)
        .filter(Boolean);
  const normalized = [...new Set(letters.map((item) => String(item).trim().toUpperCase()))]
    .filter((item) => /^[A-E]$/.test(item))
    .sort();

  if (normalized.length === 0 || normalized.some((item) => !validKeys.has(item))) return null;
  if (record.questionType === "single") return normalized.length === 1 ? normalized[0] : null;
  return normalized;
}

function normalizeExplanation(explanation, record, answer) {
  const text = String(explanation ?? "").replace(/\r\n/g, "\n").trim();
  if (!text) return "";

  const answerLetters = Array.isArray(answer) ? answer : [answer];
  const missingOptions = Object.keys(record.options).filter(
    (key) => !new RegExp(`(^|\\n)\\s*${key}(?:[.．、]|选项|：|:)`).test(text)
  );
  const hasKnowledge = /知识点解析[:：]/.test(text);
  const hasType = record.questionType === "multiple" ? /多选题/.test(text) : /单选题/.test(text);
  const hasAnswer = answerLetters.every((letter) => text.includes(letter));

  if (missingOptions.length === 0 && hasKnowledge && hasType && hasAnswer) return text;

  const fallback = buildFallbackExplanation(record, answer);
  return `${text}\n\n补充校对：\n${fallback}`;
}

function buildFallbackExplanation(record, answer) {
  const answers = Array.isArray(answer) ? answer : [answer];
  const answerSet = new Set(answers);
  const typeLine =
    record.questionType === "multiple"
      ? `本题为多选题，答案为 ${answers.join("、")}，需要全部选对。`
      : `本题为单选题，答案为 ${answers.join("、")}。`;
  const optionLines = Object.entries(record.options).map(([key, option]) => {
    return answerSet.has(key)
      ? `${key}. ${option}：应选。`
      : `${key}. ${option}：不选。`;
  });
  return [typeLine, "逐项看：", ...optionLines, `知识点解析：${extractKnowledgeExplanation(record.explanation)}`].join("\n");
}

function applyPatches(text, patches) {
  const records = parseQuestionBlocks(text);
  let output = text;

  for (const record of [...records].reverse()) {
    const patch = patches.get(record.id);
    if (!patch) continue;
    const answerCode = Array.isArray(patch.answer)
      ? `[${patch.answer.map((item) => JSON.stringify(item)).join(", ")}]`
      : JSON.stringify(patch.answer);
    const nextBlock = record.block
      .replace(/answer: (?:"(?:\\.|[^"\\])*"|\[[^\]]*\])/, `answer: ${answerCode}`)
      .replace(/explanation: "(?:\\.|[^"\\])*"/, `explanation: ${JSON.stringify(patch.explanation)}`);
    output = output.slice(0, record.start) + nextBlock + output.slice(record.end);
  }

  return output;
}

function previewItems(batch) {
  return batch.map((record) => ({
    id: record.id,
    answer: record.answer,
    explanation: buildFallbackExplanation(record, record.answer),
  }));
}
