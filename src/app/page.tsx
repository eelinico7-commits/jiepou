import Link from "next/link";

export default function HomePage() {
  const features = [
    { title: "章节导入", text: "粘贴教材原文或课堂笔记，生成结构化学习材料。" },
    { title: "背诵卡片", text: "把难记结构拆成一问一答，随时标记掌握程度。" },
    { title: "自测错题", text: "用选择题检查记忆，答错后自动进入错题本。" }
  ];

  return (
    <section className="grid gap-6">
      <div className="rounded border border-line bg-white px-5 py-8 shadow-sm md:px-8 md:py-10">
        <p className="mb-3 text-sm font-semibold text-brand">人体解剖学专用</p>
        <h1 className="max-w-3xl text-3xl font-bold leading-tight md:text-5xl">人体解剖学 AI 精准背诵系统</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
          把厚教材变成重点、卡片、题目和复习计划。
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link className="rounded bg-brand px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-emerald-800" href="/import">
            开始导入章节
          </Link>
          <Link className="rounded border border-line bg-white px-4 py-3 font-medium hover:bg-slate-50" href="/library">
            查看我的学习库
          </Link>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {features.map((item) => (
          <div key={item.title} className="rounded border border-line bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
