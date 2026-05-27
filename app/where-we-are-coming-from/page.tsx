import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: { absolute: "Where We're Coming From | Our Spiritual Foundation" },
  description:
    "The deeper philosophy behind Awakened Academy. The spiritual lineage and practical wisdom that informs everything we teach.",
  alternates: { canonical: "/where-we-are-coming-from" },
  openGraph: { title: "Where are we coming from?", description: "A letter from Michael and Arielle on the values behind Awakened Academy." },
};

export default function WhereWeAreComingFromPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate w-full overflow-hidden">
        <Image src="/images/golden-light.jpg" alt="Golden light" fill priority className="-z-10 object-cover object-center" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/45 via-black/30 to-black/55" />
        <div className="mx-auto max-w-widest px-6 py-24 text-center text-white md:py-28">
          <Reveal>
            <span className="eyebrow !text-gold-lt">A Note From The Founders</span>
            <h1 className="mt-4 font-serif text-[clamp(28px,4.5vw,46px)] font-light leading-[1.2]">
              Where we are <em>coming from.</em>
            </h1>
            <p className="mx-auto mt-7 max-w-3xl text-[clamp(12px,1.4vw,15px)] font-medium leading-[1.9] text-white/95 drop-shadow">
              We want you to feel comfortable connecting with us 100%. There are countless websites
              and teachers on the internet, and we feel you should know us and where we are coming
              from, so you can decide for yourself if Awakened Academy is aligned for you.
            </p>
          </Reveal>
        </div>
      </section>

      {/* LETTER */}
      <section className="bg-bg">
        <div className="mx-auto max-w-page px-6 py-20">
          <Reveal>
            <div className="space-y-6 text-[17px] leading-[1.9] text-ink2">
              <p className="font-serif text-[clamp(20px,3vw,26px)] italic text-ink">Dear spiritual friend,</p>

              <p>
                If you're reading this now and found our website, we imagine you value having a deep
                connection to the Divine.
              </p>
              <p>
                It's the same with us. We've dedicated our lives to that connection, and we support
                your connection to the One, the Divine, God, above all else.
              </p>

              <blockquote className="my-8 border-l-2 border-gold pl-6 font-serif text-[clamp(20px,2.4vw,26px)] italic leading-[1.45] text-ink">
                It is the most important thing in the world to us personally, connecting to the One,
                and we are here to support this for you in all ways.
              </blockquote>

              <p>
                That's what makes life wonderful: feeling deeply connected, peaceful, loved and free.
                Feeling light and able to fly above all else.
              </p>

              <h2 className="mt-12 font-serif text-[clamp(22px,3.5vw,30px)] font-light text-ink">Our work &amp; mission</h2>
              <div className="h-px w-12 bg-gold" />
              <p>
                With this, we do work that is focused on awakened holistic growth and business
                (Awakened Academy), among other trainings and courses we've created or co-founded.
                All have a spiritual basis, and are also companies that support you in your own personal
                and professional journeys.
              </p>
              <p>
                After decades of deep meditation we realized we needed to make spirituality apply to
                everyday life, which is why we've created the companies and programs we have, sharing
                how to live a spiritual life and be successful in living your highest calling.
              </p>

              <h2 className="mt-12 font-serif text-[clamp(22px,3.5vw,30px)] font-light text-ink">Spiritual support is always free</h2>
              <div className="h-px w-12 bg-gold" />
              <p>
                We never charge for purely spiritual support, because we don't believe in that. We
                believe each and every soul should be supported absolutely freely in maintaining their
                connection to the One, in these most powerful times.
              </p>
              <p>
                We personally do free service in the area of spiritual connection, and offer guided
                meditations and spiritual study on connecting with the One. We are honored to share the
                spiritual blessings that we've personally received immense benefit from.
              </p>

              <h2 className="mt-12 font-serif text-[clamp(22px,3.5vw,30px)] font-light text-ink">Professional development &amp; sacred business</h2>
              <div className="h-px w-12 bg-gold" />
              <p>
                At the same time, as spiritual souls, we believe wholeheartedly in uplifting you
                professionally, this is Awakened Academy's mission. We believe you are here to be part
                of the change we all wish to see in the world. The reality is that we live in a world
                that operates with the exchange of money, and that exchange is also the opportunity to
                use wealth and resources to do beautiful things.
              </p>
              <blockquote className="my-8 border-l-2 border-gold pl-6 font-serif text-[clamp(18px,2.2vw,22px)] italic leading-[1.55] text-ink">
                We teach you the systems to make a good income for yourself, so you don't have to
                struggle in stress about bills, or work in a soul-sucking job. So you can focus fully
                on your spiritual connection, family and loved ones, the things you love, and the work
                you truly want to do in the world.
              </blockquote>
              <p>
                This is where we are coming from, and we just wanted to say it clearly to you, in
                case it wasn't.
              </p>
              <p>
                Above all, we love you, dearly, as a brother/sister soul. As we are all spiritual
                family, belonging to each other and belonging to the same Spiritual Parent, the One.
              </p>

              <h2 className="mt-12 font-serif text-[clamp(22px,3.5vw,30px)] font-light text-ink">Closing invitation</h2>
              <div className="h-px w-12 bg-gold" />
              <p>
                If it's right, we would love to work with you in one of our companies to support you in
                serving others and having the means to live a peaceful life and do great service in
                the world.
              </p>
              <p>
                For those who have joined us, or will be joining us, for the{" "}
                <Link href="/spiritual-life-coach-certification" className="text-teal underline-offset-2 hover:underline">Spiritual Life Coach Certification &amp; Sacred Online Business School</Link>
                {" — "}
                we are beyond honored to serve and support you. Incredibly grateful and excited to
                help you do wonders in the world.
              </p>
              <p>
                <strong className="text-ink">We believe in uplifting you to serve others from a spiritual basis</strong>,
                in real, practical ways, and to create a beautiful business doing so, if that's
                aligned for you.
              </p>
              <p>
                Please feel free to email us at{" "}
                <a href={`mailto:${SITE.email}`} className="text-teal underline-offset-2 hover:underline">{SITE.email}</a>{" "}
                for more information on both Awakened Academy and complimentary spiritual support and
                resources.
              </p>
              <p>We wish you the most beautiful day.</p>

              <p className="mt-10 font-serif text-[clamp(20px,2.6vw,24px)] italic text-ink">
                Many blessings of peace,
              </p>
              <p className="font-serif text-[clamp(22px,2.8vw,28px)] text-ink">
                Arielle &amp; Michael
              </p>
              <p className="mt-4 text-[13.5px] italic text-soft">
                p.s. We are sending oceans of love to you, and are immensely grateful for you, your
                courage, your strength, and your love. You're amazing.
              </p>
            </div>

            <div className="mt-14 flex flex-wrap justify-center gap-4">
              <Link href="/download-free-brochure" className="btn-teal">Download Free Brochure</Link>
              <Link href="/schedule" className="btn-ghost-teal">Book a Discovery Call</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
