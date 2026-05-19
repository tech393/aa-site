import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site-config";
import { getAllBlogSlugs, getAllProgramSlugs } from "@/lib/content";

const STATIC_ROUTES: { path: string; priority: number; changeFreq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  // Top-level conversion path
  { path: "/", priority: 1.0, changeFreq: "weekly" },
  { path: "/spiritual-life-coach-certification", priority: 0.95, changeFreq: "weekly" },
  { path: "/curriculum", priority: 0.9, changeFreq: "monthly" },
  { path: "/brochure", priority: 0.85, changeFreq: "monthly" },
  { path: "/book-a-call", priority: 0.9, changeFreq: "weekly" },
  { path: "/schedule", priority: 0.85, changeFreq: "weekly" },

  // Brand pages
  { path: "/about", priority: 0.85, changeFreq: "monthly" },
  { path: "/about/michael-mackintosh", priority: 0.8, changeFreq: "monthly" },
  { path: "/origin-story", priority: 0.7, changeFreq: "monthly" },
  { path: "/where-we-are-coming-from", priority: 0.65, changeFreq: "yearly" },

  // Reviews & social proof
  // /awakened-academy-reviews 301→ /wall-of-gratitude (May 2026 consolidation)
  { path: "/wall-of-gratitude", priority: 0.85, changeFreq: "weekly" },
  { path: "/awakened-academy-success-stories", priority: 0.75, changeFreq: "monthly" },
  { path: "/featured-coaches", priority: 0.6, changeFreq: "monthly" },

  // Lead magnets
  { path: "/dharma", priority: 0.85, changeFreq: "monthly" },
  { path: "/ep", priority: 0.85, changeFreq: "monthly" },
  { path: "/introvert", priority: 0.85, changeFreq: "monthly" },
  { path: "/miracle", priority: 0.8, changeFreq: "monthly" },
  { path: "/wealth-and-abundance", priority: 0.8, changeFreq: "monthly" },
  { path: "/meditation-gifts", priority: 0.75, changeFreq: "monthly" },
  { path: "/free-gifts-for-you", priority: 0.7, changeFreq: "monthly" },
  { path: "/meditations", priority: 0.75, changeFreq: "monthly" },
  { path: "/theawakenedlife", priority: 0.7, changeFreq: "monthly" },

  // Mentoring
  { path: "/mentoring-with-michael", priority: 0.85, changeFreq: "monthly" },

  // Webinar funnel
  { path: "/open-house", priority: 0.7, changeFreq: "weekly" },
  { path: "/watch-open-house", priority: 0.6, changeFreq: "monthly" },

  // Cornerstone essays (authority content)
  { path: "/masters", priority: 0.9, changeFreq: "yearly" },
  { path: "/why-the-world-needs-you-part-1", priority: 0.8, changeFreq: "yearly" },
  { path: "/why-the-world-needs-you-part-2", priority: 0.75, changeFreq: "yearly" },
  { path: "/why-the-world-needs-you-part-3", priority: 0.8, changeFreq: "yearly" },
  { path: "/why-the-world-desperately-needs-spiritual-coaches-in-2026", priority: 0.7, changeFreq: "yearly" },

  // Blog index
  { path: "/blog", priority: 0.9, changeFreq: "weekly" },

  // Other
  { path: "/contact", priority: 0.6, changeFreq: "yearly" },
  { path: "/jobs", priority: 0.5, changeFreq: "monthly" },

  // Legal
  { path: "/privacy", priority: 0.3, changeFreq: "yearly" },
  { path: "/terms", priority: 0.3, changeFreq: "yearly" },
  { path: "/earnings-disclaimer", priority: 0.3, changeFreq: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((r) => ({
    url: `${SITE.url}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFreq,
    priority: r.priority,
  }));
  const blogEntries: MetadataRoute.Sitemap = getAllBlogSlugs().map((slug) => ({
    url: `${SITE.url}/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));
  const programEntries: MetadataRoute.Sitemap = getAllProgramSlugs()
    .filter((slug) => slug !== "free-meditations" && slug !== "free-gifts-for-you")
    .map((slug) => ({
      url: `${SITE.url}/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    }));
  return [...staticEntries, ...blogEntries, ...programEntries];
}
