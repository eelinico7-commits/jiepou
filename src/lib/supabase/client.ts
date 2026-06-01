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
    errors.push("NEXT_PUBLIC_SUPABASE_URL");
  } else if (!/^[\x00-\x7F]*$/.test(supabaseUrl)) {
    errors.push("NEXT_PUBLIC_SUPABASE_URL（包含非 ASCII 字符）");
  } else if (!supabaseUrl.startsWith("http")) {
    errors.push("NEXT_PUBLIC_SUPABASE_URL（需以 https:// 开头）");
  }

  if (!supabaseAnonKey) {
    errors.push("NEXT_PUBLIC_SUPABASE_ANON_KEY");
  } else if (!/^[\x00-\x7F]*$/.test(supabaseAnonKey)) {
    errors.push("NEXT_PUBLIC_SUPABASE_ANON_KEY（包含非 ASCII 字符）");
  }

  if (errors.length > 0) {
    const varNames = errors.join("\n");
    throw new Error(
      `Supabase 环境变量错误：\n${varNames}\n\n` +
      `本地开发请在 .env.local 中配置。\n` +
      `线上部署请在 Vercel 中操作：\n` +
      `  1. 打开项目 Settings → Environment Variables\n` +
      `  2. 删除有问题的变量\n` +
      `  3. 重新添加，值确保 100% 干净（不要带引号、空格、换行、不可见字符）\n` +
      `  4. 保存后进入 Deployments → Redeploy`
    );
  }

  return createSupabaseClient(supabaseUrl, supabaseAnonKey);
}
