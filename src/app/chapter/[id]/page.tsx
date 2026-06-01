"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { CardStatus, Chapter, FlashcardProgress, QuizRecord } from "@/lib/types";
import { addLocalQuizRecord, readLocalData, setLocalCardProgress } from "@/lib/client-storage";

const statusLabels: Record<CardStatus, string> = {
  mastered: "掌握",
  uncertain: "模糊",
  unknown: "不会"
};

export default function ChapterDetailPage({ params }: { params: { id: string } }) {
  const [chapter, setChapter] = useState<Chapter | null>(null);
  const [progress, setProgress] = useState<Record<string, CardStatus>>({});
  const [quizResults, setQuizResults] = useState<Record<string, { selected: string; isCorrect: boolean }>>({});
  const [flipped, setFlipped] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const data = readLocalData();
        const found = data.chapters.find((item) => item.id === params.id);
        if (!found) throw new Error("未找到该章节。");
        setChapter(found);
        setProgress(
          Object.fromEntries(data.flashcardProgress.filter((item) => item.chapterId === params.id).map((item: FlashcardProgress) => [item.cardId, item.status]))
        );
        const latest: Record<string, { selected: string; isCorrect: boolean }> = {};
        data.quizRecords.filter((item) => item.chapterId === params.id).forEach((record: QuizRecord) => {
          latest[record.questionId] = { selected: record.selectedAnswer, isCorrect: record.isCorrect };
        });
        setQuizResults(latest);
      } catch (err) {
        setError(err instanceof Error ? err.message : "章节加载失败。");
      } finally {
        setLoading(false);
      }
    }
    void load();
  }, [params.id]);

  async function markCard(cardId: string, status: CardStatus) {
    if (!chapter) return;
    setError("");
    setProgress((items) => ({ ...items, [cardId]: status }));
    try {
      setLocalCardProgress(chapter.id, cardId, status);
    } catch (err) {
      setError(err instanceof Error ? err.message : "保存卡片掌握状态失败。");
    }
  }

  async function answerQuiz(questionId: string, selectedAnswer: string, index: number) {
    if (!chapter) return;
    const question = chapter.generatedContent.quiz[index];
    const isCorrect = selectedAnswer === question.answer;
    setQuizResults((items) => ({ ...items, [questionId]: { selected: selectedAnswer, isCorrect } }));
    try {
      addLocalQuizRecord(
        {
          chapterId: chapter.id,
          questionId,
          selectedAnswer,
          isCorrect,
          answeredAt: new Date().toISOString()
        },
        isCorrect
          ? undefined
          : {
              chapterId: chapter.id,
              questionId,
              question: question.question,
              options: question.options,
              correctAnswer: question.answer,
              explanation: question.explanation,
              relatedPoint: question.relatedPoint
            }
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "保存答题结果失败。");
    }
  }

  if (loading) return <div className="rounded border border-line bg-white p-5">正在加载章节...</div>;
  if (error && !chapter) return <div className="rounded border border-red-200 bg-red-50 p-5 text-red-700">{error}</div>;
  if (!chapter) return null;

  const content = chapter.generatedContent;

  return (
    <section className="grid gap-5">
      <div className="rounded border border-line bg-white p-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-sm text-muted">{chapter.courseName}</p>
            <h1 className="mt-1 text-2xl font-bold">{chapter.chapterTitle}</h1>
            <p className="mt-2 text-sm text-muted">创建时间：{new Date(chapter.createdAt).toLocaleString()}</p>
          </div>
          <Link className="rounded border border-line px-3 py-2 text-sm hover:bg-slate-50" href="/library">
            返回学习库
          </Link>
        </div>
        {error ? <div className="mt-4 rounded border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div> : null}
      </div>

      <Block title="A. 章节概述">
        <p className="leading-7 text-muted">{content.summary}</p>
      </Block>

      <Block title="B. 知识框架">
        <div className="grid gap-3 md:grid-cols-2">
          {content.knowledgeTree.map((node, index) => (
            <div key={`${node.title}-${index}`} className="rounded border border-line p-4">
              <h3 className="font-semibold">{node.title}</h3>
              <ul className="mt-2 list-disc pl-5 text-sm leading-7 text-muted">
                {node.children.map((child) => (
                  <li key={child}>{child}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Block>

      <Block title="C. 必背重点">
        <div className="grid gap-3">
          {content.keyPoints.map((point, index) => (
            <div key={`${point.title}-${index}`} className="rounded border border-line p-4">
              <h3 className="font-semibold">{point.title}</h3>
              <p className="mt-2 leading-7 text-muted">{point.explanation}</p>
              <p className="mt-2 text-sm text-brand">常考方式：{point.examHint}</p>
            </div>
          ))}
        </div>
      </Block>

      <Block title="D. 名词解释">
        <div className="grid gap-3 md:grid-cols-2">
          {content.terms.map((term, index) => (
            <div key={`${term.term}-${index}`} className="rounded border border-line p-4">
              <h3 className="font-semibold">{term.term}</h3>
              <p className="mt-2 leading-7 text-muted">{term.definition}</p>
              <p className="mt-2 text-sm text-muted">记忆提示：{term.memoryTip}</p>
            </div>
          ))}
        </div>
      </Block>

      <Block title="E. 背诵卡片">
        <div className="grid gap-3 md:grid-cols-2">
          {content.flashcards.map((card, index) => {
            const cardId = `${chapter.id}-card-${index}`;
            return (
              <div key={cardId} className="rounded border border-line p-4">
                <p className="text-xs text-muted">{card.tag || "未分类"}</p>
                <button className="mt-2 w-full rounded border border-line bg-slate-50 p-4 text-left" onClick={() => setFlipped((items) => ({ ...items, [cardId]: !items[cardId] }))}>
                  <p className="font-medium">{flipped[cardId] ? card.back : card.front}</p>
                </button>
                <div className="mt-3 flex flex-wrap gap-2">
                  {(["mastered", "uncertain", "unknown"] as CardStatus[]).map((status) => (
                    <button
                      key={status}
                      className={`rounded border px-3 py-2 text-sm ${progress[cardId] === status ? "border-brand bg-emerald-50 text-brand" : "border-line hover:bg-slate-50"}`}
                      onClick={() => void markCard(cardId, status)}
                    >
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
        <div className="grid gap-4">
          {content.quiz.map((quiz, index) => {
            const questionId = `${chapter.id}-quiz-${index}`;
            const result = quizResults[questionId];
            return (
              <div key={questionId} className="rounded border border-line p-4">
                <h3 className="font-semibold">{index + 1}. {quiz.question}</h3>
                <div className="mt-3 grid gap-2">
                  {quiz.options.map((option, optionIndex) => {
                    const letter = String.fromCharCode(65 + optionIndex);
                    return (
                      <button
                        key={option}
                        className="rounded border border-line px-3 py-2 text-left hover:bg-slate-50 disabled:cursor-default"
                        disabled={Boolean(result)}
                        onClick={() => void answerQuiz(questionId, letter, index)}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
                {result ? (
                  <div className={`mt-3 rounded px-4 py-3 text-sm ${result.isCorrect ? "bg-emerald-50 text-brand" : "bg-red-50 text-red-700"}`}>
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
    <section className="rounded border border-line bg-white p-5">
      <h2 className="mb-4 text-xl font-bold">{title}</h2>
      {children}
    </section>
  );
}
