import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const projectDir = path.resolve(scriptDir, "..");
const dataFile = path.join(projectDir, "src", "data", "anatomy", "anatomyChoiceQuestions.ts");

const args = parseArgs(process.argv.slice(2));
const chapter = args.chapter;
const limit = Number(args.limit ?? 0);
const batchSize = Math.max(1, Math.min(Number(args.batchSize ?? 8), 20));
const dryRun = Boolean(args.dryRun);
const includeReview = Boolean(args.includeReview);

if (!chapter) {
  console.error("Usage: node scripts/fill-anatomy-answers.mjs --chapter 绪论 [--limit 10] [--include-review] [--dry-run]");
  process.exit(1);
}

await loadEnvFile(path.join(projectDir, ".env"));
await loadEnvFile(path.join(projectDir, ".env.local"), true);

const apiKey = process.env.DEEPSEEK_API_KEY;
const model = process.env.DEEPSEEK_MODEL || "deepseek-chat";
const baseUrl = (process.env.DEEPSEEK_BASE_URL || "https://api.deepseek.com").replace(/\/$/, "");

if (!apiKey) {
  throw new Error("DEEPSEEK_API_KEY is missing. Put it in medmemo/.env.local or medmemo/.env.");
}

const source = await readFile(dataFile, "utf8");
const records = parseQuestionBlocks(source);
const targets = records
  .filter((record) => record.chapter === chapter)
  .filter((record) => !record.answer || !record.explanation)
  .filter((record) => includeReview || record.status !== "待校对")
  .slice(0, limit > 0 ? limit : undefined);

if (targets.length === 0) {
  console.log(`No empty questions found for chapter: ${chapter}`);
  process.exit(0);
}

console.log(`Chapter: ${chapter}`);
console.log(`Target questions: ${targets.length}`);
console.log(`Model: ${model}`);
console.log(dryRun ? "Dry run: no files will be written." : "Writing answers back to anatomyChoiceQuestions.ts.");

const patches = new Map();
for (let index = 0; index < targets.length; index += batchSize) {
  const batch = targets.slice(index, index + batchSize);
  console.log(`Filling batch ${Math.floor(index / batchSize) + 1}/${Math.ceil(targets.length / batchSize)} (${batch.length} questions)`);
  const answers = dryRun ? previewAnswers(batch) : await askDeepSeek(batch, { apiKey, model, baseUrl });

  for (const record of batch) {
    const answer = answers.find((item) => item.id === record.id);
    if (!answer) {
      console.warn(`Missing answer for ${record.id}`);
      continue;
    }

    const normalized = normalizeAnswer(answer.answer, record);
    if (!normalized) {
      console.warn(`Invalid answer for ${record.id}: ${JSON.stringify(answer.answer)}`);
      continue;
    }

    const explanation = String(answer.explanation ?? "").trim();
    if (!explanation) {
      console.warn(`Missing explanation for ${record.id}`);
      continue;
    }

    patches.set(record.id, {
      answer: normalized,
      explanation: explanation.slice(0, 240),
      status: record.status === "待校对" ? "待校对" : "已完成",
    });
  }
}

if (dryRun) {
  for (const [id, patch] of patches) {
    console.log(`${id}: ${JSON.stringify(patch.answer)} | ${patch.explanation}`);
  }
  process.exit(0);
}

let output = source;
for (const record of [...records].reverse()) {
  const patch = patches.get(record.id);
  if (!patch) continue;
  const nextBlock = updateBlock(record.block, patch);
  output = output.slice(0, record.start) + nextBlock + output.slice(record.end);
}

output = updateSummary(output);
await writeFile(dataFile, output, "utf8");
console.log(`Updated ${patches.size} questions in ${path.relative(projectDir, dataFile)}.`);

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
    if (override || !process.env[key]) {
      process.env[key] = value;
    }
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
            "你是正常人体解剖学教师。请只根据标准解剖学知识判断选择题答案，输出严格 JSON，不要输出 Markdown。",
        },
        {
          role: "user",
          content: buildPrompt(batch),
        },
      ],
      response_format: { type: "json_object" },
      temperature: 0,
      max_tokens: 2500,
      stream: false,
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`DeepSeek API failed: ${response.status} ${response.statusText}\n${body}`);
  }

  const payload = await response.json();
  const content = payload.choices?.[0]?.message?.content;
  if (!content) {
    throw new Error(`DeepSeek API returned no content: ${JSON.stringify(payload)}`);
  }

  const parsed = JSON.parse(stripCodeFence(content));
  if (!Array.isArray(parsed.answers)) {
    throw new Error(`Expected {"answers":[...]}, got: ${content}`);
  }
  return parsed.answers;
}

function buildPrompt(batch) {
  const questions = batch.map((record) => ({
    id: record.id,
    chapter: record.chapter,
    section: record.section,
    knowledgePoint: record.knowledgePoint,
    questionType: record.questionType,
    question: record.question,
    options: record.options,
  }));

  return JSON.stringify({
    task:
      "为下面正常人体解剖学选择题补充答案和简短解析。单选题 answer 必须是 A-E 的单个字符串；多选题 answer 必须是按字母升序排列的数组。解析用中文，1-2 句，说明为什么正确，不要重复题干。",
    outputSchema: {
      answers: [
        {
          id: "题目 id",
          answer: "单选填 A；多选填数组如 ['A','C']",
          explanation: "中文简短解析",
        },
      ],
    },
    questions,
  });
}

function stripCodeFence(content) {
  return content.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/i, "").trim();
}

function normalizeAnswer(answer, record) {
  const validKeys = new Set(Object.keys(record.options));
  const letters = Array.isArray(answer)
    ? answer
    : String(answer)
        .split(/[、,，\s]+/)
        .filter(Boolean);
  const normalized = [...new Set(letters.map((item) => String(item).trim().toUpperCase()))].filter((item) =>
    /^[A-E]$/.test(item)
  );

  if (normalized.length === 0 || normalized.some((item) => !validKeys.has(item))) return null;
  normalized.sort();

  if (record.questionType === "single") {
    return normalized.length === 1 ? normalized[0] : null;
  }

  return normalized;
}

function updateBlock(block, patch) {
  const answerCode = Array.isArray(patch.answer)
    ? `[${patch.answer.map((item) => JSON.stringify(item)).join(", ")}]`
    : JSON.stringify(patch.answer);

  return block
    .replace(/answer: (?:"(?:\\.|[^"\\])*"|\[[^\]]*\])/, `answer: ${answerCode}`)
    .replace(/explanation: "(?:\\.|[^"\\])*"/, `explanation: ${JSON.stringify(patch.explanation)}`)
    .replace(/status: "(?:\\.|[^"\\])*"/, `status: ${JSON.stringify(patch.status)}`);
}

function updateSummary(text) {
  const records = parseQuestionBlocks(text);
  const completedQuestions = records.filter((record) => record.status === "已完成").length;
  const pendingAnswerQuestions = records.filter(
    (record) => record.status === "待补答案" && (!record.answer || !record.explanation)
  ).length;
  const reviewQuestions = records.filter((record) => record.status === "待校对").length;

  return text
    .replace(/"completedQuestions": \d+/, `"completedQuestions": ${completedQuestions}`)
    .replace(/"pendingAnswerQuestions": \d+/, `"pendingAnswerQuestions": ${pendingAnswerQuestions}`)
    .replace(/"reviewQuestions": \d+/, `"reviewQuestions": ${reviewQuestions}`);
}

function previewAnswers(batch) {
  return batch.map((record) => ({
    id: record.id,
    answer: record.questionType === "single" ? Object.keys(record.options)[0] : [Object.keys(record.options)[0]],
    explanation: "dry-run 示例解析，未调用 DeepSeek。",
  }));
}
