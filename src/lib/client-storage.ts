"use client";

import type { AppData, CardStatus, Chapter, FlashcardProgress, Mistake, QuizRecord } from "./types";

const STORAGE_KEY = "medmemo:v1";

const emptyData: AppData = {
  chapters: [],
  flashcardProgress: [],
  quizRecords: [],
  mistakes: []
};

export function createId(prefix: string) {
  return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;
}

export function readLocalData(): AppData {
  if (typeof window === "undefined") return emptyData;
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return emptyData;
  try {
    const parsed = JSON.parse(raw) as Partial<AppData>;
    return {
      chapters: Array.isArray(parsed.chapters) ? parsed.chapters : [],
      flashcardProgress: Array.isArray(parsed.flashcardProgress) ? parsed.flashcardProgress : [],
      quizRecords: Array.isArray(parsed.quizRecords) ? parsed.quizRecords : [],
      mistakes: Array.isArray(parsed.mistakes) ? parsed.mistakes : []
    };
  } catch {
    throw new Error("浏览器本地数据读取失败，请检查 localStorage 是否可用。");
  }
}

export function writeLocalData(data: AppData) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    throw new Error("浏览器本地数据写入失败，可能是存储空间不足或浏览器禁用了 localStorage。");
  }
}

export function addLocalChapter(chapter: Chapter) {
  const data = readLocalData();
  data.chapters.unshift(chapter);
  writeLocalData(data);
}

export function deleteLocalChapter(id: string) {
  const data = readLocalData();
  data.chapters = data.chapters.filter((chapter) => chapter.id !== id);
  data.flashcardProgress = data.flashcardProgress.filter((item) => item.chapterId !== id);
  data.quizRecords = data.quizRecords.filter((item) => item.chapterId !== id);
  data.mistakes = data.mistakes.filter((item) => item.chapterId !== id);
  writeLocalData(data);
}

export function setLocalCardProgress(chapterId: string, cardId: string, status: CardStatus): FlashcardProgress {
  const data = readLocalData();
  const now = new Date().toISOString();
  const existing = data.flashcardProgress.find((item) => item.chapterId === chapterId && item.cardId === cardId);
  if (existing) {
    existing.status = status;
    existing.updatedAt = now;
    writeLocalData(data);
    return existing;
  }
  const progress = { chapterId, cardId, status, updatedAt: now };
  data.flashcardProgress.push(progress);
  writeLocalData(data);
  return progress;
}

export function addLocalQuizRecord(record: QuizRecord, mistake?: Omit<Mistake, "id" | "createdAt" | "updatedAt" | "mastered">) {
  const data = readLocalData();
  data.quizRecords.push(record);
  if (mistake) {
    const existing = data.mistakes.find((item) => item.questionId === mistake.questionId && item.chapterId === mistake.chapterId);
    const now = new Date().toISOString();
    if (existing) {
      existing.mastered = false;
      existing.updatedAt = now;
    } else {
      data.mistakes.push({
        ...mistake,
        id: createId("mistake"),
        mastered: false,
        createdAt: now,
        updatedAt: now
      });
    }
  }
  writeLocalData(data);
}

export function setLocalMistakeMastered(id: string, mastered: boolean) {
  const data = readLocalData();
  const mistake = data.mistakes.find((item) => item.id === id);
  if (!mistake) throw new Error("未找到该错题。");
  mistake.mastered = mastered;
  mistake.updatedAt = new Date().toISOString();
  writeLocalData(data);
  return mistake;
}

export function getLocalReviewCards() {
  const data = readLocalData();
  const progressMap = new Map(data.flashcardProgress.map((item) => [`${item.chapterId}:${item.cardId}`, item.status]));
  const cards = data.chapters.flatMap((chapter) =>
    chapter.generatedContent.flashcards.map((card, index) => {
      const cardId = `${chapter.id}-card-${index}`;
      return {
        cardId,
        chapterId: chapter.id,
        chapterTitle: chapter.chapterTitle,
        front: card.front,
        back: card.back,
        tag: card.tag,
        status: progressMap.get(`${chapter.id}:${cardId}`) || ("unknown" as CardStatus)
      };
    })
  );
  const priority: Record<CardStatus, number> = { unknown: 0, uncertain: 1, mastered: 2 };
  const mastered = cards.filter((card) => card.status === "mastered").slice(0, 5);
  return [...cards.filter((card) => card.status !== "mastered"), ...mastered]
    .sort((a, b) => priority[a.status] - priority[b.status])
    .slice(0, 30);
}
