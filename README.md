# jiepou (MedMemo) — 人体解剖学 AI 精准背诵系统

面向医学生的《人体解剖学》AI 学习工具。粘贴章节原文或课堂笔记，调用 DeepSeek 生成章节概述、知识框架、必背重点、名词解释、背诵卡片、自测题，并附带错题本和今日复习功能。

## 产品架构

### 公共知识库 + 私人学习记录

- **公共知识库**：所有人上传的章节都在云端，任何人可浏览学习。只有上传者可修改或删除。
- **私人学习记录**：卡片掌握状态、答题记录、错题本只对用户自己可见，登录后跨设备同步。

### 权限模型

| 功能 | 未登录用户 | 已登录用户 |
|------|-----------|-----------|
| 浏览公共知识库 | ✅ | ✅ |
| 查看章节详情 | ✅ | ✅ |
| 上传章节 / 生成内容 | ❌ | ✅ |
| 保存卡片进度 | ❌ | ✅ |
| 答题 / 错题本 | ❌ | ✅ |
| 今日复习 | ❌ | ✅ |

## 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **AI**: DeepSeek API (通过 OpenAI SDK 兼容层, 仅服务端调用)
- **认证**: Supabase Auth (邮箱密码)
- **数据库**: Supabase PostgreSQL (RLS 行级安全)
- ~~浏览器 localStorage~~ (已迁移至 Supabase 云端)

## 本地启动

### 1. 安装依赖

```bash
npm install
```

### 2. 配置环境变量

复制 `.env.example` 为 `.env.local`：

```bash
cp .env.example .env.local
```

编辑 `.env.local`，填写真实值：

```env
DEEPSEEK_API_KEY=你的_DeepSeek_API_Key
DEEPSEEK_MODEL=deepseek-chat
NEXT_PUBLIC_SUPABASE_URL=你的_Supabase_Project_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=你的_Supabase_Anon_Key
```

> ⚠️ `.env.local` 包含真实密钥，不要提交到 GitHub。

### 3. 创建 Supabase 数据库

1. 打开 [Supabase Dashboard](https://supabase.com/dashboard) → 进入你的项目。
2. 点击左侧 **SQL Editor**。
3. 点击 **New Query**。
4. 打开项目中的 `supabase/schema.sql`，复制全部内容。
5. 粘贴到 SQL Editor，点击 **Run**。
6. 确认四条表创建成功：`public_chapters`、`user_flashcard_progress`、`user_quiz_records`、`user_mistakes`。

### 4. 启动开发服务器

```bash
npm run dev
```

或 Windows 双击 `start-dev.cmd`。

打开 [http://localhost:3000](http://localhost:3000)。

### 5. 启用邮箱确认（可选）

默认 Supabase 项目要求邮箱确认。如果希望在开发环境中跳过邮箱确认：

1. Supabase Dashboard → **Authentication** → **Providers**。
2. 找到 **Email**，关闭 **Confirm email**。
3. 点击 **Save**。

> ⚠️ 生产环境建议保持邮箱确认开启。

## Vercel 部署

1. 打开 [Vercel](https://vercel.com)。
2. 点击 **Add New Project**。
3. 导入 GitHub 上的项目仓库。
4. Framework Preset 选择 **Next.js**。
5. 在 **Environment Variables** 中添加：

| 名称 | 值 |
|------|-----|
| `DEEPSEEK_API_KEY` | 你的 DeepSeek API Key |
| `DEEPSEEK_MODEL` | `deepseek-chat` |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase Project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase Anon Key |

6. 点击 **Deploy**。

> 注意：`DEEPSEEK_API_KEY` 只在服务端使用，不会暴露给前端。  
> `NEXT_PUBLIC_*` 前缀的环境变量会暴露给浏览器，但使用 Supabase Row Level Security (RLS) 保证数据安全。

## 数据库表结构

| 表名 | 用途 | 访问权限 |
|------|------|---------|
| `public_chapters` | 公共章节知识库 | 所有人可查，仅上传者可写 |
| `user_flashcard_progress` | 卡片掌握状态 | 仅本人 |
| `user_quiz_records` | 答题记录 | 仅本人 |
| `user_mistakes` | 错题本 | 仅本人 |

所有表均启用 Row Level Security (RLS)，确保数据安全。

## localStorage 迁移到云端

如果你之前使用旧版（localStorage 版）且浏览器中还有本地数据：

1. **登录**你的账号。
2. 打开 **知识库** 页面。
3. 如果检测到本地旧数据，会显示迁移提示。
4. 点击 **迁移本地数据到云端**。
5. 迁移完成后，章节会出现在公共知识库中。
6. 确认成功后，可以安全地清除本地数据。

> 迁移不会自动删除 localStorage 数据，清除需要二次确认。

## 常用命令

```bash
npm run dev      # 开发服务器
npm run build    # 构建
npm run start    # 生产模式启动
npm run lint     # 代码检查
```

## 安全检查

提交前请确认：

- `.env.local` 没有被 git 跟踪
- 项目中没有真实 API Key
- 项目中没有 `api.openai.com` 或 `OPENAI_API_KEY`
- DeepSeek API Key 只在服务端使用
- Supabase Anon Key 虽然在前端可见，但 RLS 保证数据安全

## 当前限制

- 不支持 PDF 上传解析
- DeepSeek 生成质量取决于用户粘贴的章节文本质量和长度
- 暂不支持社交媒体登录（仅邮箱密码）
- 暂不支持章节编辑（可删除后重新上传）

## GitHub 推送

```bash
git add .
git commit -m "your commit message"
git push
```

提交前确保 `.env.local`、`.env`、`node_modules`、`.next`、`.vercel` 已在 `.gitignore` 中。
