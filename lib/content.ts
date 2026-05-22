import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");
const PROGRAM_DIR = path.join(process.cwd(), "content/programs");
const PUBLIC_DIR = path.join(process.cwd(), "public");

// Fallback hero images from our verified brand library
const BRAND_FALLBACKS = [
  "/images/golden-light.jpg",
  "/images/woman-lotus-beach-gold.jpg",
  "/images/woman-on-top-full.jpg",
  "/images/story/nature-lights.jpg",
  "/images/story/divine-light.jpg",
  "/images/story/loa.jpg",
  "/images/freedom-img.webp",
];

function pickFallback(seed: string): string {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) | 0;
  return BRAND_FALLBACKS[Math.abs(h) % BRAND_FALLBACKS.length];
}

function fileExists(localPath: string): boolean {
  if (!localPath || !localPath.startsWith("/")) return false;
  return fs.existsSync(path.join(PUBLIC_DIR, localPath.slice(1)));
}

// Hero/body images can be local (must exist in /public) or external https URLs.
// External URLs require the host in next.config images.remotePatterns.
function isUsableImage(url: string): boolean {
  if (!url) return false;
  if (url.startsWith("https://") || url.startsWith("http://")) return true;
  return fileExists(url);
}

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  hero_image: string;
  images: string[];
  body: string;
};

export type ProgramPage = {
  slug: string;
  title: string;
  hero_image: string;
  images: string[];
  primary_cta?: { label: string; destination: string };
  form_present?: boolean;
  body: string;
};

// Strip the live WP host so images point at locally-mirrored files
function localizeImage(url: string | undefined): string {
  if (!url) return "";
  if (!url.startsWith("https://awakenedacademy.com/")) return url;
  return url.replace("https://awakenedacademy.com/", "/migrated/");
}

function localizeBody(body: string): string {
  return body.replace(/https:\/\/awakenedacademy\.com\//g, "/migrated/");
}

export function getAllBlogSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md")).map((f) => f.replace(/\.md$/, ""));
}

export function getAllProgramSlugs(): string[] {
  if (!fs.existsSync(PROGRAM_DIR)) return [];
  return fs.readdirSync(PROGRAM_DIR).filter((f) => f.endsWith(".md")).map((f) => f.replace(/\.md$/, ""));
}

// Distribute the body images evenly between H2 sections so they
// actually appear inside the article instead of just sitting in frontmatter.
function interleaveImages(body: string, hero: string, allImages: string[]): string {
  // Exclude the hero (already rendered at top) and dedupe
  const bodyImages = allImages.filter((img) => img && img !== hero);
  if (bodyImages.length === 0) return body;

  // Split body at H2 boundaries. The first chunk is the lead-in before any H2.
  const parts = body.split(/(?=^## )/m);
  if (parts.length <= 1) {
    // No H2s, append all images at the end as a simple gallery
    const gallery = bodyImages.map((img) => `\n\n![](${img})`).join("");
    return body + gallery;
  }

  // Skip the lead-in chunk; we'll only insert AFTER H2 sections, not before
  const lead = parts[0];
  const sections = parts.slice(1);

  // Each section gets at most one image, inserted right after the H2 line.
  const stride = Math.max(1, Math.ceil(sections.length / bodyImages.length));
  let imgIdx = 0;

  const enriched = sections.map((section, i) => {
    if (i % stride !== 0 || imgIdx >= bodyImages.length) return section;
    // Insert image right after the H2 line (the section starts with "## ...\n")
    const nl = section.indexOf("\n");
    if (nl === -1) return section;
    const h2Line = section.slice(0, nl);
    const rest = section.slice(nl);
    const img = bodyImages[imgIdx++];
    return `${h2Line}\n\n![](${img})\n${rest}`;
  });

  return lead + enriched.join("");
}

export function getBlogPost(slug: string): BlogPost | null {
  const file = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf-8");
  const { data, content } = matter(raw);

  // Accept external https URLs (e.g. Pexels) or local files that exist on disk.
  const rawHero = localizeImage(data.hero_image);
  const rawImages: string[] = (data.images || []).map(localizeImage);
  const validImages = rawImages.filter(isUsableImage);
  const validHero = isUsableImage(rawHero) ? rawHero : (validImages[0] || pickFallback(slug));

  const localized = localizeBody(content);
  const body = interleaveImages(localized, validHero, validImages);

  return {
    slug,
    title: data.title || slug,
    description: data.description || "",
    date: data.date || "",
    author: data.author || "Michael Mackintosh",
    hero_image: validHero,
    images: validImages,
    body,
  };
}

export function getProgramPage(slug: string): ProgramPage | null {
  const file = path.join(PROGRAM_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf-8");
  const { data, content } = matter(raw);

  const rawHero = localizeImage(data.hero_image);
  const rawImages: string[] = (data.images || []).map(localizeImage);
  const validImages = rawImages.filter(isUsableImage);
  const validHero = isUsableImage(rawHero) ? rawHero : (validImages[0] || pickFallback(slug));

  // Strip body image references whose files don't exist locally (external https stays)
  let cleanBody = localizeBody(content);
  cleanBody = cleanBody.replace(/!\[[^\]]*\]\(([^)]+)\)/g, (match, url) => {
    return isUsableImage(url) ? match : "";
  });

  return {
    slug,
    title: data.title || slug,
    hero_image: validHero,
    images: validImages,
    primary_cta: data.primary_cta,
    form_present: data.form_present,
    body: cleanBody,
  };
}

// Curated blog index order by SEO/funnel value: Tier 1 buyer intent, then Tier 2
// supporting, then everything else alphabetically. Grounded in the AA keyword list.
const BLOG_ORDER: string[] = [
  // Tier 1, commercial / buyer intent
  "spiritual-business-ideas",
  "how-to-become-a-spiritual-life-coach-in-simple-steps",
  "what-is-a-spiritual-life-coach-complete-career-guide",
  "want-more-clients-3-ways-get-more-coaching-clients-and-make-more-sales",
  "how-to-start-a-spiritual-coaching-business",
  "what-does-a-spiritual-coach-actually-do",
  "best-spiritual-life-coach-certification-programs",
  // Tier 2, supporting / mid-funnel
  "how-to-succeed-as-a-spiritual-entrepreneur-best-practices-ideas",
  "the-ultimate-guide-to-building-a-successful-coaching-business",
  "25-profitable-spiritual-coaching-niche-ideas-for-2026",
  "what-is-spiritual-life-coaching-a-practical-guide-to-transformational-guidance",
  "the-truth-about-icf-certification",
  "do-you-need-icf-certification-to-be-a-spiritual-life-coach",
  "is-spiritual-coaching-a-legitimate-career",
  "how-to-create-a-signature-spiritual-coaching-package-that-sells",
  "top-marketing-for-coaches-strategies-to-attract-clients-in-2026",
  "is-it-worth-going-to-events-where-to-find-clients",
  "10-signs-youre-meant-to-be-a-spiritual-coach",
  "is-spiritual-coaching-your-divine-calling",
];

export function orderBlogSlugs(slugs: string[]): string[] {
  const rank = new Map(BLOG_ORDER.map((s, i) => [s, i] as const));
  return [...slugs].sort((a, b) => {
    const ra = rank.get(a) ?? Number.MAX_SAFE_INTEGER;
    const rb = rank.get(b) ?? Number.MAX_SAFE_INTEGER;
    return ra !== rb ? ra - rb : a.localeCompare(b);
  });
}

export function getAllBlogPosts(): BlogPost[] {
  return orderBlogSlugs(getAllBlogSlugs())
    .map((slug) => getBlogPost(slug))
    .filter((p): p is BlogPost => p !== null);
}

export function getAllProgramPages(): ProgramPage[] {
  return getAllProgramSlugs()
    .map((slug) => getProgramPage(slug))
    .filter((p): p is ProgramPage => p !== null);
}

export function isBlogSlug(slug: string): boolean {
  return getAllBlogSlugs().includes(slug);
}

export function isProgramSlug(slug: string): boolean {
  return getAllProgramSlugs().includes(slug);
}
