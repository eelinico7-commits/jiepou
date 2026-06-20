import Link from "next/link";
import { staticChapters } from "@/lib/static-chapters";

const templateBlocks = [
  {
    title: "章节框架",
    text: "先把这一章拆成固定结构，知道先学什么、后学什么。",
  },
  {
    title: "必背结构",
    text: "每个知识卡都提炼结构、组成、数量、功能和定位。",
  },
  {
    title: "易错反向",
    text: "不只告诉你正确答案，也专门标出最容易混的反方向。",
  },
  {
    title: "易混对比",
    text: "相似结构放进同一张表，比如肩关节和髋关节、颈胸腰椎。",
  },
  {
    title: "考前速背",
    text: "最后半小时只看最短清单，用来快速扫重点。",
  },
  {
    title: "自测题",
    text: "选择、填空、判断、简答混合检查，答案和解析可展开。",
  },
];

export default function HomePage() {
  return (
    <div>
      <section className="product-shell grid gap-8 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
        <div className="rounded-lg border border-line bg-white p-6 shadow-sm md:p-8">
          <p className="text-sm font-semibold text-brand">解剖学统一复习库</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight text-ink md:text-5xl">
            每个系统章节，都整理成同一种学习结构
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-muted">
            以后不再一章一个样。绪论、骨学、关节学先统一为同一套模板；后面做肌学、消化、呼吸、循环等章节，也继续沿用这个结构：框架、必背、易错、对比、速背、题库。
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link className="product-button-primary" href="/library">
              进入知识库
            </Link>
            <Link className="product-button-secondary" href="/chapter/arthrology">
              先看关节学
            </Link>
          </div>
        </div>

        <div className="grid gap-3">
          {staticChapters.map((chapter) => {
            const chapterModule = chapter.generated_content.osteologyData;
            return (
              <Link key={chapter.id} href={`/chapter/${chapter.id}`} className="rounded-lg border border-line bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-[0_18px_46px_rgba(17,24,39,0.08)]">
                <p className="text-sm font-semibold text-brand">{chapter.course_name}</p>
                <h2 className="mt-1 text-2xl font-bold text-ink">{chapter.chapter_title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted">{chapter.generated_content.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-muted">
                  <span className="rounded-full bg-slate-100 px-3 py-1">{chapterModule?.chapters.length ?? 0} 个分组</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1">{chapterModule?.confusingTables.length ?? 0} 张对比表</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1">统一模板</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="product-shell pb-8">
        <Link
          href="/anatomy/questions"
          className="product-card product-card-hover block p-6 md:p-8"
        >
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div className="max-w-3xl">
              <p className="product-eyebrow">独立刷题模块</p>
              <h2 className="mt-2 text-2xl font-bold text-ink">
                解剖选择题库
              </h2>
              <p className="mt-3 leading-7 text-muted">
                按章节刷选择题，先做题再看答案，适合期末考前自测。
              </p>
            </div>
            <span className="product-button-primary shrink-0">
              进入选择题库
            </span>
          </div>
        </Link>
      </section>

      <section className="product-shell pb-14">
        <div className="rounded-lg border border-line bg-white p-6 shadow-sm md:p-8">
          <p className="text-sm font-semibold text-brand">固定模板</p>
          <h2 className="mt-2 text-2xl font-bold text-ink">以后所有章节都按这 6 块整理</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {templateBlocks.map((item) => (
              <article key={item.title} className="rounded-lg border border-line bg-slate-50/70 p-4">
                <h3 className="font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
