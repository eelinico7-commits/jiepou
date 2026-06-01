"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/supabase/auth-context";
import { insertChapter } from "@/lib/supabase/data";

export default function ImportPage() {
  const router = useRouter();
  const { user } = useAuth();
  const [courseName, setCourseName] = useState("人体解剖学");
  const [chapterTitle, setChapterTitle] = useState("");
  const [sourceText, setSourceText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const sampleText =
    "骨由骨质、骨膜和骨髓构成。骨膜含有丰富的血管和神经，对骨的营养、生长和修复有重要作用。骨髓位于骨髓腔和骨松质间隙内，可分为红骨髓和黄骨髓。";

  function fillSample() {
    setCourseName("人体解剖学");
    setChapterTitle("骨学总论");
    setSourceText(sampleText);
  }

  function checkLogin() {
    if (!user) {
      setError("请先登录后上传章节。");
      return false;
    }
    return true;
  }

  async function submit(event: FormEvent) {
    event.preventDefault();
    setError("");
    if (!checkLogin()) return;
    if (!chapterTitle.trim()) {
      setError("请填写章节名称。");
      return;
    }
    if (!sourceText.trim()) {
      setError("请粘贴教材原文或课堂笔记文本。");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("/api/chapters/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ courseName, chapterTitle, sourceText })
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "生成学习内容失败。");
      }

      const generatedContent = data.generatedContent;
      const finalTitle = generatedContent.chapterTitle || chapterTitle;

      const result = await insertChapter(
        user!.id,
        user!.email ?? undefined,
        courseName,
        finalTitle,
        sourceText,
        generatedContent
      );

      router.push(`/chapter/${result.id}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "生成学习内容失败。");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="rounded border border-line bg-white p-5 shadow-sm md:p-7">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold">导入章节</h1>
          <p className="mt-2 text-sm leading-6 text-muted">粘贴《人体解剖学》章节内容，生成可背诵、可测试、可复习的结构化材料。</p>
        </div>
        <button type="button" className="rounded border border-line px-4 py-2 text-sm font-medium hover:bg-slate-50" onClick={fillSample}>
          填入示例文本
        </button>
      </div>

      {!user ? (
        <div className="mt-6 rounded border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-700">
          请先 <a className="font-medium text-brand underline" href="/login">登录</a> 后上传章节。
        </div>
      ) : null}

      <form onSubmit={submit} className="mt-6 grid gap-5">
        <label className="grid gap-2">
          <span className="font-medium">课程名称</span>
          <input className="focus-ring rounded border border-line px-4 py-3" value={courseName} onChange={(event) => setCourseName(event.target.value)} />
        </label>
        <label className="grid gap-2">
          <span className="font-medium">章节名称</span>
          <input
            className="focus-ring rounded border border-line px-4 py-3"
            placeholder="例如：骨学总论、肌学、消化系统、呼吸系统、心血管系统、神经系统"
            value={chapterTitle}
            onChange={(event) => setChapterTitle(event.target.value)}
          />
        </label>
        <label className="grid gap-2">
          <span className="font-medium">教材原文或课堂笔记文本</span>
          <textarea
            className="focus-ring min-h-96 rounded border border-line px-4 py-3 leading-7"
            placeholder="在这里粘贴章节原文或课堂笔记..."
            value={sourceText}
            onChange={(event) => setSourceText(event.target.value)}
          />
        </label>
        {error ? <div className="rounded border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div> : null}
        <div className="sticky bottom-0 -mx-5 border-t border-line bg-white/95 px-5 py-4 backdrop-blur md:-mx-7 md:px-7">
          <button
            disabled={loading || !user}
            className="w-full rounded bg-brand px-5 py-4 text-base font-semibold text-white shadow-sm disabled:cursor-not-allowed disabled:bg-slate-400 md:w-auto"
          >
            {loading ? "正在调用 DeepSeek 生成学习材料，请稍候..." : "生成学习内容"}
          </button>
        </div>
      </form>
    </section>
  );
}
