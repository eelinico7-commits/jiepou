"use client";

import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { useParams } from "next/navigation";
import type { GeneratedContent } from "@/lib/types";
import { fetchChapterById } from "@/lib/supabase/data";
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

export default function ChapterDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const [chapter, setChapter] = useState<ChapterData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const data = await fetchChapterById(id);
      setChapter(data as ChapterData);
    } catch (err) {
      setError(err instanceof Error ? err.message : "章节加载失败。");
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    void load();
  }, [load]);

  if (loading) {
    return (
      <section className="product-shell py-8">
        <div className="rounded-lg border border-line bg-white p-5 shadow-sm">正在加载章节...</div>
      </section>
    );
  }

  if (error || !chapter) {
    return (
      <section className="product-shell py-8">
        <div className="rounded-lg border border-red-200 bg-red-50 p-5 text-red-700">
          {error || "没有找到这个章节。"}
        </div>
        <Link className="mt-4 inline-flex rounded-md border border-line bg-white px-4 py-2 text-sm font-semibold" href="/library">
          返回知识库
        </Link>
      </section>
    );
  }

  const moduleData = chapter.generated_content.osteologyData;

  if (moduleData) {
    return <OsteologyStudy module={moduleData} />;
  }

  return (
    <section className="product-shell grid gap-5 py-8">
      <div className="rounded-lg border border-line bg-white p-5 shadow-sm md:p-6">
        <p className="text-sm font-semibold text-brand">{chapter.course_name}</p>
        <h1 className="mt-1 text-2xl font-bold text-ink">{chapter.chapter_title}</h1>
        <p className="mt-4 leading-7 text-muted">{chapter.generated_content.summary}</p>
      </div>

      <div className="rounded-lg border border-amber-200 bg-amber-50 p-5 text-amber-900">
        这个章节还不是统一模板格式。后续导入章节会统一转换为：框架、必背结构、易错反向、易混对比、考前速背和自测题。
      </div>

      <Link className="product-button-secondary w-fit" href="/library">
        返回知识库
      </Link>
    </section>
  );
}
