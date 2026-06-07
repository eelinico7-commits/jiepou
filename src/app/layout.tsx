import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { AuthProvider } from "@/lib/supabase/auth-context";

export const metadata: Metadata = {
  title: "医学考前整理工具 | 解剖学复习知识库",
  description: "上传课件、笔记和复习资料，AI 自动整理成解剖学复习知识库。",
};

const navItems = [
  { href: "/import", label: "导入资料" },
  { href: "/library", label: "知识库" },
  { href: "/review", label: "自测题" },
  { href: "/mistakes", label: "复盘错题" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <AuthProvider>
          <header className="sticky top-0 z-40 border-b border-line bg-white/90 backdrop-blur-xl">
            <div className="product-shell flex min-h-16 flex-wrap items-center justify-between gap-3 py-3">
              <Link href="/" className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand text-sm font-bold text-white shadow-sm">
                  解
                </span>
                <span className="font-semibold text-ink">医学考前整理工具</span>
              </Link>

              <nav className="order-last flex max-w-full items-center gap-1 overflow-x-auto rounded-2xl border border-line bg-[#F7F8FA] p-1 text-sm md:order-none">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="shrink-0 rounded-xl px-3 py-2 font-medium text-muted transition hover:bg-white hover:text-ink hover:shadow-sm"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <Link href="/import" className="product-button-primary hidden px-4 py-2.5 sm:inline-flex">
                开始整理
              </Link>
            </div>
          </header>

          <main>{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
