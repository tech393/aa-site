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
import { AWAKENED_LIFE } from "@/lib/awakened-life";
import { coaches } from "@/lib/coaches";

export type SiteLink = { href: string; label: string };
export type SiteSection = {
  title: string;
  note?: string;
  links: SiteLink[];
  pending?: boolean;
};

export type PendingItem = { slug: string; label: string; source: string };

// Content extracted from the old WordPress install (in
// dan-package/EXTRACTED-CONTENT/) that has NOT yet been migrated to a route on
// the new Next.js site. Maintained by hand: when an item lands on the live
// site, delete it from this list.
//
// Excluded on purpose: spam doorways (modafinil), redirected URLs (apply,
// affiliate-program), off-brand legacy posts (Whole Foods, vegetarian bulletproof
// diet), and the 2025 dated versions of posts that already shipped with a 2026
// title (e.g. top-marketing-for-coaches → 2026 version lives, 2025 superseded).
const PENDING_BLOG_POSTS: PendingItem[] = [
  { slug: "1000-miles", label: "1000 Miles", source: "06-BLOG-POSTS/1000-miles.md" },
  {
    slug: "15-profitable-spiritual-business-ideas-for-modern-entrepreneurs",
    label: "15 Profitable Spiritual Business Ideas for Modern Entrepreneurs",
    source: "06-BLOG-POSTS/15-profitable-spiritual-business-ideas-for-modern-entrepreneurs.md",
  },
  {
    slug: "a-course-in-spiritual-freedom-from-disordered-eating",
    label: "A Course in Spiritual Freedom from Disordered Eating",
    source: "06-BLOG-POSTS/a-course-in-spiritual-freedom-from-disordered-eating.md",
  },
  {
    slug: "copy-cats-copying-other-copy-cats",
    label: "Copy Cats Copying Other Copy Cats",
    source: "06-BLOG-POSTS/copy-cats-copying-other-copy-cats.md",
  },
  {
    slug: "essential-habits-to-kickstart-your-success",
    label: "Essential Habits to Kickstart Your Success",
    source: "06-BLOG-POSTS/essential-habits-to-kickstart-your-success.md",
  },
  { slug: "feeling-fear-anyway", label: "Feeling Fear Anyway", source: "06-BLOG-POSTS/feeling-fear-anyway.md" },
  { slug: "go-for-it", label: "Go For It", source: "06-BLOG-POSTS/go-for-it.md" },
  {
    slug: "how-talking-in-3rd-person-is-hilarious-and-why-it-can-extend-your-lifespan",
    label: "How Talking in 3rd Person Is Hilarious (and Can Extend Your Lifespan)",
    source: "06-BLOG-POSTS/how-talking-in-3rd-person-is-hilarious-and-why-it-can-extend-your-lifespan.md",
  },
  {
    slug: "how-to-attract-like-minded-friends",
    label: "How to Attract Like-Minded Friends",
    source: "06-BLOG-POSTS/how-to-attract-like-minded-friends.md",
  },
  {
    slug: "how-to-get-things-done",
    label: "How to Get Things Done",
    source: "06-BLOG-POSTS/how-to-get-things-done.md",
  },
  {
    slug: "how-to-live-life-to-the-fullest-episode-1",
    label: "How to Live Life to the Fullest — Episode 1",
    source: "06-BLOG-POSTS/how-to-live-life-to-the-fullest-episode-1.md",
  },
  {
    slug: "how-to-stop-feeling-overwhelmed-i-cannot-believe-its-this-easy",
    label: "How to Stop Feeling Overwhelmed (I Cannot Believe It's This Easy)",
    source: "06-BLOG-POSTS/how-to-stop-feeling-overwhelmed-i-cannot-believe-its-this-easy.md",
  },
  {
    slug: "how-to-take-breaks-and-why-is-it-important",
    label: "How to Take Breaks (and Why It's Important)",
    source: "06-BLOG-POSTS/how-to-take-breaks-and-why-is-it-important.md",
  },
  {
    slug: "how-to-win-in-the-game-of-life-interview-with-robert-scheinfeld-michael-mackintosh",
    label: "How to Win in the Game of Life — Interview with Robert Scheinfeld",
    source: "06-BLOG-POSTS/how-to-win-in-the-game-of-life-interview-with-robert-scheinfeld-michael-mackintosh.md",
  },
  {
    slug: "stepping-out-into-the-unknown",
    label: "Stepping Out Into the Unknown",
    source: "06-BLOG-POSTS/stepping-out-into-the-unknown.md",
  },
  {
    slug: "stop-ruining-your-life-and-free-yourself-from-the-jail-of-wasting-your-time",
    label: "Stop Ruining Your Life and Free Yourself from Wasting Your Time",
    source: "06-BLOG-POSTS/stop-ruining-your-life-and-free-yourself-from-the-jail-of-wasting-your-time.md",
  },
  {
    slug: "the-completely-relaxed-meditation-how-to-relax-and-let-go-of-stress-worry-and-tension-now",
    label: "The Completely Relaxed Meditation — How to Let Go of Stress",
    source: "06-BLOG-POSTS/the-completely-relaxed-meditation-how-to-relax-and-let-go-of-stress-worry-and-tension-now.md",
  },
  {
    slug: "top-rated-spiritual-life-coach-certification-programs-of-2025",
    label: "Top-Rated Spiritual Life Coach Certification Programs (refresh to 2026)",
    source: "06-BLOG-POSTS/top-rated-spiritual-life-coach-certification-programs-of-2025.md",
  },
  {
    slug: "top-spiritual-life-coach-training-programs-for-2026",
    label: "Top Spiritual Life Coach Training Programs for 2026",
    source: "06-BLOG-POSTS/top-spiritual-life-coach-training-programs-for-2026.md",
  },
  { slug: "ultimate-productive", label: "Ultimate Productive", source: "06-BLOG-POSTS/ultimate-productive.md" },
  {
    slug: "what-comes-from-the-heart-goes-to-the-heart",
    label: "What Comes from the Heart Goes to the Heart",
    source: "06-BLOG-POSTS/what-comes-from-the-heart-goes-to-the-heart.md",
  },
  {
    slug: "why-the-world-needs-you-to-share-you-gifts",
    label: "Why the World Needs You to Share Your Gifts",
    source: "06-BLOG-POSTS/why-the-world-needs-you-to-share-you-gifts.md",
  },
];

// Non-blog WordPress pages still to migrate or finish.
const PENDING_OTHER: PendingItem[] = [
  {
    slug: "podcast",
    label: "Podcast (lead magnet hub) — not yet built",
    source: "03-LEAD-MAGNETS/10-podcast.md",
  },
  {
    slug: "wall-of-gratitude",
    label: "Wall of Gratitude — route live, body stubbed",
    source: "01-CORE-BRAND/04-wall-of-gratitude.md",
  },
];

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
function discoverPublicLandingPages(skip: Set<string>): { href: string; label: string }[] {
  if (!fs.existsSync(PUBLIC_DIR)) return [];
  const pages: { href: string; label: string }[] = [];
  for (const entry of fs.readdirSync(PUBLIC_DIR, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    // /migrated/ is the WP image mirror, not a landing page.
    if (entry.name === "migrated") continue;
    if (skip.has(entry.name)) continue;
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

  if (AWAKENED_LIFE.length) {
    sections.push({
      title: "The Awakened Life — videos",
      note: "Free 4-part video series. Opt-in at /awakened-life; videos served as static HTML from /public/.",
      links: AWAKENED_LIFE.map((v) => ({
        href: `/${v.slug}`,
        label: `${v.number}. ${v.title}`,
      })),
    });
  }

  // Don't double-list the awakened-life videos under the generic landing
  // pages bucket — they have their own grouped section above.
  const awakenedLifeSlugs = new Set(AWAKENED_LIFE.map((v) => v.slug));
  const publicLandings = discoverPublicLandingPages(awakenedLifeSlugs);
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

  // Already-live blog slugs, so a pending item that quietly shipped drops off
  // this list without us having to remember to delete it.
  const liveBlogSet = new Set(blogSlugs);
  const liveStaticSet = new Set(marketingPages.map((p) => p.replace(/^\//, "")));

  // PENDING_OTHER entries deliberately keep showing even if a stub route is
  // already live — the point is that the *content* is still missing
  // (wall-of-gratitude body is stubbed).
  const pendingBlog = PENDING_BLOG_POSTS.filter(
    (p) => !liveBlogSet.has(p.slug) && !liveStaticSet.has(p.slug),
  );
  const pendingOther = PENDING_OTHER;

  if (pendingBlog.length) {
    sections.push({
      title: "Pending from WordPress — blog posts",
      note:
        "Extracted from the old WP install but not yet migrated. Source paths are in /dan-package/DAN-PACKAGE/EXTRACTED-CONTENT/. Excluded: spam doorways, off-brand legacy posts, and dated posts already superseded.",
      pending: true,
      links: pendingBlog
        .map((p) => ({ href: `/${p.slug}`, label: `${p.label}  ·  ${p.source}` }))
        .sort((a, b) => a.label.localeCompare(b.label)),
    });
  }

  if (pendingOther.length) {
    sections.push({
      title: "Pending from WordPress — other",
      note: "Non-blog pages from the WP extract still to migrate or finish.",
      pending: true,
      links: pendingOther.map((p) => ({
        href: `/${p.slug}`,
        label: `${p.label}  ·  ${p.source}`,
      })),
    });
  }

  const total = sections
    .filter((s) => !s.pending)
    .reduce((sum, s) => sum + s.links.length, 0);
  return { sections, total };
}
