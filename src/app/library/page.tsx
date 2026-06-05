"use client";

import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { useAuth } from "@/lib/supabase/auth-context";
import { fetchAllChapters, deleteChapter, insertChapter } from "@/lib/supabase/data";
import { readLocalData } from "@/lib/client-storage";
import type { PublicChapterRow } from "@/lib/supabase/data";

export default function LibraryPage() {
  const { user } = useAuth();
  const [chapters, setChapters] = useState<PublicChapterRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [migrating, setMigrating] = useState(false);
  const [migrateResult, setMigrateResult] = useState("");
  const [confirmClear, setConfirmClear] = useState(false);

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

  async function remove(id: string) {
    setError("");
    try {
      await deleteChapter(id);
      setChapters((items) => items.filter((item) => item.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : "删除章节失败。");
    }
  }

  async function migrateLocalData() {
    if (!user) return;
    setMigrating(true);
    setMigrateResult("");
    let successCount = 0;
    let failCount = 0;
    try {
      const localData = readLocalData();
      const localChapters = localData.chapters;
      if (localChapters.length === 0) {
        setMigrateResult("本地没有发现需要迁移的章节数据。");
        setMigrating(false);
        return;
      }
      for (const chapter of localChapters) {
        try {
          await insertChapter(
            user.id,
            user.email ?? undefined,
            chapter.courseName,
            chapter.chapterTitle,
            chapter.sourceText,
            chapter.generatedContent
          );
          successCount++;
        } catch {
          failCount++;
        }
      }
      setMigrateResult(`迁移完成：成功 ${successCount} 条${failCount > 0 ? `，失败 ${failCount} 条` : ""}`);
      await load();
    } catch (err) {
      setMigrateResult(err instanceof Error ? err.message : "迁移失败。");
    } finally {
      setMigrating(false);
    }
  }

  function clearLocalData() {
    if (typeof window === "undefined") return;
    localStorage.removeItem("medmemo:v1");
    setConfirmClear(false);
    setMigrateResult("本地数据已清除。");
  }

  const hasLocalData = typeof window !== "undefined" && (() => {
    try {
      const raw = localStorage.getItem("medmemo:v1");
      if (!raw) return false;
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed.chapters) && parsed.chapters.length > 0;
    } catch {
      return false;
    }
  })();

  useEffect(() => {
    void load();
  }, [load]);

  return (
    <section className="grid gap-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-brand">公共知识库</p>
          <h1 className="mt-1 text-2xl font-bold text-ink">已导入章节</h1>
          <p className="mt-1 text-sm text-muted">所有人上传的章节都会在这里；登录后可上传并记录个人学习进度。</p>
        </div>
        <Link className="rounded-md bg-brand px-4 py-3 font-semibold text-white shadow-sm transition hover:bg-emerald-800" href="/import">
          导入新章节
        </Link>
      </div>

      {error ? <div className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div> : null}

      {user && hasLocalData ? (
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 shadow-sm">
          <h3 className="font-semibold text-amber-900">发现本地旧数据</h3>
          <p className="mt-1 text-sm leading-6 text-amber-800">
            浏览器中还有之前保存在 localStorage 的章节数据，可以迁移到云端。
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              className="rounded-md bg-amber-700 px-4 py-2 text-sm font-semibold text-white disabled:opacity-50"
              disabled={migrating}
              onClick={() => void migrateLocalData()}
            >
              {migrating ? "迁移中..." : "迁移本地数据到云端"}
            </button>
            {!confirmClear ? (
              <button
                className="rounded-md border border-amber-300 px-4 py-2 text-sm text-amber-800 hover:bg-amber-100"
                onClick={() => setConfirmClear(true)}
              >
                清除本地数据
              </button>
            ) : (
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm text-amber-800">确定清除本地数据吗？此操作无法撤销。</span>
                <button className="rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white" onClick={clearLocalData}>
                  确认清除
                </button>
                <button className="rounded-md border border-amber-300 px-4 py-2 text-sm" onClick={() => setConfirmClear(false)}>
                  取消
                </button>
              </div>
            )}
          </div>
          {migrateResult ? <p className="mt-2 text-sm text-amber-900">{migrateResult}</p> : null}
        </div>
      ) : null}

      {loading ? <div className="rounded-lg border border-line bg-white p-5 shadow-sm">正在加载...</div> : null}

      {!loading && chapters.length === 0 ? (
        <div className="rounded-lg border border-dashed border-line bg-white p-8 text-center shadow-sm">
          <h2 className="text-lg font-semibold text-ink">知识库还没有章节</h2>
          <p className="mt-2 text-sm text-muted">上传第一个章节，生成卡片和自测题。</p>
          <Link className="mt-5 inline-block rounded-md bg-brand px-5 py-3 font-semibold text-white" href="/import">
            开始导入章节
          </Link>
        </div>
      ) : null}

      <div className="grid gap-4">
        {chapters.map((chapter) => (
          <article key={chapter.id} className="rounded-lg border border-line bg-white p-5 shadow-sm">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="min-w-0">
                <h2 className="text-xl font-semibold text-ink">{chapter.chapter_title}</h2>
                <p className="mt-1 text-sm text-muted">
                  {chapter.owner_email ? `上传者：${chapter.owner_email}` : "匿名上传"}
                  {" · "}
                  {new Date(chapter.created_at).toLocaleString()}
                </p>
                <div className="mt-3 flex flex-wrap gap-2 text-sm">
                  <span className="rounded-full bg-emerald-50 px-3 py-1 font-medium text-brand">
                    卡片 {chapter.generated_content?.flashcards?.length ?? 0} 张
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-muted">
                    题目 {chapter.generated_content?.quiz?.length ?? 0} 道
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Link className="rounded-md border border-line px-3 py-2 text-sm font-medium hover:bg-slate-50" href={`/chapter/${chapter.id}`}>
                  进入详情
                </Link>
                {user && user.id === chapter.owner_id ? (
                  <button className="rounded-md border border-red-200 px-3 py-2 text-sm font-medium text-red-700 hover:bg-red-50" onClick={() => void remove(chapter.id)}>
                    删除
                  </button>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
