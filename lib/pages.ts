import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const PAGES_DIR = path.join(process.cwd(), "content/pages");

export type PageContent = {
  slug: string;
  title: string;
  word_count: number;
  body: string;
};

export function getPageContent(slug: string): PageContent | null {
  const file = path.join(PAGES_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: String(data.title || slug),
    word_count: Number(data.word_count) || content.split(/\s+/).length,
    body: content,
  };
}
