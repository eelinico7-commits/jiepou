const storage = new Map();

global.window = {
  localStorage: {
    getItem(key) {
      return storage.has(key) ? storage.get(key) : null;
    },
    setItem(key, value) {
      storage.set(key, value);
    }
  }
};

function createId(prefix) {
  return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;
}

const STORAGE_KEY = "medmemo:v1";
const emptyData = {
  chapters: [],
  flashcardProgress: [],
  quizRecords: [],
  mistakes: []
};

function readLocalData() {
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return emptyData;
  const parsed = JSON.parse(raw);
  return {
    chapters: Array.isArray(parsed.chapters) ? parsed.chapters : [],
    flashcardProgress: Array.isArray(parsed.flashcardProgress) ? parsed.flashcardProgress : [],
    quizRecords: Array.isArray(parsed.quizRecords) ? parsed.quizRecords : [],
    mistakes: Array.isArray(parsed.mistakes) ? parsed.mistakes : []
  };
}

function writeLocalData(data) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

const now = new Date().toISOString();
const chapterId = createId("chapter");
const chapter = {
  id: chapterId,
  courseName: "人体解剖学",
  chapterTitle: "骨学总论",
  sourceText: "骨由骨质、骨膜和骨髓构成。",
  generatedContent: {
    chapterTitle: "骨学总论",
    summary: "测试章节",
    knowledgeTree: [],
    keyPoints: [],
    terms: [],
    flashcards: [{ front: "骨由哪些部分构成？", back: "骨质、骨膜和骨髓。", tag: "骨的构造" }],
    quiz: [{ question: "骨的构成包括哪项？", options: ["A. 骨质", "B. 表皮"], answer: "A", explanation: "骨包括骨质等结构。", relatedPoint: "骨的构造" }],
    reviewPlan: []
  },
  createdAt: now,
  updatedAt: now
};

const data = readLocalData();
data.chapters.push(chapter);
data.flashcardProgress.push({ chapterId, cardId: `${chapterId}-card-0`, status: "unknown", updatedAt: now });
data.quizRecords.push({ chapterId, questionId: `${chapterId}-quiz-0`, selectedAnswer: "B", isCorrect: false, answeredAt: now });
data.mistakes.push({
  id: createId("mistake"),
  chapterId,
  questionId: `${chapterId}-quiz-0`,
  question: "骨的构成包括哪项？",
  options: ["A. 骨质", "B. 表皮"],
  correctAnswer: "A",
  explanation: "骨包括骨质等结构。",
  relatedPoint: "骨的构造",
  mastered: false,
  createdAt: now,
  updatedAt: now
});
writeLocalData(data);

const afterRefresh = readLocalData();
if (afterRefresh.chapters.length !== 1) throw new Error("chapter persistence failed");
if (afterRefresh.flashcardProgress[0].status !== "unknown") throw new Error("progress persistence failed");
if (afterRefresh.quizRecords.length !== 1) throw new Error("quiz persistence failed");
if (afterRefresh.mistakes.length !== 1) throw new Error("mistake persistence failed");

console.log("localStorage self-check passed");
