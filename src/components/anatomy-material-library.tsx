"use client";

import { useMemo, useState } from "react";
import { wordMaterials, type WordMaterial, type WordMaterialBlock } from "@/data/anatomy/wordMaterials";

export function AnatomyMaterialLibrary() {
  const [activeId, setActiveId] = useState(wordMaterials[0]?.id ?? "");
  const [search, setSearch] = useState("");

  const activeMaterial = wordMaterials.find((item) => item.id === activeId) ?? wordMaterials[0];
  const keyword = search.trim().toLowerCase();

  const visibleBlocks = useMemo(() => {
    if (!activeMaterial) return [];
    if (!keyword) return activeMaterial.blocks;

    return activeMaterial.blocks.filter((block) => {
      if (block.kind === "table") {
        return block.rows.flat().join(" ").toLowerCase().includes(keyword);
      }
      return block.text.toLowerCase().includes(keyword);
    });
  }, [activeMaterial, keyword]);

  if (!activeMaterial) {
    return null;
  }

  return (
    <div className="grid gap-6">
      <section className="product-card p-4 md:p-6">
        <div className="flex flex-wrap gap-2">
          {wordMaterials.map((material) => (
            <button
              key={material.id}
              type="button"
              className={`focus-ring rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                activeMaterial.id === material.id
                  ? "bg-brand text-white"
                  : "border border-line bg-white text-muted hover:bg-slate-50 hover:text-ink"
              }`}
              onClick={() => {
                setActiveId(material.id);
                setSearch("");
              }}
            >
              {material.shortTitle}
            </button>
          ))}
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_18rem]">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-2xl font-bold text-ink">{activeMaterial.title}</h2>
              <span
                className={`rounded-lg px-2.5 py-1 text-xs font-semibold ${
                  activeMaterial.status === "已导入"
                    ? "bg-emerald-50 text-emerald-700"
                    : "bg-amber-50 text-amber-700"
                }`}
              >
                {activeMaterial.status}
              </span>
            </div>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
              {activeMaterial.summary}
            </p>
          </div>

          <div className="rounded-xl border border-line bg-slate-50 px-4 py-3 text-sm leading-6 text-muted">
            <p className="font-semibold text-ink">来源文件</p>
            <p className="mt-1 break-all">{activeMaterial.sourceFile}</p>
            <p className="mt-3">
              共 <span className="font-semibold text-ink">{activeMaterial.blocks.length}</span> 条内容块
            </p>
          </div>
        </div>

        <label className="mt-5 grid gap-2">
          <span className="text-sm font-semibold text-ink">搜索资料</span>
          <input
            className="field w-full"
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="搜题干、答案、章节、关键词"
          />
        </label>
      </section>

      {activeMaterial.pdfUrl ? (
        <section className="product-card overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-4 py-3 md:px-5">
            <div>
              <h2 className="font-bold text-ink">PDF 预览</h2>
              <p className="mt-1 text-xs text-muted">如果浏览器不显示预览，可以新窗口打开。</p>
            </div>
            <a
              className="product-button-secondary px-4 py-2.5"
              href={activeMaterial.pdfUrl}
              target="_blank"
              rel="noreferrer"
            >
              打开 PDF
            </a>
          </div>
          <iframe
            className="h-[76vh] min-h-[520px] w-full bg-slate-100"
            src={activeMaterial.pdfUrl}
            title={`${activeMaterial.title} PDF`}
          />
        </section>
      ) : null}

      <section className="grid gap-3">
        <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-muted">
          <p>
            当前显示 <span className="font-semibold text-ink">{visibleBlocks.length}</span> 条
          </p>
          {keyword ? <button type="button" className="font-semibold text-brand" onClick={() => setSearch("")}>清空搜索</button> : null}
        </div>

        {visibleBlocks.map((block, index) => (
          <MaterialBlockView key={`${activeMaterial.id}-${index}`} block={block} index={index} />
        ))}

        {visibleBlocks.length === 0 ? (
          <div className="product-card p-8 text-center">
            <h2 className="text-lg font-semibold text-ink">没有匹配内容</h2>
            <p className="mt-2 text-sm text-muted">换一个关键词，或清空搜索后查看全文。</p>
          </div>
        ) : null}
      </section>
    </div>
  );
}

function MaterialBlockView({ block, index }: { block: WordMaterialBlock; index: number }) {
  if (block.kind === "heading") {
    return (
      <h2 className="scroll-mt-24 rounded-lg bg-brand-soft px-4 py-3 text-xl font-bold text-ink">
        {block.text}
      </h2>
    );
  }

  if (block.kind === "table") {
    return (
      <div className="product-card overflow-x-auto p-4">
        <table className="w-full min-w-[680px] border-collapse text-left text-sm">
          <tbody>
            {block.rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-b border-line last:border-0">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="px-3 py-2.5 align-top leading-6 text-muted">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <article className="rounded-lg border border-line bg-white px-4 py-3 shadow-sm">
      <p className="text-xs font-semibold text-brand">#{index + 1}</p>
      <p className="mt-1 whitespace-pre-wrap break-words text-sm leading-7 text-ink">{block.text}</p>
    </article>
  );
}
