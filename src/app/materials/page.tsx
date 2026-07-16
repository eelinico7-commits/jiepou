import type { Metadata } from "next";
import Link from "next/link";
import { AnatomyMaterialLibrary } from "@/components/anatomy-material-library";

export const metadata: Metadata = {
  title: "解剖资料库",
  description: "集中查看解剖学 Word 资料、课后题和待导入笔记。",
};

export default function MaterialsPage() {
  return (
    <main className="product-shell py-8 md:py-12">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <Link
          className="text-sm font-semibold text-brand transition hover:text-emerald-800"
          href="/"
        >
          返回首页
        </Link>
        <Link className="product-button-secondary px-4 py-2.5" href="/anatomy/questions">
          去刷选择题
        </Link>
      </div>

      <header className="mb-7 max-w-3xl">
        <p className="product-eyebrow">资料库</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink md:text-4xl">
          解剖资料库
        </h1>
        <p className="mt-4 text-base leading-8 text-muted">
          把 Word 资料集中放在这里，先能查、能刷、能定位。后续再把高价值内容拆进章节学习页。
        </p>
      </header>

      <AnatomyMaterialLibrary />
    </main>
  );
}
