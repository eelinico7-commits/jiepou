import { anatomyChoiceQuestions, type AnatomyChoiceQuestion } from "./anatomyChoiceQuestions";
import { anatomyIntroductionModule, arthrologyModule, osteologyModule } from "@/lib/osteology-data";
import { skeletalMuscleModule } from "@/lib/skeletal-muscle-data";
import { surfaceLandmarksModule } from "@/lib/surface-landmarks-data";
import { digestiveSystemModule } from "@/lib/digestive-system-data";
import { respiratorySystemModule } from "@/lib/respiratory-system-data";
import { urinarySystemModule } from "@/lib/urinary-system-data";
import { reproductiveSystemModule } from "@/lib/reproductive-system-data";
import { circulatorySystemModule } from "@/lib/circulatory-system-data";
import { endocrineSystemModule } from "@/lib/endocrine-system-data";
import { senseOrganModule } from "@/lib/sense-organ-data";
import { nervousSystemModule } from "@/lib/nervous-system-data";
import type { OsteologyModule, OsteologyQuestionType } from "@/lib/types";

export type QuestionSourceType = AnatomyChoiceQuestion["sourceType"] | "章节练习题";

export type QuestionBankChapterStat = {
  chapter: string;
  single: number;
  multiple: number;
  trueFalse: number;
  fillBlank: number;
  shortAnswer: number;
  total: number;
  sourceTypes: Partial<Record<QuestionSourceType, number>>;
};

const chapterOrder = [
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

const practiceModules: Array<{ chapter: string; module: OsteologyModule }> = [
  { chapter: "绪论", module: anatomyIntroductionModule },
  { chapter: "运动系统-骨学", module: osteologyModule },
  { chapter: "运动系统-关节学", module: arthrologyModule },
  { chapter: "运动系统-肌学", module: skeletalMuscleModule },
  { chapter: "运动系统-体表标志", module: surfaceLandmarksModule },
  { chapter: "消化系统", module: digestiveSystemModule },
  { chapter: "呼吸系统", module: respiratorySystemModule },
  { chapter: "泌尿系统", module: urinarySystemModule },
  { chapter: "生殖系统", module: reproductiveSystemModule },
  { chapter: "循环系统", module: circulatorySystemModule },
  { chapter: "内分泌系统", module: endocrineSystemModule },
  { chapter: "感觉器", module: senseOrganModule },
  { chapter: "神经系统", module: nervousSystemModule },
];

const practiceTypeMap: Record<
  OsteologyQuestionType,
  keyof Pick<QuestionBankChapterStat, "single" | "trueFalse" | "fillBlank" | "shortAnswer">
> = {
  single_choice: "single",
  true_false: "trueFalse",
  fill_blank: "fillBlank",
  short_answer: "shortAnswer",
};

function createStat(chapter: string): QuestionBankChapterStat {
  return {
    chapter,
    single: 0,
    multiple: 0,
    trueFalse: 0,
    fillBlank: 0,
    shortAnswer: 0,
    total: 0,
    sourceTypes: {},
  };
}

function increment(
  stat: QuestionBankChapterStat,
  type: keyof Pick<QuestionBankChapterStat, "single" | "multiple" | "trueFalse" | "fillBlank" | "shortAnswer">,
  sourceType: QuestionSourceType
) {
  stat[type] += 1;
  stat.total += 1;
  stat.sourceTypes[sourceType] = (stat.sourceTypes[sourceType] ?? 0) + 1;
}

function buildChapterStats() {
  const stats = new Map<string, QuestionBankChapterStat>();
  const getStat = (chapter: string) => {
    const current = stats.get(chapter) ?? createStat(chapter);
    stats.set(chapter, current);
    return current;
  };

  for (const question of anatomyChoiceQuestions) {
    increment(
      getStat(question.chapter),
      question.questionType === "multiple" ? "multiple" : "single",
      question.sourceType
    );
  }

  for (const { chapter, module } of practiceModules) {
    const stat = getStat(chapter);
    for (const question of module.chapters.flatMap((item) => item.questions)) {
      increment(stat, practiceTypeMap[question.type], "章节练习题");
    }
  }

  return Array.from(stats.values()).sort((left, right) => {
    const leftIndex = chapterOrder.indexOf(left.chapter);
    const rightIndex = chapterOrder.indexOf(right.chapter);
    if (leftIndex === -1 && rightIndex === -1) return left.chapter.localeCompare(right.chapter, "zh-Hans-CN");
    if (leftIndex === -1) return 1;
    if (rightIndex === -1) return -1;
    return leftIndex - rightIndex;
  });
}

export const questionBankChapterStats = buildChapterStats();
