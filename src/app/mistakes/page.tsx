"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/supabase/auth-context";
import { fetchMistakes, setMistakeMastered, fetchAllChapters } from "@/lib/supabase/data";
import type { Mistake } from "@/lib/types";

export default function MistakesPage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [mistakes, setMistakes] = useState<(Mistake & { chapter_title: string })[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    if (!user) return;
    setLoading(true);
    setError("");
    try {
      const [mistakeData, chapterData] = await Promise.all([fetchMistakes(user.id), fetchAllChapters()]);
      const chapterMap = new Map(chapterData.map((c) => [c.id, c.chapter_title]));
      const filtered = showAll ? mistakeData : mistakeData.filter((m) => !m.mastered);
      setMistakes(filtered.map((m) => ({ ...m, chapter_title: chapterMap.get(m.chapter_id) || "未知章节" })));
    } catch (err) {
      setError(err instanceof Error ? err.message : "错题本加载失败。");
    } finally {
      setLoading(false);
    }
  }, [user, showAll]);

  async function markMastered(id: string) {
    if (!user) return;
    try {
      await setMistakeMastered(user.id, id, true);
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
    if (authLoading) return;
    if (!user) {
      router.push("/login");
      return;
    }
    void load();
  }, [user, authLoading, load, router]);

  if (authLoading) {
    return <div className="rounded-lg border border-line bg-white p-5 shadow-sm">正在加载...</div>;
  }

  return (
    <section className="grid gap-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-brand">错题本</p>
          <h1 className="mt-1 text-2xl font-bold text-ink">集中复盘答错题目</h1>
          <p className="mt-1 text-sm text-muted">答错的自测题会自动进入这里，标记已掌握后默认隐藏。</p>
        </div>
        <label className="flex items-center gap-2 rounded-md border border-line bg-white px-3 py-2 text-sm shadow-sm">
          <input type="checkbox" checked={showAll} onChange={(event) => setShowAll(event.target.checked)} />
          显示全部错题
        </label>
      </div>
      {error ? <div className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div> : null}
      {loading ? <div className="rounded-lg border border-line bg-white p-5 shadow-sm">正在加载...</div> : null}
      {!loading && mistakes.length === 0 ? (
        <div className="rounded-lg border border-dashed border-line bg-white p-8 text-center shadow-sm">
          <h2 className="text-lg font-semibold text-ink">当前没有需要处理的错题</h2>
          <p className="mt-2 text-sm text-muted">完成章节自测后，答错的题会自动进入这里，方便集中复盘。</p>
        </div>
      ) : null}
      <div className="grid gap-4">
        {mistakes.map((mistake, index) => (
          <article key={mistake.id} className="rounded-lg border border-line bg-white p-5 shadow-sm">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs text-muted">{mistake.chapter_title} · {new Date(mistake.created_at).toLocaleString()}</p>
                <h2 className="mt-2 font-semibold text-ink">{index + 1}. {mistake.question}</h2>
              </div>
              {mistake.mastered ? <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-brand">已掌握</span> : null}
            </div>
            <ul className="mt-4 grid gap-2 text-sm text-muted">
              {mistake.options.map((option) => (
                <li key={option} className="rounded-md border border-line px-4 py-3">{option}</li>
              ))}
            </ul>
            <div className="mt-3 rounded-md bg-slate-50 p-4 text-sm leading-6">
              <p>正确答案：{mistake.correct_answer}</p>
              <p>解析：{mistake.explanation}</p>
              <p>关联知识点：{mistake.related_point}</p>
            </div>
            {!mistake.mastered ? (
              <button className="mt-4 rounded-md bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-800" onClick={() => void markMastered(mistake.id)}>
                我已掌握这道题
              </button>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
