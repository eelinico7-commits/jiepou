"use client";

import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from "react";
import type { User } from "@supabase/supabase-js";
import { createClient } from "./client";

type AuthState = {
  user: User | null;
  loading: boolean;
  error: string | null;
};

type AuthContextValue = AuthState & {
  signUp: (email: string, password: string) => Promise<{ error: string | null }>;
  signIn: (email: string, password: string) => Promise<{ error: string | null }>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

function getClientOrError(): { client?: ReturnType<typeof createClient>; error?: string } {
  try {
    return { client: createClient() };
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Supabase 客户端初始化失败。" };
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AuthState>({ user: null, loading: true, error: null });

  useEffect(() => {
    const { client, error } = getClientOrError();
    if (error || !client) {
      setState({ user: null, loading: false, error: error ?? "Supabase 客户端初始化失败。" });
      return;
    }

    client.auth.getSession().then(({ data }) => {
      setState({ user: data.session?.user ?? null, loading: false, error: null });
    }).catch(() => {
      setState({ user: null, loading: false, error: "获取登录状态失败，请检查 Supabase 配置。" });
    });

    const { data: listener } = client.auth.onAuthStateChange((_event, session) => {
      setState({ user: session?.user ?? null, loading: false, error: null });
    });
    return () => listener?.subscription.unsubscribe();
  }, []);

  const signUp = useCallback(async (email: string, password: string) => {
    const { client, error: initError } = getClientOrError();
    if (initError || !client) {
      return { error: initError ?? "Supabase 客户端初始化失败。" };
    }
    try {
      const { error } = await client.auth.signUp({ email, password });
      return { error: error ? (error.message || "注册失败，请稍后重试。") : null };
    } catch (err) {
      return { error: err instanceof Error ? err.message : "注册请求失败，请检查网络连接。" };
    }
  }, []);

  const signIn = useCallback(async (email: string, password: string) => {
    const { client, error: initError } = getClientOrError();
    if (initError || !client) {
      return { error: initError ?? "Supabase 客户端初始化失败。" };
    }
    try {
      const { error } = await client.auth.signInWithPassword({ email, password });
      return { error: error ? (error.message || "登录失败，请检查邮箱和密码。") : null };
    } catch (err) {
      return { error: err instanceof Error ? err.message : "登录请求失败，请检查网络连接。" };
    }
  }, []);

  const signOut = useCallback(async () => {
    const { client, error: initError } = getClientOrError();
    if (initError || !client) {
      setState({ user: null, loading: false, error: null });
      return;
    }
    try {
      await client.auth.signOut();
    } catch {
      // ignore signOut errors
    }
    setState({ user: null, loading: false, error: null });
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth 必须在 AuthProvider 内部使用。");
  }
  return context;
}
