/**
 * EnlightenedPreneurs Video Series, rebuilt from the WP archive.
 *
 * Lessons 1 and 2 have YouTube IDs recovered from the WP database. The
 * remaining lessons were full-length WP articles in the original series whose
 * embedded videos haven't been re-sourced yet — they render as essay-only
 * lessons until a video ID is added. The slug page renders the iframe only
 * when `youtubeId` is set.
 *
 * Source URLs for the recovered topics live in next.config.ts (301s from the
 * original top-level slugs to /ep). The marketing intent is to keep the
 * old SEO juice flowing into the opt-in funnel, so those redirects stay even
 * after a deep lesson page exists at /ep/<slug>.
 */
export type EPLesson = {
  slug: string;
  number: number;
  title: string;
  subtitle: string;
  youtubeId?: string;
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
  {
    slug: "why-some-people-are-successful-in-business-and-life-and-most-are-not",
    number: 3,
    title: "Why Some People Succeed (and Most Don't)",
    subtitle: "The quiet difference between people who finish the work and the rest of the field.",
    body: [
      "Look at any room of spiritually-minded entrepreneurs and you'll find more talent than the world knows what to do with. Gifts, vision, intuition, devotion. And yet only a small slice ever turn that into a livelihood that actually supports their life.",
      "The difference isn't who is smartest or most spiritual. The difference is who keeps showing up, in plain, structured, unglamorous ways, on the days when nothing inside them wants to.",
      "In this lesson Michael unpacks the inner posture that separates the people who build something real from the people who stay perpetually almost-ready, and what to install in your week so you stop being the second kind.",
    ],
    originalUrl: "https://awakenedacademy.com/why-some-people-are-successful-in-business-and-life-and-most-are-not/",
  },
  {
    slug: "how-to-overcome-self-doubt",
    number: 4,
    title: "How to Move Through Self-Doubt",
    subtitle: "The inner voice that tells you you're not ready is not the boss of your business.",
    body: [
      "Almost every awakened entrepreneur I work with carries the same private fear: that they're not quite the right person to be doing this. Not credentialed enough, not healed enough, not articulate enough, not the version of themselves they imagined would be doing it.",
      "Self-doubt is not a sign you should stop. It's a sign you're standing close to something that matters. The work is not to wait for the doubt to leave, it's to learn how to act with it in the room.",
      "In this lesson Michael walks through how he distinguishes between the doubt that is honest feedback and the doubt that is just fear in a costume, and what he tells clients to do when the inner critic is loudest.",
    ],
    originalUrl: "https://awakenedacademy.com/how-to-overcome-self-doubt/",
  },
  {
    slug: "how-to-start-your-project-and-stop-going-to-bed-late",
    number: 5,
    title: "How to Start the Project (and Stop Going to Bed at 2am)",
    subtitle: "Why the dream keeps stealing your sleep, and what to do about it tonight.",
    body: [
      "If there's a project living in you that you haven't started yet, you already know the cost. It shows up at 11pm when you tell yourself you'll finally outline it. It shows up at 1am when you're still researching instead of writing. It shows up the next morning when you're tired and quietly disappointed in yourself again.",
      "The reason most awakened creators can't start isn't laziness. It's that the project is being asked to be perfect on day one, and no living thing can survive that.",
      "In this lesson Michael shares the small, almost embarrassing starting moves he uses to get a project out of the head and into the world, and how to claim back your evenings without abandoning the dream.",
    ],
    originalUrl: "https://awakenedacademy.com/how-to-start-your-project-and-stop-going-to-bed-late/",
  },
  {
    slug: "are-you-3-feet-away-from-gold",
    number: 6,
    title: "Are You 3 Feet Away from Gold?",
    subtitle: "Most people quit right before the breakthrough. Here's how to tell where you actually are.",
    body: [
      "There's a story Napoleon Hill tells about a miner who digs for years, runs out of money, sells his equipment, and walks away. The man who buys the gear digs three more feet and hits the vein.",
      "Spiritual entrepreneurs do this constantly. They build the email list, do the launches, sit with the client, and then quietly start over with a new niche right before the existing one would have opened. The discomfort right before the breakthrough feels identical to the discomfort of being on the wrong path.",
      "In this lesson Michael shows you how to tell the difference, when persistence is devotion and when it's denial, so you stop walking away from gold three feet down.",
    ],
    originalUrl: "https://awakenedacademy.com/are-you-3-feet-away-from-gold/",
  },
  {
    slug: "do-what-you-love-and-get-paid",
    number: 7,
    title: "Do What You Love and Get Paid for It",
    subtitle: "Turning the work you'd do anyway into the work that pays your rent.",
    body: [
      "Most awakened souls were told, gently and not so gently, that the things they love don't pay. So they learned to keep the loved work in their evenings and weekends, and gave their daytime to something safer and quieter and slowly draining.",
      "It does not have to stay that way. The same gifts you give away for free can support your life, without you having to become someone you're not to charge for them.",
      "In this lesson Michael walks through how to find the version of your gift that the world will actually pay for, how to price it without flinching, and how to do that without losing the part of you that loved it in the first place.",
    ],
    originalUrl: "https://awakenedacademy.com/do-what-you-love-and-get-paid/",
  },
  {
    slug: "how-to-turn-your-ideas-into-a-career",
    number: 8,
    title: "How to Turn Your Ideas Into a Career",
    subtitle: "The bridge from notebook to livelihood is shorter than you think.",
    body: [
      "Almost everyone listening to this has a notebook (or twelve) full of ideas that could be a body of work. The hard part has never been the ideas. The hard part is the bridge between an idea and an income.",
      "Most people try to leap that bridge in one move. Quit the job. Launch the offer. Hope the market shows up. Almost nobody lands that leap. What works is a series of small, low-cost crossings that each pay for the next one.",
      "In this lesson Michael shows you the shape of the bridge, so you can start walking across it next week instead of staring at it for another year.",
    ],
    originalUrl: "https://awakenedacademy.com/how-to-turn-your-ideas-into-a-career/",
  },
  {
    slug: "how-to-find-your-perfect-partner-for-business-success",
    number: 9,
    title: "How to Find the Right People to Build With",
    subtitle: "Partners, mentors, and the few right humans who change what's possible.",
    body: [
      "Whatever you're building, you are not meant to build it alone. The right partner, the right mentor, the right small circle of peers, will get you years further than the same effort spent solo.",
      "The risk is that the wrong partnership is more expensive than no partnership at all. A bad business marriage costs years, money, and pieces of your nervous system you don't get back.",
      "In this lesson Michael walks through how he chooses who to build with, the questions he asks before any meaningful collaboration, and the early signs that a relationship is going to support your work or quietly siphon from it.",
    ],
    originalUrl: "https://awakenedacademy.com/how-to-find-your-perfect-partner-for-business-success/",
  },
  {
    slug: "how-to-make-people-understand-you-and-your-ideas",
    number: 10,
    title: "How to Help People Actually Understand You",
    subtitle: "Why the people you're meant to reach keep missing what you're saying, and the simple fix.",
    body: [
      "Most awakened creators speak in a language they learned from years of inner work. The trouble is that the people they were sent to serve haven't been in those rooms. The words that move you don't always move them.",
      "This is not about dumbing down. It's about meeting people where they actually live, in the language of their lives, then walking them toward what you know.",
      "In this lesson Michael shares the move he uses to translate spiritual ideas into language clients hear and pay for, without trading away the depth that made the work yours in the first place.",
    ],
    originalUrl: "https://awakenedacademy.com/how-to-make-people-understand-you-and-your-ideas/",
  },
  {
    slug: "become-rich-by-giving-your-free-gifts",
    number: 11,
    title: "Get Paid for the Gifts You've Been Giving Away",
    subtitle: "The free advice you give in DMs is the curriculum of your business.",
    body: [
      "Most spiritually-minded coaches and creators are already doing the work for free. The friends who text you when their marriage is falling apart. The coffees that turn into 90-minute sessions. The voice notes. The free reads.",
      "That is not a leak in your business. That is your business, in its raw form, before you put a name and a container and a price around it.",
      "In this lesson Michael shows you how to look at the help you're already giving away and find, inside it, the offer your people would happily pay for, without losing the generosity that made you trustworthy to begin with.",
    ],
    originalUrl: "https://awakenedacademy.com/become-rich-by-giving-your-free-gifts/",
  },
  {
    slug: "do-you-know-the-most-dangerous-and-powerful-word-in-the-world",
    number: 12,
    title: "The Most Powerful Word in Your Business",
    subtitle: "It's two letters long and almost no one says it cleanly.",
    body: [
      "There's a word that, said well, will protect your life's work. The same word, refused, will hollow out a business in eighteen months. It's the word No.",
      "Most awakened entrepreneurs are competent yes-sayers and shaky no-sayers. The yes is loud, gracious, immediate. The no is delayed, apologetic, half-priced, half-true. That asymmetry is what builds the kind of calendar that quietly buries you.",
      "In this lesson Michael walks through how he says no without burning bridges, why a clean no is more generous than a fuzzy yes, and the kinds of opportunity that almost always need to be declined even when they look exactly like the thing you've been praying for.",
    ],
    originalUrl: "https://awakenedacademy.com/do-you-know-the-most-dangerous-and-powerful-word-in-the-world/",
  },
];
