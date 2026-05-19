import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import TrustStrip from "@/components/TrustStrip";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: { absolute: "Awakened Academy: Spiritual Life Coach Certification" },
  description:
    "Become a certified spiritual life coach. 650+ certified coaches in 25+ countries since 2012. Live a spiritual life, do meaningful work, make a great living.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Awakened Academy: Spiritual Life Coach Certification",
    description:
      "Become a certified spiritual life coach. 650+ certified coaches in 25+ countries since 2012. Live a spiritual life, do meaningful work, make a great living.",
    url: SITE.url,
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero
        image="/images/woman-lotus-beach-gold.jpg"
        imageAlt="A woman in lotus meditation pose at sunrise"
        title={<>Live a spiritual life, do <em className="text-gold-lt">meaningful</em> work and <strong className="font-medium">make a great living in 2026</strong></>}
        ctaLabel="Download Free Brochure"
        ctaHref="/spiritual-life-coach-certification#program-info"
        ctaSecondaryLabel="Book a Free Call"
        ctaSecondaryHref="/schedule"
        align="right"
        overlayOpacity={0.4}
      />

      <TrustStrip variant="cream" />

      {/* Welcome, original copy from awakenedacademy.com home page */}
      <section className="bg-bg">
        <div className="mx-auto max-w-widest px-6 py-20">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <div className="eyebrow">A blessing for you</div>
              <p className="cursive mt-5 text-[clamp(42px,6vw,68px)]">
                You came here for a reason.
              </p>
              <h2 className="mt-10 font-serif text-[clamp(24px,4vw,36px)] leading-[1.3] text-ink">
                Welcome to <span className="font-medium">Awakened Academy<span className="text-teal">®</span></span>, the International Spiritual Life Coach
                Training, Certification and Sacred Online Business Academy for Empathic,
                Spiritual Souls.
              </h2>
            </div>
          </Reveal>

          <div className="mt-16 grid items-center gap-12 md:grid-cols-2">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-md shadow-xl">
                <Image
                  src="/images/woman-on-top-full.jpg"
                  alt="A woman on a mountain peak at sunset"
                  fill
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal>
              <div className="text-[17px] leading-[1.85] text-ink2">
                <p>
                  Welcome home, we're happy you're here. Awakened Academy is your place to
                  become part of a new generation of{" "}
                  <em className="text-ink">spiritually-based coaches</em> and entrepreneurs here to
                  make a real difference, uplifting the consciousness and wellbeing of our world,
                  while making a great living and enjoying your precious life and time.
                </p>
                <p className="mt-5">
                  {SITE.founded.statement}
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="mx-auto mt-16 max-w-3xl">
              <h3 className="text-center font-serif text-[clamp(22px,3.6vw,30px)] font-light leading-[1.3] text-ink">
                Live A Spiritual Life, Do <em>Meaningful</em> Work And <strong className="font-medium">Make A Great Living</strong>
              </h3>
              <ul className="mt-8 space-y-5 text-[17px] leading-[1.8] text-ink2">
                <li className="flex gap-4">
                  <span className="mt-[10px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>Discover how you can become a certified spiritual life coach, best-selling author and awakened leader.</span>
                </li>
                <li className="flex gap-4">
                  <span className="mt-[10px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>Understand your own unique soul purpose, the essential missing link to your freedom.</span>
                </li>
                <li className="flex gap-4">
                  <span className="mt-[10px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>Learn how you can live your awakened life and do meaningful, prosperous work in the world that makes a real difference.</span>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Single closing CTA */}
      <section className="bg-teal text-white">
        <div className="mx-auto max-w-wide px-6 py-20 text-center">
          <Reveal>
            <h2 className="font-serif text-[clamp(28px,5vw,42px)] font-light">
              Ready to <em className="text-gold-lt">begin?</em>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[16px] leading-[1.7] text-white/85">
              Book a no-pressure discovery call. We will listen to where you are, what you are called to,
              and whether Awakened Academy is the right next step.
            </p>
            <div className="mt-8">
              <Link
                href="/schedule"
                className="inline-block rounded bg-gold px-8 py-3.5 text-[13px] font-medium text-white transition hover:bg-gold-dark"
              >
                Book a Discovery Call
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
