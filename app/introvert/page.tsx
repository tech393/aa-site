import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import GHLForm from "@/components/GHLForm";
import { GHL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: { absolute: "Softly Powerful, Free Mini-Course for Introverts | Awakened Academy" },
  description:
    "A free audio course for introverts, empaths, and old souls. Build a life and business without selling out.",
  alternates: { canonical: "/introvert" },
  openGraph: {
    title: "Softly Powerful, Free Mini-Course for Introverts | Awakened Academy",
    description:
      "A free audio course for introverts, empaths, and old souls. Build a life and business without selling out.",
  },
};

export default function IntrovertPage() {
  return (
    <main className="relative isolate w-full overflow-hidden bg-cream">
      <Image
        src="/img/gifts/softly-powerful-bg.jpg"
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
            "linear-gradient(135deg, rgba(252,240,240,0.92) 0%, rgba(244,236,226,0.85) 50%, rgba(248,220,220,0.65) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-44 -top-44 -z-10 h-[640px] w-[640px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(248,220,220,0.55) 0%, transparent 65%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-48 -right-40 -z-10 h-[560px] w-[560px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(232,212,160,0.32) 0%, transparent 60%)" }}
      />

      <div className="relative mx-auto grid max-w-container items-center gap-14 px-6 py-16 md:grid-cols-2 md:gap-16 md:px-12 md:py-20">
        {/* LEFT — portrait + title */}
        <div className="text-center">
          <Reveal>
            <div
              className="mx-auto mb-8 h-[280px] w-[280px] overflow-hidden rounded-full bg-cream"
              style={{
                boxShadow:
                  "0 0 0 8px rgba(251,245,232,0.92), 0 0 0 9px rgba(196,126,126,0.25), 0 24px 56px -18px rgba(42,26,15,0.32)",
              }}
            >
              <Image
                src="/img/gifts/introverts-guide.png"
                alt=""
                width={280}
                height={280}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="text-[11px] font-bold uppercase tracking-[0.34em] text-rose" style={{ color: "#9F5F5F" }}>
              A Free Mini-Course · Awakened Academy<sup>®</sup>
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <h1 className="mt-5 font-display text-[clamp(2.5rem,5.6vw,4.25rem)] font-medium leading-[0.98] tracking-[-0.025em] text-ink">
              Softly <em className="font-normal italic" style={{ color: "#9F5F5F" }}>Powerful</em>
            </h1>
          </Reveal>
          <Reveal delay={0.24}>
            <span className="mt-4 block font-script text-[clamp(2.25rem,4vw,3.25rem)] leading-none text-rose">
              you&rsquo;re enough as you are
            </span>
          </Reveal>
          <Reveal delay={0.32}>
            <p className="mx-auto mt-4 max-w-[34ch] font-display text-[clamp(1rem,1.6vw,1.1875rem)] italic leading-[1.5] text-ink-soft">
              For introverts, empaths, and old souls. A quiet path to being fully yourself in a world that won&rsquo;t slow down.
            </p>
          </Reveal>
        </div>

        {/* RIGHT — soft cream card */}
        <Reveal delay={0.12}>
          <div
            id="sp-form"
            className="scroll-mt-20 rounded-lg bg-white p-8 shadow-3 md:p-10"
          >
            <div
              aria-hidden
              className="mb-5 h-[2px] w-10"
              style={{ background: "linear-gradient(90deg, #C47E7E 0%, transparent 100%)" }}
            />
            <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.32em]" style={{ color: "#9F5F5F" }}>
              Begin Gently
            </div>
            <p className="mb-6 font-display text-[1.5rem] font-medium leading-[1.22] tracking-[-0.015em] text-ink">
              A gentle guide to <em className="italic" style={{ color: "#9F5F5F" }}>your kind of success.</em>
            </p>

            <ul className="mb-7 list-none border-b border-line pb-6">
              {[
                "Permission to recharge alone, without guilt",
                "Stay open without absorbing everyone else's noise",
                "Build success on your terms, at your pace",
                "Use your quiet as the superpower it actually is",
              ].map((b) => (
                <li
                  key={b}
                  className="relative py-[9px] pl-[30px] font-display text-[1.0625rem] leading-[1.4] text-ink"
                >
                  <span aria-hidden className="absolute left-0 top-[11px] text-[1rem] text-rose">
                    ❀
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            <GHLForm
              formId={GHL.forms.softlyPowerful.id}
              formName={GHL.forms.softlyPowerful.name}
              height={GHL.forms.softlyPowerful.height}
            />

            <p className="mt-4 text-center text-[11px] tracking-[0.04em] text-ink-muted">
              Private. No spam.
              <span className="ml-2 opacity-65">
                <a href="/privacy" className="mx-1 no-underline hover:text-rose">Privacy</a>
                ·
                <a href="/earnings-disclaimer" className="mx-1 no-underline hover:text-rose">Earnings</a>
              </span>
            </p>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
