/**
 * EnlightenedPreneurs Video Series, recovered from the WP database.
 * Each lesson was originally a separate WP page with an embedded YouTube video.
 * YouTube IDs are intact and embed via youtube-nocookie.com.
 *
 * If more lessons existed (the original series may have been longer), add them
 * here as their content surfaces from other sources.
 */
export type EPLesson = {
  slug: string;
  number: number;
  title: string;
  subtitle: string;
  youtubeId: string;
  body?: string[];
  originalUrl: string;
};

export const EP_COURSE: EPLesson[] = [
  {
    slug: "how-to-stay-successful",
    number: 1,
    title: "How to Stay Successful",
    subtitle: 'The secret to avoid the "crash" when you\'re doing great.',
    youtubeId: "m-qypV1RrtU",
    body: [
      "Most spiritual entrepreneurs have a rhythm we don't talk about. You do the work, you build momentum, things start clicking, and then, almost like clockwork, you crash. The business slows, the energy drops, the inner critic gets loud.",
      "This isn't a personal failing. It's a pattern most awakened souls fall into when their inner system isn't built to hold the success their outer work is creating.",
      "In this video Michael walks you through what actually causes the crash, and the simple inner shift that lets you stay in the upswing without sabotaging it.",
    ],
    originalUrl: "https://awakenedacademy.com/ep-template/",
  },
  {
    slug: "too-many-projects-not-enough-focus",
    number: 2,
    title: "Too Many Projects, Not Enough Focus",
    subtitle: "How to prioritize your ideas and get things finished.",
    youtubeId: "tAa_AcvME3o",
    body: [
      "Most heart-centered creators have the opposite of a focus problem on the surface, they have too many ideas. Every week a new project calls. Every podcast spawns three more directions. The notebook is full of starts.",
      "Underneath that, though, is a focus problem. Without one clear yes, every project takes longer, costs more, and finishes less often.",
      "In this video Michael shares the framework he uses to prioritize ideas, finish the ones that matter, and let the rest wait their turn without guilt.",
    ],
    originalUrl: "https://awakenedacademy.com/too-many-projects-not-enough-focus/",
  },
];
