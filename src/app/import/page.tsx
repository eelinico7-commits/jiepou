"use client";

import { ChangeEvent, FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/supabase/auth-context";
import { insertChapter } from "@/lib/supabase/data";
import type { GeneratedContent, StructuredKnowledgePoint } from "@/lib/types";

type ImportMode = "text" | "file" | "table";
type EditablePoint = StructuredKnowledgePoint & { localId: string };

const sampleText =
  "骨由骨质、骨膜和骨髓构成。骨膜含有丰富的血管和神经，对骨的营养、生长和修复有重要作用。骨髓位于骨髓腔和骨松质间隙内，可分为红骨髓和黄骨髓。";

const supportedTextExtensions = [".txt"];
const supportedTableExtensions = [".csv", ".xlsx", ".xls"];
const placeholderExtensions = [".pdf", ".docx", ".pptx"];

function createLocalId() {
  return `point_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

function getFileExtension(fileName: string) {
  const dot = fileName.lastIndexOf(".");
  return dot >= 0 ? fileName.slice(dot).toLowerCase() : "";
}

function formatRowsAsText(rows: Record<string, unknown>[]) {
  if (rows.length === 0) return "";
  return rows
    .map((row, index) => {
      const cells = Object.entries(row)
        .filter(([, value]) => String(value ?? "").trim())
        .map(([key, value]) => `${key}: ${String(value).trim()}`)
        .join("；");
      return cells ? `第 ${index + 1} 行：${cells}` : "";
    })
    .filter(Boolean)
    .join("\n");
}

function pointsToGeneratedContent(title: string, points: StructuredKnowledgePoint[]): GeneratedContent {
  const grouped = points.reduce<Record<string, string[]>>((acc, point) => {
    const group = point.systemChapter || "未分类";
    acc[group] = acc[group] || [];
    acc[group].push(point.name);
    return acc;
  }, {});

  return {
    chapterTitle: title,
    summary: `本批资料共整理出 ${points.length} 个解剖学复习知识点，已按系统/章节归类，并生成考试重点、易混点、记忆方法和自测题。`,
    knowledgeTree: Object.entries(grouped).map(([systemChapter, names]) => ({
      title: systemChapter,
      children: names,
    })),
    keyPoints: points.map((point) => ({
      title: point.name,
      explanation: `${point.plainExplanation}\n\n易混点：${point.confusingPoints}\n\n记忆方法：${point.memoryMethod}`,
      examHint: point.examFocus,
    })),
    terms: points.map((point) => ({
      term: point.name,
      definition: point.plainExplanation,
      memoryTip: point.memoryMethod,
    })),
    flashcards: points.flatMap((point) => [
      {
        front: `${point.name} 是什么？`,
        back: point.plainExplanation,
        tag: point.systemChapter,
      },
      {
        front: `${point.name} 的考试重点和易混点是什么？`,
        back: `考试重点：${point.examFocus}\n易混点：${point.confusingPoints}\n标准答案：${point.standardAnswer}`,
        tag: point.systemChapter,
      },
      {
        front: point.shortAnswer.question || `简答：${point.name}`,
        back: point.shortAnswer.answer || point.standardAnswer,
        tag: point.systemChapter,
      },
    ]),
    quiz: points
      .filter((point) => point.multipleChoice.question)
      .map((point) => ({
        question: point.multipleChoice.question,
        options: point.multipleChoice.options.slice(0, 4),
        answer: point.multipleChoice.answer,
        explanation: point.standardAnswer || point.examFocus,
        relatedPoint: point.name,
      })),
    reviewPlan: [
      { day: "第 1 天", task: "通读知识点和通俗解释，标出不会的内容。" },
      { day: "第 2 天", task: "背诵卡片，重点处理易混点。" },
      { day: "第 4 天", task: "完成选择题和简答题自测。" },
      { day: "考前", task: "只复盘错题和标记为“不会/模糊”的卡片。" },
    ],
    knowledgePoints: points,
  };
}

export default function ImportPage() {
  const router = useRouter();
  const { user } = useAuth();
  const [mode, setMode] = useState<ImportMode>("text");
  const [title, setTitle] = useState("正常人体解剖学 第三版复习资料");
  const [sourceText, setSourceText] = useState("");
  const [fileName, setFileName] = useState("");
  const [fileTodo, setFileTodo] = useState("");
  const [points, setPoints] = useState<EditablePoint[]>([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const sourceStats = useMemo(() => {
    const chars = sourceText.trim().length;
    const lines = sourceText.trim() ? sourceText.trim().split(/\r?\n/).length : 0;
    return { chars, lines };
  }, [sourceText]);

  function resetMessages() {
    setError("");
    setSuccess("");
  }

  function fillSample() {
    setMode("text");
    setFileName("");
    setFileTodo("");
    setTitle("骨学总论复习资料");
    setSourceText(sampleText);
    setPoints([]);
    resetMessages();
  }

  async function parseUploadedFile(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    resetMessages();
    setFileTodo("");
    setFileName(file.name);
    setPoints([]);

    const ext = getFileExtension(file.name);
    try {
      if (supportedTextExtensions.includes(ext)) {
        setSourceText(await file.text());
        return;
      }

      if (supportedTableExtensions.includes(ext)) {
        const XLSX = await import("xlsx");
        const buffer = await file.arrayBuffer();
        const workbook = XLSX.read(buffer, { type: "array" });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const rows = XLSX.utils.sheet_to_json<Record<string, unknown>>(sheet, { defval: "" });
        const text = formatRowsAsText(rows);
        setSourceText(text);
        if (!text) setError("表格中没有读取到可整理的文本。");
        return;
      }

      if (placeholderExtensions.includes(ext)) {
        setSourceText("");
        setFileTodo("PDF / DOCX / PPTX 文件入口已保留，完整解析会在后续接入。现在请先复制其中的文字粘贴到文本框。");
        return;
      }

      setError("暂不支持该文件类型。请上传 TXT、CSV、XLSX、XLS，或直接粘贴文本。");
    } catch (err) {
      setError(err instanceof Error ? err.message : "文件解析失败，请换成 TXT / CSV / Excel 或直接粘贴文本。");
    }
  }

  async function generate(event: FormEvent) {
    event.preventDefault();
    resetMessages();
    if (!sourceText.trim()) {
      setError("请先上传或粘贴需要整理的资料。");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/knowledge/import", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, sourceText }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "AI 整理失败。");

      setTitle(data.batchTitle || title);
      setPoints(
        (data.knowledgePoints || []).map((point: StructuredKnowledgePoint) => ({
          ...point,
          localId: createLocalId(),
        }))
      );
      setSuccess("AI 已整理完成。请先预览、编辑或删除，确认后再导入知识库。");
    } catch (err) {
      setError(err instanceof Error ? err.message : "AI 整理失败。");
    } finally {
      setLoading(false);
    }
  }

  function updatePoint(index: number, patch: Partial<EditablePoint>) {
    setPoints((items) => items.map((item, itemIndex) => (itemIndex === index ? { ...item, ...patch } : item)));
  }

  function updateMultipleChoice(index: number, patch: Partial<StructuredKnowledgePoint["multipleChoice"]>) {
    setPoints((items) =>
      items.map((item, itemIndex) =>
        itemIndex === index ? { ...item, multipleChoice: { ...item.multipleChoice, ...patch } } : item
      )
    );
  }

  function updateShortAnswer(index: number, patch: Partial<StructuredKnowledgePoint["shortAnswer"]>) {
    setPoints((items) =>
      items.map((item, itemIndex) =>
        itemIndex === index ? { ...item, shortAnswer: { ...item.shortAnswer, ...patch } } : item
      )
    );
  }

  function deletePoint(index: number) {
    setPoints((items) => items.filter((_, itemIndex) => itemIndex !== index));
  }

  async function confirmImport() {
    resetMessages();
    if (!user) {
      setError("请先登录后确认导入知识库。");
      return;
    }
    if (points.length === 0) {
      setError("当前没有待确认知识点。");
      return;
    }

    setSaving(true);
    try {
      const cleanPoints = points.map(({ localId: _localId, ...point }) => point);
      const generatedContent = pointsToGeneratedContent(title, cleanPoints);
      const result = await insertChapter(
        user.id,
        user.email ?? undefined,
        "正常人体解剖学 第三版",
        title,
        sourceText,
        generatedContent
      );
      router.push(`/chapter/${result.id}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "确认导入失败。");
    } finally {
      setSaving(false);
    }
  }

  return (
    <section className="grid gap-6">
      <div className="surface p-6 md:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="eyebrow">知识库导入</p>
            <h1 className="mt-2 text-2xl font-bold text-ink md:text-3xl">
              上传你的课件/笔记，AI 自动整理成解剖学复习知识库
            </h1>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-muted">
              先把资料批量整理成待确认知识点。你可以快速检查、编辑、删除，再保存到知识库继续复习。
            </p>
          </div>
          <button type="button" className="btn-secondary" onClick={fillSample}>
            填入示例
          </button>
        </div>
      </div>

      <form onSubmit={generate} className="surface overflow-hidden">
        <div className="grid gap-6 p-5 md:p-7">
          <div className="grid gap-4 md:grid-cols-[1fr_1.2fr]">
            <label className="grid gap-2">
              <span className="font-semibold">资料标题</span>
              <input className="field" value={title} onChange={(event) => setTitle(event.target.value)} />
            </label>

            <div className="grid gap-2">
              <span className="font-semibold">导入方式</span>
              <div className="grid gap-2 md:grid-cols-3">
                {[
                  { id: "text", label: "粘贴文本", desc: "课件/笔记" },
                  { id: "file", label: "上传文件", desc: "TXT 可用" },
                  { id: "table", label: "CSV / Excel", desc: "表格批量" },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`rounded-md border px-4 py-3 text-left transition ${
                      mode === item.id ? "border-brand bg-emerald-50 text-brand" : "border-line bg-white hover:bg-slate-50"
                    }`}
                    onClick={() => {
                      setMode(item.id as ImportMode);
                      resetMessages();
                    }}
                  >
                    <span className="block text-sm font-semibold">{item.label}</span>
                    <span className="mt-1 block text-xs text-muted">{item.desc}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {mode !== "text" ? (
            <div className="surface-soft p-4">
              <div className="grid gap-2">
                <span className="font-semibold">{mode === "table" ? "上传 CSV / Excel 表格" : "上传 PDF / DOCX / PPTX / TXT 文件"}</span>
                <input
                  className="field"
                  type="file"
                  accept={mode === "table" ? ".csv,.xlsx,.xls" : ".txt,.pdf,.docx,.pptx"}
                  onChange={parseUploadedFile}
                />
                {fileName ? <p className="text-sm text-muted">已选择：{fileName}</p> : null}
                {fileTodo ? <p className="rounded-md border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">{fileTodo}</p> : null}
              </div>
            </div>
          ) : null}

          <label className="grid gap-2">
            <span className="font-semibold">资料文本</span>
            <textarea
              className="field min-h-72 leading-7"
              placeholder="把老师课件、复习资料或课堂笔记粘贴到这里；也可以先上传 TXT / CSV / Excel 自动填入。"
              value={sourceText}
              onChange={(event) => {
                setSourceText(event.target.value);
                setPoints([]);
              }}
            />
            <span className="text-sm text-muted">当前约 {sourceStats.chars} 字，{sourceStats.lines} 行。</span>
          </label>

          {!user ? (
            <p className="rounded-md border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
              未登录也可以整理预览；确认导入知识库前需要先登录。
            </p>
          ) : null}
          {error ? <p className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p> : null}
          {success ? <p className="rounded-md border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-brand">{success}</p> : null}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line bg-slate-50/70 px-5 py-4 md:px-7">
          <p className="text-sm text-muted">生成结果会先进入待确认，不会直接保存到数据库。</p>
          <button disabled={loading || !sourceText.trim()} className="btn-primary">
            {loading ? "AI 正在整理..." : "AI 整理为待确认知识点"}
          </button>
        </div>
      </form>

      <section className="surface overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line p-5 md:p-7">
          <div>
            <p className="eyebrow">待确认</p>
            <h2 className="mt-1 text-xl font-bold text-ink">AI 生成知识点预览</h2>
            <p className="mt-1 text-sm text-muted">检查重点字段，删掉不需要的内容，再导入知识库。</p>
          </div>
          <button
            type="button"
            disabled={saving || points.length === 0}
            className="btn-primary"
            onClick={() => void confirmImport()}
          >
            {saving ? "正在保存..." : `确认导入 ${points.length} 个知识点`}
          </button>
        </div>

        {points.length === 0 ? (
          <div className="p-10 text-center">
            <h3 className="text-lg font-semibold text-ink">还没有待确认知识点</h3>
            <p className="mt-2 text-sm text-muted">先上传或粘贴资料，再点击 AI 整理。</p>
          </div>
        ) : (
          <div className="grid gap-4 p-5 md:p-7">
            {points.map((point, index) => (
              <article key={point.localId} className="rounded-lg border border-line bg-white p-4 shadow-sm">
                <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold text-brand">{point.systemChapter || "未分类"}</p>
                    <h3 className="mt-1 text-lg font-bold text-ink">{point.name || `知识点 ${index + 1}`}</h3>
                  </div>
                  <button type="button" className="rounded-md px-3 py-2 text-sm font-semibold text-red-700 hover:bg-red-50" onClick={() => deletePoint(index)}>
                    删除
                  </button>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  <Field label="所属系统/章节" value={point.systemChapter} onChange={(value) => updatePoint(index, { systemChapter: value })} />
                  <Field label="知识点名称" value={point.name} onChange={(value) => updatePoint(index, { name: value })} />
                  <Field textarea label="通俗解释" value={point.plainExplanation} onChange={(value) => updatePoint(index, { plainExplanation: value })} />
                  <Field textarea label="考试重点" value={point.examFocus} onChange={(value) => updatePoint(index, { examFocus: value })} />
                  <Field textarea label="易混点" value={point.confusingPoints} onChange={(value) => updatePoint(index, { confusingPoints: value })} />
                  <Field textarea label="记忆方法" value={point.memoryMethod} onChange={(value) => updatePoint(index, { memoryMethod: value })} />
                  <Field textarea label="选择题" value={point.multipleChoice.question} onChange={(value) => updateMultipleChoice(index, { question: value })} />
                  <Field
                    textarea
                    label="选项（每行一个）"
                    value={point.multipleChoice.options.join("\n")}
                    onChange={(value) => updateMultipleChoice(index, { options: value.split(/\r?\n/).filter(Boolean).slice(0, 4) })}
                  />
                  <Field label="答案（A/B/C/D）" value={point.multipleChoice.answer} onChange={(value) => updateMultipleChoice(index, { answer: value.trim().slice(0, 1).toUpperCase() })} />
                  <Field textarea label="简答题" value={point.shortAnswer.question} onChange={(value) => updateShortAnswer(index, { question: value })} />
                  <Field textarea label="简答题答案" value={point.shortAnswer.answer} onChange={(value) => updateShortAnswer(index, { answer: value })} />
                  <Field textarea label="标准答案" value={point.standardAnswer} onChange={(value) => updatePoint(index, { standardAnswer: value })} />
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  textarea = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  textarea?: boolean;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-semibold text-ink">{label}</span>
      {textarea ? (
        <textarea className="field min-h-24 text-sm leading-6" value={value} onChange={(event) => onChange(event.target.value)} />
      ) : (
        <input className="field text-sm" value={value} onChange={(event) => onChange(event.target.value)} />
      )}
    </label>
  );
}
