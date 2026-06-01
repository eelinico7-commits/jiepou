-- ============================================================
-- jiepou (MedMemo) 数据库 Schema
-- 人体解剖学 AI 精准背诵系统
-- 公共知识库 + 私人学习记录
-- ============================================================

-- 1. public_chapters: 公共章节知识库
--    所有人可查看，只有上传者可改可删
create table if not exists public_chapters (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references auth.users(id) on delete cascade,
  owner_email text,
  course_name text not null default '人体解剖学',
  chapter_title text not null,
  source_text text not null,
  generated_content jsonb not null,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- 2. user_flashcard_progress: 每个用户自己的卡片掌握状态
create table if not exists user_flashcard_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  chapter_id uuid references public_chapters(id) on delete cascade,
  card_id text not null,
  status text not null check (status in ('mastered', 'uncertain', 'unknown')),
  updated_at timestamptz default now(),
  unique(user_id, chapter_id, card_id)
);

-- 3. user_quiz_records: 每个用户自己的答题记录
create table if not exists user_quiz_records (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  chapter_id uuid references public_chapters(id) on delete cascade,
  question_id text not null,
  selected_answer text not null,
  is_correct boolean not null,
  answered_at timestamptz default now()
);

-- 4. user_mistakes: 每个用户自己的错题本
create table if not exists user_mistakes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  chapter_id uuid references public_chapters(id) on delete cascade,
  question_id text not null,
  question text not null,
  options jsonb not null,
  correct_answer text not null,
  explanation text,
  related_point text,
  mastered boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  unique(user_id, chapter_id, question_id)
);

-- ============================================================
-- 开启行级安全 (RLS)
-- ============================================================
alter table public_chapters enable row level security;
alter table user_flashcard_progress enable row level security;
alter table user_quiz_records enable row level security;
alter table user_mistakes enable row level security;

-- ============================================================
-- public_chapters 权限策略
-- ============================================================

-- 所有人可以查看所有公开章节
drop policy if exists "所有人可以查看公开章节" on public_chapters;
create policy "所有人可以查看公开章节"
  on public_chapters for select
  using (true);

-- 登录用户可以新增章节，且 owner_id 必须等于自己的 uid
drop policy if exists "登录用户可以新增章节" on public_chapters;
create policy "登录用户可以新增章节"
  on public_chapters for insert
  with check (
    auth.role() = 'authenticated'
    and owner_id = auth.uid()
  );

-- 只有上传者可以更新自己的章节
drop policy if exists "只有上传者可以更新章节" on public_chapters;
create policy "只有上传者可以更新章节"
  on public_chapters for update
  using (owner_id = auth.uid());

-- 只有上传者可以删除自己的章节
drop policy if exists "只有上传者可以删除章节" on public_chapters;
create policy "只有上传者可以删除章节"
  on public_chapters for delete
  using (owner_id = auth.uid());

-- ============================================================
-- user_flashcard_progress 权限策略
-- ============================================================

drop policy if exists "用户只能查看自己的卡片进度" on user_flashcard_progress;
create policy "用户只能查看自己的卡片进度"
  on user_flashcard_progress for select
  using (user_id = auth.uid());

drop policy if exists "用户只能新增自己的卡片进度" on user_flashcard_progress;
create policy "用户只能新增自己的卡片进度"
  on user_flashcard_progress for insert
  with check (
    auth.role() = 'authenticated'
    and user_id = auth.uid()
  );

drop policy if exists "用户只能更新自己的卡片进度" on user_flashcard_progress;
create policy "用户只能更新自己的卡片进度"
  on user_flashcard_progress for update
  using (user_id = auth.uid());

drop policy if exists "用户只能删除自己的卡片进度" on user_flashcard_progress;
create policy "用户只能删除自己的卡片进度"
  on user_flashcard_progress for delete
  using (user_id = auth.uid());

-- ============================================================
-- user_quiz_records 权限策略
-- ============================================================

drop policy if exists "用户只能查看自己的答题记录" on user_quiz_records;
create policy "用户只能查看自己的答题记录"
  on user_quiz_records for select
  using (user_id = auth.uid());

drop policy if exists "用户只能新增自己的答题记录" on user_quiz_records;
create policy "用户只能新增自己的答题记录"
  on user_quiz_records for insert
  with check (
    auth.role() = 'authenticated'
    and user_id = auth.uid()
  );

drop policy if exists "用户只能更新自己的答题记录" on user_quiz_records;
create policy "用户只能更新自己的答题记录"
  on user_quiz_records for update
  using (user_id = auth.uid());

drop policy if exists "用户只能删除自己的答题记录" on user_quiz_records;
create policy "用户只能删除自己的答题记录"
  on user_quiz_records for delete
  using (user_id = auth.uid());

-- ============================================================
-- user_mistakes 权限策略
-- ============================================================

drop policy if exists "用户只能查看自己的错题" on user_mistakes;
create policy "用户只能查看自己的错题"
  on user_mistakes for select
  using (user_id = auth.uid());

drop policy if exists "用户只能新增自己的错题" on user_mistakes;
create policy "用户只能新增自己的错题"
  on user_mistakes for insert
  with check (
    auth.role() = 'authenticated'
    and user_id = auth.uid()
  );

drop policy if exists "用户只能更新自己的错题" on user_mistakes;
create policy "用户只能更新自己的错题"
  on user_mistakes for update
  using (user_id = auth.uid());

drop policy if exists "用户只能删除自己的错题" on user_mistakes;
create policy "用户只能删除自己的错题"
  on user_mistakes for delete
  using (user_id = auth.uid());

-- ============================================================
-- 索引 (可选，提升查询性能)
-- ============================================================
create index if not exists idx_public_chapters_owner_id on public_chapters(owner_id);
create index if not exists idx_public_chapters_created_at on public_chapters(created_at desc);
create index if not exists idx_user_flashcard_progress_user_id on user_flashcard_progress(user_id);
create index if not exists idx_user_flashcard_progress_chapter_id on user_flashcard_progress(chapter_id);
create index if not exists idx_user_quiz_records_user_id on user_quiz_records(user_id);
create index if not exists idx_user_mistakes_user_id on user_mistakes(user_id);
create index if not exists idx_user_mistakes_mastered on user_mistakes(user_id, mastered);
