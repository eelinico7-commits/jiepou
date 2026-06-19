import type { GeneratedContent, OsteologyModule } from "@/lib/types";
import type { PublicChapterRow } from "@/lib/supabase/data";
import { anatomyIntroductionModule, arthrologyModule, osteologyModule } from "@/lib/osteology-data";
import { skeletalMuscleModule } from "@/lib/skeletal-muscle-data";
import { surfaceLandmarksModule } from "@/lib/surface-landmarks-data";
import { digestiveSystemModule } from "@/lib/digestive-system-data";
import { respiratorySystemModule } from "@/lib/respiratory-system-data";
import { urinarySystemModule } from "@/lib/urinary-system-data";
import { reproductiveSystemModule } from "@/lib/reproductive-system-data";
import { circulatorySystemModule } from "@/lib/circulatory-system-data";
import { endocrineSystemModule } from "@/lib/endocrine-system-data";

function moduleToGeneratedContent(module: OsteologyModule): GeneratedContent {
  return {
    chapterTitle: `${module.system} - ${module.title}`,
    summary: module.description,
    knowledgeTree: module.chapters.map((chapter) => ({
      title: chapter.title,
      children: chapter.sections.map((section) => section.title),
    })),
    keyPoints: module.chapters.flatMap((chapter) =>
      chapter.sections.map((section) => ({
        title: section.title,
        explanation: section.mustKnow.join("；"),
        examHint: [
          ...(section.examPoints.term ?? []),
          ...(section.examPoints.choice ?? []),
          ...(section.examPoints.blank ?? []),
          ...(section.examPoints.short ?? []),
        ].join("；"),
      }))
    ),
    terms: module.chapters.flatMap((chapter) =>
      chapter.sections.map((section) => ({
        term: section.title,
        definition: section.plainExplanation,
        memoryTip: section.memoryTips.join("；"),
      }))
    ),
    flashcards: module.chapters.flatMap((chapter) =>
      chapter.sections.flatMap((section) => [
        {
          front: `${section.title} 必背结构是什么？`,
          back: section.mustKnow.join("\n"),
          tag: `${chapter.title} / 必背`,
        },
        {
          front: `${section.title} 最容易错在哪里？`,
          back: section.confusingPoints.join("\n"),
          tag: `${chapter.title} / 易错反向`,
        },
      ])
    ),
    quiz: module.chapters.flatMap((chapter) =>
      chapter.questions
        .filter((question) => question.type === "single_choice")
        .map((question) => ({
          question: question.question,
          options: question.options ?? [],
          answer: String(question.answer),
          explanation: question.explanation,
          relatedPoint: chapter.title,
        }))
    ),
    reviewPlan: module.examSprint.map((task, index) => ({
      day: index === module.examSprint.length - 1 ? "考前" : `第 ${index + 1} 轮`,
      task,
    })),
    osteologyData: module,
  };
}

function moduleToStaticChapter(module: OsteologyModule, createdAt: string): PublicChapterRow {
  return {
    id: module.id,
    owner_id: null,
    owner_email: null,
    course_name: `${module.subject} / ${module.system}`,
    chapter_title: module.title,
    source_text: `${module.title} 由课程 PPT 统一整理为固定章节模板：框架、必背结构、易错反向、易混对比、考前速背和自测题。`,
    generated_content: moduleToGeneratedContent(module),
    created_at: createdAt,
    updated_at: createdAt,
  };
}

export const staticChapters: PublicChapterRow[] = [
  moduleToStaticChapter(anatomyIntroductionModule, "2026-06-08T11:50:00.000Z"),
  moduleToStaticChapter(osteologyModule, "2026-06-08T12:00:00.000Z"),
  moduleToStaticChapter(arthrologyModule, "2026-06-08T12:10:00.000Z"),
  moduleToStaticChapter(skeletalMuscleModule, "2026-06-10T14:30:00.000Z"),
  moduleToStaticChapter(surfaceLandmarksModule, "2026-06-12T00:30:00.000Z"),
  moduleToStaticChapter(digestiveSystemModule, "2026-06-12T16:30:00.000Z"),
  moduleToStaticChapter(respiratorySystemModule, "2026-06-14T13:30:00.000Z"),
  moduleToStaticChapter(urinarySystemModule, "2026-06-16T00:30:00.000Z"),
  moduleToStaticChapter(reproductiveSystemModule, "2026-06-17T10:30:00.000Z"),
  moduleToStaticChapter(circulatorySystemModule, "2026-06-18T10:30:00.000Z"),
  moduleToStaticChapter(endocrineSystemModule, "2026-06-20T01:30:00.000Z"),
];

export function findStaticChapterById(id: string) {
  return staticChapters.find((chapter) => chapter.id === id) ?? null;
}
