"use client";

import { useDeferredValue, useEffect, useMemo, useState } from "react";
import {
  anatomyChoiceQuestions,
  type AnatomyChoiceQuestion,
} from "@/data/anatomy/anatomyChoiceQuestions";
import { questionBankChapterStats } from "@/data/anatomy/questionBankStats";

const chapterFilters = [
  "全部",
  "绪论",
  "运动系统",
  "运动系统-骨学",
  "运动系统-关节学",
  "运动系统-肌学",
  "运动系统-待分类",
  "消化系统",
  "呼吸系统",
  "泌尿系统",
  "生殖系统",
  "循环系统",
  "内分泌系统",
  "感觉器",
  "神经系统",
] as const;

const typeFilters = [
  { value: "全部", label: "全部" },
  { value: "single", label: "单选题" },
  { value: "multiple", label: "多选题" },
] as const;

const statusFilters = ["全部", "已完成", "待补答案", "待校对"] as const;
const pageSize = 20;

type ChapterFilter = (typeof chapterFilters)[number];
type TypeFilter = (typeof typeFilters)[number]["value"];
type StatusFilter = (typeof statusFilters)[number];

export function AnatomyQuestionBank() {
  const [chapter, setChapter] = useState<ChapterFilter>("全部");
  const [questionType, setQuestionType] = useState<TypeFilter>("全部");
  const [status, setStatus] = useState<StatusFilter>("全部");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const deferredSearch = useDeferredValue(search.trim().toLowerCase());

  const filteredQuestions = useMemo(() => {
    return anatomyChoiceQuestions.filter((question) => {
      const matchesChapter =
        chapter === "全部" ||
        (chapter === "运动系统"
          ? question.chapter.startsWith("运动系统-")
          : question.chapter === chapter);
      const matchesType =
        questionType === "全部" || question.questionType === questionType;
      const matchesStatus = status === "全部" || question.status === status;
      const searchableText = [
        question.question,
        ...Object.values(question.options),
        question.chapter,
        question.section,
        question.knowledgePoint ?? "",
        question.source,
      ]
        .join(" ")
        .toLowerCase();
      const matchesSearch =
        !deferredSearch || searchableText.includes(deferredSearch);

      return matchesChapter && matchesType && matchesStatus && matchesSearch;
    });
  }, [chapter, deferredSearch, questionType, status]);

  useEffect(() => {
    setPage(1);
  }, [chapter, deferredSearch, questionType, status]);

  const pageCount = Math.max(1, Math.ceil(filteredQuestions.length / pageSize));
  const safePage = Math.min(page, pageCount);
  const visibleQuestions = filteredQuestions.slice(
    (safePage - 1) * pageSize,
    safePage * pageSize
  );

  const stats = useMemo(
    () => ({
      total: filteredQuestions.length,
      single: filteredQuestions.filter(
        (question) => question.questionType === "single"
      ).length,
      multiple: filteredQuestions.filter(
        (question) => question.questionType === "multiple"
      ).length,
      completed: filteredQuestions.filter(
        (question) => question.status === "已完成"
      ).length,
      pending: filteredQuestions.filter(
        (question) => question.status === "待补答案"
      ).length,
      review: filteredQuestions.filter(
        (question) => question.status === "待校对"
      ).length,
      original: filteredQuestions.filter(
        (question) => question.isOriginalQuestion
      ).length,
      aiSupplement: filteredQuestions.filter(
        (question) => question.sourceType === "AI补充题"
      ).length,
    }),
    [filteredQuestions]
  );

  return (
    <div className="grid gap-6">
      <section
        className="grid grid-cols-2 gap-3 md:grid-cols-4 xl:grid-cols-8"
        aria-label="当前筛选结果统计"
      >
        <StatCard label="总题数" value={stats.total} />
        <StatCard label="单选题" value={stats.single} />
        <StatCard label="多选题" value={stats.multiple} />
        <StatCard label="已补答案" value={stats.completed} />
        <StatCard label="待补答案" value={stats.pending} />
        <StatCard label="待校对" value={stats.review} />
        <StatCard label="原始题" value={stats.original} />
        <StatCard label="AI补充题" value={stats.aiSupplement} />
      </section>

      <section className="product-card overflow-hidden p-4 md:p-6">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold text-ink">全库章节统计</h2>
            <p className="mt-1 text-sm leading-6 text-muted">
              独立刷题页只展示原始选择题；下表同时计入各章节学习页的自测题。
            </p>
          </div>
          <div className="flex flex-wrap gap-2 text-xs font-semibold">
            <SourcePill label="原始题源" />
            <SourcePill label="章节练习题" />
            <SourcePill label="AI补充题" />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-line text-xs font-semibold text-muted">
                <th className="py-3 pr-4">章节</th>
                <th className="px-3 py-3 text-right">单选</th>
                <th className="px-3 py-3 text-right">多选</th>
                <th className="px-3 py-3 text-right">判断</th>
                <th className="px-3 py-3 text-right">填空</th>
                <th className="px-3 py-3 text-right">简答</th>
                <th className="px-3 py-3 text-right">总数</th>
                <th className="py-3 pl-4">来源类型</th>
              </tr>
            </thead>
            <tbody>
              {questionBankChapterStats.map((item) => (
                <tr key={item.chapter} className="border-b border-line/70 last:border-0">
                  <td className="py-3 pr-4 font-semibold text-ink">{item.chapter}</td>
                  <CountCell value={item.single} />
                  <CountCell value={item.multiple} />
                  <CountCell value={item.trueFalse} />
                  <CountCell value={item.fillBlank} />
                  <CountCell value={item.shortAnswer} />
                  <CountCell value={item.total} strong />
                  <td className="py-3 pl-4 text-xs leading-5 text-muted">
                    {formatSourceTypes(item.sourceTypes)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="product-card grid gap-5 p-4 md:p-6">
        <label className="grid gap-2">
          <span className="text-sm font-semibold text-ink">搜索题库</span>
          <input
            className="field w-full"
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="搜索题干、选项、章节或小节"
          />
        </label>

        <FilterGroup label="章节筛选">
          {chapterFilters.map((item) => (
            <FilterButton
              key={item}
              active={chapter === item}
              onClick={() => setChapter(item)}
            >
              {item}
            </FilterButton>
          ))}
        </FilterGroup>

        <div className="grid gap-5 lg:grid-cols-2">
          <FilterGroup label="题型筛选">
            {typeFilters.map((item) => (
              <FilterButton
                key={item.value}
                active={questionType === item.value}
                onClick={() => setQuestionType(item.value)}
              >
                {item.label}
              </FilterButton>
            ))}
          </FilterGroup>

          <FilterGroup label="状态筛选">
            {statusFilters.map((item) => (
              <FilterButton
                key={item}
                active={status === item}
                onClick={() => setStatus(item)}
              >
                {item}
              </FilterButton>
            ))}
          </FilterGroup>
        </div>
      </section>

      <section className="grid gap-4" aria-live="polite">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-muted">
            当前找到 <strong className="text-ink">{filteredQuestions.length}</strong>{" "}
            道题
          </p>
          {filteredQuestions.length > 0 ? (
            <p className="text-sm text-muted">
              第 {safePage} / {pageCount} 页
            </p>
          ) : null}
        </div>

        {visibleQuestions.map((question, index) => (
          <QuestionCard
            key={question.id}
            question={question}
            displayNumber={(safePage - 1) * pageSize + index + 1}
          />
        ))}

        {filteredQuestions.length === 0 ? (
          <div className="product-card p-8 text-center">
            <h2 className="text-lg font-semibold text-ink">没有匹配的题目</h2>
            <p className="mt-2 text-sm text-muted">
              尝试清空关键词，或调整章节、题型和状态筛选。
            </p>
          </div>
        ) : null}
      </section>

      {pageCount > 1 ? (
        <nav
          className="flex items-center justify-center gap-3"
          aria-label="题库分页"
        >
          <button
            className="product-button-secondary px-4 py-2.5 disabled:cursor-not-allowed"
            type="button"
            disabled={safePage === 1}
            onClick={() => setPage((current) => Math.max(1, current - 1))}
          >
            上一页
          </button>
          <span className="text-sm font-medium text-muted">
            {safePage} / {pageCount}
          </span>
          <button
            className="product-button-secondary px-4 py-2.5 disabled:cursor-not-allowed"
            type="button"
            disabled={safePage === pageCount}
            onClick={() =>
              setPage((current) => Math.min(pageCount, current + 1))
            }
          >
            下一页
          </button>
        </nav>
      ) : null}
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <article className="rounded-2xl bg-white p-4 shadow-[0_12px_34px_rgba(36,52,48,0.06)]">
      <p className="text-2xl font-bold tabular-nums text-ink">{value}</p>
      <p className="mt-1 text-xs font-semibold text-muted">{label}</p>
    </article>
  );
}

function FilterGroup({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <fieldset className="grid gap-2">
      <legend className="text-sm font-semibold text-ink">{label}</legend>
      <div className="flex flex-wrap gap-2">{children}</div>
    </fieldset>
  );
}

function FilterButton({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      className={`focus-ring rounded-xl px-3 py-2 text-sm font-medium transition ${
        active
          ? "bg-brand text-white shadow-sm"
          : "border border-line bg-white text-muted hover:border-emerald-200 hover:bg-brand-soft hover:text-brand"
      }`}
      type="button"
      aria-pressed={active}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function QuestionCard({
  question,
  displayNumber,
}: {
  question: AnatomyChoiceQuestion;
  displayNumber: number;
}) {
  const answer = Array.isArray(question.answer)
    ? question.answer.join("、")
    : question.answer;

  return (
    <article className="product-card p-5 md:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold text-brand">
            第 {displayNumber} 题 · {question.id}
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <Tag>{question.chapter}</Tag>
            <Tag>{question.section}</Tag>
            {question.knowledgePoint &&
            question.knowledgePoint !== question.section ? (
              <Tag>{question.knowledgePoint}</Tag>
            ) : null}
            <Tag tone="type">
              {question.questionType === "single" ? "单选题" : "多选题"}
            </Tag>
            <Tag tone={question.sourceType === "AI补充题" ? "review" : "source"}>
              {question.sourceType}
            </Tag>
          </div>
        </div>
        <StatusTag status={question.status} />
      </div>

      <h2 className="mt-5 text-lg font-semibold leading-8 text-ink">
        {question.question}
      </h2>

      <ol className="mt-4 grid gap-2.5">
        {Object.entries(question.options).map(([key, option]) => (
          <li
            key={key}
            className="grid grid-cols-[2rem_1fr] gap-3 rounded-xl bg-slate-50 px-3 py-3 text-sm leading-6 text-ink"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white font-semibold text-brand shadow-sm">
              {key}
            </span>
            <span className="self-center">{option}</span>
          </li>
        ))}
      </ol>

      <details className="mt-5 rounded-xl border border-line bg-brand-soft/60">
        <summary className="focus-ring cursor-pointer list-none rounded-xl px-4 py-3 text-sm font-semibold text-brand">
          查看答案与解析
        </summary>
        <div className="grid gap-3 border-t border-emerald-100 px-4 py-4 text-sm leading-7">
          <p>
            <span className="font-semibold text-ink">答案：</span>
            <span className="text-muted">{answer || "答案待补充。"}</span>
          </p>
          <p>
            <span className="font-semibold text-ink">解析：</span>
            <span className="whitespace-pre-line text-muted">
              {question.explanation || "解析待补充。"}
            </span>
          </p>
        </div>
      </details>

      <p className="mt-4 break-all text-xs leading-5 text-muted">
        来源：{question.source}
        {question.isOriginalQuestion ? "（原始题）" : "（补充练习题）"}
      </p>
    </article>
  );
}

function Tag({
  children,
  tone = "default",
}: {
  children: React.ReactNode;
  tone?: "default" | "type" | "source" | "review";
}) {
  return (
    <span
      className={`rounded-lg px-2.5 py-1 text-xs font-semibold ${
        tone === "type"
          ? "bg-emerald-50 text-brand"
          : tone === "source"
            ? "bg-sky-50 text-sky-700"
            : tone === "review"
              ? "bg-amber-50 text-amber-700"
          : "bg-slate-100 text-slate-600"
      }`}
    >
      {children}
    </span>
  );
}

function SourcePill({ label }: { label: string }) {
  return (
    <span className="rounded-lg border border-line bg-white px-2.5 py-1 text-muted">
      {label}
    </span>
  );
}

function CountCell({ value, strong = false }: { value: number; strong?: boolean }) {
  return (
    <td
      className={`px-3 py-3 text-right tabular-nums ${
        strong ? "font-bold text-ink" : "text-muted"
      }`}
    >
      {value}
    </td>
  );
}

function formatSourceTypes(
  sourceTypes: (typeof questionBankChapterStats)[number]["sourceTypes"]
) {
  return Object.entries(sourceTypes)
    .filter(([, count]) => Boolean(count))
    .map(([sourceType, count]) => `${sourceType} ${count}`)
    .join("；");
}

function StatusTag({
  status,
}: {
  status: AnatomyChoiceQuestion["status"];
}) {
  const className =
    status === "已完成"
      ? "bg-emerald-50 text-emerald-700"
      : status === "待校对"
        ? "bg-amber-50 text-amber-700"
        : "bg-slate-100 text-slate-600";

  return (
    <span className={`rounded-lg px-3 py-1.5 text-xs font-semibold ${className}`}>
      {status}
    </span>
  );
}
