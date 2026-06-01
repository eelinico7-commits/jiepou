# jiepou - 人体解剖学 AI 精准背诵系统

jiepou 是一个面向医学生的《人体解剖学》AI 学习工具。当前版本支持粘贴章节原文或课堂笔记，调用 DeepSeek 生成章节概述、知识框架、必背重点、名词解释、背诵卡片、自测题、错题本和今日复习任务。

学习数据保存在浏览器 `localStorage` 中。DeepSeek API 只在 Next.js 服务端 API Route 中调用，不会暴露到前端。

## 技术栈

- Next.js App Router
- TypeScript
- Tailwind CSS
- React Hooks
- OpenAI SDK 兼容 DeepSeek API
- 浏览器 `localStorage`

## 本地启动

安装依赖：

```bash
npm install
```

启动开发服务器：

```bash
npm run dev
```

打开：

```bash
http://localhost:3000
```

Windows 也可以双击：

```bash
start-dev.cmd
```

## DeepSeek 环境变量

复制 `.env.example` 为 `.env.local`：

```bash
DEEPSEEK_API_KEY=
DEEPSEEK_MODEL=deepseek-chat
```

说明：

- `DEEPSEEK_API_KEY` 只在服务端读取，不要写进前端代码。
- `.env.local`、`.env` 和 `.env.*.local` 已加入 `.gitignore`，不要提交到 GitHub。
- `DEEPSEEK_MODEL` 默认使用 `deepseek-chat`。

## 常用命令

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## GitHub 推送

在项目目录执行：

```bash
git init
git add .
git commit -m "init jiepou anatomy learning system"
git branch -M main
git remote add origin https://github.com/你的用户名/jiepou.git
git push -u origin main
```

提交前确认不要包含：

- `.env.local`
- `.env`
- `node_modules`
- `.next`
- `.vercel`
- `.turbo`
- 任何真实 API Key

## Vercel 部署

1. 打开 Vercel。
2. 点击 New Project。
3. 导入 GitHub 仓库 `jiepou`。
4. Framework Preset 选择 Next.js。
5. 在 Environment Variables 中添加：

```bash
DEEPSEEK_API_KEY=
DEEPSEEK_MODEL=deepseek-chat
```

6. 点击 Deploy。
7. 部署后检查首页、导入页、章节详情、卡片状态、错题本和今日复习。

## 构建检查

```bash
npm run build
```

## 当前版本限制

- 不支持 PDF 上传解析。
- 不支持账号登录。
- 不支持跨设备同步。
- 未接入云数据库，学习数据只保存在当前浏览器的 `localStorage`。
- 清除浏览器数据、换浏览器或换设备后，学习数据不会自动恢复。
- DeepSeek 生成质量取决于用户粘贴的章节文本质量和长度。
