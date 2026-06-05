import Link from "next/link";

const workflow = [
  {
    step: "1",
    title: "导入资料",
    text: "上传 PPT、PDF、Word、TXT、Excel，或直接粘贴课堂笔记。",
  },
  {
    step: "2",
    title: "AI 整理",
    text: "自动生成章节、知识点、考试重点、易混点、记忆方法和题目。",
  },
  {
    step: "3",
    title: "人工确认",
    text: "先预览编辑，再确认入库，避免 AI 胡编内容。",
  },
];

const importCards = [
  {
    title: "粘贴文本导入",
    status: "当前优先可用",
    text: "把老师课件、复习范围或课堂笔记直接粘贴进来，最快开始整理。",
  },
  {
    title: "上传文件",
    status: "入口已保留",
    text: "支持 PDF / PPTX / DOCX / TXT 的统一入口，TXT 可直接读取。",
  },
  {
    title: "表格批量导入",
    status: "CSV / Excel 可用",
    text: "适合已有知识点表、题库表或老师给的复习清单。",
  },
  {
    title: "AI 章节生成",
    status: "规划中",
    text: "输入章节范围，先生成一版初始知识库，再人工校对。",
  },
];

const capabilities = [
  "章节与系统归类",
  "知识点通俗解释",
  "考试重点提取",
  "易混点对比",
  "记忆方法生成",
  "选择题与简答题",
  "错题复盘",
  "背诵卡片",
];

export default function HomePage() {
  return (
    <div className="bg-[#F7F8FA]">
      <section className="product-shell grid min-h-[calc(100vh-64px)] items-center gap-8 py-10 lg:grid-cols-[1.08fr_0.92fr] lg:py-16">
        <div>
          <p className="product-eyebrow">老师课件才是最重要来源</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-ink md:text-5xl">
            上传课件，AI 整理成解剖学复习知识库
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-muted">
            不用再从 GitHub 或网上硬找资料，把老师课件、笔记、复习范围交给 AI，先生成可审核的知识点，再做自测和复盘。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/import" className="product-button-primary">
              开始导入资料
            </Link>
            <Link href="/library" className="product-button-secondary">
              查看示例知识库
            </Link>
          </div>
        </div>

        <div className="product-card p-5 md:p-6">
          <div className="flex items-start justify-between gap-4 border-b border-line pb-4">
            <div>
              <p className="text-sm font-semibold text-brand">产品预览</p>
              <h2 className="mt-1 text-xl font-bold text-ink">运动系统复习包</h2>
            </div>
            <span className="rounded-full bg-[#EEF7F4] px-3 py-1 text-xs font-semibold text-brand">待确认</span>
          </div>

          <div className="mt-5 grid gap-3">
            {["运动系统", "骨学", "肌学"].map((item) => (
              <div key={item} className="flex items-center justify-between rounded-2xl border border-line bg-[#F9FAFB] px-4 py-3">
                <span className="font-medium text-ink">{item}</span>
                <span className="text-sm text-muted">已归类</span>
              </div>
            ))}
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3">
            {[
              ["28", "高频考点"],
              ["12", "易混点"],
              ["36", "自测题"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-line bg-white p-4 text-center">
                <p className="text-2xl font-bold text-ink">{value}</p>
                <p className="mt-1 text-xs text-muted">{label}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl bg-[#F7F8FA] p-4">
            <p className="text-sm font-semibold text-ink">下一步</p>
            <p className="mt-2 text-sm leading-6 text-muted">检查 AI 生成内容，删掉不准确的知识点，再确认入库。</p>
          </div>
        </div>
      </section>

      <section className="product-shell py-10">
        <div className="grid gap-4 md:grid-cols-3">
          {workflow.map((item) => (
            <article key={item.step} className="product-card product-card-hover p-6">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EEF7F4] text-sm font-bold text-brand">
                {item.step}
              </span>
              <h2 className="mt-5 text-xl font-bold text-ink">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="product-shell py-10">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="product-eyebrow">导入方式</p>
            <h2 className="mt-2 text-2xl font-bold text-ink">不用一条条手动录入</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-muted">先支持最常用的文本和表格，文件解析逐步补齐。核心是让你快速把老师资料变成可复习内容。</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {importCards.map((item) => (
            <article key={item.title} className="product-card product-card-hover p-5">
              <p className="text-xs font-semibold text-brand">{item.status}</p>
              <h3 className="mt-3 text-lg font-bold text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="product-shell py-10">
        <div className="product-card grid gap-6 p-5 md:p-7 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="product-eyebrow">AI 整理结果预览</p>
            <h2 className="mt-2 text-2xl font-bold text-ink">先看、先改，再入库</h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              AI 不会直接把内容塞进知识库。每个知识点先进入待确认状态，你可以编辑、删除或确认。
            </p>
          </div>

          <div className="rounded-2xl border border-line bg-[#F9FAFB] p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-brand">运动系统 - 骨学</p>
                <h3 className="mt-1 text-xl font-bold text-ink">椎骨的一般形态</h3>
              </div>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-muted shadow-sm">待确认</span>
            </div>

            <div className="mt-5 grid gap-3 text-sm">
              <PreviewRow label="考试重点" value="椎体、椎弓、椎孔、棘突、横突" />
              <PreviewRow label="易混点" value="颈椎、胸椎、腰椎的区别" />
              <PreviewRow label="记忆方法" value="先看椎体大小，再看棘突方向" />
              <PreviewRow label="自测题" value="典型椎骨由哪些结构组成？" />
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <button className="product-button-secondary px-4 py-2">编辑</button>
              <button className="product-button-secondary px-4 py-2 text-red-700">删除</button>
              <Link href="/import" className="product-button-primary px-4 py-2">
                确认入库
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="product-shell py-10">
        <div className="product-card p-6 md:p-8">
          <div className="mb-6 max-w-2xl">
            <p className="product-eyebrow">知识库能做什么</p>
            <h2 className="mt-2 text-2xl font-bold text-ink">整理完之后，就进入复习节奏</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item) => (
              <div key={item} className="rounded-2xl border border-line bg-[#F9FAFB] px-4 py-3 text-sm font-medium text-ink">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="product-shell py-10">
        <div className="border-t border-line pt-6 text-sm leading-6 text-muted">
          MedMemo 适合考前把老师资料快速整理成复习知识库。AI 负责先整理，人负责最后确认。
        </div>
      </footer>
    </div>
  );
}

function PreviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-2 rounded-2xl border border-line bg-white p-4 md:grid-cols-[5rem_1fr]">
      <span className="font-semibold text-muted">{label}</span>
      <span className="text-ink">{value}</span>
    </div>
  );
}
