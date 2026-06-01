"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/lib/supabase/auth-context";

export function NavAuth() {
  const { user, loading, signOut } = useAuth();
  const router = useRouter();

  if (loading) {
    return <span className="rounded border border-line px-3 py-2 text-sm text-muted">加载中...</span>;
  }

  if (user) {
    return (
      <div className="flex flex-wrap items-center gap-2">
        <span className="truncate max-w-32 text-sm text-muted" title={user.email ?? ""}>
          {user.email ?? "已登录"}
        </span>
        <button
          className="rounded border border-line px-3 py-2 text-sm hover:bg-slate-50"
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
    <Link className="rounded bg-brand px-3 py-2 text-sm font-medium text-white" href="/login">
      登录
    </Link>
  );
}
