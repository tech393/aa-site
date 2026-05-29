/**
 * Transforming Your Money Story — a 4-part free audio course recovered
 * from the WordPress backup (wp-content/uploads/2022/07/).
 *
 * Audio served from R2 via audioUrl(). The "library" array below is the
 * standalone money/abundance teachings from across the years (2014-2022)
 * that live in money-story/library/ and render in a secondary section on
 * the landing page.
 */
import { audioUrl } from "@/lib/audio";

export type MoneyLesson = {
  slug: string;
  number: number;
  title: string;
  subtitle: string;
  audio: string;
  bullets: string[];
};

export const MONEY_COURSE: MoneyLesson[] = [
  {
    slug: "the-big-shift",
    number: 1,
    title: "Transforming Your Money Story — The Big Shift",
    subtitle: "What it actually takes to change your relationship with money, from the inside out.",
    audio: audioUrl("/audio/money-story/1-The-Big-Shift.mp3"),
    bullets: [
      "Why most money advice quietly fails awakened souls.",
      "The internal shift that has to land before anything external moves.",
      "How to recognise the inherited money story running underneath your decisions.",
      "The frame this course uses across the three parts that follow.",
    ],
  },
  {
    slug: "uncover-your-money-stories",
    number: 2,
    title: "Part 1, Uncover Your Hidden Faulty Money Stories",
    subtitle: "The stories about money you don't know you're carrying — until you look.",
    audio: audioUrl("/audio/money-story/2-Uncover-Your-Money-Stories.mp3"),
    bullets: [
      "Where your money beliefs actually came from (and why most of them aren't yours).",
      "The specific questions that surface a hidden money story to the daylight.",
      "How to tell a true belief from an inherited script that just feels true.",
      "What to write down once you've found one so it stops running you.",
    ],
  },
  {
    slug: "forgiving-the-past",
    number: 3,
    title: "Part 2, Forgiving the Past & Cancelling the Faulty Money Programming",
    subtitle: "Releasing the old programming so the new money story has room to land.",
    audio: audioUrl("/audio/money-story/3-Forgiving-The-Past.mp3"),
    bullets: [
      "Why forgiveness is the prerequisite step most money work skips.",
      "The practice for cancelling a money story so it stops running automatically.",
      "How to forgive yourself for the financial decisions you regret without bypassing them.",
      "A simple ritual to mark the end of the old programming.",
    ],
  },
  {
    slug: "your-new-money-story",
    number: 4,
    title: "Part 3, Reveal Your True Values & Create Your New Money Story",
    subtitle: "Write a money story that reflects who you actually are — and the life you actually want.",
    audio: audioUrl("/audio/money-story/4-Your-New-Money-Story.mp3"),
    bullets: [
      "How to surface the values that should be running your money decisions.",
      "The shape of a money story built on those values instead of inherited fear.",
      "How to write your new story so it becomes the default — not a wish you read once.",
      "How to act from the new story this week, in small but unambiguous ways.",
    ],
  },
];

export type MoneyLibraryItem = {
  title: string;
  subtitle: string;
  audio: string;
};

export const MONEY_LIBRARY: MoneyLibraryItem[] = [
  {
    title: "The Law of Attraction — How It Really Works",
    subtitle: "A long-form teaching on the actual mechanics, beyond the bumper-sticker version.",
    audio: audioUrl("/audio/money-story/library/The-Law-of-Attraction-How-It-Really-Works.mp3"),
  },
  {
    title: "How Your Mind Creates Money and Wealth",
    subtitle: "The inner conditions that decide whether wealth shows up — or doesn't.",
    audio: audioUrl("/audio/money-story/library/How-Your-Mind-Creates-Money-and-Wealth.mp3"),
  },
  {
    title: "Secrets of Manifestation",
    subtitle: "What actually makes manifestation work, distilled from years of practice.",
    audio: audioUrl("/audio/money-story/library/Secrets-of-Manifestation.mp3"),
  },
  {
    title: "Busting Loose from the Money Game",
    subtitle: "How to step out of the scarcity dance the culture insists you keep dancing.",
    audio: audioUrl("/audio/money-story/library/Busting-Loose-from-the-Money-Game.mp3"),
  },
  {
    title: "5 Ways to Attract High-Paying Clients",
    subtitle: "Specifically for awakened entrepreneurs charging for their gifts.",
    audio: audioUrl("/audio/money-story/library/5-Ways-To-Attract-High-Paying-Clients.mp3"),
  },
  {
    title: "How to Manifest, Stay Focused",
    subtitle: "Why focus is the part of manifestation most people skip — and how to hold it.",
    audio: audioUrl("/audio/money-story/library/How-to-Manifest-Stay-Focused.mp3"),
  },
  {
    title: "How to Live Your Passions When You Don't Have the Money",
    subtitle: "The first moves for living what you love when the bank account isn't ready yet.",
    audio: audioUrl("/audio/money-story/library/How-to-Live-Your-Passions-When-Broke.mp3"),
  },
  {
    title: "Create Your Own Vision Board",
    subtitle: "A short, practical guide to building a vision board that actually pulls you forward.",
    audio: audioUrl("/audio/money-story/library/Create-Your-Own-Vision-Board.mp3"),
  },
  {
    title: "Manifestation Secret, Bless What You Want",
    subtitle: "The simple shift from grasping at outcomes to blessing them — and why it works.",
    audio: audioUrl("/audio/money-story/library/Manifestation-Secret-Bless-What-You-Want.mp3"),
  },
];
