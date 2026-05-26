export type Social = {
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  twitter?: string;
};

export type Coach = {
  id: string;
  name: string;
  slug: string;
  location: string;
  /** Decimal degrees, used by the directory map. Sourced from the WP listing's ACF map marker. */
  lat?: number;
  lng?: number;
  phone?: string;
  email?: string;
  website?: string;
  imageUrl: string;
  logoUrl?: string;
  categories: string[];
  tier: "premium" | "free";
  directoryUrl: string;
  bio?: string;
  social?: Social;
  ctaLabel?: string;
  ctaUrl?: string;
};

export const DIRECTORY_CATEGORIES = [
  { value: "21-day-challenge-coaching", label: "21-Day Challenge Coaching" },
  { value: "breakthrough-coaching", label: "Breakthrough Coaching" },
  { value: "freedom-design", label: "Freedom Design" },
  { value: "freedom-design-coaching", label: "Freedom Design Coaching" },
  { value: "full-spectrum-coaching", label: "Full Spectrum Coaching" },
  { value: "group-coaching", label: "Group Coaching" },
  { value: "healer", label: "Healer" },
  { value: "health", label: "Health" },
  { value: "high-performing-leaders", label: "High Performing Leaders" },
  { value: "holistic-therapies", label: "Holistic Therapies" },
  { value: "meditation-mindfulness", label: "Meditation / Mindfulness" },
  { value: "mindset", label: "Mindset" },
  { value: "spiritual-life-coach", label: "Spiritual Life Coach" },
  { value: "unique-soul-purpose-coaching", label: "Unique Soul Purpose Coaching" },
  { value: "wellness", label: "Wellness" },
];

export const coaches: Coach[] = [
  {
    id: "dr-disha",
    name: "Dr Disha",
    slug: "dr-disha",
    location: "Ballston Spa, NY, USA",
    phone: "+16072225261",
    website: "http://drdisha.com",
    imageUrl: "https://directory.awakenedacademy.com/wp-content/uploads/2019/03/Untitled-design-2026-02-20T104449.576-e1771844199104.png",
    logoUrl: "https://directory.awakenedacademy.com/wp-content/uploads/2019/03/Untitled-design-2026-02-20T104022.385.png",
    categories: ["high-performing-leaders"],
    tier: "premium",
    directoryUrl: "https://directory.awakenedacademy.com/dt_listing/dr-disha/",
    lat: 43.0483411, lng: -73.8523702,
    bio: "At The Sovereign Heart™, we help women physicians and high-performing leaders finally move from exhausted and fragmented to grounded and whole.\n\nIf you are the strong one everyone counts on — yet inside you are unraveling, running on fumes, and disconnected from who you really are — we help you regulate your nervous system, reclaim your authentic self, and lead your life from love instead of fear.",
    social: {
      facebook: "https://www.facebook.com/dishaphilipllc/",
      instagram: "https://www.instagram.com/dishaphilipllc/",
      linkedin: "https://www.linkedin.com/in/disha-mookherjee-philip-md-facc-07951a102/",
    },
  },
  {
    id: "angeli-sivaraman",
    name: "Angeli Sivaraman",
    slug: "angeli-sivaraman",
    location: "Nashville, TN, USA",
    phone: "+1 443 8129355",
    email: "angeli.sivaraman@gmail.com",
    imageUrl: "https://directory.awakenedacademy.com/wp-content/uploads/2026/03/Untitled-200-x-100-px-1530-x-765-px.png",
    logoUrl: "https://directory.awakenedacademy.com/wp-content/uploads/2026/03/Untitled-200-x-100-px-1.png",
    categories: ["spiritual-life-coach", "breakthrough-coaching", "freedom-design-coaching", "unique-soul-purpose-coaching", "full-spectrum-coaching", "meditation-mindfulness"],
    tier: "premium",
    directoryUrl: "https://directory.awakenedacademy.com/dt_listing/angeli-sivaraman/",
    lat: 36.1626638, lng: -86.7816016,
    bio: "Certified Emotion Code Practitioner, Certified Body Code Practitioner, Certified Belief Code Practitioner, Certified Mindfulness Facilitator.\n\nI worked in healthcare during the pandemic, burned out really badly, and was asking myself the question, \"What is my purpose?\" It sent me on a wild spiritual journey to figure it out.\n\nSince then, I've started a Substack, quit my job, gotten certified in energy healing and coaching, become an author, and do work I love every day.\n\nI do this work because I understand what it's like to crave meaning and purpose, and to find new ways to fulfill that need. I believe each person in their divine purpose can change the world.\n\nI help women in their 30s and 40s recover from burnout, find their purpose, and create meaningful work they love so that they can feel whole, safe, and alive again.",
    social: {
      facebook: "https://www.facebook.com/angeli.sivaraman",
      instagram: "https://www.instagram.com/angeli_sivaraman/",
      linkedin: "https://www.linkedin.com/in/angeli-sivaraman/",
    },
    ctaLabel: "Free Discovery Call",
    ctaUrl: "https://calendly.com/angeli-sivaraman/free-discovery-call",
  },
  {
    id: "mathias-ihlenfeld",
    name: "Mathias Ihlenfeld",
    slug: "mathias-ihlenfeld",
    location: "Austin, Texas, USA",
    website: "https://reclaimcode.bymathias.co/",
    imageUrl: "https://directory.awakenedacademy.com/wp-content/uploads/2026/03/Untitled-200-x-100-px-1530-x-765-px-1.png",
    categories: ["breakthrough-coaching", "full-spectrum-coaching"],
    tier: "premium",
    directoryUrl: "https://directory.awakenedacademy.com/dt_listing/mathias-ihlenfeld/",
    lat: 30.267153, lng: -97.7430608,
  },
  {
    id: "barbara-hunter",
    name: "Barbara Hunter",
    slug: "barbara-hunter",
    location: "British Columbia, Canada",
    phone: "(250) 718 6052",
    website: "https://www.truestreflections.com",
    imageUrl: "https://directory.awakenedacademy.com/wp-content/uploads/2026/05/Screenshot-2026-04-21-140546-Truest-Reflections.png",
    categories: [],
    tier: "premium",
    directoryUrl: "https://directory.awakenedacademy.com/dt_listing/barbara-hunter/",
    lat: 53.7266683, lng: -127.6476206,
  },
  {
    id: "samantha-bushika",
    name: "Samantha Bushika",
    slug: "samantha-bushika",
    location: "New England, USA",
    phone: "+1 (785) 530-5259",
    website: "https://www.samanthabushika.com",
    imageUrl: "https://directory.awakenedacademy.com/wp-content/uploads/2026/03/Samantha-Bushika-Samantha-Bushika-768x384.png",
    categories: ["spiritual-life-coach", "group-coaching"],
    tier: "premium",
    directoryUrl: "https://directory.awakenedacademy.com/dt_listing/samantha-bushika/",
    lat: 43.9653889, lng: -70.8226541,
  },
  {
    id: "sanger-alternative",
    name: "Sanger Alternative Therapies and Education",
    slug: "sanger-alternative-therapies-and-education",
    location: "Centennial, CO, USA",
    phone: "303 727 0477",
    website: "https://christysangertherapies.com/",
    imageUrl: "https://directory.awakenedacademy.com/wp-content/themes/directorytheme/images/Listing-Placeholder.png",
    categories: ["holistic-therapies"],
    tier: "free",
    directoryUrl: "https://directory.awakenedacademy.com/dt_listing/sanger-alternative-therapies-and-education/",
    lat: 39.5942225, lng: -104.9001987,
  },
  {
    id: "bella-luna",
    name: "Bella Luna",
    slug: "bella-luna",
    location: "London, UK",
    website: "https://www.bella-luna.org/",
    imageUrl: "https://directory.awakenedacademy.com/wp-content/themes/directorytheme/images/Listing-Placeholder.png",
    categories: ["spiritual-life-coach"],
    tier: "free",
    directoryUrl: "https://directory.awakenedacademy.com/dt_listing/bella-luna/",
    lat: 51.5072178, lng: -0.1275862,
  },
  {
    id: "megan-pass",
    name: "Megan Pass",
    slug: "megan-pass",
    location: "Holland, Michigan, USA",
    website: "https://www.meganpass.com/",
    imageUrl: "https://directory.awakenedacademy.com/wp-content/uploads/2026/02/Screenshot-2026-02-23-140308-768x329.png",
    categories: ["health"],
    tier: "free",
    directoryUrl: "https://directory.awakenedacademy.com/dt_listing/megan-pass/",
    lat: 42.7893867, lng: -86.1089511,
  },
  {
    id: "insight-soul-coaching",
    name: "Insight Soul Coaching",
    slug: "insight-soul-coaching",
    location: "",
    imageUrl: "https://directory.awakenedacademy.com/wp-content/uploads/2026/02/Untitled-1530-x-765-px-768x384.png",
    categories: ["healer"],
    tier: "free",
    directoryUrl: "https://directory.awakenedacademy.com/dt_listing/insight-soul-coaching/",
  },
  {
    id: "freedom-design",
    name: "Freedom Design",
    slug: "freedom-design",
    location: "Donegal, Ireland",
    website: "https://freedomdesign.ie/",
    imageUrl: "https://directory.awakenedacademy.com/wp-content/uploads/2026/02/Screenshot-2026-02-23-113554-768x278.png",
    categories: ["freedom-design"],
    tier: "free",
    directoryUrl: "https://directory.awakenedacademy.com/dt_listing/freedom-design/",
    lat: 54.653827, lng: -8.1096142,
  },
  {
    id: "rjo-wellness",
    name: "R.J.O. Wellness",
    slug: "r-j-o-wellness",
    location: "Calgary, AB, Canada",
    website: "https://rjowellness.com/",
    imageUrl: "https://directory.awakenedacademy.com/wp-content/uploads/2026/02/Screenshot-2026-02-23-111103.png",
    categories: [],
    tier: "free",
    directoryUrl: "https://directory.awakenedacademy.com/dt_listing/r-j-o-wellness/",
    lat: 51.0447331, lng: -114.0718831,
  },
];
