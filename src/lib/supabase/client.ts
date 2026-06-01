import { createClient as createSupabaseClient } from "@supabase/supabase-js";

function getEnvVar(name: string): string {
  const value = process.env[name];
  if (!value || value.includes("你的") || value.includes("这里粘贴") || value.includes("我提供的") || value.includes("占位")) {
    throw new Error(
      `环境变量 ${name} 未正确配置。请在 .env.local 中填入真实值，或在 Vercel 环境变量中配置。`
    );
  }
  // 检查是否包含非 Latin-1 字符（会导致 fetch 报错）
  for (let i = 0; i < value.length; i++) {
    if (value.charCodeAt(i) > 255) {
      throw new Error(
        `环境变量 ${name} 包含非法字符（非 Latin-1 编码），请检查并清除中文占位符。`
      );
    }
  }
  return value;
}

export function createClient() {
  const supabaseUrl = getEnvVar("NEXT_PUBLIC_SUPABASE_URL");
  const supabaseAnonKey = getEnvVar("NEXT_PUBLIC_SUPABASE_ANON_KEY");

  return createSupabaseClient(supabaseUrl, supabaseAnonKey);
}
