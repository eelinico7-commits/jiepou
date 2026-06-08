"use client";

import { useEffect, useMemo, useState } from "react";
import type { OsteologyModule, OsteologyQuestion, OsteologyQuestionType } from "@/lib/types";

const STORAGE_PREFIX = "medmemo:chapter-progress:";

const questionTypeLabels: Record<OsteologyQuestionType, string> = {
  single_choice: "选择题",
  fill_blank: "填空题",
  true_false: "判断题",
  short_answer: "简答题",
};

export function OsteologyStudy({ module }: { module: OsteologyModule }) {
  const storageKey = `${STORAGE_PREFIX}${module.id}`;
  const [completed, setCompleted] = useState<Record<string, boolean>>({});
  const [openAnswers, setOpenAnswers] = useState<Record<string, boolean>>({});

  const stats = useMemo(() => {
    const questions = module.chapters.flatMap((chapter) => chapter.questions);
    return {
      chapters: module.chapters.length,
      sections: module.chapters.reduce((sum, chapter) => sum + chapter.sections.length, 0),
      questions: questions.length,
      tables: module.confusingTables.length,
    };
  }, [module]);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(storageKey);
      if (raw) setCompleted(JSON.parse(raw));
    } catch {
      setCompleted({});
    }
  }, [storageKey]);

  function toggleCompleted(chapterId: string) {
    setCompleted((items) => {
      const next = { ...items, [chapterId]: !items[chapterId] };
      window.localStorage.setItem(storageKey, JSON.stringify(next));
      return next;
    });
  }

  function toggleAnswer(questionId: string) {
    setOpenAnswers((items) => ({ ...items, [questionId]: !items[questionId] }));
  }

  return (
    <section className="product-shell grid min-w-0 gap-6 py-6">
      <header className="overflow-hidden rounded-lg border border-line bg-white shadow-sm">
        <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-5 md:p-7">
            <p className="text-sm font-semibold text-brand">{module.subject} / {module.system}</p>
            <h1 className="mt-2 text-3xl font-bold leading-tight text-ink md:text-4xl">{module.title}</h1>
            <p className="mt-3 text-sm text-muted">{module.version}</p>
            <p className="mt-5 max-w-4xl leading-8 text-muted">{module.description}</p>
          </div>
          <div className="grid grid-cols-2 gap-3 border-t border-line bg-[#F6FAF9] p-5 lg:border-l lg:border-t-0 md:p-7">
            <Stat value={stats.chapters} label="结构分组" />
            <Stat value={stats.sections} label="知识卡片" />
            <Stat value={stats.tables} label="易混表" />
            <Stat value={stats.questions} label="自测题" />
          </div>
        </div>
      </header>

      <nav className="sticky top-[73px] z-30 min-w-0 rounded-lg border border-line bg-white/95 p-2 shadow-sm backdrop-blur">
        <div className="flex gap-2 overflow-x-auto text-sm">
          {[
            ["overview", "总览"],
            ...module.chapters.map((chapter) => [chapter.id, chapter.title]),
            ["confusing", "易混对比"],
            ["wrong-way", "易错反向"],
            ["sprint", "考前速背"],
            ["quiz-bank", "自测题"],
          ].map(([href, label]) => (
            <a key={href} className="shrink-0 rounded-md bg-slate-50 px-3 py-2 font-medium text-muted hover:bg-emerald-50 hover:text-brand" href={`#${href}`}>
              {label}
            </a>
          ))}
        </div>
      </nav>

      <Block id="overview" title="统一学习框架" eyebrow="先搭骨架，再背细节">
        <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <Panel title="学习顺序">
            <ol className="grid gap-2 text-sm leading-6 text-muted">
              {module.learningOrder.map((item, index) => (
                <li key={item} className="flex gap-2">
                  <span className="font-semibold text-brand">{index + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </Panel>
          <div className="grid gap-3 sm:grid-cols-2">
            {module.chapters.map((chapter) => (
              <a key={chapter.id} href={`#${chapter.id}`} className="rounded-lg border border-line bg-slate-50/70 p-4 hover:border-brand">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold text-ink">{chapter.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{chapter.description}</p>
                  </div>
                  <span className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${completed[chapter.id] ? "bg-emerald-50 text-brand" : "bg-slate-100 text-muted"}`}>
                    {completed[chapter.id] ? "已学" : "待学"}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Block>

      {module.chapters.map((chapter) => (
        <Block key={chapter.id} id={chapter.id} title={chapter.title} eyebrow="结构 / 考点 / 易错">
          <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
            <p className="max-w-3xl leading-7 text-muted">{chapter.description}</p>
            <button className="rounded-md border border-line px-3 py-2 text-sm font-semibold hover:bg-slate-50" onClick={() => toggleCompleted(chapter.id)}>
              {completed[chapter.id] ? "取消已学" : "标记已学"}
            </button>
          </div>

          <div className="grid gap-4">
            {chapter.sections.map((section) => (
              <article key={section.id} className="rounded-lg border border-line bg-white p-4 shadow-sm">
                <h3 className="text-lg font-bold text-ink">{section.title}</h3>
                <div className="mt-4 grid gap-4 lg:grid-cols-2">
                  <Panel title="必背结构">
                    <BulletList items={section.mustKnow} />
                  </Panel>
                  <Panel title="通俗理解">
                    <p className="text-sm leading-7 text-muted">{section.plainExplanation}</p>
                  </Panel>
                  <Panel title="常考方式">
                    <ExamPointList points={section.examPoints} />
                  </Panel>
                  <Panel title="易错反向">
                    <BulletList items={section.confusingPoints} tone="danger" />
                  </Panel>
                  <Panel title="记忆抓手">
                    <BulletList items={section.memoryTips} tone="brand" />
                  </Panel>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-5 rounded-lg border border-line bg-slate-50/70 p-4">
            <h3 className="font-semibold text-ink">本组速背</h3>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {chapter.quickReview.map((item) => (
                <p key={item} className="rounded-md bg-white px-3 py-2 text-sm leading-6 text-muted">{item}</p>
              ))}
            </div>
          </div>
        </Block>
      ))}

      <Block id="confusing" title="易混点对比表" eyebrow="把相似项放在一起记">
        <div className="grid gap-5">
          {module.confusingTables.map((table) => (
            <div key={table.id} className="min-w-0 overflow-hidden rounded-lg border border-line">
              <h3 className="border-b border-line bg-slate-50 px-4 py-3 font-semibold text-ink">{table.title}</h3>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[620px] border-collapse text-left text-sm">
                  <thead className="bg-white text-ink">
                    <tr>{table.headers.map((header) => <th key={header} className="border-b border-line px-4 py-3">{header}</th>)}</tr>
                  </thead>
                  <tbody className="text-muted">
                    {table.rows.map((row) => (
                      <tr key={row.join("-")}>{row.map((cell) => <td key={cell} className="border-b border-line px-4 py-3 leading-6">{cell}</td>)}</tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </Block>

      <Block id="wrong-way" title="易错反向提醒" eyebrow="不是只背对的，也要知道哪里容易错">
        <div className="grid gap-3 md:grid-cols-2">
          {module.highFrequencyPoints.map((item, index) => (
            <div key={item} className="flex gap-3 rounded-lg border border-line bg-slate-50/70 p-4">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-brand text-sm font-bold text-white">{index + 1}</span>
              <p className="text-sm leading-6 text-muted">{item}</p>
            </div>
          ))}
        </div>
      </Block>

      <Block id="sprint" title="考前速背清单" eyebrow="最后 30 分钟只看这块">
        <div className="grid gap-5 lg:grid-cols-2">
          <Panel title="总清单">
            <BulletList items={module.quickReview} />
          </Panel>
          <Panel title="30 分钟冲刺">
            <BulletList items={module.examSprint} tone="brand" />
          </Panel>
        </div>
      </Block>

      <Block id="quiz-bank" title="自测题库" eyebrow="用题目检查有没有真的记住">
        <div className="grid gap-6">
          {module.chapters.map((chapter) => (
            <div key={`${chapter.id}-quiz`} className="rounded-lg border border-line bg-slate-50/70 p-4">
              <h3 className="text-lg font-bold text-ink">{chapter.title}</h3>
              <div className="mt-4 grid gap-4">
                {(["single_choice", "fill_blank", "true_false", "short_answer"] as OsteologyQuestionType[]).map((type) => {
                  const questions = chapter.questions.filter((question) => question.type === type);
                  if (questions.length === 0) return null;
                  return (
                    <div key={type} className="rounded-lg bg-white p-4">
                      <h4 className="font-semibold text-ink">{questionTypeLabels[type]}</h4>
                      <div className="mt-3 grid gap-3">
                        {questions.map((question, index) => (
                          <QuestionCard
                            key={question.id}
                            question={question}
                            index={index}
                            open={Boolean(openAnswers[question.id])}
                            onToggle={() => toggleAnswer(question.id)}
                          />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </Block>
    </section>
  );
}

function Block({ id, title, eyebrow, children }: { id: string; title: string; eyebrow?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28 rounded-lg border border-line bg-white p-5 shadow-sm md:p-6">
      {eyebrow ? <p className="mb-1 text-sm font-semibold text-brand">{eyebrow}</p> : null}
      <h2 className="mb-5 text-2xl font-bold text-ink">{title}</h2>
      {children}
    </section>
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-line bg-slate-50/70 p-4">
      <h4 className="mb-3 text-sm font-bold text-ink">{title}</h4>
      {children}
    </div>
  );
}

function BulletList({ items, tone = "default" }: { items: string[]; tone?: "default" | "danger" | "brand" }) {
  const marker = tone === "danger" ? "text-red-600" : tone === "brand" ? "text-brand" : "text-muted";
  return (
    <ul className="grid gap-2 text-sm leading-6 text-muted">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className={`mt-0.5 ${marker}`}>•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ExamPointList({ points }: { points: { term?: string[]; choice?: string[]; blank?: string[]; short?: string[] } }) {
  const groups = [
    ["名词解释", points.term],
    ["选择题", points.choice],
    ["填空题", points.blank],
    ["简答题", points.short],
  ] as const;
  return (
    <div className="grid gap-2 text-sm leading-6 text-muted">
      {groups.map(([label, values]) => values?.length ? (
        <div key={label}>
          <span className="font-semibold text-ink">{label}：</span>
          {values.join("；")}
        </div>
      ) : null)}
    </div>
  );
}

function QuestionCard({ question, index, open, onToggle }: { question: OsteologyQuestion; index: number; open: boolean; onToggle: () => void }) {
  return (
    <article className="rounded-lg border border-line bg-slate-50/70 p-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-brand">{index + 1}. {questionTypeLabels[question.type]}</p>
          <h5 className="mt-1 font-semibold leading-7 text-ink">{question.question}</h5>
        </div>
        <button className="rounded-md border border-line bg-white px-3 py-2 text-sm font-semibold hover:bg-slate-50" onClick={onToggle}>
          {open ? "收起答案" : "查看答案"}
        </button>
      </div>
      {question.options?.length ? (
        <ol className="mt-3 grid gap-2 text-sm text-muted">
          {question.options.map((option, optionIndex) => (
            <li key={option} className="rounded-md bg-white px-3 py-2">{String.fromCharCode(65 + optionIndex)}. {option}</li>
          ))}
        </ol>
      ) : null}
      {open ? (
        <div className="mt-3 rounded-md border border-emerald-100 bg-emerald-50 px-3 py-3 text-sm leading-6 text-emerald-900">
          <p><span className="font-semibold">答案：</span>{String(question.answer)}</p>
          <p className="mt-1"><span className="font-semibold">解析：</span>{question.explanation}</p>
        </div>
      ) : null}
    </article>
  );
}

function Stat({ value, label }: { value: number; label: string }) {
  return (
    <div className="rounded-lg border border-line bg-white p-4 text-center">
      <p className="text-2xl font-bold text-ink">{value}</p>
      <p className="mt-1 text-xs font-medium text-muted">{label}</p>
    </div>
  );
}
