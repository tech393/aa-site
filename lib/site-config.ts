export const SITE = {
  name: "Awakened Academy",
  tagline: "Live a spiritual life, do meaningful work, and make a great living.",
  url: "https://awakenedacademy.com",
  email: "success@awakenedacademy.com",
  phone: "+1 928-963-7286",
  phoneHref: "tel:+19289637286",
  address: "PO BOX 441, Sedona, AZ 86336",
  directory: "https://directory.awakenedacademy.com/",
  founded: {
    coaching: 2004,
    certifying: 2012,
    institute: 2014,
    statement:
      "Pioneering spiritual life coaching since 2004. Certifying life coaches since 2012.",
  },
  founders: {
    primary: "Michael Mackintosh",
    secondary: "Arielle Hecht",
  },
} as const;

export const GHL = {
  scriptUrl: "https://links.awakenedacademy.com/js/form_embed.js",
  forms: {
    certification: { id: "o7aHhza1LwO05HOinyNz", name: "Certification Page", height: 537 },
    dharma: { id: "aOOIbE3NIvQrAmKp7h5K", name: "Discover Your Dharma", height: 580 },
    enlightenedpreneurs: { id: "6rTeJbPFUr4A0xDtch2Y", name: "Enlightenedpreneurs", height: 580 },
    twentyOneDayChallenge: { id: "rvLvT4aWLhS6qRRiJcou", name: "21 Day Challenge", height: 884 },
    softlyPowerful: { id: "XMpfPDgqmz2fjd45bhYc", name: "Softly Powerful", height: 580 },
    awakenedLife: { id: "I063KZl5QBU8udCFoCJb", name: "awakened life", height: 540 },
  },
  calendars: {
    bookACall: { id: "9G3lOXbWVOP5TmT6xy5r" },
  },
} as const;

export const NAV = {
  primary: [
    { label: "Get Certified", href: "/spiritual-life-coach-certification" },
    { label: "Dharma", href: "/dharma" },
    { label: "Enlightenedpreneurs", href: "/ep" },
    { label: "Introvert", href: "/introvert" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  cta: { label: "Book a Call", href: "/schedule" },
} as const;
