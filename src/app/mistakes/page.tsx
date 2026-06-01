"use client";

import { useEffect, useState } from "react";
import { readLocalData, setLocalMistakeMastered } from "@/lib/client-storage";

type MistakeRow = {
  id: string;
  chapterTitle: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  relatedPoint: string;
  mastered: boolean;
  createdAt: string;
};

export default function MistakesPage() {
  const [mistakes, setMistakes] = useState<MistakeRow[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function markMastered(id: string) {
    try {
      setLocalMistakeMastered(id, true);
      if (showAll) {
        setMistakes((items) => items.map((item) => (item.id === id ? { ...item, mastered: true } : item)));
      } else {
        setMistakes((items) => items.filter((item) => item.id !== id));
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "更新错题状态失败。");
    }
  }

  useEffect(() => {
    setLoading(true);
    setError("");
    try {
      const data = readLocalData();
      const chapters = new Map(data.chapters.map((chapter) => [chapter.id, chapter.chapterTitle]));
      setMistakes(
        data.mistakes
          .filter((mistake) => showAll || !mistake.mastered)
          .map((mistake) => ({ ...mistake, chapterTitle: chapters.get(mistake.chapterId) || "未知章节" }))
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "错题本加载失败。");
    } finally {
      setLoading(false);
    }
  }, [showAll]);

  return (
    <section className="grid gap-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold">错题本</h1>
          <p className="mt-1 text-sm text-muted">答错的自测题会自动进入这里，标记已掌握后默认隐藏。</p>
        </div>
        <label className="flex items-center gap-2 rounded border border-line bg-white px-3 py-2 text-sm">
          <input type="checkbox" checked={showAll} onChange={(event) => setShowAll(event.target.checked)} />
          显示全部错题
        </label>
      </div>
      {error ? <div className="rounded border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div> : null}
      {loading ? <div className="rounded border border-line bg-white p-5">正在加载...</div> : null}
      {!loading && mistakes.length === 0 ? <div className="rounded border border-line bg-white p-5">当前没有需要处理的错题。</div> : null}
      <div className="grid gap-3">
        {mistakes.map((mistake, index) => (
          <article key={mistake.id} className="rounded border border-line bg-white p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs text-muted">{mistake.chapterTitle} · {new Date(mistake.createdAt).toLocaleString()}</p>
                <h2 className="mt-2 font-semibold">{index + 1}. {mistake.question}</h2>
              </div>
              {mistake.mastered ? <span className="rounded bg-emerald-50 px-3 py-1 text-sm text-brand">已掌握</span> : null}
            </div>
            <ul className="mt-3 grid gap-2 text-sm text-muted">
              {mistake.options.map((option) => (
                <li key={option} className="rounded border border-line px-3 py-2">{option}</li>
              ))}
            </ul>
            <div className="mt-3 rounded bg-slate-50 p-4 text-sm leading-6">
              <p>正确答案：{mistake.correctAnswer}</p>
              <p>解析：{mistake.explanation}</p>
              <p>关联知识点：{mistake.relatedPoint}</p>
            </div>
            {!mistake.mastered ? (
              <button className="mt-3 rounded bg-brand px-3 py-2 text-sm font-medium text-white" onClick={() => void markMastered(mistake.id)}>
                标记为已掌握
              </button>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
