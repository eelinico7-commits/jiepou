import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { AuthProvider } from "@/lib/supabase/auth-context";
import { NavAuth } from "@/components/nav-auth";

export const metadata: Metadata = {
  title: "MedMemo 人体解剖学 AI 精准背诵系统",
  description: "把人体解剖学教材变成重点、卡片、题目和复习计划"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <AuthProvider>
          <header className="border-b border-line bg-white">
            <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4">
              <Link href="/" className="text-lg font-semibold text-brand">
                MedMemo
              </Link>
              <nav className="flex flex-wrap items-center gap-2 text-sm">
                <Link className="rounded border border-line px-3 py-2 hover:bg-slate-50" href="/import">
                  导入
                </Link>
                <Link className="rounded border border-line px-3 py-2 hover:bg-slate-50" href="/library">
                  知识库
                </Link>
                <Link className="rounded border border-line px-3 py-2 hover:bg-slate-50" href="/review">
                  今日复习
                </Link>
                <Link className="rounded border border-line px-3 py-2 hover:bg-slate-50" href="/mistakes">
                  错题本
                </Link>
                <NavAuth />
              </nav>
            </div>
          </header>
          <main className="mx-auto max-w-6xl px-4 py-6">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
