import { readFile, readdir, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const projectDir = path.resolve(scriptDir, "..");
const rawDir = path.resolve(projectDir, "..", "data", "raw", "anatomy-questions");
const outputDir = path.resolve(projectDir, "src", "data", "anatomy");
const outputFile = path.join(outputDir, "anatomyChoiceQuestions.ts");

const sourceOrder = [
  "01-intro-motor-digestive-respiratory.md",
  "02-urinary-reproductive-circulatory-endocrine-sense-neuro.md",
  "03-neuro-supplement.md",
];

const chapterSlugs = {
  绪论: "intro",
  "运动系统-骨学": "motor-osteology",
  "运动系统-关节学": "motor-joint",
  "运动系统-肌学": "motor-muscle",
  "运动系统-待分类": "motor-unclassified",
  消化系统: "digestive",
  呼吸系统: "respiratory",
  泌尿系统: "urinary",
  生殖系统: "reproductive",
  循环系统: "circulatory",
  内分泌系统: "endocrine",
  感觉器: "sense",
  神经系统: "neuro",
};

const motorKeywords = {
  "运动系统-骨学": [
    "不规则骨", "脑颅骨", "面颅骨", "红骨髓", "黄骨髓", "骨松质", "骨密质", "骨髓", "骨膜",
    "长骨", "短骨", "扁骨", "籽骨", "椎骨", "颈椎", "胸椎", "腰椎", "骶骨", "尾骨", "胸骨角",
    "胸骨", "肋骨", "颅骨", "筛骨", "蝶骨", "颞骨", "额骨", "顶骨", "枕骨", "锁骨", "肩胛骨",
    "肱骨", "桡骨", "尺骨", "髋骨", "股骨", "胫骨", "腓骨", "髌骨", "腕骨", "跗骨", "髋臼",
    "闭孔", "骶管", "骶角", "鼻旁窦", "骨盆", "肋", "骨质", "骨",
  ],
  "运动系统-关节学": [
    "距小腿关节", "颞下颌关节", "骶结节韧带", "骶棘韧带", "前纵韧带", "后纵韧带",
    "交叉韧带", "侧副韧带", "胸廓上口", "胸廓下口", "骨盆下口", "关节面", "关节囊",
    "关节腔", "关节盘", "关节唇", "椎间盘", "肩关节", "肘关节", "桡腕关节", "髋关节",
    "膝关节", "半月板", "黄韧带", "脊柱", "胸廓", "韧带", "关节",
  ],
  "运动系统-肌学": [
    "胸锁乳突肌", "肋间外肌", "肋间内肌", "腹外斜肌", "腹内斜肌", "肩胛下肌", "小腿三头肌",
    "肱二头肌", "肱三头肌", "股四头肌", "股二头肌", "腓骨长肌", "腓骨短肌", "胸大肌",
    "胸小肌", "腹横肌", "腹直肌", "三角肌", "冈上肌", "冈下肌", "臀大肌", "胫骨前肌",
    "胫骨后肌", "斜方肌", "背阔肌", "竖脊肌", "咬肌", "颞肌", "面肌", "咀嚼肌",
    "筋膜", "腱鞘", "肌腱", "肌腹", "膈", "肌",
  ],
};

const knowledgeKeywords = {
  绪论: ["解剖学姿势", "方位术语", "矢状面", "冠状面", "水平面", "组织", "轴"],
  消化系统: ["口腔", "牙", "舌", "唾液腺", "咽", "食管", "胃", "十二指肠", "空肠", "回肠", "大肠", "结肠", "直肠", "肛管", "肝", "胆囊", "胆总管", "胰", "腹膜"],
  呼吸系统: ["鼻", "鼻旁窦", "喉", "气管", "主支气管", "肺", "胸膜", "纵隔"],
  泌尿系统: ["肾", "输尿管", "膀胱", "尿道"],
  生殖系统: ["睾丸", "附睾", "输精管", "精囊", "前列腺", "男性尿道", "卵巢", "输卵管", "子宫", "阴道", "会阴"],
  循环系统: ["心", "动脉", "静脉", "毛细血管", "主动脉", "肺循环", "体循环", "淋巴", "门静脉"],
  内分泌系统: ["甲状腺", "甲状旁腺", "肾上腺", "垂体", "松果体"],
  感觉器: ["眼球", "视网膜", "晶状体", "泪器", "外耳", "中耳", "内耳", "鼓膜", "前庭蜗器"],
  神经系统: ["脊髓", "脑干", "延髓", "脑桥", "中脑", "小脑", "间脑", "大脑", "脑神经", "脊神经", "内脏神经", "传导通路", "脑膜", "脑脊液", "脑血管"],
};

function chapterFromHeading(line, currentChapter) {
  if (/绪论/.test(line)) return "绪论";
  if (/运动系统/.test(line)) return "运动系统";
  if (/消化系统/.test(line)) return "消化系统";
  if (/呼吸系统/.test(line)) return "呼吸系统";
  if (/泌尿系统/.test(line)) return "泌尿系统";
  if (/生殖系统/.test(line)) return "生殖系统";
  if (/循环系统/.test(line)) return "循环系统";
  if (/内分泌系统/.test(line)) return "内分泌系统";
  if (/感觉器/.test(line)) return "感觉器";
  if (/神经系统/.test(line)) return "神经系统";
  return currentChapter;
}

function splitQuestionAndOptions(body) {
  const text = body.join(" ").replace(/\s+/g, " ").trim();
  const markers = [...text.matchAll(/(?:^|\s)([A-E])[.．、]\s*/g)];
  const options = {};

  if (markers.length === 0) {
    return { question: text, options };
  }

  const question = text.slice(0, markers[0].index).trim();
  markers.forEach((marker, index) => {
    const start = marker.index + marker[0].length;
    const end = markers[index + 1]?.index ?? text.length;
    options[marker[1]] = text.slice(start, end).trim();
  });

  return { question, options };
}

function parseMarkdown(source, text) {
  let chapter = source.startsWith("03-") ? "神经系统" : "";
  let questionType = "";
  let active = true;
  let current = null;
  const questions = [];

  const flush = () => {
    if (!current) return;
    const parsed = splitQuestionAndOptions(current.body);
    questions.push({
      source,
      sourceQuestionNumber: current.number,
      originalChapter: current.chapter,
      originalQuestionType: current.questionType,
      question: parsed.question,
      options: parsed.options,
    });
    current = null;
  };

  for (const rawLine of text.split(/\r?\n/)) {
    const line = rawLine.trim();

    if (/^#/.test(line)) {
      flush();
      if (/^# 选择题总数量统计|^# 说明|^## 补充说明/.test(line)) {
        active = false;
        continue;
      }

      chapter = chapterFromHeading(line, chapter);
      if (/单选题/.test(line) && !/单选题、多选题/.test(line)) questionType = "single";
      if (/多选题/.test(line) && !/单选题、多选题/.test(line)) questionType = "multiple";
      continue;
    }

    if (!active || !chapter || !questionType) continue;

    const questionMatch = line.match(/^(\d+)[.、]\s*(.*)$/);
    if (questionMatch) {
      flush();
      current = {
        chapter,
        questionType,
        number: Number(questionMatch[1]),
        body: [questionMatch[2]],
      };
      continue;
    }

    if (current && line && line !== "---") {
      current.body.push(line);
    }
  }

  flush();
  return questions;
}

function normalizeForComparison(value) {
  return value
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[\s（）()，,。；;：:？?“”"'、_—-]/g, "");
}

function questionKey(question) {
  const options = Object.entries(question.options)
    .sort(([left], [right]) => left.localeCompare(right))
    .map(([key, value]) => `${key}${value}`)
    .join("|");
  return normalizeForComparison(`${question.question}|${options}`);
}

function inferSupplementQuestionType(question) {
  if (!question.source.startsWith("03-") || question.originalQuestionType !== "single") {
    return { questionType: question.originalQuestionType, inferred: false };
  }

  const multipleSignals = [
    /正确的有/,
    /包括/,
    /哪些/,
    /均可/,
    /特点/,
    /表现为/,
    /神经有/,
    /结构有/,
    /纤维是/,
    /纤维束有/,
    /传导通路的描述/,
  ];

  if (multipleSignals.some((pattern) => pattern.test(question.question))) {
    return { questionType: "multiple", inferred: true };
  }

  return { questionType: "single", inferred: false };
}

function keywordScore(text, keywords) {
  return keywords.reduce((score, keyword) => score + (text.includes(keyword) ? keyword.length : 0), 0);
}

function classifyMotorQuestion(question) {
  const questionText = question.question;
  const allText = `${question.question} ${Object.values(question.options).join(" ")}`;
  const categories = Object.entries(motorKeywords);
  const questionScores = categories.map(([chapter, keywords]) => ({
    chapter,
    score: keywordScore(questionText, keywords),
  }));
  const bestQuestionScore = Math.max(...questionScores.map((item) => item.score));

  if (bestQuestionScore > 0) {
    return questionScores
      .filter((item) => item.score === bestQuestionScore)
      .sort((left, right) => left.chapter.localeCompare(right.chapter))[0].chapter;
  }

  const allScores = categories.map(([chapter, keywords]) => ({
    chapter,
    score: keywordScore(allText, keywords),
  }));
  const bestAllScore = Math.max(...allScores.map((item) => item.score));

  if (bestAllScore > 0) {
    return allScores
      .filter((item) => item.score === bestAllScore)
      .sort((left, right) => left.chapter.localeCompare(right.chapter))[0].chapter;
  }

  return "运动系统-待分类";
}

function findKnowledgePoint(chapter, question) {
  const allText = `${question.question} ${Object.values(question.options).join(" ")}`;
  const keywords = chapter.startsWith("运动系统")
    ? motorKeywords[chapter] ?? []
    : knowledgeKeywords[chapter] ?? [];

  return [...keywords]
    .sort((left, right) => right.length - left.length)
    .find((keyword) => allText.includes(keyword));
}

function hasDuplicateOptions(options) {
  const normalized = Object.values(options).map(normalizeForComparison).filter(Boolean);
  return normalized.length > 1 && new Set(normalized).size !== normalized.length;
}

function hasObviousContentIssue(question) {
  const optionCount = Object.keys(question.options).length;
  return (
    !question.question ||
    optionCount < 4 ||
    Object.values(question.options).some((option) => !option.trim()) ||
    hasDuplicateOptions(question.options) ||
    /选项略|多选题干/.test(question.question)
  );
}

function mergeDuplicates(questions) {
  const unique = new Map();
  let duplicateCount = 0;

  for (const question of questions) {
    const key = questionKey(question);
    const existing = unique.get(key);

    if (!existing) {
      unique.set(key, {
        ...question,
        sourceFiles: [question.source],
        typeConflict: false,
      });
      continue;
    }

    duplicateCount += 1;
    existing.sourceFiles = [...new Set([...existing.sourceFiles, question.source])];
    existing.typeConflict ||= existing.questionType !== question.questionType;
  }

  return { questions: [...unique.values()], duplicateCount };
}

function formatOptions(options) {
  const entries = ["A", "B", "C", "D", "E"]
    .filter((key) => options[key])
    .map((key) => `      ${key}: ${JSON.stringify(options[key])},`);
  return `{\n${entries.join("\n")}\n    }`;
}

function renderDataFile(questions, metadata) {
  const renderedQuestions = questions
    .map(
      (question) => `  {
    id: ${JSON.stringify(question.id)},
    chapter: ${JSON.stringify(question.chapter)},
    section: ${JSON.stringify(question.section)},
${question.knowledgePoint ? `    knowledgePoint: ${JSON.stringify(question.knowledgePoint)},\n` : ""}    questionType: ${JSON.stringify(question.questionType)},
    question: ${JSON.stringify(question.question)},
    options: ${formatOptions(question.options)},
    answer: "",
    explanation: "",
    source: ${JSON.stringify(question.source)},
    sourceType: "原始题源",
    isOriginalQuestion: true,
    status: ${JSON.stringify(question.status)},
  }`
    )
    .join(",\n");

  return `// Generated by scripts/generate-anatomy-questions.mjs.
// The Markdown files in data/raw/anatomy-questions remain the read-only source backup.

export type AnatomyChoiceQuestion = {
  id: string;
  chapter: string;
  section: string;
  knowledgePoint?: string;
  questionType: "single" | "multiple";
  question: string;
  options: {
    A?: string;
    B?: string;
    C?: string;
    D?: string;
    E?: string;
  };
  answer: string | string[];
  explanation: string;
  source: string;
  sourceType: "原始题源" | "AI补充题";
  isOriginalQuestion: boolean;
  confidence?: "high" | "medium" | "low";
  status: "已完成" | "待补答案" | "待校对";
};

export const anatomyQuestionImportSummary = ${JSON.stringify(metadata, null, 2)} as const;

export const anatomyChoiceQuestions: AnatomyChoiceQuestion[] = [
${renderedQuestions}
];
`;
}

async function main() {
  const availableFiles = new Set(await readdir(rawDir));
  const missingFiles = sourceOrder.filter((source) => !availableFiles.has(source));
  if (missingFiles.length > 0) {
    throw new Error(`Missing raw question files: ${missingFiles.join(", ")}`);
  }

  const parsed = [];
  for (const source of sourceOrder) {
    const text = await readFile(path.join(rawDir, source), "utf8");
    parsed.push(...parseMarkdown(source, text));
  }

  const prepared = parsed.map((question, sourceIndex) => {
    const inferredType = inferSupplementQuestionType(question);
    const chapter =
      question.originalChapter === "运动系统"
        ? classifyMotorQuestion(question)
        : question.originalChapter;

    return {
      ...question,
      sourceIndex,
      chapter,
      questionType: inferredType.questionType,
      inferredType: inferredType.inferred,
    };
  });

  const deduplicated = mergeDuplicates(prepared);
  const counters = new Map();
  const structured = deduplicated.questions.map((question) => {
    const counterKey = `${question.chapter}-${question.questionType}`;
    const sequence = (counters.get(counterKey) ?? 0) + 1;
    counters.set(counterKey, sequence);
    const slug = chapterSlugs[question.chapter];
    const id = `${slug}-${question.questionType}-${String(sequence).padStart(3, "0")}`;
    const knowledgePoint = findKnowledgePoint(question.chapter, question);
    const needsReview =
      question.typeConflict ||
      question.inferredType ||
      hasObviousContentIssue(question);
    const section = question.chapter.startsWith("运动系统")
      ? question.chapter.replace("运动系统-", "")
      : knowledgePoint ?? "综合";

    return {
      id,
      chapter: question.chapter,
      section,
      knowledgePoint,
      questionType: question.questionType,
      question: question.question,
      options: question.options,
      answer: "",
      explanation: "",
      source: question.sourceFiles
        .map((source) => `data/raw/anatomy-questions/${source}`)
        .join("；"),
      status: needsReview ? "待校对" : "待补答案",
      sourceIndex: question.sourceIndex,
    };
  });

  const chapterCounts = {};
  for (const question of structured) {
    chapterCounts[question.chapter] = (chapterCounts[question.chapter] ?? 0) + 1;
  }

  const metadata = {
    sourceFiles: sourceOrder.length,
    parsedQuestions: parsed.length,
    duplicateQuestionsRemoved: deduplicated.duplicateCount,
    inferredQuestionTypes: deduplicated.questions.filter(
      (question) => question.inferredType
    ).length,
    conflictingQuestionTypes: deduplicated.questions.filter(
      (question) => question.typeConflict
    ).length,
    incompleteQuestions: deduplicated.questions.filter(
      (question) =>
        !question.question || Object.keys(question.options).length < 4
    ).length,
    duplicateOptionQuestions: deduplicated.questions.filter((question) =>
      hasDuplicateOptions(question.options)
    ).length,
    totalQuestions: structured.length,
    singleQuestions: structured.filter((question) => question.questionType === "single").length,
    multipleQuestions: structured.filter((question) => question.questionType === "multiple").length,
    completedQuestions: 0,
    pendingAnswerQuestions: structured.filter((question) => question.status === "待补答案").length,
    reviewQuestions: structured.filter((question) => question.status === "待校对").length,
    chapterCounts,
  };

  await mkdir(outputDir, { recursive: true });
  await writeFile(outputFile, renderDataFile(structured, metadata), "utf8");
  console.log(JSON.stringify(metadata, null, 2));
}

await main();
