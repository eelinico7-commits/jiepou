"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { addLocalChapter, createId } from "@/lib/client-storage";
import type { Chapter } from "@/lib/types";

export default function ImportPage() {
  const router = useRouter();
  const [courseName, setCourseName] = useState("人体解剖学");
  const [chapterTitle, setChapterTitle] = useState("");
  const [sourceText, setSourceText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function submit(event: FormEvent) {
    event.preventDefault();
    setError("");
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
      const now = new Date().toISOString();
      const chapter: Chapter = {
        id: createId("chapter"),
        courseName,
        chapterTitle: data.generatedContent.chapterTitle || chapterTitle,
        sourceText,
        generatedContent: data.generatedContent,
        createdAt: now,
        updatedAt: now
      };
      addLocalChapter(chapter);
      router.push(`/chapter/${chapter.id}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "生成学习内容失败。");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="rounded border border-line bg-white p-5">
      <h1 className="text-2xl font-bold">导入章节</h1>
      <p className="mt-2 text-sm text-muted">粘贴《人体解剖学》章节内容，生成可背诵、可测试、可复习的结构化材料。</p>
      <form onSubmit={submit} className="mt-6 grid gap-4">
        <label className="grid gap-2">
          <span className="font-medium">课程名称</span>
          <input className="focus-ring rounded border border-line px-3 py-2" value={courseName} onChange={(event) => setCourseName(event.target.value)} />
        </label>
        <label className="grid gap-2">
          <span className="font-medium">章节名称</span>
          <input
            className="focus-ring rounded border border-line px-3 py-2"
            placeholder="例如：骨学总论、肌学、消化系统、呼吸系统、心血管系统、神经系统"
            value={chapterTitle}
            onChange={(event) => setChapterTitle(event.target.value)}
          />
        </label>
        <label className="grid gap-2">
          <span className="font-medium">教材原文或课堂笔记文本</span>
          <textarea
            className="focus-ring min-h-80 rounded border border-line px-3 py-2 leading-7"
            placeholder="在这里粘贴章节原文或课堂笔记..."
            value={sourceText}
            onChange={(event) => setSourceText(event.target.value)}
          />
        </label>
        {error ? <div className="rounded border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div> : null}
        <button disabled={loading} className="rounded bg-brand px-4 py-3 font-medium text-white disabled:cursor-not-allowed disabled:bg-slate-400">
          {loading ? "正在调用 DeepSeek 生成..." : "生成学习内容"}
        </button>
      </form>
    </section>
  );
}
