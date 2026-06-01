import Link from "next/link";

export default function HomePage() {
  return (
    <section className="grid gap-6">
      <div className="rounded border border-line bg-white p-6">
        <p className="mb-2 text-sm font-medium text-brand">人体解剖学专用</p>
        <h1 className="text-3xl font-bold leading-tight md:text-4xl">MedMemo 人体解剖学 AI 精准背诵系统</h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
          把人体解剖学教材变成重点、卡片、题目和复习计划。第一版专注“粘贴章节文本到生成学习材料”的完整闭环。
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link className="rounded bg-brand px-4 py-3 font-medium text-white hover:bg-emerald-800" href="/import">
            开始导入章节
          </Link>
          <Link className="rounded border border-line bg-white px-4 py-3 font-medium hover:bg-slate-50" href="/library">
            查看我的学习库
          </Link>
          <Link className="rounded border border-line bg-white px-4 py-3 font-medium hover:bg-slate-50" href="/review">
            今日复习
          </Link>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {["章节框架与必背重点", "背诵卡片与掌握状态", "自测题、错题本与复习"].map((item) => (
          <div key={item} className="rounded border border-line bg-white p-5">
            <h2 className="font-semibold">{item}</h2>
            <p className="mt-2 text-sm leading-6 text-muted">围绕人体解剖学结构、位置、毗邻关系和易混淆点组织学习。</p>
          </div>
        ))}
      </div>
    </section>
  );
}
