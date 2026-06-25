import { readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const projectDir = path.resolve(scriptDir, "..");
const workspaceDir = path.resolve(projectDir, "..");
const reportFile = path.join(projectDir, "question-bank-audit.md");
const choiceBankFile = path.join(projectDir, "src", "data", "anatomy", "anatomyChoiceQuestions.ts");
const libDir = path.join(projectDir, "src", "lib");
const rawDir = path.join(workspaceDir, "data", "raw", "anatomy-questions");

const standardChapters = [
  "绪论",
  "运动系统-骨学",
  "运动系统-关节学",
  "运动系统-肌学",
  "运动系统-体表标志",
  "运动系统-待分类",
  "消化系统",
  "呼吸系统",
  "泌尿系统",
  "生殖系统",
  "循环系统",
  "内分泌系统",
  "感觉器",
  "神经系统",
];

const sourceTypeLabels = {
  original: "原始题源",
  chapterPractice: "章节练习题",
  aiSupplement: "AI补充题",
};

const typeLabels = {
  single: "单选题",
  multiple: "多选题",
  trueFalse: "判断题",
  fillBlank: "填空题",
  shortAnswer: "简答题",
};

const aliasRules = [
  { pattern: /脉管系统|心血管系统|淋巴系统|循环系统/, chapter: "循环系统" },
  { pattern: /消化管|消化腺|腹膜|消化系统/, chapter: "消化系统" },
  { pattern: /呼吸系统|呼吸道|肺|胸膜|纵隔/, chapter: "呼吸系统" },
  { pattern: /泌尿系统|肾|输尿管|膀胱|尿道/, chapter: "泌尿系统" },
  { pattern: /生殖系统|男性生殖|女性生殖|会阴/, chapter: "生殖系统" },
  { pattern: /内分泌系统|内分泌腺|甲状腺|肾上腺|垂体/, chapter: "内分泌系统" },
  { pattern: /感觉器|视器|前庭蜗器|眼|耳/, chapter: "感觉器" },
  { pattern: /神经系统|中枢神经|周围神经|脑神经|脊神经|传导通路|内脏神经/, chapter: "神经系统" },
  { pattern: /骨学|骨\b|骨质|颅骨|椎骨|胸骨|肋|四肢骨/, chapter: "运动系统-骨学" },
  { pattern: /关节学|关节|骨连结|韧带|椎间盘|半月板/, chapter: "运动系统-关节学" },
  { pattern: /肌学|骨骼肌|肌\b|膈|三角肌|小腿三头肌/, chapter: "运动系统-肌学" },
  { pattern: /体表标志|体表定位/, chapter: "运动系统-体表标志" },
  { pattern: /绪论|总论|解剖学姿势|方位术语|轴和面/, chapter: "绪论" },
];

const moduleChapterByExport = {
  anatomyIntroductionModule: "绪论",
  osteologyModule: "运动系统-骨学",
  arthrologyModule: "运动系统-关节学",
  skeletalMuscleModule: "运动系统-肌学",
  surfaceLandmarksModule: "运动系统-体表标志",
  digestiveSystemModule: "消化系统",
  respiratorySystemModule: "呼吸系统",
  urinarySystemModule: "泌尿系统",
  reproductiveSystemModule: "生殖系统",
  circulatorySystemModule: "循环系统",
  endocrineSystemModule: "内分泌系统",
  senseOrganModule: "感觉器",
  nervousSystemModule: "神经系统",
};

function createEmptyCounts() {
  return {
    single: 0,
    multiple: 0,
    trueFalse: 0,
    fillBlank: 0,
    shortAnswer: 0,
    total: 0,
    sourceFiles: new Set(),
    sourceTypes: new Map(),
  };
}

function addCount(summary, chapter, type, sourceFile, sourceType) {
  const normalizedChapter = normalizeChapter(chapter);
  const row = summary.get(normalizedChapter) ?? createEmptyCounts();
  row[type] += 1;
  row.total += 1;
  row.sourceFiles.add(sourceFile);
  row.sourceTypes.set(sourceType, (row.sourceTypes.get(sourceType) ?? 0) + 1);
  summary.set(normalizedChapter, row);
}

function normalizeChapter(value) {
  const text = String(value ?? "").trim();
  if (!text || /未分类|其他|默认章节|综合/.test(text)) return text || "未分类";
  if (standardChapters.includes(text)) return text;
  if (text === "运动系统") return "运动系统-待分类";
  const match = aliasRules.find((rule) => rule.pattern.test(text));
  return match?.chapter ?? text;
}

function mergeSummary(target, source) {
  for (const [chapter, row] of source.entries()) {
    const current = target.get(chapter) ?? createEmptyCounts();
    for (const type of ["single", "multiple", "trueFalse", "fillBlank", "shortAnswer"]) {
      current[type] += row[type];
    }
    current.total += row.total;
    for (const file of row.sourceFiles) current.sourceFiles.add(file);
    for (const [sourceType, count] of row.sourceTypes.entries()) {
      current.sourceTypes.set(sourceType, (current.sourceTypes.get(sourceType) ?? 0) + count);
    }
    target.set(chapter, current);
  }
}

function parseStringField(block, field) {
  const match = block.match(new RegExp(`${field}: "((?:\\\\.|[^"\\\\])*)"`));
  return match ? JSON.parse(`"${match[1]}"`) : "";
}

function parseChoiceBank(text) {
  const summary = new Map();
  const questions = [];
  const blockPattern = /  \{\r?\n    id: "([^"]+)",[\s\S]*?\r?\n  \}/g;
  let match;

  while ((match = blockPattern.exec(text))) {
    const block = match[0];
    const question = {
      id: match[1],
      chapter: parseStringField(block, "chapter"),
      section: parseStringField(block, "section"),
      questionType: parseStringField(block, "questionType"),
      question: parseStringField(block, "question"),
      source: parseStringField(block, "source"),
      sourceType: parseStringField(block, "sourceType") || "原始题源",
      isOriginalQuestion: !/isOriginalQuestion: false/.test(block),
    };
    const type = question.questionType === "multiple" ? "multiple" : "single";
    addCount(summary, question.chapter, type, "src/data/anatomy/anatomyChoiceQuestions.ts", question.sourceType);
    questions.push(question);
  }

  return { summary, questions };
}

function parseModulePracticeFiles(files) {
  const summary = new Map();
  const records = [];

  for (const file of files) {
    const text = file.text;
    const lines = text.split(/\r?\n/);
    let currentModule = path.basename(file.path, ".ts");
    let currentChapter = normalizeChapter(currentModule);

    for (const line of lines) {
      const moduleMatch = line.match(/export const (\w+): OsteologyModule = \{/);
      if (moduleMatch) {
        currentModule = moduleMatch[1];
        currentChapter = moduleChapterByExport[currentModule] ?? currentChapter;
        continue;
      }

      const callMatch = line.match(/\b(choice|blank|judge|short)\("([^"]+)"/);
      if (!callMatch) continue;

      const typeByCall = {
        choice: "single",
        blank: "fillBlank",
        judge: "trueFalse",
        short: "shortAnswer",
      };
      const type = typeByCall[callMatch[1]];
      addCount(summary, currentChapter, type, path.relative(projectDir, file.path).replaceAll("\\", "/"), "章节练习题");
      records.push({
        id: callMatch[2],
        chapter: currentChapter,
        type,
        file: path.relative(projectDir, file.path).replaceAll("\\", "/"),
      });
    }
  }

  return { summary, records };
}

async function readRelevantFiles() {
  const libFiles = (await readdir(libDir))
    .filter((file) => /-data\.ts$/.test(file))
    .map((file) => path.join(libDir, file));

  return Promise.all(
    libFiles.map(async (filePath) => ({
      path: filePath,
      text: await readFile(filePath, "utf8"),
    }))
  );
}

async function inspectRawFiles() {
  const files = (await readdir(rawDir)).filter((file) => /\.(md|csv|json|ts|js)$/i.test(file));
  const result = [];
  for (const file of files) {
    const text = await readFile(path.join(rawDir, file), "utf8");
    result.push({
      file: path.relative(workspaceDir, path.join(rawDir, file)).replaceAll("\\", "/"),
      numberedLines: (text.match(/^\s*\d+[.、]/gm) ?? []).length,
      singleHeadings: (text.match(/单选题/g) ?? []).length,
      multipleHeadings: (text.match(/多选题/g) ?? []).length,
    });
  }
  return result;
}

function sourceFilesText(row) {
  return [...row.sourceFiles].sort().join("<br>");
}

function sourceTypesText(row) {
  return [...row.sourceTypes.entries()]
    .sort(([left], [right]) => left.localeCompare(right, "zh-Hans-CN"))
    .map(([type, count]) => `${type} ${count}`)
    .join("；");
}

function formatTable(summary) {
  const rows = standardChapters
    .filter((chapter) => summary.has(chapter))
    .concat([...summary.keys()].filter((chapter) => !standardChapters.includes(chapter)).sort());

  return [
    "| 章节名称 | 单选题 | 多选题 | 判断题 | 填空题 | 简答题 | 总数量 | 来源类型 | 来源文件 |",
    "|---|---:|---:|---:|---:|---:|---:|---|---|",
    ...rows.map((chapter) => {
      const row = summary.get(chapter);
      return `| ${chapter} | ${row.single} | ${row.multiple} | ${row.trueFalse} | ${row.fillBlank} | ${row.shortAnswer} | ${row.total} | ${sourceTypesText(row)} | ${sourceFilesText(row)} |`;
    }),
  ].join("\n");
}

function findPotentialMisclassified(questions) {
  return questions
    .map((question) => {
      const guessed = normalizeChapter(`${question.question} ${question.section}`);
      return { ...question, guessed };
    })
    .filter(
      (question) =>
        question.chapter === "运动系统-待分类" &&
        standardChapters.includes(question.guessed) &&
        question.guessed !== "运动系统-待分类"
    );
}

function findOtherBuckets(questions) {
  return questions.filter((question) => /其他|未分类|默认章节|待分类/.test(`${question.chapter} ${question.section}`));
}

function findShortQuestionDuplicates(questions) {
  const groups = new Map();
  for (const question of questions) {
    const key = question.question.normalize("NFKC").replace(/[\s（）()，,。；;：:？?“”"'、_—-]/g, "");
    if (key.length > 10) continue;
    const list = groups.get(key) ?? [];
    list.push(question);
    groups.set(key, list);
  }
  return [...groups.entries()].filter(([, list]) => list.length > 1);
}

function chapterShortageRows(choiceSummary, totalSummary) {
  return standardChapters
    .map((chapter) => ({
      chapter,
      choiceTotal: choiceSummary.get(chapter)?.total ?? 0,
      total: totalSummary.get(chapter)?.total ?? 0,
    }))
    .filter((row) => row.choiceTotal < 20 || row.total < 25);
}

function renderReport({ choiceSummary, practiceSummary, totalSummary, rawFiles, choiceQuestions, practiceRecords }) {
  const otherBuckets = findOtherBuckets(choiceQuestions);
  const misclassified = findPotentialMisclassified(choiceQuestions);
  const shortDuplicates = findShortQuestionDuplicates(choiceQuestions);
  const shortages = chapterShortageRows(choiceSummary, totalSummary);

  return `# 题库审计报告

生成时间：${new Date().toISOString()}

## 审计范围

- 独立刷题页数据：\`src/data/anatomy/anatomyChoiceQuestions.ts\`
- 原始选择题源：\`data/raw/anatomy-questions/*.md\`
- 章节练习题：\`src/lib/*-data.ts\`
- 生成、填答案、解释改写、覆盖统计脚本：\`scripts/*.mjs\`
- 未发现数据库 seed 题库文件；\`supabase/schema.sql\` 只定义表结构。

## 当前每章题目数量：独立刷题页

${formatTable(choiceSummary)}

## 当前每章题目数量：独立刷题页 + 章节练习题

${formatTable(totalSummary)}

## 原始题源文件扫描

| 来源文件 | 编号题目行 | 单选题标题出现次数 | 多选题标题出现次数 |
|---|---:|---:|---:|
${rawFiles.map((file) => `| ${file.file} | ${file.numberedLines} | ${file.singleHeadings} | ${file.multipleHeadings} |`).join("\n")}

## 明显不足章节

${shortages.length === 0 ? "- 未发现总量低于阈值的章节。" : shortages.map((row) => `- ${row.chapter}：独立刷题页 ${row.choiceTotal} 题，合并章节练习题后 ${row.total} 题。`).join("\n")}

## 原因判断

- 独立刷题页只导入 \`anatomyChoiceQuestions.ts\`，该文件来自 3 个 raw markdown，只包含单选题和多选题；各章节 \`src/lib/*-data.ts\` 中的判断题、填空题、简答题没有进入刷题页。
- 题量分布不均主要来自源文件覆盖不均：神经系统 150 题、循环系统 107 题、运动系统合计较多；呼吸系统、泌尿系统、内分泌系统、绪论在 raw 选择题源中明显偏少。
- 章节练习题本身分布较均匀，多数章节按每个知识块 5 题构建，因此网站学习页不是缺题，问题集中在独立刷题页的数据来源和统计口径。
- 当前去重脚本使用“题干 + 选项”作为 key，不是只按短题干去重；没有发现短题干章节被整批误删的证据。脚本元数据记录生成时共合并 13 道重复题。
- \`运动系统-待分类\` 仍有 6 道选择题，属于字段/关键词归类不足；没有把题目归入“其他”“未分类”“默认章节”的独立章节。

## 字段统一检查

- 循环系统相关别名统一按“循环系统”统计；章节练习文件标题中使用“脉管系统”的，应映射到循环系统。
- 运动系统细分为“运动系统-骨学”“运动系统-关节学”“运动系统-肌学”“运动系统-体表标志”“运动系统-待分类”。
- 神经系统下的中枢神经、周围神经、脑神经、脊神经、传导通路统一按“神经系统”统计。
- 消化管、消化腺、腹膜统一按“消化系统”统计。

## 待分类或可能错分题

${otherBuckets.length === 0 ? "- 未发现“其他”“未分类”“默认章节”题目。" : otherBuckets.map((question) => `- ${question.id}：${question.chapter} / ${question.section} / ${question.question}`).join("\n")}

${misclassified.length === 0 ? "- 未发现可由题干关键词自动确认的新归类。" : misclassified.map((question) => `- ${question.id}：当前 ${question.chapter}，建议人工复核为 ${question.guessed}，题干：${question.question}`).join("\n")}

## 去重逻辑检查

- 生成脚本 \`scripts/generate-anatomy-questions.mjs\` 的 \`questionKey\` 包含题干和全部选项，因此短题干只有在选项也完全相同或高度一致时才会合并。
- 审计到短题干重复组 ${shortDuplicates.length} 组；这些是现有导出后的重复候选，不等于被删除记录。
- 现有质量审计仍提示重复选项题、疑似单/多选类型不一致题，建议后续人工校对，不应自动删除。

## 本次修复

- 为独立刷题页增加章节题量和来源类型统计，避免只看到当前筛选结果总数。
- 为选择题数据结构补充来源类型字段，明确现有 \`anatomyChoiceQuestions.ts\` 均为原始题源：\`sourceType: "原始题源"\`、\`isOriginalQuestion: true\`。
- 生成本报告时统一了审计口径中的章节别名映射，但没有凭空删除题目，也没有把 AI 生成题冒充真题。

## 仍需人工补充题源

- 绪论、呼吸系统、泌尿系统、内分泌系统在独立刷题页选择题源中偏少。
- 如果要扩充独立刷题页，应优先补充真实题源或从教材/PPT生成单独标记的补充练习题；AI补充题必须带 \`source: "AI补充题"\`、\`isOriginalQuestion: false\`、\`confidence: "medium"\`。
- 本次未新增 AI 补充题，避免在题源审计阶段把练习题和原始真题混在一起。

## 章节练习题记录数

- 已扫描章节练习题 ${practiceRecords.length} 道，来自 \`src/lib/*-data.ts\`。
`;
}

async function main() {
  const choiceText = await readFile(choiceBankFile, "utf8");
  const { summary: choiceSummary, questions: choiceQuestions } = parseChoiceBank(choiceText);
  const moduleFiles = await readRelevantFiles();
  const { summary: practiceSummary, records: practiceRecords } = parseModulePracticeFiles(moduleFiles);
  const totalSummary = new Map();
  mergeSummary(totalSummary, choiceSummary);
  mergeSummary(totalSummary, practiceSummary);
  const rawFiles = await inspectRawFiles();

  const report = renderReport({
    choiceSummary,
    practiceSummary,
    totalSummary,
    rawFiles,
    choiceQuestions,
    practiceRecords,
  });

  await writeFile(reportFile, report, "utf8");
  console.log(`Wrote ${path.relative(projectDir, reportFile)}`);
}

await main();
