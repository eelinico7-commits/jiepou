export type KnowledgeNode = {
  title: string;
  children: string[];
};

export type KeyPoint = {
  title: string;
  explanation: string;
  examHint: string;
};

export type Term = {
  term: string;
  definition: string;
  memoryTip: string;
};

export type Flashcard = {
  front: string;
  back: string;
  tag: string;
};

export type QuizQuestion = {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
  relatedPoint: string;
};

export type ReviewPlanItem = {
  day: string;
  task: string;
};

export type GeneratedContent = {
  chapterTitle: string;
  summary: string;
  knowledgeTree: KnowledgeNode[];
  keyPoints: KeyPoint[];
  terms: Term[];
  flashcards: Flashcard[];
  quiz: QuizQuestion[];
  reviewPlan: ReviewPlanItem[];
};

// ----- Supabase 云端章节 -----
export type Chapter = {
  id: string;
  owner_id?: string;
  owner_email?: string;
  course_name: string;
  chapter_title: string;
  source_text: string;
  generated_content: GeneratedContent;
  created_at: string;
  updated_at: string;
};

// ----- 旧版 localStorage 章节 (迁移用) -----
export type LocalChapter = {
  id: string;
  courseName: string;
  chapterTitle: string;
  sourceText: string;
  generatedContent: GeneratedContent;
  createdAt: string;
  updatedAt: string;
};

// ----- 用户数据 -----
export type CardStatus = "mastered" | "uncertain" | "unknown";

export type FlashcardProgress = {
  id?: string;
  user_id?: string;
  chapter_id: string;
  card_id: string;
  status: CardStatus;
  updated_at: string;
};

export type QuizRecord = {
  id?: string;
  user_id?: string;
  chapter_id: string;
  question_id: string;
  selected_answer: string;
  is_correct: boolean;
  answered_at: string;
};

export type Mistake = {
  id: string;
  user_id?: string;
  chapter_id: string;
  question_id: string;
  question: string;
  options: string[];
  correct_answer: string;
  explanation: string;
  related_point: string;
  mastered: boolean;
  created_at: string;
  updated_at: string;
};

// ----- 旧版 localStorage 数据结构 (迁移用) -----
export type AppData = {
  chapters: LocalChapter[];
  flashcardProgress: FlashcardProgress[];
  quizRecords: QuizRecord[];
  mistakes: Mistake[];
};

// ----- 复习卡片 (运行时) -----
export type ReviewCard = {
  card_id: string;
  chapter_id: string;
  chapter_title: string;
  front: string;
  back: string;
  tag: string;
  status: CardStatus;
};
