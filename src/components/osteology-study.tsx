"use client";

import { useEffect, useMemo, useState } from "react";
import type { OsteologyModule, OsteologyQuestion, OsteologyQuestionType } from "@/lib/types";

const STORAGE_KEY = "medmemo:osteology-progress";

const questionTypeLabels: Record<OsteologyQuestionType, string> = {
  single_choice: "选择题",
  fill_blank: "填空题",
  true_false: "判断题",
  short_answer: "简答题",
};

export function OsteologyStudy({ module }: { module: OsteologyModule }) {
  const [completed, setCompleted] = useState<Record<string, boolean>>({});
  const [openAnswers, setOpenAnswers] = useState<Record<string, boolean>>({});

  const stats = useMemo(() => {
    const questions = module.chapters.flatMap((chapter) => chapter.questions);
    return {
      sections: module.chapters.reduce((sum, chapter) => sum + chapter.sections.length, 0),
      questions: questions.length,
      choice: questions.filter((q) => q.type === "single_choice").length,
      blank: questions.filter((q) => q.type === "fill_blank").length,
      judge: questions.filter((q) => q.type === "true_false").length,
      short: questions.filter((q) => q.type === "short_answer").length,
    };
  }, [module]);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setCompleted(JSON.parse(raw));
    } catch {
      setCompleted({});
    }
  }, []);

  function toggleCompleted(chapterId: string) {
    setCompleted((items) => {
      const next = { ...items, [chapterId]: !items[chapterId] };
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }

  function toggleAnswer(questionId: string) {
    setOpenAnswers((items) => ({ ...items, [questionId]: !items[questionId] }));
  }

  return (
    <section className="product-shell grid min-w-0 gap-6 py-6">
      <div className="rounded-lg border border-line bg-white p-5 shadow-sm md:p-6">
        <p className="text-sm font-semibold text-brand">{module.subject} / {module.system}</p>
        <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
          <div className="min-w-0">
            <h1 className="text-2xl font-bold text-ink md:text-3xl">{module.title}</h1>
            <p className="mt-2 text-sm text-muted">{module.version}</p>
          </div>
          <div className="grid grid-cols-2 gap-2 text-center text-sm sm:grid-cols-4">
            <Stat value={module.chapters.length} label="大章" />
            <Stat value={stats.sections} label="小节" />
            <Stat value={stats.questions} label="题目" />
            <Stat value={module.confusingTables.length} label="易混表" />
          </div>
        </div>
        <p className="mt-4 max-w-4xl leading-7 text-muted">{module.description}</p>
      </div>

      <nav className="min-w-0 rounded-lg border border-line bg-white p-2 shadow-sm">
        <div className="flex gap-2 overflow-x-auto text-sm">
          {[
            ["overview", "章节总览"],
            ...module.chapters.map((chapter) => [chapter.id, chapter.title]),
            ["confusing", "易混点"],
            ["high-frequency", "高频考点"],
            ["quick-review", "考前速背"],
            ["quiz-bank", "自测题库"],
          ].map(([href, label]) => (
            <a key={href} className="shrink-0 rounded-md bg-slate-50 px-3 py-2 font-medium text-muted hover:bg-emerald-50 hover:text-brand" href={`#${href}`}>
              {label}
            </a>
          ))}
        </div>
      </nav>

      <Block id="overview" title="章节总览">
        <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-lg border border-line bg-slate-50/70 p-4">
            <h3 className="font-semibold text-ink">学习顺序</h3>
            <ol className="mt-3 grid gap-2 text-sm leading-6 text-muted">
              {module.learningOrder.map((item, index) => (
                <li key={item} className="flex gap-2">
                  <span className="font-semibold text-brand">{index + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>
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
        <Block key={chapter.id} id={chapter.id} title={chapter.title}>
          <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
            <p className="max-w-3xl leading-7 text-muted">{chapter.description}</p>
            <button className="rounded-md border border-line px-3 py-2 text-sm font-semibold hover:bg-slate-50" onClick={() => toggleCompleted(chapter.id)}>
              {completed[chapter.id] ? "取消已学完" : "标记已学完"}
            </button>
          </div>

          <div className="grid gap-4">
            {chapter.sections.map((section) => (
              <article key={section.id} className="rounded-lg border border-line bg-white p-4 shadow-sm">
                <h3 className="text-lg font-bold text-ink">{section.title}</h3>
                <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_1fr]">
                  <Panel title="必背知识点">
                    <ul className="grid gap-2 text-sm leading-6 text-muted">
                      {section.mustKnow.map((item) => <li key={item}>• {item}</li>)}
                    </ul>
                  </Panel>
                  <Panel title="大白话理解">
                    <p className="text-sm leading-7 text-muted">{section.plainExplanation}</p>
                  </Panel>
                  <Panel title="常考点">
                    <ExamPointList points={section.examPoints} />
                  </Panel>
                  <Panel title="易混点">
                    <ul className="grid gap-2 text-sm leading-6 text-muted">
                      {section.confusingPoints.map((item) => <li key={item}>• {item}</li>)}
                    </ul>
                  </Panel>
                  <Panel title="记忆方法">
                    <ul className="grid gap-2 text-sm leading-6 text-muted">
                      {section.memoryTips.map((item) => <li key={item}>• {item}</li>)}
                    </ul>
                  </Panel>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-5 rounded-lg border border-line bg-slate-50/70 p-4">
            <h3 className="font-semibold text-ink">本章速背</h3>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {chapter.quickReview.map((item) => (
                <p key={item} className="rounded-md bg-white px-3 py-2 text-sm leading-6 text-muted">{item}</p>
              ))}
            </div>
          </div>
        </Block>
      ))}

      <Block id="confusing" title="易混点对比表">
        <div className="grid gap-5">
          {module.confusingTables.map((table) => (
            <div key={table.id} className="min-w-0 overflow-hidden rounded-lg border border-line">
              <h3 className="border-b border-line bg-slate-50 px-4 py-3 font-semibold text-ink">{table.title}</h3>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[560px] border-collapse text-left text-sm">
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

      <Block id="high-frequency" title="高频考点总结">
        <div className="grid gap-3 md:grid-cols-2">
          {module.highFrequencyPoints.map((item, index) => (
            <div key={item} className="flex gap-3 rounded-lg border border-line bg-slate-50/70 p-4">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-brand text-sm font-bold text-white">{index + 1}</span>
              <p className="text-sm leading-6 text-muted">{item}</p>
            </div>
          ))}
        </div>
      </Block>

      <Block id="quick-review" title="考前速背清单">
        <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
          <Panel title="骨学总复习速背清单">
            <ul className="grid gap-2 text-sm leading-6 text-muted">
              {module.quickReview.map((item) => <li key={item}>• {item}</li>)}
            </ul>
          </Panel>
          <Panel title="考前 30 分钟速记版">
            <ul className="grid gap-2 text-sm leading-6 text-muted">
              {module.examSprint.map((item) => <li key={item}>• {item}</li>)}
            </ul>
          </Panel>
        </div>
      </Block>

      <Block id="quiz-bank" title="骨学自测题库">
        <div className="mb-5 grid gap-2 text-sm sm:grid-cols-4">
          <Stat value={stats.choice} label="选择题" />
          <Stat value={stats.blank} label="填空题" />
          <Stat value={stats.judge} label="判断题" />
          <Stat value={stats.short} label="简答题" />
        </div>
        <div className="grid gap-6">
          {module.chapters.map((chapter) => (
            <div key={`${chapter.id}-quiz`} className="rounded-lg border border-line bg-slate-50/70 p-4">
              <h3 className="text-lg font-bold text-ink">{chapter.title}</h3>
              <div className="mt-4 grid gap-4">
                {(["single_choice", "fill_blank", "true_false", "short_answer"] as OsteologyQuestionType[]).map((type) => {
                  const questions = chapter.questions.filter((question) => question.type === type);
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

function Block({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 rounded-lg border border-line bg-white p-5 shadow-sm md:p-6">
      <h2 className="mb-4 text-xl font-bold text-ink">{title}</h2>
      {children}
    </section>
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-line bg-slate-50/70 p-4">
      <h4 className="mb-3 font-semibold text-ink">{title}</h4>
      {children}
    </div>
  );
}

function Stat({ value, label }: { value: number; label: string }) {
  return (
    <div className="rounded-lg border border-line bg-slate-50 px-3 py-2">
      <p className="text-lg font-bold text-ink">{value}</p>
      <p className="text-xs text-muted">{label}</p>
    </div>
  );
}

function ExamPointList({ points }: { points: { term?: string[]; choice?: string[]; blank?: string[]; short?: string[] } }) {
  const rows = [
    ["名词解释", points.term],
    ["选择题", points.choice],
    ["填空题", points.blank],
    ["简答题", points.short],
  ] as const;

  return (
    <div className="grid gap-2 text-sm leading-6 text-muted">
      {rows.filter(([, items]) => items?.length).map(([label, items]) => (
        <div key={label}>
          <span className="font-semibold text-ink">{label}：</span>
          <span>{items?.join("；")}</span>
        </div>
      ))}
    </div>
  );
}

function QuestionCard({ question, index, open, onToggle }: { question: OsteologyQuestion; index: number; open: boolean; onToggle: () => void }) {
  return (
    <article className="rounded-lg border border-line p-4">
      <h5 className="font-semibold leading-7 text-ink">{index + 1}. {question.question}</h5>
      {question.options?.length ? (
        <div className="mt-3 grid gap-2">
          {question.options.map((option, optionIndex) => (
            <div key={option} className="rounded-md border border-line bg-slate-50 px-3 py-2 text-sm text-muted">
              {String.fromCharCode(65 + optionIndex)}. {option}
            </div>
          ))}
        </div>
      ) : null}
      <button className="mt-3 rounded-md border border-line px-3 py-2 text-sm font-semibold hover:bg-slate-50" onClick={onToggle}>
        {open ? "收起答案" : "查看答案与解析"}
      </button>
      {open ? (
        <div className="mt-3 rounded-md bg-emerald-50 p-4 text-sm leading-6 text-brand">
          <p>答案：{typeof question.answer === "boolean" ? (question.answer ? "正确" : "错误") : question.answer}</p>
          <p className="mt-1">解析：{question.explanation}</p>
        </div>
      ) : null}
    </article>
  );
}
