"use client";

// ============================================================
// 旧版 localStorage 数据类型 (保持向后兼容, 用于迁移)
// 新代码全部使用 Supabase 云端, 不再使用 localStorage
// ============================================================

import type { CardStatus, GeneratedContent } from "./types";

type LegacyChapter = {
  id: string;
  courseName: string;
  chapterTitle: string;
  sourceText: string;
  generatedContent: GeneratedContent;
  createdAt: string;
  updatedAt: string;
};

type LegacyFlashcardProgress = {
  cardId: string;
  chapterId: string;
  status: CardStatus;
  updatedAt: string;
};

type LegacyQuizRecord = {
  questionId: string;
  chapterId: string;
  selectedAnswer: string;
  isCorrect: boolean;
  answeredAt: string;
};

type LegacyMistake = {
  id: string;
  questionId: string;
  chapterId: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  relatedPoint: string;
  mastered: boolean;
  createdAt: string;
  updatedAt: string;
};

type LegacyAppData = {
  chapters: LegacyChapter[];
  flashcardProgress: LegacyFlashcardProgress[];
  quizRecords: LegacyQuizRecord[];
  mistakes: LegacyMistake[];
};

const STORAGE_KEY = "medmemo:v1";

const emptyData: LegacyAppData = {
  chapters: [],
  flashcardProgress: [],
  quizRecords: [],
  mistakes: []
};

export function createId(prefix: string) {
  return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;
}

export function readLocalData(): LegacyAppData {
  if (typeof window === "undefined") return emptyData;
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return emptyData;
  try {
    const parsed = JSON.parse(raw) as Partial<LegacyAppData>;
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

export function writeLocalData(data: LegacyAppData) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    throw new Error("浏览器本地数据写入失败，可能是存储空间不足或浏览器禁用了 localStorage。");
  }
}

export function addLocalChapter(chapter: LegacyChapter) {
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

export function setLocalCardProgress(chapterId: string, cardId: string, status: CardStatus): LegacyFlashcardProgress {
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

export function addLocalQuizRecord(record: LegacyQuizRecord, mistake?: Omit<LegacyMistake, "id" | "createdAt" | "updatedAt" | "mastered">) {
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
