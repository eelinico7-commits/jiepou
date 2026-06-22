import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const projectDir = path.resolve(scriptDir, "..");
const dataFile = path.join(projectDir, "src", "data", "anatomy", "anatomyChoiceQuestions.ts");

const source = await readFile(dataFile, "utf8");
const questions = parseQuestionBlocks(source);

const issues = {
  emptyAnswer: [],
  emptyExplanation: [],
  answerShape: [],
  invalidAnswerLetter: [],
  duplicateOptions: [],
  incompleteOptions: [],
  missingKnowledgePoint: [],
  suspiciousSingleChoice: [],
  suspiciousMultipleChoice: [],
};

for (const question of questions) {
  const optionKeys = Object.keys(question.options);
  const answerLetters = Array.isArray(question.answer)
    ? question.answer
    : question.answer
      ? [question.answer]
      : [];

  if (answerLetters.length === 0) issues.emptyAnswer.push(question);
  if (!question.explanation.trim()) issues.emptyExplanation.push(question);

  if (question.questionType === "multiple" && !Array.isArray(question.answer)) {
    issues.answerShape.push(question);
  }
  if (question.questionType === "single" && Array.isArray(question.answer)) {
    issues.answerShape.push(question);
  }

  if (answerLetters.some((letter) => !optionKeys.includes(letter))) {
    issues.invalidAnswerLetter.push(question);
  }

  if (optionKeys.length < 4 || optionKeys.some((key) => !question.options[key].trim())) {
    issues.incompleteOptions.push(question);
  }

  if (hasDuplicateOptions(question.options)) {
    issues.duplicateOptions.push(question);
  }

  if (!question.knowledgePoint) {
    issues.missingKnowledgePoint.push(question);
  }

  if (question.questionType === "single" && looksLikeMultiple(question.question)) {
    issues.suspiciousSingleChoice.push(question);
  }

  if (question.questionType === "multiple" && looksLikeSingle(question.question)) {
    issues.suspiciousMultipleChoice.push(question);
  }
}

const summary = Object.fromEntries(
  Object.entries(issues).map(([key, value]) => [key, value.length])
);

console.log(JSON.stringify({
  total: questions.length,
  single: questions.filter((question) => question.questionType === "single").length,
  multiple: questions.filter((question) => question.questionType === "multiple").length,
  ...summary,
}, null, 2));

for (const [key, value] of Object.entries(issues)) {
  if (value.length === 0) continue;
  console.log(`\n## ${key}`);
  for (const question of value.slice(0, 80)) {
    console.log(`${question.id} | ${question.questionType} | ${question.chapter} | ${question.question}`);
    if (["answerShape", "invalidAnswerLetter", "duplicateOptions", "incompleteOptions"].includes(key)) {
      console.log(`  answer=${JSON.stringify(question.answer)} options=${JSON.stringify(question.options)}`);
    }
  }
  if (value.length > 80) console.log(`...and ${value.length - 80} more`);
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

function normalizeForComparison(value) {
  return value
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[\s，。；;：:、'"“”‘’（）()]/g, "");
}

function hasDuplicateOptions(options) {
  const normalized = Object.values(options).map(normalizeForComparison).filter(Boolean);
  return normalized.length > 1 && new Set(normalized).size !== normalized.length;
}

function looksLikeMultiple(question) {
  return /包括|有|哪些|属于|均可|正确的有|错误的有|特点|结构|组成|通过|注入|参与|支配|分布/.test(question);
}

function looksLikeSingle(question) {
  return /唯一|最|首先|主要|是\(\)|为\(\)|称为\(\)|不包括|不属于|错误的是|正确的是/.test(question);
}
