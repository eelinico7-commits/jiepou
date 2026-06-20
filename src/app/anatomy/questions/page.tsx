import type { Metadata } from "next";
import Link from "next/link";
import { AnatomyQuestionBank } from "@/components/anatomy-question-bank";

export const metadata: Metadata = {
  title: "正常人体解剖学选择题库",
  description: "按章节筛选正常人体解剖学单选题和多选题，先做题再查看答案。",
};

export default function AnatomyQuestionsPage() {
  return (
    <main className="product-shell py-8 md:py-12">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <Link
          className="text-sm font-semibold text-brand transition hover:text-emerald-800"
          href="/"
        >
          ← 返回首页
        </Link>
        <Link className="product-button-secondary px-4 py-2.5" href="/library">
          查看解剖知识库
        </Link>
      </div>

      <header className="mb-7 max-w-3xl">
        <p className="product-eyebrow">独立刷题模块</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink md:text-4xl">
          正常人体解剖学选择题库
        </h1>
        <p className="mt-4 text-base leading-8 text-muted">
          按章节刷题，先做题再看答案，用来查漏补缺。
        </p>
      </header>

      <AnatomyQuestionBank />
    </main>
  );
}
