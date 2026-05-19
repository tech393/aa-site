import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import GHLForm from "@/components/GHLForm";
import { GHL, SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: { absolute: "The Awakened Life — Free 4-Video Series | Awakened Academy" },
  description:
    "A free 4-video series with Michael Mackintosh. Inside a freedom-based life where meaningful work, a great living, and being true to yourself are all the same thing.",
  alternates: { canonical: "/awakened-life" },
  openGraph: {
    title: "The Awakened Life, A Free 4-Video Series",
    description:
      "A free 4-video series with Michael Mackintosh on doing meaningful work, making a great living, and being true to yourself.",
    url: `${SITE.url}/awakened-life`,
  },
};

const BENEFITS = [
  "Pull back the curtain on a freedom-based life",
  "Find out which of the 3 worlds you're living in",
  "Discover the work only you can do",
  "Step into the freedom you've been working toward",
];

export default function AwakenedLifePage() {
  return (
    <main className="relative isolate w-full overflow-hidden" style={{ background: "#0A0F1F" }}>
      <Image
        src="/img/gifts/training-hero.jpg"
        alt=""
        fill
        priority
        className="-z-20 object-cover"
        style={{ objectPosition: "center 35%" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(115deg, rgba(10,15,31,0.80) 0%, rgba(15,26,56,0.58) 55%, rgba(10,15,31,0.80) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-36 -top-48 -z-10 h-[800px] w-[800px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(201,160,76,0.32) 0%, transparent 60%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-56 -left-44 -z-10 h-[700px] w-[700px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(196,126,126,0.16) 0%, transparent 65%)" }}
      />

      <div className="relative mx-auto grid max-w-container items-center gap-14 px-6 py-16 md:grid-cols-2 md:gap-16 md:px-12 md:py-24">
        {/* LEFT — cinematic title */}
        <div className="text-cream-paper">
          <Reveal>
            <div className="text-[11px] font-bold uppercase tracking-[0.36em] text-gold-light">
              A Free 4-Video Series · Awakened Academy<sup>®</sup>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 font-display text-[clamp(2.75rem,6.4vw,5.25rem)] font-medium leading-[0.96] tracking-[-0.025em] text-cream-paper">
              The <em className="font-normal italic text-gold-light">Awakened</em> Life
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <span className="mt-5 block font-script text-[clamp(2.25rem,4.2vw,3.5rem)] leading-none text-rose">
              pull back the curtain
            </span>
          </Reveal>
          <Reveal delay={0.24}>
            <p
              className="mt-5 max-w-[36ch] font-display text-[clamp(1.0625rem,1.7vw,1.3125rem)] italic leading-[1.45]"
              style={{ color: "rgba(251,245,232,0.85)" }}
            >
              An inside look into a freedom-based life &mdash; where the work you love, the income you need, and who you really are, are all the same thing.
            </p>
          </Reveal>
        </div>

        {/* RIGHT — floating cream card */}
        <Reveal delay={0.12}>
          <div
            className="rounded-lg bg-white p-8 md:p-11 md:pb-9"
            style={{
              boxShadow: "0 32px 80px -24px rgba(0,0,0,0.55)",
            }}
          >
            <div
              aria-hidden
              className="mb-5 h-[2px] w-10"
              style={{ background: "linear-gradient(90deg, #C9A04C 0%, transparent 100%)" }}
            />
            <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.32em] text-teal-deep">
              Inside The Series
            </div>
            <p className="mb-6 font-display text-[1.5rem] font-medium leading-[1.22] tracking-[-0.015em] text-ink">
              The integration most people don&rsquo;t think is <em className="italic text-teal-deep">possible.</em>
            </p>

            <ol className="mb-7 list-none border-b border-line pb-6" style={{ counterReset: "vid" }}>
              {BENEFITS.map((b) => (
                <li
                  key={b}
                  className="relative py-[9px] pl-[30px] font-display text-[1.0625rem] leading-[1.4] text-ink"
                  style={{ counterIncrement: "vid" }}
                >
                  <span
                    aria-hidden
                    className="absolute left-0 top-[10px] font-body text-[11px] font-bold tracking-[0.08em] text-gold-deep"
                    style={{ content: "counter(vid, decimal-leading-zero)" }}
                  >
                    {String(BENEFITS.indexOf(b) + 1).padStart(2, "0")}
                  </span>
                  {b}
                </li>
              ))}
            </ol>

            <GHLForm
              formId={GHL.forms.awakenedLife.id}
              formName={GHL.forms.awakenedLife.name}
              height={GHL.forms.awakenedLife.height}
            />

            <p className="mt-4 text-center text-[11px] tracking-[0.04em] text-ink-muted">
              Private. No spam.
              <span className="ml-2 opacity-65">
                <a href="/privacy" className="mx-1 no-underline hover:text-teal-deep">Privacy</a>
                ·
                <a href="/earnings-disclaimer" className="mx-1 no-underline hover:text-teal-deep">Earnings</a>
              </span>
            </p>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
