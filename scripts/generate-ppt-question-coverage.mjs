import fs from "node:fs";
import path from "node:path";
import os from "node:os";

const root = path.resolve(import.meta.dirname, "../..");
const auditPath = path.join(os.tmpdir(), "codex-pptx-audit-all.json");
const audit = JSON.parse(fs.readFileSync(auditPath, "utf8"));

const mappings = [
  { match: "1dyz0ydxt0dyj0gx.pptx", file: "medmemo/src/lib/osteology-data.ts", module: "osteologyModule", chapterId: "osteology-ppt-question-coverage", title: "PPT题目化覆盖：骨学", source: "骨学PPT" },
  { match: "运动系统-关节学知识点整理版.pptx", file: "medmemo/src/lib/osteology-data.ts", module: "arthrologyModule", chapterId: "arthrology-ppt-question-coverage", title: "PPT题目化覆盖：关节学", source: "关节学PPT" },
  { match: "3dyz0ydxt0dsj0ggj.pptx", file: "medmemo/src/lib/skeletal-muscle-data.ts", module: "skeletalMuscleModule", chapterId: "skeletal-muscle-ppt-question-coverage", title: "PPT题目化覆盖：骨骼肌", source: "骨骼肌PPT" },
  { match: "4dyz0ydxt0dsj0tbbz.pptx", file: "medmemo/src/lib/surface-landmarks-data.ts", module: "surfaceLandmarksModule", chapterId: "surface-landmarks-original-ppt-question-coverage", title: "PPT题目化覆盖：体表标志原课件", source: "体表标志原课件" },
  { match: "运动系统-体表标志知识点整理版.pptx", file: "medmemo/src/lib/surface-landmarks-data.ts", module: "surfaceLandmarksModule", chapterId: "surface-landmarks-review-ppt-question-coverage", title: "PPT题目化覆盖：体表标志整理版", source: "体表标志整理版PPT" },
  { match: "dbz0gjq.pptx", file: "medmemo/src/lib/sense-organ-data.ts", module: "senseOrganModule", chapterId: "sense-organ-ppt-question-coverage", title: "PPT题目化覆盖：感觉器", source: "感觉器PPT" },
  { match: "dez0xhxt.pptx", file: "medmemo/src/lib/digestive-system-data.ts", module: "digestiveSystemModule", chapterId: "digestive-system-ppt-question-coverage", title: "PPT题目化覆盖：消化系统", source: "消化系统PPT" },
  { match: "dlz0xhxt.pptx", file: "medmemo/src/lib/circulatory-system-data.ts", module: "circulatorySystemModule", chapterId: "circulatory-system-ppt-question-coverage", title: "PPT题目化覆盖：循环系统", source: "循环系统PPT" },
  { match: "dqz0nfmxt.pptx", file: "medmemo/src/lib/endocrine-system-data.ts", module: "endocrineSystemModule", chapterId: "endocrine-system-ppt-question-coverage", title: "PPT题目化覆盖：内分泌系统", source: "内分泌系统PPT" },
  { match: "dsz0hxxt.pptx", file: "medmemo/src/lib/respiratory-system-data.ts", module: "respiratorySystemModule", chapterId: "respiratory-system-ppt-question-coverage", title: "PPT题目化覆盖：呼吸系统", source: "呼吸系统PPT" },
  { match: "dsz0mnxt.pptx", file: "medmemo/src/lib/urinary-system-data.ts", module: "urinarySystemModule", chapterId: "urinary-system-ppt-question-coverage", title: "PPT题目化覆盖：泌尿系统", source: "泌尿系统PPT" },
  { match: "dwz0szxt.pptx", file: "medmemo/src/lib/reproductive-system-data.ts", module: "reproductiveSystemModule", chapterId: "reproductive-system-ppt-question-coverage", title: "PPT题目化覆盖：生殖系统", source: "生殖系统PPT" },
];

function cleanText(text) {
  return text.replace(/\s+/g, " ").trim();
}

function isSkip(text) {
  const value = cleanText(text);
  if (!value) return true;
  if (/^谢谢观看/.test(value)) return true;
  if (/^第.+章/.test(value) && /作者：/.test(value) && value.length < 160) return true;
  if (/^目录\s/.test(value) && value.length < 80) return true;
  if (/^第[一二三四五六七八九十]+节\s/.test(value) && value.length < 60) return true;
  return false;
}

function splitBullets(text) {
  const cleaned = cleanText(text)
    .replace(/\s+(\d+\s*[.．）])/g, "。$1")
    .replace(/\s+([（(]\s*\d+\s*[）)])/g, "。$1")
    .replace(/\s+([①②③④⑤⑥⑦⑧⑨])/g, "。$1");

  return cleaned
    .split(/[。；]/)
    .map((item) => item.trim())
    .filter(Boolean)
    .flatMap((part) => {
      if (part.length <= 120) return [part];
      const pieces = part
        .split(/(?=\s*(?:\d+\s*[）.)]|[（(]\s*\d+\s*[）)]|[①②③④⑤⑥⑦⑧⑨]))/)
        .map((item) => item.trim())
        .filter(Boolean);
      return pieces.length > 1 ? pieces.slice(0, 8) : [part.slice(0, 120), part.slice(120, 240)].filter(Boolean);
    })
    .filter(Boolean);
}

function titleFrom(text, fallback) {
  const value = cleanText(text).replace(/^\d+\s*[.．]\s*/, "");
  return (value.split(/[。；]/)[0] || fallback).slice(0, 42).trim();
}

function keywords(text) {
  const value = cleanText(text);
  const found = [];
  const matches = value.match(/[\u4e00-\u9fa5A-Za-z0-9ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩ-]{2,14}/g) ?? [];
  for (const match of matches) {
    if (found.includes(match)) continue;
    if (/^(国家卫生|健康|委员会|作者|单位|十四五|规划教材|示意图|模式图|谢谢观看)$/.test(match)) continue;
    found.push(match);
    if (found.length >= 10) break;
  }
  return found;
}

function makeSection(slide, source) {
  const bullets = splitBullets(slide.text);
  const core = bullets.slice(0, 4).join("；");
  const terms = keywords(slide.text);
  const title = titleFrom(slide.text, `${source}第${slide.no}页`);

  return {
    id: `${source.replace(/[^a-zA-Z0-9\u4e00-\u9fa5]/g, "-")}-slide-${String(slide.no).padStart(3, "0")}-questions`,
    title: `第${slide.no}页题目化覆盖：${title}`,
    mustKnow: [
      `问：本页核心考点是什么？答：${core || title}`,
      `问：本页需要默写哪些关键词？答：${terms.join("、") || title}`,
      "问：本页容易怎么考？答：围绕组成、分部、位置、毗邻、结构特点、功能意义、通路顺序或临床应用设题。",
      `问：复习时如何检查自己是否漏点？答：遮住答案后，按 PPT 第${slide.no}页顺序复述关键词，再用整理版核对。`,
    ],
    plainExplanation: `来自${source}第${slide.no}页的题目化提炼。这里不做全文搬运，而是保留本页应会的核心问答。`,
    examPoints: {
      term: terms.slice(0, 5),
      choice: [`本页常考关键词：${terms.slice(0, 6).join("、") || title}`],
      blank: [`默写${source}第${slide.no}页的关键词和顺序。`],
      short: [`用自己的话回答：${title}`],
    },
    confusingPoints: [
      "不要只记本页标题，要能说出标题下的组成、分部、位置或功能。",
      "遇到数字、顺序、左右、内外、前后、上下时，要按 PPT 原顺序核对。",
    ],
    memoryTips: [`按“${source}第${slide.no}页”定位：先背关键词，再答核心考点题。`],
  };
}

function findSlides(match) {
  const entry = Object.entries(audit).find(([filePath]) => path.basename(filePath) === match);
  if (!entry) throw new Error(`Missing PPT in audit: ${match}`);
  return entry[1].filter((slide) => !isSkip(slide.text));
}

function variableName(chapterId) {
  return chapterId.replace(/-/g, "_");
}

function insertionFor(mapping) {
  const slides = findSlides(mapping.match);
  const sections = slides.map((slide) => makeSection(slide, mapping.source));
  const variable = variableName(mapping.chapterId);
  return {
    count: sections.length,
    code: `
const ${variable} = ${JSON.stringify(sections, null, 2)};

${mapping.module}.chapters.push({
  id: "${mapping.chapterId}",
  title: "${mapping.title}",
  description: "按 ${mapping.source} 的每页压缩内容整理为题目化覆盖，重点用于查漏补缺和背题。",
  sections: ${variable},
  questions: [],
  quickReview: [
    "先按页码顺序答每页核心考点题。",
    "再默写每页关键词，尤其是数字、分部、位置、毗邻、通路和功能。",
    "最后回到前面的整理版章节做总复习。"
  ],
});
`,
  };
}

const summary = [];

for (const mapping of mappings) {
  const absolutePath = path.join(root, mapping.file);
  let source = fs.readFileSync(absolutePath, "utf8");
  const marker = `// ---- ${mapping.chapterId} generated ppt question coverage ----`;
  const endMarker = `// ---- end ${mapping.chapterId} generated ppt question coverage ----`;
  const start = source.indexOf(marker);
  if (start !== -1) {
    const end = source.indexOf(endMarker, start);
    if (end === -1) throw new Error(`Missing end marker: ${mapping.chapterId}`);
    source = source.slice(0, start) + source.slice(end + endMarker.length);
  }

  const generated = insertionFor(mapping);
  source = `${source.trimEnd()}\n\n${marker}${generated.code}${endMarker}\n`;
  fs.writeFileSync(absolutePath, source, "utf8");
  summary.push(`${mapping.title}: ${generated.count}页题目化覆盖 -> ${mapping.file}`);
}

console.log(summary.join("\n"));
