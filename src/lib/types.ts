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

export type Chapter = {
  id: string;
  courseName: string;
  chapterTitle: string;
  sourceText: string;
  generatedContent: GeneratedContent;
  createdAt: string;
  updatedAt: string;
};

export type CardStatus = "mastered" | "uncertain" | "unknown";

export type FlashcardProgress = {
  cardId: string;
  chapterId: string;
  status: CardStatus;
  updatedAt: string;
};

export type QuizRecord = {
  questionId: string;
  chapterId: string;
  selectedAnswer: string;
  isCorrect: boolean;
  answeredAt: string;
};

export type Mistake = {
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

export type AppData = {
  chapters: Chapter[];
  flashcardProgress: FlashcardProgress[];
  quizRecords: QuizRecord[];
  mistakes: Mistake[];
};
