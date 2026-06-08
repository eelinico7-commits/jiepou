"use client";

import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { fetchAllChapters } from "@/lib/supabase/data";
import type { PublicChapterRow } from "@/lib/supabase/data";

export default function LibraryPage() {
  const [chapters, setChapters] = useState<PublicChapterRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const data = await fetchAllChapters();
      setChapters(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "知识库加载失败。");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  return (
    <section className="product-shell grid gap-6 py-8">
      <div className="rounded-lg border border-line bg-white p-5 shadow-sm md:p-7">
        <p className="text-sm font-semibold text-brand">统一章节模板</p>
        <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-ink">解剖学知识库</h1>
            <p className="mt-3 max-w-3xl leading-7 text-muted">
              每一章都固定整理成：章节框架、必背结构、常考方式、易错反向、易混对比、考前速背和自测题。后续新增章节也按这个结构走。
            </p>
          </div>
          <Link className="product-button-secondary" href="/import">
            导入新资料
          </Link>
        </div>
      </div>

      {error ? <div className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div> : null}
      {loading ? <div className="rounded-lg border border-line bg-white p-5 shadow-sm">正在加载知识库...</div> : null}

      <div className="grid gap-4 md:grid-cols-2">
        {chapters.map((chapter) => {
          const chapterModule = chapter.generated_content.osteologyData;
          const sections = chapterModule?.chapters.reduce((sum, item) => sum + item.sections.length, 0) ?? chapter.generated_content.keyPoints.length;
          const questions = chapterModule?.chapters.reduce((sum, item) => sum + item.questions.length, 0) ?? chapter.generated_content.quiz.length;

          return (
            <article key={chapter.id} className="rounded-lg border border-line bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-[0_18px_46px_rgba(17,24,39,0.08)]">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-brand">{chapter.course_name}</p>
                  <h2 className="mt-1 text-2xl font-bold text-ink">{chapter.chapter_title}</h2>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-brand">统一模板</span>
              </div>

              <p className="mt-4 min-h-[3.5rem] text-sm leading-7 text-muted">{chapter.generated_content.summary}</p>

              <div className="mt-5 grid grid-cols-3 gap-2 text-center text-sm">
                <MiniStat value={chapterModule?.chapters.length ?? 0} label="分组" />
                <MiniStat value={sections} label="知识卡" />
                <MiniStat value={questions} label="自测题" />
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <Link className="product-button-primary px-4 py-2.5" href={`/chapter/${chapter.id}`}>
                  进入学习
                </Link>
                <span className="rounded-xl border border-line px-4 py-2.5 text-sm font-semibold text-muted">
                  框架 + 易错 + 题库
                </span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function MiniStat({ value, label }: { value: number; label: string }) {
  return (
    <div className="rounded-lg border border-line bg-slate-50 px-3 py-3">
      <p className="text-xl font-bold text-ink">{value}</p>
      <p className="mt-1 text-xs font-medium text-muted">{label}</p>
    </div>
  );
}
