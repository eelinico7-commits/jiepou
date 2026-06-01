"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { deleteLocalChapter, readLocalData } from "@/lib/client-storage";

type ChapterRow = {
  id: string;
  chapterTitle: string;
  createdAt: string;
  flashcardCount: number;
  quizCount: number;
};

export default function LibraryPage() {
  const [chapters, setChapters] = useState<ChapterRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function load() {
    setLoading(true);
    setError("");
    try {
      const data = readLocalData();
      setChapters(
        data.chapters.map((chapter) => ({
          id: chapter.id,
          chapterTitle: chapter.chapterTitle,
          createdAt: chapter.createdAt,
          flashcardCount: chapter.generatedContent.flashcards.length,
          quizCount: chapter.generatedContent.quiz.length
        }))
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "学习库加载失败。");
    } finally {
      setLoading(false);
    }
  }

  async function remove(id: string) {
    setError("");
    try {
      deleteLocalChapter(id);
      setChapters((items) => items.filter((item) => item.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : "删除章节失败。");
    }
  }

  useEffect(() => {
    void load();
  }, []);

  return (
    <section className="grid gap-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold">我的学习库</h1>
          <p className="mt-1 text-sm text-muted">查看已经生成的章节，继续背卡片或做自测题。</p>
        </div>
        <Link className="rounded bg-brand px-4 py-2 font-medium text-white" href="/import">
          导入新章节
        </Link>
      </div>
      {error ? <div className="rounded border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div> : null}
      {loading ? <div className="rounded border border-line bg-white p-5">正在加载...</div> : null}
      {!loading && chapters.length === 0 ? <div className="rounded border border-line bg-white p-5">还没有章节，请先导入。</div> : null}
      <div className="grid gap-3">
        {chapters.map((chapter) => (
          <article key={chapter.id} className="rounded border border-line bg-white p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="text-lg font-semibold">{chapter.chapterTitle}</h2>
                <p className="mt-1 text-sm text-muted">创建时间：{new Date(chapter.createdAt).toLocaleString()}</p>
                <p className="mt-2 text-sm text-muted">
                  卡片 {chapter.flashcardCount} 张 · 题目 {chapter.quizCount} 道
                </p>
              </div>
              <div className="flex gap-2">
                <Link className="rounded border border-line px-3 py-2 text-sm hover:bg-slate-50" href={`/chapter/${chapter.id}`}>
                  进入详情
                </Link>
                <button className="rounded border border-red-200 px-3 py-2 text-sm text-red-700 hover:bg-red-50" onClick={() => void remove(chapter.id)}>
                  删除
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
