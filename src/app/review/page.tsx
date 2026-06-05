"use client";

import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import type { CardStatus, ReviewCard } from "@/lib/types";
import { useAuth } from "@/lib/supabase/auth-context";
import { fetchAllChapters, fetchFlashcardProgress, upsertCardProgress } from "@/lib/supabase/data";

const labels: Record<CardStatus, string> = {
  mastered: "掌握",
  uncertain: "模糊",
  unknown: "不会",
};

export default function ReviewPage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [cards, setCards] = useState<ReviewCard[]>([]);
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    if (!user) return;
    setLoading(true);
    setError("");
    try {
      const [chapterData, progressData] = await Promise.all([fetchAllChapters(), fetchFlashcardProgress(user.id)]);
      const progressMap = new Map(progressData.map((item) => [`${item.chapter_id}:${item.card_id}`, item.status]));

      const allCards: ReviewCard[] = chapterData.flatMap((chapter) =>
        (chapter.generated_content?.flashcards ?? []).map((card, index) => {
          const cardId = `${chapter.id}-card-${index}`;
          return {
            card_id: cardId,
            chapter_id: chapter.id,
            chapter_title: chapter.chapter_title,
            front: card.front,
            back: card.back,
            tag: card.tag || "未分类",
            status: progressMap.get(`${chapter.id}:${cardId}`) || ("unknown" as CardStatus),
          };
        })
      );

      const priority: Record<CardStatus, number> = { unknown: 0, uncertain: 1, mastered: 2 };
      const mastered = allCards.filter((card) => card.status === "mastered").slice(0, 5);
      const reviewed = [...allCards.filter((card) => card.status !== "mastered"), ...mastered]
        .sort((a, b) => priority[a.status] - priority[b.status])
        .slice(0, 30);

      setCards(reviewed);
    } catch (err) {
      setError(err instanceof Error ? err.message : "今日复习任务加载失败。");
    } finally {
      setLoading(false);
    }
  }, [user]);

  async function mark(card: ReviewCard, status: CardStatus) {
    if (!user) return;
    setCards((items) => items.map((item) => (item.card_id === card.card_id ? { ...item, status } : item)));
    try {
      await upsertCardProgress(user.id, card.chapter_id, card.card_id, status);
    } catch (err) {
      setError(err instanceof Error ? err.message : "保存复习状态失败。");
    }
  }

  useEffect(() => {
    if (authLoading) return;
    if (!user) {
      router.push("/login");
      return;
    }
    void load();
  }, [user, authLoading, load, router]);

  if (authLoading) {
    return <div className="rounded-lg border border-line bg-white p-5 shadow-sm">正在加载...</div>;
  }

  return (
    <section className="grid gap-5">
      <div>
        <p className="text-sm font-semibold text-brand">今日复习</p>
        <h1 className="mt-1 text-2xl font-bold text-ink">优先处理薄弱卡片</h1>
        <p className="mt-1 text-sm text-muted">优先展示“不会”和“模糊”的卡片，并少量混入已掌握卡片。</p>
      </div>
      {error ? <div className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div> : null}
      {loading ? <div className="rounded-lg border border-line bg-white p-5 shadow-sm">正在加载...</div> : null}
      {!loading && cards.length === 0 ? (
        <div className="rounded-lg border border-dashed border-line bg-white p-8 text-center shadow-sm">
          <h2 className="text-lg font-semibold text-ink">今天还没有可复习卡片</h2>
          <p className="mt-2 text-sm text-muted">导入章节并标记卡片后，这里会优先显示薄弱内容。</p>
          <Link className="mt-5 inline-block rounded-md bg-brand px-5 py-3 font-semibold text-white" href="/import">
            先导入章节
          </Link>
        </div>
      ) : null}
      <div className="grid gap-4">
        {cards.map((card) => (
          <article key={card.card_id} className="rounded-lg border border-line bg-white p-5 shadow-sm">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs text-muted">{card.chapter_title} · {card.tag || "未分类"}</p>
                <h2 className="mt-2 font-semibold text-ink">{card.front}</h2>
              </div>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium">{labels[card.status]}</span>
            </div>
            <button className="mt-4 rounded-md border border-line px-4 py-2 text-sm font-semibold hover:bg-slate-50" onClick={() => setOpen((items) => ({ ...items, [card.card_id]: !items[card.card_id] }))}>
              {open[card.card_id] ? "收起答案" : "展开答案"}
            </button>
            {open[card.card_id] ? <p className="mt-3 rounded-md bg-slate-50 p-4 leading-7 text-muted">{card.back}</p> : null}
            <div className="mt-3 flex flex-wrap gap-2">
              {(["mastered", "uncertain", "unknown"] as CardStatus[]).map((status) => (
                <button key={status} className="rounded-md border border-line px-3 py-2 text-sm font-medium hover:bg-slate-50" onClick={() => void mark(card, status)}>
                  标记为{labels[status]}
                </button>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
