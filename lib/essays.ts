import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const ESSAY_DIR = path.join(process.cwd(), "content/essays");

export type Essay = {
  slug: string;
  title: string;
  description: string;
  author: string;
  word_count: number;
  reading_time: number;
  toc_h2s: string[];
  body: string;
};

function readingTimeMinutes(words: number): number {
  return Math.max(1, Math.round(words / 230));
}

export function getEssay(slug: string): Essay | null {
  const file = path.join(ESSAY_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf-8");
  const { data, content } = matter(raw);
  const word_count = Number(data.word_count) || content.split(/\s+/).length;
  return {
    slug,
    title: String(data.title || slug),
    description: String(data.description || ""),
    author: String(data.author || "Michael Mackintosh"),
    word_count,
    reading_time: readingTimeMinutes(word_count),
    toc_h2s: Array.isArray(data.toc_h2s) ? data.toc_h2s.filter((s: unknown) => typeof s === "string") : [],
    body: content,
  };
}
