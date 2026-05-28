export type Podcast = {
  slug: string;
  eyebrow: string;
  title: string;
  /** Word or phrase inside title that should be italicized */
  titleEmphasis?: string;
  attribution: string;
  description: string;
  cover: string;
  coverAlt: string;
  apple: string;
  spotify?: string;
};

export const PODCASTS: Record<string, Podcast> = {
  "dont-die-with-your-song-inside": {
    slug: "dont-die-with-your-song-inside",
    eyebrow: "A self-compassion podcast",
    title: "Don't Die With Your Song Inside",
    titleEmphasis: "Song",
    attribution: "with Michael Mackintosh",
    description:
      "Honest conversations on awakening, dharma, and not waiting to live the life you came for. Self-compassion as the entry point, not the reward.",
    cover: "/images/podcast-cover-song-inside.jpg",
    coverAlt: "Don't Die With Your Song Inside, podcast cover art",
    apple:
      "https://podcasts.apple.com/us/podcast/dont-die-with-your-song-inside-a-self-compassion/id1849471624",
    spotify:
      "https://open.spotify.com/show/5k76d05ymYnlu08cR3BMpT?si=e8801ff3fdeb4e12",
  },
  "your-wish-fulfilled": {
    slug: "your-wish-fulfilled",
    eyebrow: "Spiritual manifestation methods",
    title: "Your Wish Fulfilled",
    titleEmphasis: "Wish",
    attribution: "with Michael Mackintosh",
    description:
      "Attain everything now. Practical, sacred manifestation methods for becoming your future self in this lifetime, not waiting for a someday that never comes.",
    cover: "/images/podcast-cover-wish-fulfilled.jpg",
    coverAlt: "Your Wish Fulfilled, podcast cover art",
    apple:
      "https://podcasts.apple.com/us/podcast/your-wish-fulfilled-become-your-future-self-now/id1675962368",
    spotify: "https://open.spotify.com/show/4sITnQjmIMGa4ZV7BKk81l",
  },
  "spiritual-sense": {
    slug: "spiritual-sense",
    eyebrow: "How to stay awake",
    title: "Spiritual Sense",
    titleEmphasis: "Sense",
    attribution: "with Michael Mackintosh & Arielle Hecht",
    description:
      "Spiritual Recharge. Meditations, talks, and reflections on how to stay awake and become your higher self in a world that pulls you out of it.",
    cover: "/images/podcast-cover-spiritual-sense.jpg",
    coverAlt: "Spiritual Sense, podcast cover art",
    apple:
      "https://podcasts.apple.com/us/podcast/spiritual-sense-spiritual-recharge-how-to-stay-awake/id1580259632",
    spotify: "https://open.spotify.com/show/32WIzPOOqODjYgjM79T090",
  },
};
