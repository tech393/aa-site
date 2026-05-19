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
  {
    slug: "michael-mackintosh-with-david-wolfe",
    number: 5,
    title: "Michael Mackintosh with David Wolfe",
    subtitle:
      "A conversation with raw-food guru and superfood expert David Wolfe on dharma, vitality, and aligned living.",
    vimeoId: "12984776",
    originalUrl: "https://awakenedacademy.com/you/michael-mackintosh-with-david-wolfe/",
  },
  {
    slug: "save-yourself-14-years",
    number: 6,
    title: "Save Yourself 14 Years",
    subtitle: "Some very important secrets I've learned in the last 14 years.",
    body: [
      "Most people spend their twenties, thirties, and forties hunting for the work they should be doing. They try jobs, courses, retreats, books, relationships, geographies. They get close to something true, then doubt themselves and pivot. Another two years gone.",
      "What I learned, the hard way, is that your dharma isn't outside you waiting to be discovered. It's already operating inside you. The question is whether you're willing to listen to it loud enough that you actually move.",
      "The 14-year shortcut: stop looking for the perfect external answer and start treating the quiet inner pull as the answer. Trust it. Take one small action toward it this week. Don't wait for clarity, walk into the fog and the clarity arrives.",
      "What I wish someone had told me at 22: the work that matters most often looks the most ordinary from the outside. Your dharma may not be glamorous. It may not be exotic. It may just be the thing your soul keeps quietly pointing at, no matter how many shiny detours you take.",
    ],
    originalUrl: "https://awakenedacademy.com/you/save-yourself-14-years/",
  },
  {
    slug: "the-4-steps-to-get-unstuck",
    number: 7,
    title: "The 4 Steps to Get Unstuck",
    subtitle: "Break free into your dream life. Starting today.",
    body: [
      "Step 1: OWN the fact that things are NOT working out the way you've been living. Most of us avoid this honesty for years. The breakthrough begins when you stop pretending the current path is fine.",
      "Step 2: GET CLEAR on what you actually want. Not what your parents wanted, not what your peers chose, not what social media glorifies. Your real dream, in your own words.",
      "Step 3: TAKE ONE small action toward it today. Not a huge leap. Not a five-year plan. One concrete thing this week that moves you a single step closer.",
      "Step 4: KEEP GOING when fear, doubt, and the lizard brain try to pull you back. The path opens for people who keep walking. Most people quit one step before the breakthrough.",
    ],
    originalUrl: "https://awakenedacademy.com/you/the-4-steps-to-get-unstuck/",
  },
  {
    slug: "how-to-stop-feeling-overwhelmed",
    number: 8,
    title: "How to Stop Feeling Overwhelmed",
    subtitle: "Sharing is the first step. Then comes the structure that lets you breathe again.",
    body: [
      "Overwhelm is rarely a problem of having too much to do. It's usually a problem of having too many open loops, too many unmade decisions, too many things kept in your head instead of on paper.",
      "The fastest way out: a brain dump. Write every single thing on your mind, not your todo list, every fragment, worry, half-formed idea. Once it's all on paper, your nervous system has somewhere to put it.",
      "Then sort: what's mine to do this week, what's mine but not now, what isn't actually mine, and what can simply be deleted? Most overwhelm shrinks 60% in this single sort.",
      "Then commit to the smallest possible next action on the one thing that matters most. Do that thing today. Tomorrow's overwhelm has less power over you the moment you make today move forward.",
    ],
    originalUrl: "https://awakenedacademy.com/you/how-to-stop-feeling-overwhelmed/",
  },
];
