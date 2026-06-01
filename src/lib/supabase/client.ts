import { createClient as createSupabaseClient } from "@supabase/supabase-js";

/**
 * 注意：Next.js 的 NEXT_PUBLIC_* 环境变量在 build 时通过静态字符串替换注入。
 * 必须用 process.env.NEXT_PUBLIC_XXX 直接访问，不能用动态 key（如 process.env[name]）。
 */
export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    const missing: string[] = [];
    if (!supabaseUrl) missing.push("NEXT_PUBLIC_SUPABASE_URL");
    if (!supabaseAnonKey) missing.push("NEXT_PUBLIC_SUPABASE_ANON_KEY");
    throw new Error(
      `Supabase 环境变量未配置：${missing.join("、")}。` +
      "请在 .env.local 中填入真实值（本地开发），" +
      "或在 Vercel 项目 Settings → Environment Variables 中添加并重新部署（线上）。"
    );
  }

  return createSupabaseClient(supabaseUrl, supabaseAnonKey);
}
