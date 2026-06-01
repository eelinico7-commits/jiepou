"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { CardStatus } from "@/lib/types";
import { getLocalReviewCards, setLocalCardProgress } from "@/lib/client-storage";

type ReviewCard = {
  cardId: string;
  chapterId: string;
  chapterTitle: string;
  front: string;
  back: string;
  tag: string;
  status: CardStatus;
};

const labels: Record<CardStatus, string> = {
  mastered: "掌握",
  uncertain: "模糊",
  unknown: "不会"
};

export default function ReviewPage() {
  const [cards, setCards] = useState<ReviewCard[]>([]);
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function load() {
    setLoading(true);
    setError("");
    try {
      setCards(getLocalReviewCards());
    } catch (err) {
      setError(err instanceof Error ? err.message : "今日复习任务加载失败。");
    } finally {
      setLoading(false);
    }
  }

  async function mark(card: ReviewCard, status: CardStatus) {
    setCards((items) => items.map((item) => (item.cardId === card.cardId ? { ...item, status } : item)));
    try {
      setLocalCardProgress(card.chapterId, card.cardId, status);
    } catch (err) {
      setError(err instanceof Error ? err.message : "保存复习状态失败。");
    }
  }

  useEffect(() => {
    void load();
  }, []);

  return (
    <section className="grid gap-4">
      <div>
        <h1 className="text-2xl font-bold">今日复习</h1>
        <p className="mt-1 text-sm text-muted">优先展示“不会”和“模糊”的卡片，并少量混入已掌握卡片。</p>
      </div>
      {error ? <div className="rounded border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div> : null}
      {loading ? <div className="rounded border border-line bg-white p-5">正在加载...</div> : null}
      {!loading && cards.length === 0 ? (
        <div className="rounded border border-line bg-white p-5">
          还没有可复习卡片。<Link className="text-brand underline" href="/import">先导入章节</Link>
        </div>
      ) : null}
      <div className="grid gap-3">
        {cards.map((card) => (
          <article key={card.cardId} className="rounded border border-line bg-white p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs text-muted">{card.chapterTitle} · {card.tag || "未分类"}</p>
                <h2 className="mt-2 font-semibold">{card.front}</h2>
              </div>
              <span className="rounded bg-slate-100 px-3 py-1 text-sm">{labels[card.status]}</span>
            </div>
            <button className="mt-3 rounded border border-line px-3 py-2 text-sm hover:bg-slate-50" onClick={() => setOpen((items) => ({ ...items, [card.cardId]: !items[card.cardId] }))}>
              {open[card.cardId] ? "收起答案" : "展开答案"}
            </button>
            {open[card.cardId] ? <p className="mt-3 rounded bg-slate-50 p-4 leading-7 text-muted">{card.back}</p> : null}
            <div className="mt-3 flex flex-wrap gap-2">
              {(["mastered", "uncertain", "unknown"] as CardStatus[]).map((status) => (
                <button key={status} className="rounded border border-line px-3 py-2 text-sm hover:bg-slate-50" onClick={() => void mark(card, status)}>
                  标记{labels[status]}
                </button>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
