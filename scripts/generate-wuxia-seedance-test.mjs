import fs from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const outputPath = path.join(projectRoot, "outputs", "wuxia_test", "test_scene_01.mp4");
const taskEndpoint = "https://ark.cn-beijing.volces.com/api/v3/contents/generations/tasks";
const model =
  process.env.ARK_VIDEO_MODEL ||
  process.env.SEEDANCE_MODEL ||
  process.env.VOLCENGINE_VIDEO_MODEL ||
  "doubao-seedance-1-0-pro-250528";

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  const lines = fs.readFileSync(filePath, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) continue;
    const index = trimmed.indexOf("=");
    const key = trimmed.slice(0, index).trim();
    let value = trimmed.slice(index + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (key && process.env[key] === undefined) {
      process.env[key] = value;
    }
  }
}

for (const root of [projectRoot, path.dirname(projectRoot)]) {
  for (const envName of [".env", ".env.local"]) {
    loadEnvFile(path.join(root, envName));
  }
}

const apiKey =
  process.env.ARK_API_KEY ||
  process.env.VOLCENGINE_API_KEY ||
  process.env.VOLC_API_KEY ||
  process.env.SEEDANCE_API_KEY ||
  process.env.DOUBAO_API_KEY;

if (!apiKey) {
  throw new Error(
    "Missing API key. Add ARK_API_KEY or VOLCENGINE_API_KEY to .env/.env.local."
  );
}

const basePrompt = [
  "Black and white Chinese ink wash wuxia animation, xuan paper texture, misty mountains and drifting fog.",
  "A black-clad martial hero holding a long spear stands on a mountain peak, robe moving in the wind.",
  "A white-robed swordsman slowly walks out from dense fog; the two face each other across the mist.",
  "Then the black-clad spearman gently raises the spear, the spear tip cuts through the fog, ink spreads and blooms around them.",
  "Style: ink wash painting, sumi-e, xuan paper texture, black and white Chinese ink, misty mountains, drifting fog, strong ink splashes, martial arts silhouettes, cinematic composition, elegant Chinese wuxia, minimal color, high contrast ink diffusion.",
  "Camera: slow cinematic push in, slight horizontal pan, stable camera, smooth motion, dramatic atmosphere.",
  "Not photorealistic, not live action, not anime, not 3D plastic.",
  "Negative: no text, no subtitle, no watermark, no logo, no modern building, no neon color, no cyberpunk, no 3D plastic look, no anime style, no distorted limbs, no extra fingers, no ugly face, no low quality."
].join(" ");

function promptForDuration(duration) {
  return `${basePrompt} --ratio 16:9 --duration ${duration} --resolution 720p --watermark false`;
}

async function arkFetch(url, options = {}) {
  const response = await fetch(url, {
    ...options,
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      ...(options.headers || {})
    }
  });
  const text = await response.text();
  let body;
  try {
    body = text ? JSON.parse(text) : {};
  } catch {
    body = { raw: text };
  }
  if (!response.ok) {
    const detail = typeof body === "object" ? JSON.stringify(body) : String(body);
    const error = new Error(`HTTP ${response.status}: ${detail}`);
    error.status = response.status;
    error.body = body;
    throw error;
  }
  return body;
}

async function createTask(duration) {
  return arkFetch(taskEndpoint, {
    method: "POST",
    body: JSON.stringify({
      model,
      content: [{ type: "text", text: promptForDuration(duration) }]
    })
  });
}

function taskIdFrom(body) {
  return body.id || body.task_id || body?.data?.id || body?.data?.task_id;
}

function collectUrls(value, urls = []) {
  if (!value) return urls;
  if (typeof value === "string" && /^https?:\/\/.+/i.test(value)) {
    urls.push(value);
    return urls;
  }
  if (Array.isArray(value)) {
    for (const item of value) collectUrls(item, urls);
    return urls;
  }
  if (typeof value === "object") {
    for (const item of Object.values(value)) collectUrls(item, urls);
  }
  return urls;
}

function videoUrlFrom(body) {
  const urls = collectUrls(body);
  return urls.find((url) => /\.(mp4|mov|webm)(\?|$)/i.test(url)) || urls[0];
}

function taskStatusFrom(body) {
  return (
    body.status ||
    body?.data?.status ||
    body.task_status ||
    body?.data?.task_status ||
    ""
  ).toString();
}

function failureMessage(body) {
  return JSON.stringify(body?.error || body?.data?.error || body?.message || body);
}

function isDurationError(error) {
  const text = `${error.message || ""} ${JSON.stringify(error.body || {})}`.toLowerCase();
  return text.includes("duration") || text.includes("时长") || text.includes("秒");
}

async function waitForTask(taskId) {
  const deadline = Date.now() + 20 * 60 * 1000;
  while (Date.now() < deadline) {
    const body = await arkFetch(`${taskEndpoint}/${taskId}`, { method: "GET" });
    const status = taskStatusFrom(body).toLowerCase();
    const videoUrl = videoUrlFrom(body);
    if (videoUrl && ["succeeded", "success", "completed", "done"].some((s) => status.includes(s))) {
      return { body, videoUrl };
    }
    if (["failed", "error", "cancelled", "canceled"].some((s) => status.includes(s))) {
      throw new Error(`Task failed with status ${status}: ${failureMessage(body)}`);
    }
    await new Promise((resolve) => setTimeout(resolve, 10000));
  }
  throw new Error(`Timed out waiting for task ${taskId}`);
}

async function downloadVideo(url) {
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Video download failed: HTTP ${response.status}`);
  }
  const buffer = Buffer.from(await response.arrayBuffer());
  fs.writeFileSync(outputPath, buffer);
}

async function runWithDuration(duration) {
  const created = await createTask(duration);
  const taskId = taskIdFrom(created);
  if (!taskId) {
    throw new Error(`Create task response did not contain task id: ${JSON.stringify(created)}`);
  }
  console.log(`Created task ${taskId} (${duration}s, model ${model})`);
  const { videoUrl } = await waitForTask(taskId);
  await downloadVideo(videoUrl);
  return { duration, model, outputPath, taskId };
}

let result;
try {
  result = await runWithDuration(5);
} catch (error) {
  if (!isDurationError(error)) {
    throw error;
  }
  console.warn(`5s generation failed because of duration support: ${error.message}`);
  result = await runWithDuration(10);
}

console.log(JSON.stringify(result, null, 2));
