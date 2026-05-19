import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import GHLForm from "@/components/GHLForm";
import { GHL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: { absolute: "Enlightenedpreneurs | Build A Spiritual Business That Supports Your Life" },
  description:
    "Free video series on building a meaningful business without selling out, burning out, or pretending to be someone you're not.",
  alternates: { canonical: "/ep" },
  openGraph: {
    title: "Enlightenedpreneurs | Build A Spiritual Business That Supports Your Life",
    description:
      "Free video series on building a meaningful business without selling out, burning out, or pretending to be someone you're not.",
  },
};

export default function EpPage() {
  return (
    <main className="bg-cream-paper">
      {/* TOP — image hero with sunset-amber overlay */}
      <section className="relative isolate flex min-h-[48vh] w-full items-end overflow-hidden">
        <Image
          src="/img/gifts/entrepreneur-hero.jpg"
          alt=""
          fill
          priority
          className="-z-20 object-cover"
          style={{ objectPosition: "center 40%" }}
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(135deg, rgba(22,69,62,0.42) 0%, rgba(184,146,61,0.32) 60%, rgba(230,168,92,0.48) 100%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-48 -top-44 -z-10 h-[700px] w-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(230,168,92,0.32) 0%, transparent 60%)" }}
        />

        <div className="relative mx-auto w-full max-w-container px-6 py-12 md:px-14 md:py-12">
          <Reveal>
            <div
              className="mb-4 text-[11px] font-bold uppercase tracking-[0.34em] text-gold-light"
              style={{ textShadow: "0 1px 4px rgba(22,69,62,0.55)" }}
            >
              A Free Video Series · Awakened Academy<sup>®</sup>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1
              className="mb-2 font-display text-[clamp(2.5rem,6.4vw,5rem)] font-medium leading-[0.98] tracking-[-0.025em] text-cream-paper"
              style={{ textShadow: "0 2px 8px rgba(22,69,62,0.4)" }}
            >
              Enlightened<em className="font-normal italic" style={{ color: "#E6A85C" }}>Preneurs</em>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <span
              className="block font-script text-[clamp(2rem,3.6vw,2.875rem)] leading-none text-cream-paper"
              style={{ textShadow: "0 1px 4px rgba(22,69,62,0.55)" }}
            >
              your gifts are your business
            </span>
          </Reveal>
        </div>
      </section>

      {/* BOTTOM — cream content panel, 2-col */}
      <section
        className="relative w-full"
        style={{
          background:
            "radial-gradient(ellipse at 0% 0%, rgba(232,212,160,0.6) 0%, transparent 50%), radial-gradient(ellipse at 100% 100%, rgba(15,95,85,0.10) 0%, transparent 50%), #FBF5E8",
        }}
      >
        <div className="mx-auto grid max-w-container items-center gap-14 px-6 py-16 md:grid-cols-2 md:gap-18 md:px-14 md:py-20">
          {/* LEFT col */}
          <div>
            <Reveal>
              <p className="mb-7 max-w-[36ch] font-display text-[clamp(1.125rem,1.8vw,1.375rem)] italic leading-[1.4] text-ink-soft">
                Build a <strong className="font-semibold not-italic text-ink">meaningful business</strong> &mdash; without selling out, burning out, or pretending to be someone you&rsquo;re not.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <ul className="list-none space-y-1">
                {[
                  "Get paid for the gifts you've been giving away",
                  "Avoid the crash when things are going well",
                  "Pick the one idea that actually deserves your energy",
                  "Build without compromising your soul",
                ].map((b) => (
                  <li
                    key={b}
                    className="relative border-b border-line py-[14px] pl-7 font-display text-[1.0625rem] leading-[1.4] text-ink last:border-b-0"
                  >
                    <span aria-hidden className="absolute left-0 top-[15px] text-[1rem] text-gold">
                      →
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* RIGHT col — form */}
          <Reveal delay={0.12}>
            <div
              id="ep-form"
              className="scroll-mt-20 rounded-lg bg-white p-8 shadow-3 md:p-10"
            >
              <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.32em] text-gold-deep">
                Start Watching
              </div>
              <h2 className="mb-6 font-display text-[clamp(1.5rem,2.4vw,1.875rem)] font-medium leading-[1.2] tracking-[-0.015em] text-ink">
                Get the free <em className="italic text-teal">video series.</em>
              </h2>

              <GHLForm
                formId={GHL.forms.enlightenedpreneurs.id}
                formName={GHL.forms.enlightenedpreneurs.name}
                height={GHL.forms.enlightenedpreneurs.height}
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
      </section>
    </main>
  );
}
