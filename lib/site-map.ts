import fs from "node:fs";
import path from "node:path";
import {
  getAllBlogSlugs,
  getAllProgramSlugs,
  getBlogPost,
  getProgramPage,
} from "@/lib/content";
import { DHARMA_COURSE } from "@/lib/dharma-course";
import { EP_COURSE } from "@/lib/ep-course";
import { SP_COURSE } from "@/lib/sp-course";
import { coaches } from "@/lib/coaches";

export type SiteLink = { href: string; label: string };
export type SiteSection = { title: string; note?: string; links: SiteLink[] };

const APP_DIR = path.join(process.cwd(), "app");
const PUBLIC_DIR = path.join(process.cwd(), "public");

// Turn a route segment like "spiritual-life-coach-certification" into a
// readable label: "Spiritual Life Coach Certification".
function humanize(segment: string): string {
  if (!segment) return "Home";
  return segment
    .split("-")
    .map((w) => (w.length <= 3 ? w : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(" ")
    .replace(/^\w/, (c) => c.toUpperCase());
}

// Pull a readable label from a public/*/index.html landing page. Falls back
// to a humanized slug if the file has no <title> or can't be read.
function titleFromHtml(filePath: string, fallbackSlug: string): string {
  try {
    const html = fs.readFileSync(filePath, "utf-8");
    const m = html.match(/<title>([^<]+)<\/title>/i);
    if (m) {
      return m[1]
        .replace(/\s*[|·–-]\s*Awakened Academy.*$/i, "")
        .replace(/\s+/g, " ")
        .trim();
    }
  } catch {
    /* fall through */
  }
  return humanize(fallbackSlug);
}

// Standalone landing pages dropped into public/ (each is a folder containing
// index.html). Served by Next as static files, so they don't appear in the
// app/ routing tree.
function discoverPublicLandingPages(): { href: string; label: string }[] {
  if (!fs.existsSync(PUBLIC_DIR)) return [];
  const pages: { href: string; label: string }[] = [];
  for (const entry of fs.readdirSync(PUBLIC_DIR, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    // /migrated/ is the WP image mirror, not a landing page.
    if (entry.name === "migrated") continue;
    const indexPath = path.join(PUBLIC_DIR, entry.name, "index.html");
    if (!fs.existsSync(indexPath)) continue;
    pages.push({
      href: `/${entry.name}`,
      label: titleFromHtml(indexPath, entry.name),
    });
  }
  return pages.sort((a, b) => a.label.localeCompare(b.label));
}

type Discovered = {
  staticPages: string[];
  dynamicTemplates: string[];
  handlers: string[];
};

// Walk the app/ directory once at build time and read the real routing tree,
// so this index never drifts from what actually ships. Route groups "(x)" are
// dropped from the URL, dynamic segments "[slug]" are surfaced separately.
function discoverRoutes(): Discovered {
  const staticPages: string[] = [];
  const dynamicTemplates: string[] = [];
  const handlers: string[] = [];

  function toRoute(segments: string[]): string {
    const visible = segments.filter((s) => !(s.startsWith("(") && s.endsWith(")")));
    return visible.length === 0 ? "/" : "/" + visible.join("/");
  }

  function walk(dir: string, segments: string[]) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    const hasPage = entries.some((e) => e.isFile() && /^page\.(tsx|ts|jsx|js)$/.test(e.name));
    const hasRoute = entries.some((e) => e.isFile() && /^route\.(tsx|ts|jsx|js)$/.test(e.name));
    const isDynamic = segments.some((s) => s.includes("["));
    const route = toRoute(segments);

    if (hasPage) {
      if (isDynamic) dynamicTemplates.push(route);
      else staticPages.push(route);
    }
    if (hasRoute && !route.startsWith("/api")) {
      handlers.push(route);
    }

    for (const e of entries) {
      if (e.isDirectory()) walk(path.join(dir, e.name), [...segments, e.name]);
    }
  }

  walk(APP_DIR, []);
  return { staticPages, dynamicTemplates, handlers };
}

export type SiteMap = {
  sections: SiteSection[];
  total: number;
};

export function buildSiteMap(): SiteMap {
  const { staticPages, handlers } = discoverRoutes();

  // Blog + program pages are served by the top-level catch-all at /{slug}.
  const blogSlugs = getAllBlogSlugs();
  const programSlugs = getAllProgramSlugs();
  const dynamicSlugs = new Set([...blogSlugs, ...programSlugs]);

  // Hide internal/utility routes from the human index, but keep everything
  // a visitor could actually land on.
  const HIDE = new Set(["/site-index"]);

  const marketingPages = staticPages
    .filter((p) => !HIDE.has(p))
    // Drop the bare "/{slug}" catch-all template if it surfaces as a static path.
    .filter((p) => p !== "/[slug]")
    .sort((a, b) => a.localeCompare(b));

  const sections: SiteSection[] = [];

  sections.push({
    title: "Pages",
    note: "Fixed marketing, brand, funnel, and legal pages.",
    links: marketingPages.map((href) => ({
      href,
      label: href === "/" ? "Home" : humanize(href.split("/").filter(Boolean).pop() || ""),
    })),
  });

  if (blogSlugs.length) {
    sections.push({
      title: "Blog posts",
      note: "Served at /{slug}.",
      links: blogSlugs
        .map((slug) => ({ href: `/${slug}`, label: getBlogPost(slug)?.title || humanize(slug) }))
        .sort((a, b) => a.label.localeCompare(b.label)),
    });
  }

  if (programSlugs.length) {
    sections.push({
      title: "Program & landing pages",
      note: "Served at /{slug}.",
      links: programSlugs
        .map((slug) => ({ href: `/${slug}`, label: getProgramPage(slug)?.title || humanize(slug) }))
        .sort((a, b) => a.label.localeCompare(b.label)),
    });
  }

  if (DHARMA_COURSE.length) {
    sections.push({
      title: "Discover Your Dharma — lessons",
      links: DHARMA_COURSE.map((l) => ({ href: `/dharma/${l.slug}`, label: l.title })),
    });
  }

  if (EP_COURSE.length) {
    sections.push({
      title: "EnlightenedPreneurs — lessons",
      links: EP_COURSE.map((l) => ({ href: `/ep/${l.slug}`, label: l.title })),
    });
  }

  if (SP_COURSE.length) {
    sections.push({
      title: "Softly Powerful — lessons",
      links: SP_COURSE.map((l) => ({ href: `/sp/${l.slug}`, label: l.title })),
    });
  }

  const publicLandings = discoverPublicLandingPages();
  if (publicLandings.length) {
    sections.push({
      title: "Static landing pages",
      note: "Standalone HTML pages served from /public/.",
      links: publicLandings,
    });
  }

  if (coaches.length) {
    sections.push({
      title: "Coach directory",
      links: coaches
        .map((c) => ({ href: `/directory/${c.slug}`, label: c.name }))
        .sort((a, b) => a.label.localeCompare(b.label)),
    });
  }

  const publicHandlers = handlers.filter((h) => !dynamicSlugs.has(h.replace(/^\//, "")));
  if (publicHandlers.length) {
    sections.push({
      title: "Special routes",
      note: "Redirects and handler endpoints (no standard page).",
      links: publicHandlers
        .map((href) => ({ href, label: href }))
        .sort((a, b) => a.label.localeCompare(b.label)),
    });
  }

  const total = sections.reduce((sum, s) => sum + s.links.length, 0);
  return { sections, total };
}
