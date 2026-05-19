/**
 * Softly Powerful, the original WordPress mini-course recovered from
 * the May 2026 WP database dump. 17 audio lessons + intro + quiz.
 *
 * Audio files originally lived at awakenedacademy.com/wp-content/uploads/2014/09/
 * and need to be re-uploaded to /public/audio/softly-powerful/ for playback.
 * If a file is missing, the <SPLesson> component falls back to a "coming soon"
 * placeholder, the rest of the page still works.
 */
export type SPLesson = {
  slug: string;
  number: number | null;
  title: string;
  subtitle?: string;
  /** Path on this site once the MP3 is uploaded (matches original WP filename). */
  audio: string | null;
  /** Original WP file URL, for reference / restore. */
  audioOriginal?: string;
  bullets: string[];
};

export const SP_COURSE: SPLesson[] = [
  {
    slug: "intro",
    number: 0,
    title: "Welcome to Softly Powerful",
    subtitle: "The secrets to dealing with social situations in a world that doesn't 'get' you.",
    audio: "/audio/softly-powerful/Softly-Powerful-Intro.mp3",
    audioOriginal:
      "https://awakenedacademy.com/wp-content/uploads/2014/09/Softly-Powerful-Intro.mp3",
    bullets: [
      "What it means to be 'softly powerful'.",
      "Why the world needs sensitive, deep souls right now.",
      "How to stop apologising for your nature.",
      "What you'll discover across the 16 audio lessons that follow.",
    ],
  },
  {
    slug: "introverts-versus-extroverts",
    number: 1,
    title: "Introverts vs Extroverts",
    subtitle: "What's the actual difference, and why has the world tilted one way?",
    audio: "/audio/softly-powerful/1-Introverts-Versus-Extroverts-Whats-the-Difference.mp3",
    audioOriginal:
      "https://awakenedacademy.com/wp-content/uploads/2014/09/1-Introverts-Versus-Extroverts-Whats-the-Difference.mp3",
    bullets: [
      "The real (not stereotyped) difference between introverts and extroverts.",
      "Why so many sensitive people are quietly miserable in extrovert-built systems.",
      "How to stop performing extroversion and recover your energy.",
      "Why your nervous system isn't broken, it's been over-stimulated.",
    ],
  },
  {
    slug: "the-power-of-introverts",
    number: 2,
    title: "The Power of Introverts",
    subtitle: "Why the world needs you, and how to deal with social situations without selling out.",
    audio: "/audio/softly-powerful/2-The-Power-of-Introverts-and-Why-the-World-Needs-You.mp3",
    audioOriginal:
      "https://awakenedacademy.com/wp-content/uploads/2014/09/2-The-Power-of-Introverts-and-Why-the-World-Needs-You.mp3",
    bullets: [
      "How to deal with work, parties, presentations and speeches without dread.",
      "Master social situations while staying true to yourself, relaxed and confident.",
      "Handle social anxiety and awkwardness without forcing yourself to perform.",
      "Methods that make daily life noticeably easier as a quiet soul.",
    ],
  },
  {
    slug: "the-growth-of-the-extrovert-ideal",
    number: 3,
    title: "The Growth of the Extrovert Ideal",
    subtitle: "How the world got loud, and how to find peace inside it.",
    audio:
      "/audio/softly-powerful/3-The-Growth-of-the-Extrovert-Ideal-and-the-Emergence-of-the-Personality-Cults.mp3",
    audioOriginal:
      "https://awakenedacademy.com/wp-content/uploads/2014/09/3-The-Growth-of-the-Extrovert-Ideal-and-the-Emergence-of-the-Personality-Cults.mp3",
    bullets: [
      "When and why western culture became loud, fast, and personality-driven.",
      "How the 'cult of personality' silently warps how introverts see themselves.",
      "Why social media made the problem 10x worse for sensitive souls.",
      "The first step in remembering who you actually are underneath all of it.",
    ],
  },
  {
    slug: "disover-who-you-are",
    number: 4,
    title: "Discover Who You Are",
    subtitle: "And what you're here to do as an introvert.",
    audio: "/audio/softly-powerful/4-Discover-Who-You-Are-and-What-Youre-Here-to-Do-as-an-Introvert.mp3",
    audioOriginal:
      "https://awakenedacademy.com/wp-content/uploads/2014/09/4-Discover-Who-You-Are-and-What-Youre-Here-to-Do-as-an-Introvert.mp3",
    bullets: [
      "How to tell what your true nature wants vs what culture trained you to want.",
      "The quiet signals your soul is sending you about your real path.",
      "Why introverts often have a clearer sense of purpose than they realise.",
      "How to begin acting on it without burning out.",
    ],
  },
  {
    slug: "deep-questions-to-discover-your-dharma",
    number: 5,
    title: "Deep Questions to Discover Your Dharma",
    subtitle: "The inquiries that uncover the work you came here to do.",
    audio: "/audio/softly-powerful/5-Deep-Questions-to-Discover-Your-Dharma.mp3",
    audioOriginal:
      "https://awakenedacademy.com/wp-content/uploads/2014/09/5-Deep-Questions-to-Discover-Your-Dharma.mp3",
    bullets: [
      "The questions to ask yourself that surface your true calling.",
      "Why most 'find your purpose' exercises miss what introverts actually need.",
      "How to distinguish dharma signals from anxiety / shoulds / hustle pressure.",
      "A simple practice to integrate these inquiries into daily life.",
    ],
  },
  {
    slug: "the-secret-formula-to-lasting-happiness",
    number: 6,
    title: "The Secret Formula to Lasting Happiness",
    subtitle: "What actually creates contentment for deep, sensitive people.",
    audio: "/audio/softly-powerful/6-The-Secret-Formula-to-Lasting-Happiness.mp3",
    audioOriginal:
      "https://awakenedacademy.com/wp-content/uploads/2014/09/6-The-Secret-Formula-to-Lasting-Happiness.mp3",
    bullets: [
      "Why pleasure / stimulation / 'fun' doesn't equal happiness for introverts.",
      "The formula that does work, and why the world won't teach you it.",
      "How small daily structures create more wellbeing than big peak experiences.",
      "What to stop doing immediately if you want to feel better this week.",
    ],
  },
  {
    slug: "how-to-overcome-oversensitivy",
    number: 7,
    title: "How to Overcome Oversensitivity",
    subtitle: "Stay open without absorbing everyone else's noise.",
    audio: "/audio/softly-powerful/7-How-to-Overcome-Oversensitivy.mp3",
    audioOriginal:
      "https://awakenedacademy.com/wp-content/uploads/2014/09/7-How-to-Overcome-Oversensitivy.mp3",
    bullets: [
      "The difference between healthy sensitivity and being a sponge for others.",
      "How to keep your softness without losing your boundaries.",
      "Practical techniques to clear absorbed energy daily.",
      "Why oversensitivity is usually a sign of misalignment, not a defect.",
    ],
  },
  {
    slug: "how-to-deal-with-extrovert-situations",
    number: 8,
    title: "How to Deal with Extrovert Situations",
    subtitle: "Parties, networking, family dinners, big rooms.",
    audio: "/audio/softly-powerful/8-How-to-Deal-with-Extrovert-Situations.mp3",
    audioOriginal:
      "https://awakenedacademy.com/wp-content/uploads/2014/09/8-How-to-Deal-with-Extrovert-Situations.mp3",
    bullets: [
      "How to navigate loud, high-stimulation environments without depleting yourself.",
      "Pre-event, in-event, and recovery practices that actually work.",
      "Scripts for politely leaving early, declining invitations, and protecting your time.",
      "How to enjoy social events on your own terms.",
    ],
  },
  {
    slug: "why-its-okay-to-say-no",
    number: 9,
    title: "Why It's Okay to Say No",
    subtitle: "The most undervalued superpower of the softly powerful.",
    audio: "/audio/softly-powerful/9-Why-its-Okay-to-Say-No.mp3",
    audioOriginal: "https://awakenedacademy.com/wp-content/uploads/2014/09/9-Why-its-Okay-to-Say-No.mp3",
    bullets: [
      "Why saying no is an act of love, not selfishness.",
      "How to say no without breaking the relationship.",
      "The phrases that work, and the ones that quietly damage trust.",
      "How to stop guilt-trip recovery taking up half your week.",
    ],
  },
  {
    slug: "when-to-say-yes",
    number: 10,
    title: "When to Say Yes",
    subtitle: "Knowing which invitations are actually for you.",
    audio: "/audio/softly-powerful/10-When-to-Say-Yes.mp3",
    audioOriginal: "https://awakenedacademy.com/wp-content/uploads/2014/09/10-When-to-Say-Yes.mp3",
    bullets: [
      "The internal signals that tell you something is genuinely a yes.",
      "Why most introverts say yes for the wrong reasons (and how to stop).",
      "How to test whether a 'maybe' is a hidden no.",
      "The yeses that grow you and the yeses that drain you.",
    ],
  },
  {
    slug: "introversion-101-dos-and-donts",
    number: 11,
    title: "Introversion 101, Dos and Don'ts",
    subtitle: "The practical handbook for living as a quiet soul in a loud world.",
    audio: "/audio/softly-powerful/11-Introversion-101-Dos-and-Donts.mp3",
    audioOriginal:
      "https://awakenedacademy.com/wp-content/uploads/2014/09/11-Introversion-101-Dos-and-Donts.mp3",
    bullets: [
      "The non-negotiable daily habits for introvert wellbeing.",
      "The traps to avoid (most of them are 'productivity' advice in disguise).",
      "What to do when you've been overstimulated and the well is empty.",
      "How to design your week so you're never running on fumes.",
    ],
  },
  {
    slug: "overcoming-the-lizard-brain-that-stops-you-from-doing-things",
    number: 12,
    title: "Overcoming the Lizard Brain",
    subtitle: "The part of you that stops you from doing what you came here to do.",
    audio:
      "/audio/softly-powerful/12-Overcoming-the-Lizard-Brain-that-Stops-You-from-Doing-Things.mp3",
    audioOriginal:
      "https://awakenedacademy.com/wp-content/uploads/2014/09/12-Overcoming-the-Lizard-Brain-that-Stops-You-from-Doing-Things.mp3",
    bullets: [
      "Why your nervous system blocks the work that matters most.",
      "How to recognise lizard-brain resistance vs a true 'not now'.",
      "The practice to move through fear without overriding your sensitivity.",
      "How to make starting easier than not starting.",
    ],
  },
  {
    slug: "what-to-do-on-a-rainy-day-when-youre-feeling-down",
    number: 13,
    title: "What to Do on a Rainy Day",
    subtitle: "When you're feeling down, soft, slow, and uninspired.",
    audio: "/audio/softly-powerful/13-What-to-Do-on-a-Rainy-Day-When-Youre-Feeling-Down.mp3",
    audioOriginal:
      "https://awakenedacademy.com/wp-content/uploads/2014/09/13-What-to-Do-on-a-Rainy-Day-When-Youre-Feeling-Down.mp3",
    bullets: [
      "Why low days aren't a problem to fix, they're information.",
      "Gentle practices for shifting state without forcing it.",
      "What to read, watch, listen to, and avoid when you're in the soft place.",
      "How to come out of it with more depth, not less.",
    ],
  },
  {
    slug: "the-power-of-energy-exercise",
    number: 14,
    title: "The Power of Energy",
    subtitle: "Movement practice for sensitive, awakened souls.",
    audio: "/audio/softly-powerful/14-The-Power-of-Energy-Exercise.mp3",
    audioOriginal:
      "https://awakenedacademy.com/wp-content/uploads/2014/09/14-The-Power-of-Energy-Exercise.mp3",
    bullets: [
      "Why most 'fitness' advice is wrong for introverts and empaths.",
      "Movement practices that build energy instead of draining it.",
      "How to know whether your body needs activation or rest.",
      "A daily energy practice you can do in 5 minutes.",
    ],
  },
  {
    slug: "business-success-for-introverts",
    number: 15,
    title: "Business Success for Introverts",
    subtitle: "Build a meaningful career without becoming someone you're not.",
    audio: "/audio/softly-powerful/15-Business-Success-for-Introverts.mp3",
    audioOriginal:
      "https://awakenedacademy.com/wp-content/uploads/2014/09/15-Business-Success-for-Introverts.mp3",
    bullets: [
      "Why introvert-built businesses outperform extrovert hustle in the long run.",
      "The pricing, packaging, and sales approaches that work for quiet souls.",
      "How to market without performing.",
      "The introvert's unfair advantage in the new economy.",
    ],
  },
  {
    slug: "how-to-overcome-being-triggered-hooponopono",
    number: 16,
    title: "How to Overcome Being Triggered",
    subtitle: "The Ho'oponopono practice for sensitive souls.",
    audio: "/audio/softly-powerful/16-How-to-overcome-being-triggered-Hooponopono.mp3",
    audioOriginal:
      "https://awakenedacademy.com/wp-content/uploads/2014/09/16-How-to-overcome-being-triggered-Hooponopono.mp3",
    bullets: [
      "What Ho'oponopono is and why it's particularly powerful for empaths.",
      "The exact phrases to use when you're flooded by someone else's energy.",
      "How to clean the karmic charge instead of arguing the case.",
      "A practice you can do in 60 seconds whenever you feel triggered.",
    ],
  },
];
