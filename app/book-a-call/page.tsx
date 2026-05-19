import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import MarkdownBody from "@/components/MarkdownBody";
import GHLCalendar from "@/components/GHLCalendar";
import { GHL, SITE } from "@/lib/site-config";
import { getPageContent } from "@/lib/pages";

export const metadata: Metadata = {
  title: { absolute: "Book A Free Discovery Call | Awakened Academy" },
  description:
    "Book a free, no-pressure Discovery Call with the Awakened Academy team. Talk through whether the certification is right for you.",
  alternates: { canonical: "/book-a-call" },
  openGraph: {
    title: "Book A Free Discovery Call",
    description: "Book a free, no-pressure Discovery Call with the Awakened Academy team.",
    url: `${SITE.url}/book-a-call`,
  },
};

export default function BookACallPage() {
  const page = getPageContent("book-a-call");
  const body = page?.body || "";

  return (
    <>
      {/* HERO */}
      <section className="relative isolate w-full overflow-hidden">
        <Image src="/images/golden-light.jpg" alt="" fill priority className="-z-10 object-cover object-center" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/55 via-black/40 to-black/65" />
        <div className="mx-auto max-w-wide px-6 py-24 text-center text-white md:py-28">
          <Reveal>
            <span className="eyebrow !text-gold-lt">From Michael</span>
            <h1 className="mt-4 font-serif text-[clamp(32px,5.5vw,52px)] font-light leading-[1.1]">
              Dear empathic, <em className="text-gold-lt">spiritually-minded soul</em>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-[clamp(15px,2vw,18px)] leading-[1.7] text-white/95 drop-shadow">
              A personal letter on what brought me here, and an invitation to book a free Discovery Call.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[12.5px] text-white/85">
              <span>By <Link href="/about/michael-mackintosh" className="underline-offset-4 hover:underline">Michael Mackintosh</Link></span>
              <span>·</span>
              <span>~28 min read</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BODY */}
      <section className="bg-bg">
        <div className="mx-auto max-w-reading px-6 py-16 md:py-20">
          <MarkdownBody>{body}</MarkdownBody>
        </div>
      </section>

      {/* CALENDAR, book the call after reading the letter */}
      <section id="schedule" className="scroll-mt-20 bg-warm">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <Reveal>
            <div className="text-center">
              <span className="eyebrow">Schedule</span>
              <h2 className="mt-3 font-serif text-[clamp(26px,4vw,36px)] font-light text-ink">
                Pick a time for your <em>Discovery Call</em>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-[15px] leading-[1.7] text-ink2">
                30 minutes. Phone or video. Free of charge. No pressure. We listen first.
              </p>
            </div>
            <div className="mt-10 overflow-hidden rounded-md border border-ink/10 bg-white shadow-md">
              <GHLCalendar calendarId={GHL.calendars.bookACall.id} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* PREFER TO READ FIRST */}
      <section className="bg-bg">
        <div className="mx-auto max-w-wide px-6 py-16 text-center">
          <Reveal>
            <p className="text-[15px] leading-[1.7] text-ink2">
              Want to read about the program first?
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-4">
              <Link href="/spiritual-life-coach-certification" className="inline-block text-[13px] text-teal underline-offset-4 hover:underline">
                The Certification Page →
              </Link>
              <span aria-hidden className="text-soft">·</span>
              <Link href="/curriculum" className="inline-block text-[13px] text-teal underline-offset-4 hover:underline">
                The 14-Module Curriculum →
              </Link>
              <span aria-hidden className="text-soft">·</span>
              <Link href="/masters" className="inline-block text-[13px] text-teal underline-offset-4 hover:underline">
                The Masters Series Essay →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
