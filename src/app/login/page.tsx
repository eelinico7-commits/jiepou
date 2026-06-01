"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/supabase/auth-context";

export default function LoginPage() {
  const router = useRouter();
  const { signIn, signUp } = useAuth();
  const [mode, setMode] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  async function submit(event: FormEvent) {
    event.preventDefault();
    setError("");
    setSuccess("");
    if (!email.trim()) {
      setError("请填写邮箱。");
      return;
    }
    if (!password.trim()) {
      setError("请填写密码。");
      return;
    }
    if (mode === "register" && password.length < 6) {
      setError("密码至少 6 位。");
      return;
    }
    setLoading(true);
    try {
      if (mode === "register") {
        const { error: err } = await signUp(email.trim(), password);
        if (err) {
          setError(err);
        } else {
          setSuccess("注册成功！请查看邮箱确认。如果未收到确认邮件，请检查垃圾邮件箱。你也可以尝试直接登录。");
          setMode("login");
        }
      } else {
        const { error: err } = await signIn(email.trim(), password);
        if (err) {
          setError(err);
        } else {
          router.push("/library");
        }
      }
    } catch {
      setError("操作失败，请稍后重试。");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="mx-auto max-w-md">
      <div className="rounded border border-line bg-white p-6 shadow-sm md:p-8">
        <h1 className="text-2xl font-bold">{mode === "login" ? "登录" : "注册"}</h1>
        <p className="mt-2 text-sm text-muted">
          {mode === "login" ? "登录后可上传章节、保存学习进度。" : "注册账号，开始同步学习数据。"}
        </p>

        <form onSubmit={submit} className="mt-6 grid gap-4">
          <label className="grid gap-2">
            <span className="font-medium">邮箱</span>
            <input
              className="focus-ring rounded border border-line px-4 py-3"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="grid gap-2">
            <span className="font-medium">密码</span>
            <input
              className="focus-ring rounded border border-line px-4 py-3"
              type="password"
              placeholder={mode === "register" ? "至少 6 位" : "输入密码"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          {error ? (
            <div className="rounded border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          ) : null}
          {success ? (
            <div className="rounded border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-brand">
              {success}
            </div>
          ) : null}

          <button
            disabled={loading}
            className="w-full rounded bg-brand px-5 py-3 text-base font-semibold text-white shadow-sm disabled:cursor-not-allowed disabled:bg-slate-400"
          >
            {loading
              ? "处理中..."
              : mode === "login"
                ? "登录"
                : "注册"}
          </button>
        </form>

        <div className="mt-4 text-center text-sm text-muted">
          {mode === "login" ? (
            <span>
              还没有账号？{" "}
              <button className="font-medium text-brand underline" onClick={() => { setMode("register"); setError(""); setSuccess(""); }}>
                注册
              </button>
            </span>
          ) : (
            <span>
              已有账号？{" "}
              <button className="font-medium text-brand underline" onClick={() => { setMode("login"); setError(""); setSuccess(""); }}>
                登录
              </button>
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
