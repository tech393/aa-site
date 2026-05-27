import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: { absolute: "Books | Awakened Academy" },
  description:
    "Books by Michael Mackintosh on spiritual awakening, dharma, manifestation, freedom, and the inner life. Wherever you are on the path, one of these will meet you there.",
  alternates: { canonical: "/books" },
  openGraph: {
    title: "Books for the Awakening Journey",
    description:
      "Books by Michael Mackintosh on spiritual awakening, dharma, manifestation, and freedom.",
  },
};

type Book = {
  title: string;
  author: string;
  desc: string;
  cover: string;
  href: string;
  cta: string;
  /** Free ebook opt-in (internal link), vs. external Amazon link. */
  free?: boolean;
};

// Catalog + final links per DAN-HANDOFF.md (2026-05-19), the source of truth.
const FEATURED_BOOK: Book = {
  title: "Why The World Needs YOU",
  author: "Michael Mackintosh",
  desc: "Awakening your inner calling at a time of great need. A short, soul-shaking read for anyone who senses they're here for a reason — and is ready to find out what it is. Yours free as an ebook.",
  cover: "/images/books/why-the-world-needs-you.jpg",
  href: "/free-book",
  cta: "Read it Free",
  free: true,
};

const BOOKS: Book[] = [
  {
    title: "Get It Done",
    author: "Michael Mackintosh",
    desc: "The 21-day mind-hack system to double your productivity, beat procrastination, and finally finish what you start.",
    cover: "/images/books/get-it-done.jpg",
    href: "https://www.amazon.com/dp/1631610635",
    cta: "Get on Amazon",
  },
  {
    title: "Do Nothing, Achieve Everything",
    author: "Michael Mackintosh",
    desc: "Awakening from the grand illusion — freeing yourself from suffering and entering deep peace, love and inner joy.",
    cover: "/images/books/do-nothing-achieve-everything.jpg",
    href: "https://www.amazon.com/dp/1499577915",
    cta: "Get on Amazon",
  },
  {
    title: "Change Your Thoughts, Change Your Life",
    author: "Michael Mackintosh & Arielle Hecht",
    desc: "The book of divine affirmation mantras — powerful thoughts for creating your most elevated life and spiritual fortune.",
    cover: "/images/books/divine-affirmation-mantras.png",
    href: "https://www.amazon.com/dp/B08QW2ZM5G",
    cta: "Get on Amazon",
  },
  {
    title: "Let Go & Awaken",
    author: "Michael Mackintosh",
    desc: "How to let go of all negative emotions and return to your highest state of being.",
    cover: "/images/books/let-go-and-awaken.jpg",
    href: "https://www.amazon.com/dp/B01MTZMDP0",
    cta: "Get on Amazon",
  },
  {
    title: "My Miracle Journal",
    author: "Michael Mackintosh",
    desc: "A daily guided journal for manifesting your heart's true desires with ease and joy.",
    cover: "/images/books/my-miracle-journal.png",
    href: "https://www.amazon.com/dp/B0991J7DRV",
    cta: "Get on Amazon",
  },
  {
    title: "How to Know God",
    author: "Michael Mackintosh & Arielle Hecht",
    desc: "A guide to direct, personal spiritual connection — knowing the Divine for yourself.",
    cover: "/images/books/how-to-know-god.jpg",
    href: "https://www.amazon.com/dp/B00IHTRH6G",
    cta: "Get on Amazon",
  },
  {
    title: "Overcoming Ego & Connecting to Your True Self",
    author: "Michael Mackintosh",
    desc: "A short read on moving beyond the ego and reconnecting with who you really are.",
    cover: "/images/books/overcoming-ego.jpg",
    href: "https://www.amazon.com/dp/B00JYLH53G",
    cta: "Get on Amazon",
  },
];

function FlowerOfLife({ className, stroke }: { className?: string; stroke: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" stroke={stroke} strokeWidth="0.6" aria-hidden="true">
      <circle cx="100" cy="100" r="26" />
      <circle cx="100" cy="74" r="26" />
      <circle cx="100" cy="126" r="26" />
      <circle cx="77.5" cy="87" r="26" />
      <circle cx="122.5" cy="87" r="26" />
      <circle cx="77.5" cy="113" r="26" />
      <circle cx="122.5" cy="113" r="26" />
      <circle cx="100" cy="48" r="26" />
      <circle cx="100" cy="152" r="26" />
      <circle cx="55" cy="74" r="26" />
      <circle cx="145" cy="74" r="26" />
      <circle cx="55" cy="126" r="26" />
      <circle cx="145" cy="126" r="26" />
      <circle cx="100" cy="100" r="78" />
    </svg>
  );
}

export default function BooksPage() {
  return (
    <>
      {/* HERO */}
      <header className="relative isolate overflow-hidden bg-gradient-to-b from-blush-mist via-cream to-cream-paper text-center">
        <FlowerOfLife
          className="pointer-events-none absolute left-1/2 top-[-80px] h-[520px] w-[520px] -translate-x-1/2 opacity-10"
          stroke="#C9A961"
        />
        <div className="relative z-10 mx-auto max-w-wide px-6 py-28 md:py-32">
          <Reveal>
            <h1 className="mx-auto max-w-[14ch] font-serif text-[clamp(40px,5.5vw,68px)] font-normal leading-[1.05] tracking-[-0.02em] text-ink">
              Books for the <em className="italic text-teal">awakening</em> journey
            </h1>
            <p className="mx-auto mt-7 max-w-[54ch] text-[clamp(18px,2.2vw,20px)] leading-[1.6] text-ink2">
              Wherever you are on the path, one of these will meet you there.
            </p>
          </Reveal>
        </div>
      </header>

      {/* FEATURED BOOK */}
      <section className="bg-cream-paper">
        <div className="mx-auto max-w-page px-6 py-20 md:py-24">
          <Reveal>
            <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] md:gap-14 lg:gap-20">
              <Link
                href={FEATURED_BOOK.href}
                className="group mx-auto block w-full max-w-[360px] transition-transform duration-300 ease-out hover:-translate-y-1 md:mx-0 md:max-w-none"
              >
                <div className="relative aspect-[2/3] w-full overflow-hidden rounded-lg shadow-xl transition-shadow duration-300 group-hover:shadow-2xl">
                  <Image
                    src={FEATURED_BOOK.cover}
                    alt={`${FEATURED_BOOK.title} book cover`}
                    fill
                    sizes="(min-width: 768px) 440px, 90vw"
                    priority
                    className="object-cover"
                  />
                </div>
              </Link>
              <div className="text-center md:text-left">
                <span className="inline-block rounded-full bg-gold/15 px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.14em] text-gold-deep">
                  Start here &middot; Free ebook
                </span>
                <h2 className="mt-5 font-serif text-[clamp(30px,4vw,46px)] font-normal leading-[1.1] tracking-[-0.015em] text-ink">
                  {FEATURED_BOOK.title}
                </h2>
                <p className="mt-2 text-[13px] tracking-wide text-soft">{FEATURED_BOOK.author}</p>
                <p className="mx-auto mt-5 max-w-[52ch] text-[17px] leading-[1.65] text-ink2 md:mx-0">
                  {FEATURED_BOOK.desc}
                </p>
                <div className="mt-7">
                  <Link
                    href={FEATURED_BOOK.href}
                    className="inline-block rounded bg-teal px-8 py-3.5 text-[16px] font-semibold text-cream-paper transition hover:-translate-y-px hover:bg-teal-deep"
                  >
                    {FEATURED_BOOK.cta}
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BOOK GRID */}
      <main className="bg-cream">
        <div className="mx-auto max-w-page px-6 py-20 md:py-24">
          <Reveal>
            <div className="mb-12 text-center">
              <span className="eyebrow">More books by Michael</span>
              <h2 className="mx-auto mt-3 max-w-[20ch] font-serif text-[clamp(26px,3vw,36px)] font-normal leading-[1.15] tracking-[-0.01em] text-ink">
                The wider library
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-x-9 md:gap-y-12">
            {BOOKS.map((book) => {
              const coverLink = book.free
                ? { href: book.href }
                : { href: book.href, target: "_blank", rel: "noopener noreferrer" };
              return (
                <Reveal key={book.title}>
                  <article className="flex flex-col items-center text-center">
                    <Link
                      {...coverLink}
                      className="group block w-full transition-transform duration-300 ease-out hover:-translate-y-1"
                    >
                      <div className="relative aspect-[2/3] w-full overflow-hidden rounded-lg shadow-md transition-shadow duration-300 group-hover:shadow-xl">
                        <Image
                          src={book.cover}
                          alt={`${book.title} book cover`}
                          fill
                          sizes="(min-width: 768px) 340px, (min-width: 640px) 45vw, 90vw"
                          className="object-cover"
                        />
                      </div>
                    </Link>
                    <h2 className="mt-5 text-[19px] font-semibold leading-tight text-ink">{book.title}</h2>
                    <p className="mt-1.5 text-[13px] tracking-wide text-soft">{book.author}</p>
                    <p className="mt-3 max-w-[34ch] text-[15px] leading-[1.55] text-ink2">{book.desc}</p>
                    <Link
                      {...coverLink}
                      className="mt-5 inline-block rounded bg-teal px-6 py-2.5 text-[15px] font-semibold text-cream-paper transition hover:-translate-y-px hover:bg-teal-deep"
                    >
                      {book.cta}
                    </Link>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <div className="mx-auto mt-20 flex max-w-[340px] items-center justify-center gap-4 text-gold">
            <span className="h-px flex-1 bg-ink/10" />
            <span className="text-base">&#10022;</span>
            <span className="h-px flex-1 bg-ink/10" />
          </div>
        </div>
      </main>

      {/* FINAL CTA */}
      <section className="relative isolate overflow-hidden bg-navy text-center text-cream-paper">
        <FlowerOfLife
          className="pointer-events-none absolute bottom-[-120px] left-1/2 h-[480px] w-[480px] -translate-x-1/2 opacity-[0.07]"
          stroke="#DCBA70"
        />
        <div className="relative z-10 mx-auto max-w-wide px-6 py-24">
          <Reveal>
            <span className="eyebrow !text-gold-lt">Ready to go deeper?</span>
            <h2 className="mx-auto mt-4 max-w-[18ch] font-serif text-[clamp(30px,3.5vw,44px)] font-normal leading-[1.15] tracking-[-0.01em]">
              The books are the beginning. The certification is the path.
            </h2>
            <p className="mx-auto mt-5 max-w-[48ch] text-[17px] leading-[1.6] text-cream-paper/70">
              If the writing has resonated, the next step is the full training — becoming a certified spiritual life
              coach with Awakened Academy.
            </p>
            <div className="mt-8">
              <Link
                href="/spiritual-life-coach-certification"
                className="inline-block rounded bg-gold px-9 py-4 text-[16px] font-semibold text-navy transition hover:-translate-y-px hover:bg-gold-deep"
              >
                Explore the Certification
              </Link>
            </div>
            <div className="mt-6">
              <Link
                href="/free-gifts-for-you"
                className="inline-block border-b border-cream-paper/30 pb-0.5 text-[15px] font-medium text-cream-paper/70 transition hover:border-cream-paper/65 hover:text-cream-paper"
              >
                Not ready for that yet? Start with our free gifts &rarr;
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
