/**
 * Discover Your Dharma, the original video course recovered from the WP database
 * (lived at /you/* on the WordPress site). 5 Vimeo video lessons + 3 written
 * lessons + 1 closing booking page. Sequenced by original publish dates.
 *
 * Vimeo IDs are intact and embed via player.vimeo.com (no auth required).
 */
export type DharmaLesson = {
  slug: string;
  number: number | null;
  title: string;
  subtitle?: string;
  vimeoId?: string;
  /** Long-form body paragraphs for video-less lessons. */
  body?: string[];
  /** Original WP URL (for reference). */
  originalUrl: string;
};

export const DHARMA_COURSE: DharmaLesson[] = [
  {
    slug: "why-dharma",
    number: 1,
    title: "Why Dharma?",
    subtitle: "Dharma is the only real map to your aligned life's direction.",
    vimeoId: "85097431",
    originalUrl: "https://awakenedacademy.com/you/why-dharma/",
  },
  {
    slug: "what-is-your-dharma",
    number: 2,
    title: "What Is Your Dharma?",
    subtitle:
      "The seed of knowing is within you. Watch this video to get crystal clear on your personal dharma.",
    vimeoId: "85224716",
    originalUrl: "https://awakenedacademy.com/you/what-is-your-dharma/",
  },
  {
    slug: "how-to-live-your-dharma",
    number: 3,
    title: "How to Live Your Dharma",
    subtitle: "The secrets to actualizing your dream life (that no one talks about).",
    vimeoId: "85166295",
    originalUrl: "https://awakenedacademy.com/you/how-to-live-your-dharma/",
  },
  {
    slug: "the-3-big-myths",
    number: 4,
    title: "The 3 Big Myths",
    subtitle:
      "That make it almost impossible for you to live your true calling. Watch the video to discover the hidden lies.",
    vimeoId: "56480896",
    originalUrl: "https://awakenedacademy.com/you/the-3-big-mthys/",
  },
];
