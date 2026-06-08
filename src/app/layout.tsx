import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { AuthProvider } from "@/lib/supabase/auth-context";

export const metadata: Metadata = {
  title: "解剖学统一复习库",
  description: "按统一模板整理人体解剖学各章节：框架、必背结构、易错反向、易混对比、考前速背和自测题。",
};

const navItems = [
  { href: "/", label: "首页" },
  { href: "/library", label: "知识库" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <AuthProvider>
          <header className="sticky top-0 z-40 border-b border-line bg-white/92 backdrop-blur-xl">
            <div className="product-shell flex min-h-16 flex-wrap items-center justify-between gap-3 py-3">
              <Link href="/" className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand text-sm font-bold text-white shadow-sm">
                  解
                </span>
                <span className="font-semibold text-ink">解剖学统一复习库</span>
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

              <Link href="/library" className="product-button-primary hidden px-4 py-2.5 sm:inline-flex">
                查看章节
              </Link>
            </div>
          </header>

          <main>{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
