import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import GHLForm from "@/components/GHLForm";
import CertBody from "@/components/CertBody";
import BenefitBand from "@/components/BenefitBand";
import { GHL, SITE } from "@/lib/site-config";
import { courseSchema, faqSchema, BENEFITS } from "@/lib/cert-data";

// 17 images from the live WP cert page, mapped to each benefit by theme.
// - `side`: which side the white card sits on (so the subject stays visible)
// - `imagePosition`: CSS object-position so a head/face isn't cropped out vertically
const BANDS: { image: string; side: "left" | "right"; imagePosition?: string }[] = [
  { image: "/images/bands/woman-on-mountain-top.jpg",                          side: "left",  imagePosition: "center top" }, // 1. Tap into your unique gifts
  { image: "/images/bands/Michael-Chair-2.jpg",                                side: "left",  imagePosition: "right top"  }, // 2. 1-on-1 access to Michael (Michael's head, top-right)
  { image: "/images/bands/group-meditation.jpg",                               side: "left",  imagePosition: "center top" }, // 3. Join a new generation
  { image: "/images/bands/hands-over.jpg",                                     side: "right" }, // 4. Real loving connection
  { image: "/images/bands/woman-on-grass-2.jpg",                               side: "left",  imagePosition: "center top" }, // 5. Genuine confidence
  { image: "/images/bands/coffee-sunset.jpg",                                  side: "right" }, // 6. Be spiritual and wealthy
  { image: "/images/bands/shutterstock_117237259-e1778524710805.jpg",          side: "left"  }, // 7. Coach others while transforming yourself
  { image: "/images/bands/Arielle_Writing-Hero-2.png",                         side: "right", imagePosition: "left top"   }, // 8. Proven holistic teaching methods (Arielle's head, top-left)
  { image: "/images/bands/purple-pink-mountains.jpg",                          side: "left"  }, // 9. Be on the leading edge
  { image: "/images/bands/wave-sunset.jpg",                                    side: "right" }, // 10. Reclaim your time
  { image: "/images/bands/woman-on-mac.jpg",                                   side: "left",  imagePosition: "center top" }, // 11. Live and work from anywhere
  { image: "/images/bands/team-success.jpg",                                   side: "right" }, // 12. Finish what you start
  { image: "/images/bands/plains-sunset.jpg",                                  side: "left"  }, // 13. Learn from the pioneer
  { image: "/images/bands/WOMAN-LOTUS-POOL.jpg",                               side: "right", imagePosition: "center top" }, // 14. From information to transformation
  { image: "/images/bands/shutterstock_648757249-e1778524833119.jpg",          side: "left"  }, // 15. Unique soul purpose framework
  { image: "/images/bands/tablet.jpg",                                         side: "right" }, // 16. Course material yours to keep
  { image: "/images/bands/woman-with-tablet.jpg",                              side: "left",  imagePosition: "center top" }, // 17. Built for the long run
];

export const metadata: Metadata = {
  title: "Spiritual Life Coach Certification, Live a Spiritual Life & Make a Great Living",
  description:
    "Get our free brochure on becoming a Spiritual Life Coach, Author and Awakened Leader. Train with the pioneer since 2004.",
  alternates: { canonical: "/cert-classic" },
  robots: { index: false, follow: false },
  openGraph: {
    title: "Spiritual Life Coach Certification (Classic)",
    description: "Get our free brochure. Train with the pioneer since 2004.",
    url: `${SITE.url}/cert-classic`,
  },
};

export default function CertClassicPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO, WP-identical: peach mountains, centered title, brochure + form side-by-side */}
      <section className="relative isolate w-full overflow-hidden">
        <Image
          src="/images/cert-hero-pink-mountains.jpg"
          alt="Layered pink mountains at sunset"
          fill
          priority
          className="-z-10 object-cover object-center"
        />
        {/* Softer overlay to let the vibrant pink/coral colors show through */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/40 via-black/25 to-black/45" />

        <div className="mx-auto max-w-widest px-6 pt-16 pb-20 md:pt-24 md:pb-28">
          <Reveal>
            <div className="mx-auto max-w-5xl text-center text-white">
              <h1 className="font-serif text-[clamp(32px,5.5vw,56px)] font-light leading-[1.1]">
                Transform Your <em className="text-gold-lt">Spiritual Journey</em> into a Mentorship
              </h1>
            </div>
          </Reveal>

          <Reveal>
            <p id="program-info" className="scroll-mt-24 mx-auto mt-8 max-w-2xl text-center text-[clamp(15px,2vw,18px)] leading-[1.7] text-white [text-shadow:0_2px_4px_rgba(0,0,0,0.9),0_4px_16px_rgba(0,0,0,0.7)]">
              Learn to harness your experiences and emotional intelligence to support and guide others through their spiritual transitions, and create a prosperous career doing what you love.
            </p>
          </Reveal>

          <div className="mx-auto mt-12 grid max-w-5xl gap-10 md:grid-cols-2 md:items-center">
            <Reveal>
              <div className="relative mx-auto w-full max-w-[520px]">
                <Image
                  src="/images/cert-brochure.webp"
                  alt="Awakened Academy Spiritual Life Coach Certification brochure"
                  width={926}
                  height={702}
                  className="h-auto w-full drop-shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
                  sizes="(min-width: 768px) 44vw, 100vw"
                  priority
                />
              </div>
            </Reveal>
            <Reveal>
              <div>
                <GHLForm
                  formId={GHL.forms.certification.id}
                  formName={GHL.forms.certification.name}
                  height={GHL.forms.certification.height}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* INTRO STATEMENT (matches WP top-band) */}
      <section className="bg-white">
        <div className="mx-auto max-w-wide px-6 py-16 text-center">
          <Reveal>
            <h2 className="font-serif text-[clamp(22px,3vw,30px)] font-light text-ink">
              The Original Spiritual Life Coach Certification <span className="text-gold">•</span> Since 2004
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-[15.5px] leading-[1.8] text-ink2">
              Our <strong>Spiritual Life Coach Certification</strong> and Sacred Online Business Academy
              exceeds the limits of basic spiritual life coach certifications and online business and
              marketing courses. This isn't just a training process, it's an{" "}
              <em className="text-teal">adventure</em> to claim back your freedom, do meaningful work,
              and learn to make a great nourishing income from home.
            </p>
          </Reveal>
        </div>
      </section>

      {/* IMAGE BANDS, 17 benefits, each with its own unique WP image */}
      <div className="space-y-8 bg-bg py-8 md:space-y-10">
        {BENEFITS.map((b, i) => (
          <BenefitBand
            key={b.title}
            image={BANDS[i].image}
            imageAlt=""
            title={b.title}
            body={b.body}
            side={BANDS[i].side}
            imagePosition={BANDS[i].imagePosition}
          />
        ))}
      </div>

      <CertBody hideExperience />
    </>
  );
}
