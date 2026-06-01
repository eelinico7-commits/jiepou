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
        <Link className="rounded bg-brand px-4 py-3 font-semibold text-white shadow-sm" href="/import">
          导入新章节
        </Link>
      </div>
      {error ? <div className="rounded border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div> : null}
      {loading ? <div className="rounded border border-line bg-white p-5">正在加载...</div> : null}
      {!loading && chapters.length === 0 ? (
        <div className="rounded border border-dashed border-line bg-white p-8 text-center shadow-sm">
          <h2 className="text-lg font-semibold">学习库还没有章节</h2>
          <p className="mt-2 text-sm text-muted">先导入一段人体解剖学教材或课堂笔记，生成你的第一组卡片和自测题。</p>
          <Link className="mt-5 inline-block rounded bg-brand px-5 py-3 font-semibold text-white" href="/import">
            开始导入章节
          </Link>
        </div>
      ) : null}
      <div className="grid gap-4">
        {chapters.map((chapter) => (
          <article key={chapter.id} className="rounded border border-line bg-white p-5 shadow-sm">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="text-xl font-semibold">{chapter.chapterTitle}</h2>
                <p className="mt-1 text-sm text-muted">创建时间：{new Date(chapter.createdAt).toLocaleString()}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-sm">
                  <span className="rounded bg-emerald-50 px-3 py-1 text-brand">卡片 {chapter.flashcardCount} 张</span>
                  <span className="rounded bg-slate-100 px-3 py-1 text-muted">题目 {chapter.quizCount} 道</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
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
