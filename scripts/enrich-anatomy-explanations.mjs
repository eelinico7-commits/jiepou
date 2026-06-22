import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const projectDir = path.resolve(scriptDir, "..");
const dataFile = path.join(projectDir, "src", "data", "anatomy", "anatomyChoiceQuestions.ts");

const source = await readFile(dataFile, "utf8");
const records = parseQuestionBlocks(source);

let output = source;
let updated = 0;

for (const record of [...records].reverse()) {
  const explanation = buildDetailedExplanation(record);
  const nextBlock = record.block.replace(
    /explanation: "(?:\\.|[^"\\])*"/,
    `explanation: ${JSON.stringify(explanation)}`
  );

  if (nextBlock !== record.block) {
    output = output.slice(0, record.start) + nextBlock + output.slice(record.end);
    updated += 1;
  }
}

await writeFile(dataFile, output, "utf8");
console.log(`Updated ${updated} explanations in ${path.relative(projectDir, dataFile)}.`);

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

  return [...arrayMatch[1].matchAll(/"([A-E])"/g)].map((item) => item[1]);
}

function unescapeJsonString(value) {
  return JSON.parse(`"${value}"`);
}

function buildDetailedExplanation(record) {
  const answers = Array.isArray(record.answer)
    ? record.answer
    : record.answer
      ? [record.answer]
      : [];
  const answerSet = new Set(answers);
  const answerText = answers.join("、");
  const typeText = record.questionType === "multiple" ? "多选题" : "单选题";
  const typeInstruction =
    record.questionType === "multiple"
      ? `本题为多选题，答案为 ${answerText}，需要把所有正确选项同时选出。`
      : `本题为单选题，答案为 ${answerText}。`;
  const focus = record.knowledgePoint || record.section || record.chapter;
  const baseExplanation = stripGeneratedPrefix(record.explanation);
  const optionDetails = Object.entries(record.options)
    .map(([key, option]) => {
      if (answerSet.has(key)) {
        return `${key}. ${option}：正确，符合“${focus}”这一考点，应选。`;
      }

      return `${key}. ${option}：不选，它与本题考查的“${focus}”不符，或不是本题要求的最佳答案。`;
    })
    .join("\n");

  return [
    typeInstruction,
    `考点是“${focus}”。`,
    "逐项看：",
    optionDetails,
    `知识点解析：${baseExplanation}`,
  ].join("\n");
}

function stripGeneratedPrefix(explanation) {
  const marker = "知识点解析：";
  if (explanation.includes(marker)) {
    return explanation.slice(explanation.lastIndexOf(marker) + marker.length).trim();
  }

  return explanation.trim();
}
