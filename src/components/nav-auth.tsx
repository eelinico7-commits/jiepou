"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/lib/supabase/auth-context";

export function NavAuth() {
  const { user, loading, signOut } = useAuth();
  const router = useRouter();

  if (loading) {
    return <span className="rounded-md px-3 py-2 text-sm text-muted">加载中</span>;
  }

  if (user) {
    return (
      <div className="flex flex-wrap items-center gap-1">
        <span className="max-w-28 truncate px-2 text-sm text-muted" title={user.email ?? ""}>
          {user.email ?? "已登录"}
        </span>
        <button
          className="rounded-md px-3 py-2 text-sm font-medium text-muted transition hover:bg-slate-50 hover:text-ink"
          onClick={async () => {
            await signOut();
            router.push("/");
          }}
        >
          退出
        </button>
      </div>
    );
  }

  return (
    <Link className="rounded-md bg-brand px-3 py-2 text-sm font-semibold text-white transition hover:bg-emerald-800" href="/login">
      登录
    </Link>
  );
}
