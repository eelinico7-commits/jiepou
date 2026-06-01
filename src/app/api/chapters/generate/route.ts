import { NextRequest, NextResponse } from "next/server";
import { generateAnatomyContent } from "@/lib/ai";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as { courseName?: string; chapterTitle?: string; sourceText?: string };
    const courseName = (body.courseName || "人体解剖学").trim();
    const chapterTitle = (body.chapterTitle || "").trim();
    const sourceText = (body.sourceText || "").trim();

    if (!chapterTitle) {
      return NextResponse.json({ error: "请填写章节名称。" }, { status: 400 });
    }
    if (!sourceText) {
      return NextResponse.json({ error: "请粘贴教材原文或课堂笔记文本。" }, { status: 400 });
    }

    const generatedContent = await generateAnatomyContent(chapterTitle, courseName, sourceText);
    return NextResponse.json({
      generatedContent: { ...generatedContent, chapterTitle: generatedContent.chapterTitle || chapterTitle }
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "AI 请求失败，请稍后重试。";
    const status = message.includes("DEEPSEEK_API_KEY") ? 400 : 502;
    return NextResponse.json({ error: message }, { status });
  }
}
