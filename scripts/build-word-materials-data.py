from __future__ import annotations

import json
import re
import sys
from pathlib import Path


def normalize_block(block: dict) -> dict | None:
    if block.get("type") == "paragraph":
        text = str(block.get("text", "")).strip()
        if not text:
            return None
        kind = "heading" if is_heading(text) else "paragraph"
        return {"kind": kind, "text": text}

    if block.get("type") == "table":
        rows = block.get("rows", [])
        if not rows:
            return None
        return {"kind": "table", "rows": rows}

    return None


def is_heading(text: str) -> bool:
    if len(text) <= 24 and re.search(r"(第.+章|[一二三四五六七八九十]+、|判断题|选择题|填空|简答|名词解释|答案)", text):
        return True
    if len(text) <= 18 and not re.search(r"[。；;:：]", text):
        return True
    return False


def load_docx_json(path: Path) -> dict:
    raw = json.loads(path.read_text(encoding="utf-8"))
    blocks = []
    for block in raw.get("blocks", []):
        normalized = normalize_block(block)
        if normalized:
            blocks.append(normalized)

    return {
        "id": "normal-anatomy-after-class",
        "title": "正常人体解剖学课后题及答案",
        "shortTitle": "课后题答案",
        "sourceFile": "正常人体解剖学课后题及答案2(1).docx",
        "status": "已导入",
        "summary": "来自 Word 文件的课后题、答案和复习要点，适合考前刷题和查漏补缺。",
        "pdfUrl": None,
        "blocks": blocks,
    }


def main() -> int:
    if len(sys.argv) != 3:
        print("Usage: build-word-materials-data.py <extracted-json> <output-ts>", file=sys.stderr)
        return 2

    source_json = Path(sys.argv[1])
    output_ts = Path(sys.argv[2])
    imported = load_docx_json(source_json)
    pending_doc = {
        "id": "anatomy-notes-doc",
        "title": "解剖学笔记",
        "shortTitle": "解剖笔记",
        "sourceFile": "解剖学笔记(1).doc",
        "status": "已导入",
        "summary": "PDF 已加入网站，可在线查看。当前 PDF 直接抽取文字为乱码/空白，说明它更像扫描版或异常编码文档，所以暂不能做全文搜索。",
        "pdfUrl": "/materials/解剖学笔记.pdf",
        "blocks": [
            {
                "kind": "paragraph",
                "text": "已把 PDF 放入网站资料库。你可以在线预览或新窗口打开原 PDF。",
            },
            {
                "kind": "paragraph",
                "text": "如果后面要把它变成可搜索文字资料，需要再做 OCR 识别，或者提供 Word 另存后的 .docx 版本。",
            }
        ],
    }

    data = [imported, pending_doc]
    output_ts.parent.mkdir(parents=True, exist_ok=True)
    output_ts.write_text(
        "export type WordMaterialBlock =\n"
        "  | { kind: \"heading\" | \"paragraph\"; text: string }\n"
        "  | { kind: \"table\"; rows: string[][] };\n\n"
        "export type WordMaterial = {\n"
        "  id: string;\n"
        "  title: string;\n"
        "  shortTitle: string;\n"
        "  sourceFile: string;\n"
        "  status: \"已导入\" | \"待转换\";\n"
        "  summary: string;\n"
        "  pdfUrl?: string | null;\n"
        "  blocks: WordMaterialBlock[];\n"
        "};\n\n"
        f"export const wordMaterials: WordMaterial[] = {json.dumps(data, ensure_ascii=False, indent=2)};\n",
        encoding="utf-8",
    )
    print(f"wrote {len(data)} materials -> {output_ts}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
