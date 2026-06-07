"use client";

import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { useParams } from "next/navigation";
import type { CardStatus, GeneratedContent, StudyQuizQuestion } from "@/lib/types";
import { useAuth } from "@/lib/supabase/auth-context";
import { fetchChapterById, upsertCardProgress, fetchFlashcardProgress, insertQuizRecord, upsertMistake } from "@/lib/supabase/data";
import { OsteologyStudy } from "@/components/osteology-study";

type ChapterData = {
  id: string;
  course_name: string;
  chapter_title: string;
  source_text: string;
  generated_content: GeneratedContent;
  created_at: string;
  owner_id: string | null;
};

const statusLabels: Record<CardStatus, string> = {
  mastered: "掌握",
  uncertain: "模糊",
  unknown: "不会",
};

const tabs = ["概览", "框架", "重点", "名词解释", "卡片", "自测"];

export default function ChapterDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const { user } = useAuth();
  const [chapter, setChapter] = useState<ChapterData | null>(null);
  const [progress, setProgress] = useState<Record<string, CardStatus>>({});
  const [quizResults, setQuizResults] = useState<Record<string, { selected: string; isCorrect: boolean }>>({});
  const [studyInputs, setStudyInputs] = useState<Record<string, string>>({});
  const [flipped, setFlipped] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    try {
      const data = await fetchChapterById(id);
      setChapter(data as ChapterData);

      if (user) {
        const progressData = await fetchFlashcardProgress(user.id);
        setProgress(Object.fromEntries(progressData.filter((item) => item.chapter_id === id).map((item) => [item.card_id, item.status])));
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "章节加载失败。");
    } finally {
      setLoading(false);
    }
  }, [id, user]);

  async function markCard(cardId: string, status: CardStatus) {
    if (!chapter) return;
    if (!user) {
      setError("请先登录后保存卡片状态。");
      return;
    }
    setError("");
    setProgress((items) => ({ ...items, [cardId]: status }));
    try {
      await upsertCardProgress(user.id, chapter.id, cardId, status);
    } catch (err) {
      setError(err instanceof Error ? err.message : "保存卡片掌握状态失败。");
    }
  }

  async function answerQuiz(questionId: string, selectedAnswer: string, index: number) {
    if (!chapter) return;
    const question = chapter.generated_content.quiz[index];
    const isCorrect = selectedAnswer === question.answer;
    setQuizResults((items) => ({ ...items, [questionId]: { selected: selectedAnswer, isCorrect } }));
    if (!user) return;
    try {
      await insertQuizRecord(user.id, chapter.id, questionId, selectedAnswer, isCorrect);
      if (!isCorrect) {
        await upsertMistake({
          userId: user.id,
          chapterId: chapter.id,
          questionId,
          question: question.question,
          options: question.options,
          correctAnswer: question.answer,
          explanation: question.explanation,
          relatedPoint: question.relatedPoint,
        });
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "保存答题结果失败。");
    }
  }

  function answerStudyQuiz(question: StudyQuizQuestion, selectedAnswer: string) {
    setError("");
    const isCorrect = isStudyAnswerCorrect(question, selectedAnswer);
    setQuizResults((items) => ({ ...items, [question.id]: { selected: selectedAnswer, isCorrect } }));
  }

  useEffect(() => {
    void load();
  }, [load]);

  if (loading) return <div className="rounded-lg border border-line bg-white p-5 shadow-sm">正在加载章节...</div>;
  if (error && !chapter) return <div className="rounded-lg border border-red-200 bg-red-50 p-5 text-red-700">{error}</div>;
  if (!chapter) return null;

  const content = chapter.generated_content;

  if (content.osteologyData) {
    return <OsteologyStudy module={content.osteologyData} />;
  }

  if (content.studyData) {
    const studyData = content.studyData;

    return (
      <section className="product-shell grid min-w-0 gap-6 py-6">
        <div className="rounded-lg border border-line bg-white p-5 shadow-sm md:p-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-sm font-semibold text-brand">{studyData.subject}</p>
              <h1 className="mt-1 text-2xl font-bold text-ink">{studyData.chapter}</h1>
              <p className="mt-2 text-sm text-muted">{studyData.version}</p>
            </div>
            <Link className="w-full rounded-md border border-line px-3 py-2 text-center text-sm font-medium hover:bg-slate-50 sm:w-auto" href="/library">
              返回知识库
            </Link>
          </div>
          <p className="mt-4 max-w-4xl leading-7 text-muted">{studyData.summary}</p>
        </div>

        <div className="flex min-w-0 gap-2 overflow-x-auto rounded-lg border border-line bg-white p-2 text-sm shadow-sm">
          {["本章框架", "必背知识点", "高频考点卡片", "考前速背", "自测题"].map((item) => (
            <span key={item} className="shrink-0 rounded-md bg-slate-50 px-3 py-2 font-medium text-muted">
              {item}
            </span>
          ))}
        </div>

        <Block title="本章框架">
          <ol className="grid gap-3 md:grid-cols-2">
            {studyData.framework.map((item, index) => (
              <li key={item} className="flex gap-3 rounded-lg border border-line bg-slate-50/70 p-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-brand text-sm font-bold text-white">
                  {index + 1}
                </span>
                <span className="font-medium text-ink">{item}</span>
              </li>
            ))}
          </ol>
        </Block>

        <Block title="必背知识点">
          <div className="grid gap-3">
            {studyData.keyPoints.map((point) => (
              <article key={point.title} className="rounded-lg border border-line bg-slate-50/70 p-4">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-semibold text-ink">{point.title}</h3>
                  <LevelBadge level={point.level} />
                </div>
                <p className="mt-2 leading-7 text-muted">{point.content}</p>
              </article>
            ))}
          </div>
        </Block>

        <Block title="高频考点卡片">
          <div className="grid gap-4 md:grid-cols-2">
            {studyData.cards.map((card) => (
              <article key={card.id} className="rounded-lg border border-line bg-white p-4 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-semibold text-ink">{card.title}</h3>
                  <div className="flex gap-2">
                    <LevelBadge level={card.level} />
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-muted">{card.type}</span>
                  </div>
                </div>
                <p className="mt-3 text-sm font-semibold text-ink">题：{card.question}</p>
                <p className="mt-2 leading-7 text-muted">答：{card.answer}</p>
              </article>
            ))}
          </div>
        </Block>

        <Block title="考前速背">
          <div className="grid gap-2 sm:grid-cols-2">
            {studyData.quickReview.map((item) => (
              <div key={item} className="rounded-lg border border-line bg-slate-50/70 px-4 py-3 text-sm leading-6 text-ink">
                {item}
              </div>
            ))}
          </div>
        </Block>

        <Block title="自测题">
          <div className="grid gap-5">
            {studyData.quiz.map((quiz, index) => {
              const result = quizResults[quiz.id];
              const inputValue = studyInputs[quiz.id] ?? "";
              return (
                <article key={quiz.id} className="rounded-lg border border-line bg-white p-4 shadow-sm">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="font-semibold leading-7 text-ink">{index + 1}. {quiz.question}</h3>
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-muted">{quizTypeLabel(quiz.type)}</span>
                  </div>

                  {quiz.type === "single_choice" ? (
                    <div className="mt-3 grid gap-2">
                      {(quiz.options ?? []).map((option, optionIndex) => (
                        <button
                          key={option}
                          className="rounded-md border border-line px-4 py-3 text-left hover:bg-slate-50 disabled:cursor-default"
                          disabled={Boolean(result)}
                          onClick={() => answerStudyQuiz(quiz, option)}
                        >
                          {String.fromCharCode(65 + optionIndex)}. {option}
                        </button>
                      ))}
                    </div>
                  ) : null}

                  {quiz.type === "true_false" ? (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {["正确", "错误"].map((option) => (
                        <button
                          key={option}
                          className="rounded-md border border-line px-4 py-2 text-sm font-medium hover:bg-slate-50"
                          disabled={Boolean(result)}
                          onClick={() => answerStudyQuiz(quiz, option)}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  ) : null}

                  {quiz.type === "fill_blank" ? (
                    <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                      <input
                        className="field min-w-0 flex-1"
                        placeholder="输入答案后检查"
                        value={inputValue}
                        disabled={Boolean(result)}
                        onChange={(event) => setStudyInputs((items) => ({ ...items, [quiz.id]: event.target.value }))}
                      />
                      <button
                        className="rounded-md bg-brand px-4 py-3 text-sm font-semibold text-white disabled:bg-slate-400"
                        disabled={Boolean(result) || inputValue.trim().length === 0}
                        onClick={() => answerStudyQuiz(quiz, inputValue)}
                      >
                        检查
                      </button>
                    </div>
                  ) : null}

                  {quiz.type === "short_answer" ? (
                    <div className="mt-3">
                      <textarea
                        className="field min-h-28 w-full"
                        placeholder="先写下自己的答案，再查看参考答案"
                        value={inputValue}
                        disabled={Boolean(result)}
                        onChange={(event) => setStudyInputs((items) => ({ ...items, [quiz.id]: event.target.value }))}
                      />
                      <button
                        className="mt-2 rounded-md bg-brand px-4 py-3 text-sm font-semibold text-white disabled:bg-slate-400"
                        disabled={Boolean(result)}
                        onClick={() => answerStudyQuiz(quiz, inputValue || "已查看参考答案")}
                      >
                        查看参考答案
                      </button>
                    </div>
                  ) : null}

                  {result ? (
                    <div className={`mt-3 rounded-md px-4 py-3 text-sm ${result.isCorrect ? "bg-emerald-50 text-brand" : "bg-red-50 text-red-700"}`}>
                      <p>{quiz.type === "short_answer" ? "参考答案如下" : result.isCorrect ? "回答正确" : `回答错误，你的答案：${result.selected}`}</p>
                      <p className="mt-2 leading-6">答案：{quiz.answer}</p>
                      <p className="mt-1 leading-6">解析：{quiz.explanation}</p>
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>
        </Block>
      </section>
    );
  }

  return (
    <section className="product-shell grid min-w-0 gap-6 py-6">
      <div className="rounded-lg border border-line bg-white p-5 shadow-sm md:p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-sm font-semibold text-brand">{chapter.course_name}</p>
            <h1 className="mt-1 text-2xl font-bold text-ink">{chapter.chapter_title}</h1>
            <p className="mt-2 text-sm text-muted">创建时间：{new Date(chapter.created_at).toLocaleString()}</p>
          </div>
          <Link className="w-full rounded-md border border-line px-3 py-2 text-center text-sm font-medium hover:bg-slate-50 sm:w-auto" href="/library">
            返回知识库
          </Link>
        </div>
        {error ? <div className="mt-4 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div> : null}
        {!user ? (
          <div className="mt-4 rounded-md border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
            登录后可保存卡片掌握状态和答题记录。
          </div>
        ) : null}
      </div>

      <div className="flex min-w-0 gap-2 overflow-x-auto rounded-lg border border-line bg-white p-2 text-sm shadow-sm">
        {tabs.map((item) => (
          <span key={item} className="shrink-0 rounded-md bg-slate-50 px-3 py-2 font-medium text-muted">
            {item}
          </span>
        ))}
      </div>

      <Block title="A. 章节概览">
        <p className="leading-7 text-muted">{content.summary}</p>
      </Block>

      <Block title="B. 知识框架">
        <div className="grid gap-3 md:grid-cols-2">
          {content.knowledgeTree.map((node, index) => (
            <div key={`${node.title}-${index}`} className="rounded-lg border border-line bg-slate-50/70 p-4">
              <h3 className="font-semibold text-ink">{node.title}</h3>
              <ul className="mt-2 list-disc pl-5 text-sm leading-7 text-muted">
                {node.children.map((child) => <li key={child}>{child}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Block>

      <Block title="C. 必背重点">
        <div className="grid gap-3">
          {content.keyPoints.map((point, index) => (
            <div key={`${point.title}-${index}`} className="rounded-lg border border-line bg-slate-50/70 p-4">
              <h3 className="font-semibold text-ink">{point.title}</h3>
              <p className="mt-2 leading-7 text-muted">{point.explanation}</p>
              <p className="mt-2 text-sm font-medium text-brand">常考方式：{point.examHint}</p>
            </div>
          ))}
        </div>
      </Block>

      <Block title="D. 名词解释">
        <div className="grid gap-3 md:grid-cols-2">
          {content.terms.map((term, index) => (
            <div key={`${term.term}-${index}`} className="rounded-lg border border-line bg-slate-50/70 p-4">
              <h3 className="font-semibold text-ink">{term.term}</h3>
              <p className="mt-2 leading-7 text-muted">{term.definition}</p>
              <p className="mt-2 text-sm text-muted">记忆提示：{term.memoryTip}</p>
            </div>
          ))}
        </div>
      </Block>

      <Block title="E. 背诵卡片">
        <div className="grid gap-5 md:grid-cols-2">
          {content.flashcards.map((card, index) => {
            const cardId = `${chapter.id}-card-${index}`;
            return (
              <div key={cardId} className="rounded-lg border border-line bg-white p-4 shadow-sm">
                <p className="text-xs text-muted">{card.tag || "未分类"}</p>
                <button className="mt-2 min-h-28 w-full rounded-md border border-line bg-slate-50 p-4 text-left leading-7 hover:bg-slate-100" onClick={() => setFlipped((items) => ({ ...items, [cardId]: !items[cardId] }))}>
                  <p className="font-medium text-ink">{flipped[cardId] ? card.back : card.front}</p>
                </button>
                <div className="mt-3 flex flex-wrap gap-2">
                  {(["mastered", "uncertain", "unknown"] as CardStatus[]).map((status) => (
                    <button key={status} className={`rounded-md border px-3 py-2 text-sm font-medium ${progress[cardId] === status ? "border-brand bg-emerald-50 text-brand" : "border-line hover:bg-slate-50"}`} onClick={() => void markCard(cardId, status)}>
                      {statusLabels[status]}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Block>

      <Block title="F. 自测题">
        <div className="grid gap-5">
          {content.quiz.map((quiz, index) => {
            const questionId = `${chapter.id}-quiz-${index}`;
            const result = quizResults[questionId];
            return (
              <div key={questionId} className="rounded-lg border border-line bg-white p-4 shadow-sm">
                <h3 className="font-semibold text-ink">{index + 1}. {quiz.question}</h3>
                <div className="mt-3 grid gap-2">
                  {quiz.options.map((option, optionIndex) => {
                    const letter = String.fromCharCode(65 + optionIndex);
                    return (
                      <button key={option} className="rounded-md border border-line px-4 py-3 text-left hover:bg-slate-50 disabled:cursor-default" disabled={Boolean(result)} onClick={() => void answerQuiz(questionId, letter, index)}>
                        {option}
                      </button>
                    );
                  })}
                </div>
                {result ? (
                  <div className={`mt-3 rounded-md px-4 py-3 text-sm ${result.isCorrect ? "bg-emerald-50 text-brand" : "bg-red-50 text-red-700"}`}>
                    <p>{result.isCorrect ? "回答正确" : `回答错误，你选择了 ${result.selected}，正确答案是 ${quiz.answer}`}</p>
                    <p className="mt-2 leading-6">解析：{quiz.explanation}</p>
                    <p className="mt-1">关联知识点：{quiz.relatedPoint}</p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </Block>
    </section>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="min-w-0 rounded-lg border border-line bg-white p-5 shadow-sm md:p-6">
      <h2 className="mb-4 text-xl font-bold text-ink">{title}</h2>
      {children}
    </section>
  );
}

function LevelBadge({ level }: { level: string }) {
  const styles: Record<string, string> = {
    S: "bg-red-50 text-red-700",
    A: "bg-amber-50 text-amber-700",
    B: "bg-emerald-50 text-brand",
  };

  return (
    <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${styles[level] ?? "bg-slate-100 text-muted"}`}>
      {level}
    </span>
  );
}

function quizTypeLabel(type: StudyQuizQuestion["type"]) {
  const labels: Record<StudyQuizQuestion["type"], string> = {
    single_choice: "单选题",
    fill_blank: "填空题",
    true_false: "判断题",
    short_answer: "简答题",
  };
  return labels[type];
}

function isStudyAnswerCorrect(question: StudyQuizQuestion, selectedAnswer: string) {
  if (question.type === "short_answer") return true;

  const normalize = (value: string) =>
    value
      .trim()
      .replace(/[，,；;、\s]+/g, "|")
      .replace(/[。.]$/g, "");

  if (question.type === "fill_blank") {
    return normalize(selectedAnswer) === normalize(question.answer);
  }

  return selectedAnswer.trim() === question.answer.trim();
}
