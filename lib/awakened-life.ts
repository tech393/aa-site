/**
 * The Awakened Life, a 4-part video series recovered from the WordPress
 * database (originally at /video-1/, /the-3-worlds/, /unique-soul-purpose/,
 * /freedom/). Vimeo IDs intact and embed via player.vimeo.com.
 *
 * The series invites viewers into a freedom-based lifestyle, doing meaningful
 * work, making a great living, and being true to themselves.
 */
export type AwakenedLifeVideo = {
  slug: string;
  number: number;
  title: string;
  subtitle: string;
  vimeoId: string;
  /** Optional second video, for the multi-video lessons. */
  vimeoIdSecondary?: string;
  body?: string[];
};

export const AWAKENED_LIFE: AwakenedLifeVideo[] = [
  {
    slug: "video-1",
    number: 1,
    title: "Pull Back the Curtain",
    subtitle:
      "An inside look into our version of the awakened life. Behind-the-scenes footage of a freedom-based lifestyle where you can do what you love, be true to yourself, make a difference, and get paid.",
    vimeoId: "185587283",
    body: [
      "In this first video, Michael walks you through what an awakened life actually looks like from the inside, day to day.",
      "You'll see what it means to become a high-paid coach, a best-selling author, a video and digital-product creator, and how those roles add up to a freedom-based lifestyle that most people don't realise is available to them.",
      "This isn't a trailer. It's the inside view. Press play, then come back and tell us in the comments what your version of an awakened life looks like.",
    ],
  },
  {
    slug: "the-3-worlds",
    number: 2,
    title: "The 3 Worlds",
    subtitle: "The trap, the illusion, and the awakened life. Which one are you living in right now?",
    vimeoId: "233226578",
    body: [
      "Most people live in one of three worlds. The Trap, where you're stuck in a life that doesn't fit, doing work that doesn't feed you, with no clear way out. The Illusion, where you've gotten the externals but the inside still feels empty. And the Awakened Life, where outer success and inner alignment finally meet.",
      "In this video Michael breaks down the signals each world sends you, and how to tell which one you're actually in (not the one you think you're in).",
      "Once you can name your world, you can start to leave it. That's where this video takes you.",
    ],
  },
  {
    slug: "unique-soul-purpose",
    number: 3,
    title: "Your Unique Soul Purpose",
    subtitle:
      "The work only you can do. Why your purpose is more specific than you've been told, and how to find the exact contribution you came here to make.",
    vimeoId: "188222820",
    vimeoIdSecondary: "188208113",
    body: [
      "Your soul purpose is not a generic life-coach answer. It's not 'help people' or 'spread love.' It's specific, particular, and shaped exactly to your life, your gifts, your scars, your tastes.",
      "In this video Michael walks through how to find the precise edge of that purpose, the place where what you naturally do meets what the world is genuinely missing.",
      "Includes a follow-on session that goes deeper into the process. Watch both back to back if you can.",
    ],
  },
  {
    slug: "freedom",
    number: 4,
    title: "Freedom",
    subtitle:
      "The final video. What freedom actually means once the awakening, the purpose, and the work are integrated, and how to claim yours.",
    vimeoId: "189530661",
    body: [
      "Freedom is not a beach. Freedom is the inner state of being able to choose, every day, the work, the people, the rhythm, the geography, the practices that align with who you are.",
      "In this final video Michael ties the series together. The trap, the illusion, the awakened life, the unique purpose, all of it integrates here.",
      "By the end you'll either know this work is for you, or you'll know it isn't. Both are good answers. If it is, book a free clarity call at the link below and we'll walk the next step together.",
    ],
  },
];
