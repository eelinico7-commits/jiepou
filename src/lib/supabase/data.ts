import { createClient } from "./client";
import type { CardStatus, GeneratedContent, Mistake } from "@/lib/types";
import { findStaticChapterById, staticChapters } from "@/lib/static-chapters";

function getClient() {
  try {
    return createClient();
  } catch (err) {
    throw new Error(err instanceof Error ? err.message : "Supabase 客户端初始化失败。");
  }
}

// ==================== 公共知识库 ====================

export type PublicChapterRow = {
  id: string;
  owner_id: string | null;
  owner_email: string | null;
  course_name: string;
  chapter_title: string;
  source_text: string;
  generated_content: GeneratedContent;
  created_at: string;
  updated_at: string;
};

export async function fetchAllChapters() {
  try {
    const supabase = getClient();
    const { data, error } = await supabase
      .from("public_chapters")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) throw new Error("加载知识库失败：" + error.message);
    const cloudChapters = (data as PublicChapterRow[]).filter((chapter) => !findStaticChapterById(chapter.id));
    return [...staticChapters, ...cloudChapters];
  } catch {
    return staticChapters;
  }
}

export async function fetchChapterById(id: string) {
  const staticChapter = findStaticChapterById(id);
  if (staticChapter) return staticChapter;

  const supabase = getClient();
  const { data, error } = await supabase
    .from("public_chapters")
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw new Error("加载章节失败：" + error.message);
  return data as PublicChapterRow;
}

export async function insertChapter(
  ownerId: string,
  ownerEmail: string | undefined,
  courseName: string,
  chapterTitle: string,
  sourceText: string,
  generatedContent: GeneratedContent
) {
  const supabase = getClient();
  const { data, error } = await supabase
    .from("public_chapters")
    .insert({
      owner_id: ownerId,
      owner_email: ownerEmail ?? null,
      course_name: courseName,
      chapter_title: chapterTitle,
      source_text: sourceText,
      generated_content: generatedContent as never,
    })
    .select("id")
    .single();
  if (error) throw new Error("保存章节失败：" + error.message);
  return data as { id: string };
}

export async function deleteChapter(id: string) {
  const supabase = getClient();
  const { error } = await supabase.from("public_chapters").delete().eq("id", id);
  if (error) throw new Error("删除章节失败：" + error.message);
}

// ==================== 卡片进度 ====================

export async function fetchFlashcardProgress(userId: string) {
  const supabase = getClient();
  const { data, error } = await supabase
    .from("user_flashcard_progress")
    .select("*")
    .eq("user_id", userId);
  if (error) throw new Error("加载卡片进度失败：" + error.message);
  return data as Array<{
    id: string;
    user_id: string;
    chapter_id: string;
    card_id: string;
    status: CardStatus;
    updated_at: string;
  }>;
}

export async function upsertCardProgress(
  userId: string,
  chapterId: string,
  cardId: string,
  status: CardStatus
) {
  const supabase = getClient();
  const { error } = await supabase.from("user_flashcard_progress").upsert(
    {
      user_id: userId,
      chapter_id: chapterId,
      card_id: cardId,
      status,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "user_id, chapter_id, card_id" }
  );
  if (error) throw new Error("保存卡片进度失败：" + error.message);
}

// ==================== 答题记录 ====================

export async function insertQuizRecord(
  userId: string,
  chapterId: string,
  questionId: string,
  selectedAnswer: string,
  isCorrect: boolean
) {
  const supabase = getClient();
  const { error } = await supabase.from("user_quiz_records").insert({
    user_id: userId,
    chapter_id: chapterId,
    question_id: questionId,
    selected_answer: selectedAnswer,
    is_correct: isCorrect,
    answered_at: new Date().toISOString(),
  });
  if (error) throw new Error("保存答题记录失败：" + error.message);
}

export async function fetchQuizRecords(userId: string) {
  const supabase = getClient();
  const { data, error } = await supabase
    .from("user_quiz_records")
    .select("*")
    .eq("user_id", userId);
  if (error) throw new Error("加载答题记录失败：" + error.message);
  return data as Array<{
    id: string;
    user_id: string;
    chapter_id: string;
    question_id: string;
    selected_answer: string;
    is_correct: boolean;
    answered_at: string;
  }>;
}

// ==================== 错题本 ====================

export async function fetchMistakes(userId: string) {
  const supabase = getClient();
  const { data, error } = await supabase
    .from("user_mistakes")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });
  if (error) throw new Error("加载错题失败：" + error.message);
  return data as Mistake[];
}

export async function upsertMistake(mistake: {
  userId: string;
  chapterId: string;
  questionId: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  relatedPoint: string;
}) {
  const supabase = getClient();
  const { error } = await supabase.from("user_mistakes").upsert(
    {
      user_id: mistake.userId,
      chapter_id: mistake.chapterId,
      question_id: mistake.questionId,
      question: mistake.question,
      options: mistake.options,
      correct_answer: mistake.correctAnswer,
      explanation: mistake.explanation,
      related_point: mistake.relatedPoint,
      mastered: false,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "user_id, chapter_id, question_id" }
  );
  if (error) throw new Error("保存错题失败：" + error.message);
}

export async function setMistakeMastered(userId: string, mistakeId: string, mastered: boolean) {
  const supabase = getClient();
  const { error } = await supabase
    .from("user_mistakes")
    .update({ mastered, updated_at: new Date().toISOString() })
    .eq("id", mistakeId)
    .eq("user_id", userId);
  if (error) throw new Error("更新错题状态失败：" + error.message);
}
