import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import GHLForm from "@/components/GHLForm";
import { GHL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: { absolute: "Discover Your Dharma | Free Course from Awakened Academy" },
  description:
    "Uncover your life's purpose and success will follow you. Get the Discover Your Dharma free course from Michael Mackintosh.",
  alternates: { canonical: "/dharma" },
  openGraph: {
    title: "Discover Your Dharma | Free Course from Awakened Academy",
    description:
      "Uncover your life's purpose and success will follow you. Get the Discover Your Dharma free course from Michael Mackintosh.",
  },
};

export default function DharmaPage() {
  return (
    <main className="relative isolate w-full overflow-hidden bg-cream">
      <Image
        src="/img/gifts/lotus-pool.jpg"
        alt=""
        fill
        priority
        className="-z-20 object-cover"
        style={{ objectPosition: "center 30%" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(110deg, rgba(251,245,232,0.30) 0%, rgba(251,245,232,0.62) 55%, rgba(232,212,160,0.55) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-48 -top-48 -z-10 h-[700px] w-[700px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(201,160,76,0.32) 0%, transparent 65%)" }}
      />

      <div className="relative mx-auto grid max-w-container items-center gap-14 px-6 py-16 md:grid-cols-2 md:gap-14 md:px-12 md:py-24">
        {/* LEFT — ambient title */}
        <div>
          <Reveal>
            <div className="text-[11px] font-bold uppercase tracking-[0.34em] text-gold-deep">
              A Free Course · Awakened Academy<sup>®</sup>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 font-display text-[clamp(2.75rem,6vw,4.75rem)] font-medium leading-[0.98] tracking-[-0.025em] text-ink">
              Discover Your <em className="font-normal italic text-teal-deep">Dharma</em>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <span className="mt-4 block font-script text-[clamp(2.25rem,4vw,3.25rem)] leading-none text-rose">
              your true path is waiting
            </span>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="mt-5 max-w-[34ch] font-display text-[clamp(1.0625rem,1.7vw,1.25rem)] italic leading-[1.45] text-ink-soft">
              Uncover the work you came here to do &mdash; and finally feel the deep yes of living it.
            </p>
          </Reveal>
        </div>

        {/* RIGHT — floating cream card */}
        <Reveal delay={0.12}>
          <div
            id="dharma-form"
            className="scroll-mt-20 rounded-lg bg-white p-8 shadow-3 md:p-10"
          >
            <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.32em] text-teal">
              Begin Here
            </div>
            <p className="mb-6 font-display text-[1.625rem] font-medium leading-[1.2] tracking-[-0.015em] text-ink">
              A free guided path to <em className="italic text-teal">your true work.</em>
            </p>

            <ul className="mb-7 list-none border-b border-line pb-6">
              {[
                "Clarity on what you came here to do",
                "Freedom from years of second-guessing yourself",
                "The first real path forward",
                "Waking up excited about your life again",
              ].map((b) => (
                <li
                  key={b}
                  className="relative py-2 pl-7 font-display text-[1.0625rem] leading-[1.4] text-ink"
                >
                  <span aria-hidden className="absolute left-0 top-[10px] text-[1rem] text-gold">
                    ✦
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            <GHLForm
              formId={GHL.forms.dharma.id}
              formName={GHL.forms.dharma.name}
              height={GHL.forms.dharma.height}
            />

            <p className="mt-4 text-center text-[11px] tracking-[0.04em] text-ink-muted">
              Private. No spam.
              <span className="ml-2 opacity-65">
                <a href="/privacy" className="mx-1 no-underline hover:text-teal">Privacy</a>
                ·
                <a href="/earnings-disclaimer" className="mx-1 no-underline hover:text-teal">Earnings</a>
              </span>
            </p>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
