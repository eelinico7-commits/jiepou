import { createClient as createSupabaseClient } from "@supabase/supabase-js";

/**
 * 创建 Supabase 浏览器客户端。
 *
 * 注意：NEXT_PUBLIC_* 环境变量在 Next.js build 时通过静态字符串替换注入，
 * 必须用 process.env.NEXT_PUBLIC_XXX 直接访问，不能用动态 key。
 */
export function createClient() {
  const supabaseUrl = (process.env.NEXT_PUBLIC_SUPABASE_URL ?? "").trim();
  const supabaseAnonKey = (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "").trim();

  // ---- 校验 ----
  const errors: string[] = [];

  if (!supabaseUrl) {
    errors.push("NEXT_PUBLIC_SUPABASE_URL 未配置（值为空）");
  } else if (!/^[\x00-\x7F]*$/.test(supabaseUrl)) {
    errors.push("NEXT_PUBLIC_SUPABASE_URL 包含非 ASCII 字符，请检查 Vercel 环境变量或 .env.local");
  } else if (!supabaseUrl.startsWith("http")) {
    errors.push("NEXT_PUBLIC_SUPABASE_URL 格式不正确，必须以 http:// 或 https:// 开头");
  }

  if (!supabaseAnonKey) {
    errors.push("NEXT_PUBLIC_SUPABASE_ANON_KEY 未配置（值为空）");
  } else if (!/^[\x00-\x7F]*$/.test(supabaseAnonKey)) {
    errors.push("NEXT_PUBLIC_SUPABASE_ANON_KEY 包含非 ASCII 字符，请检查 Vercel 环境变量或 .env.local");
  }

  if (errors.length > 0) {
    throw new Error(
      "Supabase 环境变量错误：\n" + errors.join("\n") +
      "\n\n本地开发请在 .env.local 中配置。" +
      "\n线上请在 Vercel → Settings → Environment Variables 中添加并重新部署。"
    );
  }

  return createSupabaseClient(supabaseUrl, supabaseAnonKey);
}
