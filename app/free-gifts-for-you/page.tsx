import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: { absolute: "Free Gifts | Awakened Academy" },
  description:
    "All our free gifts in one place. Meditations, guides, podcast, courses. Start your spiritual journey today.",
  alternates: { canonical: "/free-gifts-for-you" },
  openGraph: { title: "Free Gifts For You", description: "Free guides, courses, podcasts, and meditations from Awakened Academy." },
};

type Gift = {
  title: string;
  tagline: string;
  href: string;
  external?: boolean;
  image?: string;
  /** When true, render as circular photo crop (object-cover). Default: icon style (object-contain). */
  photo?: boolean;
  imagePosition?: string;
  cta?: string;
};

const GIFTS: Gift[] = [
  {
    title: "Discover Your Dharma",
    tagline: "Uncover your life's purpose, success will follow you.",
    href: "/dharma",
    image: "/gifts/dharma-circle.png",
    cta: "Start Now",
  },
  {
    title: "The Miracle Journal, Sacred Bonus Training",
    tagline: "9 audio teachings on accessing miracle consciousness and using The Miracle Journal to its full depth. Free for buyers.",
    href: "/miracle",
    image: "/img/miracle/Miracle-Journal.png",
    cta: "Open the Training",
  },
  {
    title: "The Awakened Life, 4-Video Series",
    tagline: "Pull back the curtain. An inside look at a freedom-based lifestyle, with Michael Mackintosh.",
    href: "/awakened-life",
    image: "/img/gifts/entrepreneur-hero.jpg",
    photo: true,
    imagePosition: "center",
    cta: "Watch the Series",
  },
  {
    title: "Introvert's Guide to Success",
    tagline: "Live an authentic, fulfilling life on your own terms, and say no to the stuff that drains you.",
    href: "/introvert",
    image: "/gifts/introvert-guide.png",
    cta: "Start Now",
  },
  {
    title: "Online Business Course",
    tagline: "Discover how to share your gifts and get paid, even if you're just starting out.",
    href: "/ep",
    image: "/gifts/orange-woman.png",
    cta: "Start Now",
  },
  {
    title: "21 Day Challenge",
    tagline: "Bring your project to life in 21 days or less. Free challenge with Michael Mackintosh.",
    href: "/21-day-challenge",
    image: "/img/gifts/michael.jpg",
    photo: true,
    imagePosition: "center top",
    cta: "Take the Challenge",
  },
  {
    title: "Don't Die With Your Song Inside",
    tagline: "A self-compassion podcast with Michael Mackintosh. Honest conversations on awakening, dharma, and not waiting to live the life you came for.",
    href: "/dont-die-with-your-song-inside",
    image: "/images/podcast-cover-song-inside.jpg",
    photo: true,
    imagePosition: "center",
    cta: "Listen Free",
  },
  {
    title: "Your Wish Fulfilled",
    tagline: "Spiritual manifestation methods with Michael Mackintosh. Become your future self now.",
    href: "/your-wish-fulfilled",
    image: "/images/podcast-cover-wish-fulfilled.jpg",
    photo: true,
    imagePosition: "center",
    cta: "Listen Free",
  },
  {
    title: "Spiritual Sense",
    tagline: "Spiritual Recharge, how to stay awake and become your higher self. Michael & Arielle on the inner practice of awakened living.",
    href: "/spiritual-sense",
    image: "/images/podcast-cover-spiritual-sense.jpg",
    photo: true,
    imagePosition: "center",
    cta: "Listen Free",
  },
  {
    title: "Free Meditations Library",
    tagline: "200+ free guided meditations on Insight Timer. 8M+ plays, 125,000+ five-star reviews.",
    href: "/meditations",
    image: "/images/meditations-hero-cliff.jpg",
    photo: true,
    imagePosition: "center",
    cta: "Meditate Now",
  },
];

export default function FreeGiftsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate w-full overflow-hidden">
        <Image src="/gifts/hero-mountains.jpg" alt="Pink and gold mountains at sunrise" fill priority className="-z-10 object-cover object-center" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/45 via-black/25 to-black/55" />
        <div className="mx-auto max-w-widest px-6 py-24 text-center text-white md:py-32">
          <Reveal>
            <span className="eyebrow !text-gold-lt">Free Gifts</span>
            <h1 className="mt-4 font-serif text-[clamp(32px,6vw,56px)] font-light leading-[1.1]">
              Getting Started <em>Gifts</em>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-[clamp(15px,2vw,18px)] leading-[1.7] text-white/95 drop-shadow">
              Don't waste another day discovering your life's purpose, and success will follow you.
            </p>
          </Reveal>
        </div>
      </section>

      {/* GIFTS GRID */}
      <section className="bg-bg">
        <div className="mx-auto max-w-widest px-6 py-20">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {GIFTS.map((g) => (
              <GiftCard key={g.title} gift={g} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal text-white">
        <div className="mx-auto max-w-wide px-6 py-20 text-center">
          <Reveal>
            <h2 className="font-serif text-[clamp(28px,5vw,42px)] font-light">
              Ready to go <em className="text-gold-lt">all in?</em>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[16px] leading-[1.7] text-white/85">
              If our free work has resonated, the next step is the certification,
              the full path to becoming a working spiritual coach.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link href="/spiritual-life-coach-certification#program-info" className="inline-block rounded bg-gold px-7 py-3.5 text-[13px] font-medium text-white transition hover:bg-gold-dark">Download Free Brochure</Link>
              <Link href="/schedule" className="inline-block rounded border-2 border-white px-7 py-3 text-[13px] font-medium text-white transition hover:bg-white hover:text-teal">Book a Discovery Call</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function GiftCard({ gift }: { gift: Gift }) {
  const inner = (
    <>
      {gift.image ? (
        gift.photo ? (
          <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full ring-2 ring-gold/30">
            <Image
              src={gift.image}
              alt={gift.title}
              fill
              className="object-cover"
              style={{ objectPosition: gift.imagePosition ?? "center" }}
              sizes="320px"
            />
          </div>
        ) : (
          <div className="relative mx-auto h-32 w-32 overflow-hidden">
            <Image src={gift.image} alt={gift.title} fill className="object-contain" sizes="320px" />
          </div>
        )
      ) : (
        <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-gold/15 font-serif text-5xl text-gold-dark">
          {gift.title.charAt(0)}
        </div>
      )}
      <h3 className="mt-6 text-center font-serif text-[20px] leading-[1.25] text-ink group-hover:text-teal">{gift.title}</h3>
      <div className="mx-auto mt-3 h-px w-10 bg-gold transition group-hover:w-16" />
      <p className="mt-4 text-center text-[14.5px] leading-[1.7] text-ink2">{gift.tagline}</p>
      <div className="mt-6 text-center text-[12px] font-medium text-teal">
        {gift.cta || "Start Now"} →
      </div>
    </>
  );
  const baseClass = "group flex h-full flex-col rounded-md border border-ink/10 bg-white p-7 shadow-sm transition hover:border-teal/40 hover:shadow-md";
  return (
    <Reveal>
      {gift.external ? (
        <a href={gift.href} target="_blank" rel="noopener" className={baseClass}>{inner}</a>
      ) : (
        <Link href={gift.href} className={baseClass}>{inner}</Link>
      )}
    </Reveal>
  );
}
