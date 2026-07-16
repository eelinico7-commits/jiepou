import Link from "next/link";
import { staticChapters } from "@/lib/static-chapters";
import { wordMaterials } from "@/data/anatomy/wordMaterials";

const workflowBlocks = [
  {
    title: "章节学习",
    text: "按系统进入章节，先看框架，再背重点、易错点和速记清单。",
  },
  {
    title: "资料检索",
    text: "把 Word 课后题和笔记集中放进资料库，搜索关键词就能定位原文。",
  },
  {
    title: "刷题自测",
    text: "选择题库适合考前查漏补缺，答案和解析可展开查看。",
  },
];

export default function HomePage() {
  const importedMaterialCount = wordMaterials.filter((item) => item.status === "已导入").length;

  return (
    <div>
      <section className="product-shell grid gap-8 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
        <div className="rounded-lg border border-line bg-white p-6 shadow-sm md:p-8">
          <p className="text-sm font-semibold text-brand">解剖学复习库</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight text-ink md:text-5xl">
            笔记、资料、题库集中复习
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-muted">
            现在先把已有 Word 资料放进网站，能搜索、能定位、能刷题。后续再把高价值内容拆进正式章节。
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link className="product-button-primary" href="/materials">
              查看资料库
            </Link>
            <Link className="product-button-secondary" href="/library">
              进入知识库
            </Link>
          </div>
        </div>

        <div className="grid gap-3">
          <Link href="/materials" className="rounded-lg border border-line bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-[0_18px_46px_rgba(17,24,39,0.08)]">
            <p className="text-sm font-semibold text-brand">新增资料</p>
            <h2 className="mt-1 text-2xl font-bold text-ink">解剖资料库</h2>
            <p className="mt-3 text-sm leading-7 text-muted">
              已导入 {importedMaterialCount} 份资料；课后题可搜索，解剖笔记 PDF 可在线预览。
            </p>
          </Link>

          <Link href="/anatomy/questions" className="rounded-lg border border-line bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-[0_18px_46px_rgba(17,24,39,0.08)]">
            <p className="text-sm font-semibold text-brand">刷题入口</p>
            <h2 className="mt-1 text-2xl font-bold text-ink">选择题库</h2>
            <p className="mt-3 text-sm leading-7 text-muted">
              按章节筛选题目，适合考前快速查漏补缺。
            </p>
          </Link>
        </div>
      </section>

      <section className="product-shell pb-8">
        <div className="grid gap-4 md:grid-cols-3">
          {workflowBlocks.map((item) => (
            <article key={item.title} className="rounded-lg border border-line bg-white p-5 shadow-sm">
              <h2 className="text-xl font-bold text-ink">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="product-shell pb-14">
        <div className="rounded-lg border border-line bg-white p-6 shadow-sm md:p-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-brand">章节知识库</p>
              <h2 className="mt-2 text-2xl font-bold text-ink">已有章节</h2>
            </div>
            <Link className="product-button-secondary px-4 py-2.5" href="/library">
              查看全部
            </Link>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {staticChapters.slice(0, 6).map((chapter) => (
              <Link key={chapter.id} href={`/chapter/${chapter.id}`} className="rounded-lg border border-line bg-slate-50/70 p-4 transition hover:bg-white hover:shadow-sm">
                <p className="text-xs font-semibold text-brand">{chapter.course_name}</p>
                <h3 className="mt-1 font-bold text-ink">{chapter.chapter_title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
