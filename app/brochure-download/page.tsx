import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import BrochureFormReveal from "@/components/BrochureFormReveal";

// Same visual layout as /brochure but the download is gated behind the
// GHL opt-in form. After submission, the form is replaced by the direct
// PDF download button. /brochure remains untouched as the no-gate page.

export const metadata: Metadata = {
  title: { absolute: "Get the Free Brochure | Awakened Academy Certification" },
  description:
    "Enter your details to receive the Awakened Academy Spiritual Life Coach Certification brochure — curriculum, tuition, and program details.",
  alternates: { canonical: "/brochure-download" },
  robots: { index: false, follow: false },
  openGraph: { title: "Awakened Academy Brochure (Free)", description: "Free brochure on the Spiritual Life Coach Certification." },
};

const BROCHURE_PDF = "/downloads/awakened-academy-brochure.pdf";

export default function BrochureOptinPage() {
  return (
    <section className="relative isolate w-full overflow-hidden">
      <Image
        src="/images/woman-on-top-full.jpg"
        alt="Mountain landscape"
        fill
        priority
        className="-z-10 object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />

      <div className="mx-auto flex min-h-[78vh] max-w-widest items-center px-6 py-20 md:py-28">
        <div className="mx-auto w-full">
          <Reveal>
            <h1 className="text-center font-serif text-[clamp(34px,6vw,58px)] font-light leading-[1.1] text-gold-lt">
              Do spiritual work<br />
              <span className="text-gold">&amp; Create Abundance</span>
            </h1>
          </Reveal>

          <Reveal>
            <div className="mx-auto mt-14 grid max-w-3xl items-center gap-8 md:grid-cols-[280px_1fr]">
              <div className="relative mx-auto aspect-[3/4] w-full max-w-[280px] overflow-hidden rounded-sm shadow-2xl">
                <Image
                  src="/images/brochure-preview.png"
                  alt="Awakened Academy Brochure preview"
                  fill
                  className="object-cover object-top"
                />
              </div>

              <div className="rounded-md bg-gold/85 p-8 text-center shadow-2xl backdrop-blur-sm md:p-10">
                <h2 className="font-serif text-[clamp(22px,3vw,30px)] font-light leading-[1.2] text-white">
                  Download the Awakened Academy Brochure
                </h2>
                <p className="mt-4 text-[14px] leading-[1.7] text-white/90">
                  The full curriculum, tuition options, and how the certification program works,
                  delivered as a PDF.
                </p>
                <BrochureFormReveal pdfHref={BROCHURE_PDF} />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
