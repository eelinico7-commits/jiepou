# 题库审计报告

生成时间：2026-06-25T11:40:01.916Z

## 审计范围

- 独立刷题页数据：`src/data/anatomy/anatomyChoiceQuestions.ts`
- 原始选择题源：`data/raw/anatomy-questions/*.md`
- 章节练习题：`src/lib/*-data.ts`
- 生成、填答案、解释改写、覆盖统计脚本：`scripts/*.mjs`
- 未发现数据库 seed 题库文件；`supabase/schema.sql` 只定义表结构。

## 当前每章题目数量：独立刷题页

| 章节名称 | 单选题 | 多选题 | 判断题 | 填空题 | 简答题 | 总数量 | 来源类型 | 来源文件 |
|---|---:|---:|---:|---:|---:|---:|---|---|
| 绪论 | 2 | 2 | 0 | 0 | 0 | 4 | 原始题源 4 | src/data/anatomy/anatomyChoiceQuestions.ts |
| 运动系统-骨学 | 38 | 27 | 0 | 0 | 0 | 65 | 原始题源 65 | src/data/anatomy/anatomyChoiceQuestions.ts |
| 运动系统-关节学 | 29 | 13 | 0 | 0 | 0 | 42 | 原始题源 42 | src/data/anatomy/anatomyChoiceQuestions.ts |
| 运动系统-肌学 | 39 | 8 | 0 | 0 | 0 | 47 | 原始题源 47 | src/data/anatomy/anatomyChoiceQuestions.ts |
| 运动系统-待分类 | 4 | 2 | 0 | 0 | 0 | 6 | 原始题源 6 | src/data/anatomy/anatomyChoiceQuestions.ts |
| 消化系统 | 26 | 33 | 0 | 0 | 0 | 59 | 原始题源 59 | src/data/anatomy/anatomyChoiceQuestions.ts |
| 呼吸系统 | 15 | 4 | 0 | 0 | 0 | 19 | 原始题源 19 | src/data/anatomy/anatomyChoiceQuestions.ts |
| 泌尿系统 | 7 | 6 | 0 | 0 | 0 | 13 | 原始题源 13 | src/data/anatomy/anatomyChoiceQuestions.ts |
| 生殖系统 | 17 | 12 | 0 | 0 | 0 | 29 | 原始题源 29 | src/data/anatomy/anatomyChoiceQuestions.ts |
| 循环系统 | 83 | 24 | 0 | 0 | 0 | 107 | 原始题源 107 | src/data/anatomy/anatomyChoiceQuestions.ts |
| 内分泌系统 | 7 | 5 | 0 | 0 | 0 | 12 | 原始题源 12 | src/data/anatomy/anatomyChoiceQuestions.ts |
| 感觉器 | 18 | 9 | 0 | 0 | 0 | 27 | 原始题源 27 | src/data/anatomy/anatomyChoiceQuestions.ts |
| 神经系统 | 76 | 74 | 0 | 0 | 0 | 150 | 原始题源 150 | src/data/anatomy/anatomyChoiceQuestions.ts |

## 当前每章题目数量：独立刷题页 + 章节练习题

| 章节名称 | 单选题 | 多选题 | 判断题 | 填空题 | 简答题 | 总数量 | 来源类型 | 来源文件 |
|---|---:|---:|---:|---:|---:|---:|---|---|
| 绪论 | 6 | 2 | 2 | 2 | 2 | 14 | 原始题源 4；章节练习题 10 | src/data/anatomy/anatomyChoiceQuestions.ts<br>src/lib/osteology-data.ts |
| 运动系统-骨学 | 44 | 27 | 3 | 3 | 3 | 80 | 原始题源 65；章节练习题 15 | src/data/anatomy/anatomyChoiceQuestions.ts<br>src/lib/osteology-data.ts |
| 运动系统-关节学 | 35 | 13 | 3 | 3 | 3 | 57 | 原始题源 42；章节练习题 15 | src/data/anatomy/anatomyChoiceQuestions.ts<br>src/lib/osteology-data.ts |
| 运动系统-肌学 | 47 | 8 | 4 | 4 | 4 | 67 | 原始题源 47；章节练习题 20 | src/data/anatomy/anatomyChoiceQuestions.ts<br>src/lib/skeletal-muscle-data.ts |
| 运动系统-体表标志 | 6 | 0 | 3 | 3 | 3 | 15 | 章节练习题 15 | src/lib/surface-landmarks-data.ts |
| 运动系统-待分类 | 4 | 2 | 0 | 0 | 0 | 6 | 原始题源 6 | src/data/anatomy/anatomyChoiceQuestions.ts |
| 消化系统 | 38 | 33 | 6 | 6 | 6 | 89 | 原始题源 59；章节练习题 30 | src/data/anatomy/anatomyChoiceQuestions.ts<br>src/lib/digestive-system-data.ts |
| 呼吸系统 | 23 | 4 | 4 | 4 | 4 | 39 | 原始题源 19；章节练习题 20 | src/data/anatomy/anatomyChoiceQuestions.ts<br>src/lib/respiratory-system-data.ts |
| 泌尿系统 | 15 | 6 | 4 | 4 | 4 | 33 | 原始题源 13；章节练习题 20 | src/data/anatomy/anatomyChoiceQuestions.ts<br>src/lib/urinary-system-data.ts |
| 生殖系统 | 27 | 12 | 2 | 4 | 4 | 49 | 原始题源 29；章节练习题 20 | src/data/anatomy/anatomyChoiceQuestions.ts<br>src/lib/reproductive-system-data.ts |
| 循环系统 | 93 | 24 | 5 | 5 | 5 | 132 | 原始题源 107；章节练习题 25 | src/data/anatomy/anatomyChoiceQuestions.ts<br>src/lib/circulatory-system-data.ts |
| 内分泌系统 | 15 | 5 | 4 | 4 | 4 | 32 | 原始题源 12；章节练习题 20 | src/data/anatomy/anatomyChoiceQuestions.ts<br>src/lib/endocrine-system-data.ts |
| 感觉器 | 24 | 9 | 3 | 3 | 3 | 42 | 原始题源 27；章节练习题 15 | src/data/anatomy/anatomyChoiceQuestions.ts<br>src/lib/sense-organ-data.ts |
| 神经系统 | 92 | 74 | 8 | 8 | 8 | 190 | 原始题源 150；章节练习题 40 | src/data/anatomy/anatomyChoiceQuestions.ts<br>src/lib/nervous-system-data.ts |

## 原始题源文件扫描

| 来源文件 | 编号题目行 | 单选题标题出现次数 | 多选题标题出现次数 |
|---|---:|---:|---:|
| data/raw/anatomy-questions/01-intro-motor-digestive-respiratory.md | 252 | 8 | 10 |
| data/raw/anatomy-questions/02-urinary-reproductive-circulatory-endocrine-sense-neuro.md | 267 | 6 | 7 |
| data/raw/anatomy-questions/03-neuro-supplement.md | 85 | 1 | 2 |

## 明显不足章节

- 绪论：独立刷题页 4 题，合并章节练习题后 14 题。
- 运动系统-体表标志：独立刷题页 0 题，合并章节练习题后 15 题。
- 运动系统-待分类：独立刷题页 6 题，合并章节练习题后 6 题。
- 呼吸系统：独立刷题页 19 题，合并章节练习题后 39 题。
- 泌尿系统：独立刷题页 13 题，合并章节练习题后 33 题。
- 内分泌系统：独立刷题页 12 题，合并章节练习题后 32 题。

## 原因判断

- 独立刷题页只导入 `anatomyChoiceQuestions.ts`，该文件来自 3 个 raw markdown，只包含单选题和多选题；各章节 `src/lib/*-data.ts` 中的判断题、填空题、简答题没有进入刷题页。
- 题量分布不均主要来自源文件覆盖不均：神经系统 150 题、循环系统 107 题、运动系统合计较多；呼吸系统、泌尿系统、内分泌系统、绪论在 raw 选择题源中明显偏少。
- 章节练习题本身分布较均匀，多数章节按每个知识块 5 题构建，因此网站学习页不是缺题，问题集中在独立刷题页的数据来源和统计口径。
- 当前去重脚本使用“题干 + 选项”作为 key，不是只按短题干去重；没有发现短题干章节被整批误删的证据。脚本元数据记录生成时共合并 13 道重复题。
- `运动系统-待分类` 仍有 6 道选择题，属于字段/关键词归类不足；没有把题目归入“其他”“未分类”“默认章节”的独立章节。

## 字段统一检查

- 循环系统相关别名统一按“循环系统”统计；章节练习文件标题中使用“脉管系统”的，应映射到循环系统。
- 运动系统细分为“运动系统-骨学”“运动系统-关节学”“运动系统-肌学”“运动系统-体表标志”“运动系统-待分类”。
- 神经系统下的中枢神经、周围神经、脑神经、脊神经、传导通路统一按“神经系统”统计。
- 消化管、消化腺、腹膜统一按“消化系统”统计。

## 待分类或可能错分题

- motor-unclassified-single-001：运动系统-待分类 / 待分类 / 通过横突孔的是（）
- motor-unclassified-single-002：运动系统-待分类 / 待分类 / 与眶相通的结构有（）
- motor-unclassified-single-003：运动系统-待分类 / 待分类 / 开口于中鼻道的是（）
- motor-unclassified-single-004：运动系统-待分类 / 待分类 / 开口于上鼻道的是（）
- motor-unclassified-multiple-001：运动系统-待分类 / 待分类 / 开口于中鼻道的有（）
- motor-unclassified-multiple-002：运动系统-待分类 / 待分类 / 属于颅中窝的结构有（）

- 未发现可由题干关键词自动确认的新归类。

## 去重逻辑检查

- 生成脚本 `scripts/generate-anatomy-questions.mjs` 的 `questionKey` 包含题干和全部选项，因此短题干只有在选项也完全相同或高度一致时才会合并。
- 审计到短题干重复组 14 组；这些是现有导出后的重复候选，不等于被删除记录。
- 现有质量审计仍提示重复选项题、疑似单/多选类型不一致题，建议后续人工校对，不应自动删除。

## 本次修复

- 为独立刷题页增加章节题量和来源类型统计，避免只看到当前筛选结果总数。
- 为选择题数据结构补充来源类型字段，明确现有 `anatomyChoiceQuestions.ts` 均为原始题源：`sourceType: "原始题源"`、`isOriginalQuestion: true`。
- 生成本报告时统一了审计口径中的章节别名映射，但没有凭空删除题目，也没有把 AI 生成题冒充真题。

## 仍需人工补充题源

- 绪论、呼吸系统、泌尿系统、内分泌系统在独立刷题页选择题源中偏少。
- 如果要扩充独立刷题页，应优先补充真实题源或从教材/PPT生成单独标记的补充练习题；AI补充题必须带 `source: "AI补充题"`、`isOriginalQuestion: false`、`confidence: "medium"`。
- 本次未新增 AI 补充题，避免在题源审计阶段把练习题和原始真题混在一起。

## 章节练习题记录数

- 已扫描章节练习题 265 道，来自 `src/lib/*-data.ts`。
