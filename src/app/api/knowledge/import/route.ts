import { NextRequest, NextResponse } from "next/server";
import { generateKnowledgeImport } from "@/lib/ai";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as { title?: string; sourceText?: string };
    const title = (body.title || "课件/笔记导入").trim();
    const sourceText = (body.sourceText || "").trim();

    if (!sourceText) {
      return NextResponse.json({ error: "请先上传或粘贴需要整理的资料。" }, { status: 400 });
    }

    const result = await generateKnowledgeImport(title, sourceText);
    return NextResponse.json(result);
  } catch (error) {
    const message = error instanceof Error ? error.message : "AI 整理失败，请稍后重试。";
    const status = message.includes("DEEPSEEK_API_KEY") ? 400 : 502;
    return NextResponse.json({ error: message }, { status });
  }
}
