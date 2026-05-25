import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Michael Mackintosh, Founder, Awakened Academy",
  description:
    "Michael Mackintosh is the founder of Awakened Academy and a pioneer of spiritual life coaching since 2004. Bestselling author, spiritual teacher, and mentor to awakened entrepreneurs in 25+ countries.",
  alternates: { canonical: "/about/michael-mackintosh" },
  openGraph: {
    title: "Michael Mackintosh, Founder, Awakened Academy",
    description:
      "Pioneer of spiritual life coaching since 2004. Bestselling author, spiritual teacher, and mentor.",
    url: `${SITE.url}/about/michael-mackintosh`,
    images: [{ url: `${SITE.url}/images/michael-beach.jpg` }],
    type: "profile",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE.url}/about/michael-mackintosh#person`,
  name: "Michael Mackintosh",
  givenName: "Michael",
  familyName: "Mackintosh",
  jobTitle: "Founder & Lead Mentor, Awakened Academy",
  description:
    "Pioneer of spiritual life coaching since 2004. Bestselling author, spiritual teacher and success coach. Co-founder of Awakened Academy, Superhero Training, Ombar Chocolate, and Liberated Life Productions.",
  url: `${SITE.url}/about/michael-mackintosh`,
  image: `${SITE.url}/images/michael-beach.jpg`,
  worksFor: {
    "@type": "EducationalOrganization",
    name: "Awakened Academy",
    url: SITE.url,
  },
  knowsAbout: [
    "Spiritual Life Coaching",
    "Meditation",
    "Spiritual Awakening",
    "Dharma",
    "Conscious Business",
    "Spiritual Entrepreneurship",
  ],
  sameAs: ["https://insighttimer.com/michaelmackintosh"],
};

export default function MichaelMackintoshPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
              { "@type": "ListItem", position: 2, name: "About", item: `${SITE.url}/about` },
              { "@type": "ListItem", position: 3, name: "Michael Mackintosh", item: `${SITE.url}/about/michael-mackintosh` },
            ],
          }),
        }}
      />

      {/* HERO */}
      <section className="relative isolate w-full overflow-hidden">
        <Image
          src="/images/golden-light.jpg"
          alt=""
          fill
          priority
          className="-z-10 object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/55 via-black/40 to-black/65" />
        <div className="mx-auto max-w-widest px-6 py-24 text-center text-white md:py-28">
          <Reveal>
            <span className="eyebrow !text-gold-lt">Founder &amp; Lead Mentor</span>
            <h1 className="mt-4 font-serif text-[clamp(34px,6vw,56px)] font-light leading-[1.1]">
              Michael <em>Mackintosh</em>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-[clamp(15px,2vw,18px)] leading-[1.7] text-white/95 drop-shadow">
              Pioneer of spiritual life coaching since 2004. Bestselling author, spiritual teacher,
              and mentor to awakened entrepreneurs in 25+ countries.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PORTRAIT + INTRO */}
      <section className="bg-bg">
        <div className="mx-auto max-w-widest px-6 py-20">
          <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:items-center">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden rounded-md shadow-xl">
                <Image
                  src="/images/michael-beach.jpg"
                  alt="Michael Mackintosh"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 40vw, 100vw"
                />
              </div>
            </Reveal>

            <Reveal>
              <span className="eyebrow">About Michael</span>
              <h2 className="mt-3 font-serif text-[clamp(26px,4vw,38px)] font-light leading-[1.2] text-ink">
                The mentor for <em>spiritual entrepreneurs</em>
              </h2>
              <div className="gold-line mt-6" />
              <div className="mt-6 space-y-5 text-[16px] leading-[1.85] text-ink2">
                <p>
                  Michael helps entrepreneurs reawaken their visions, unlock their genius, and
                  systematically transform ideas into tangible income, impact, and freedom, without
                  losing their soul in the process.
                </p>
                <p>
                  An international bestselling author and spiritual teacher, he has guided more than
                  1,250 students across 25+ countries through Awakened Academy's certification, and
                  reached millions through meditations, podcasts, and writing.
                </p>
                <p>
                  Every Awakened Academy certification student receives 1-on-1 access to Michael as
                  part of the program, a depth of founder involvement that has become rare in
                  modern coaching education.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* THE JOURNEY */}
      <section className="bg-warm">
        <div className="mx-auto max-w-wide px-6 py-20">
          <Reveal>
            <div className="text-center">
              <span className="eyebrow">The Journey</span>
              <h2 className="mt-3 font-serif text-[clamp(28px,5vw,42px)] font-light text-ink">
                From addiction and depression<br /> to <em>twenty years of awakened teaching</em>
              </h2>
              <div className="gold-line mt-6" />
            </div>
          </Reveal>

          <div className="mt-14 space-y-10 text-[17px] leading-[1.85] text-ink2">
            <Reveal>
              <p>
                Before any of this work began, Michael lived through years of addiction and
                depression. A single mentor showed up with love and opened his eyes to a different
                way of being. That experience became the seed of everything he now teaches: that
                transformation is real, that it can be transmitted, and that someone has to be
                willing to do for others what was once done for them.
              </p>
            </Reveal>

            <Reveal>
              <p>
                In 2004, after years of daily meditation following his own awakening, Michael began
                teaching in a small room opposite King's College, Cambridge. Students arrived for
                peace, but quickly began sharing real struggles. From that need, he developed the
                methodology that would eventually be called spiritual life coaching, before the term
                existed.
              </p>
            </Reveal>

            <Reveal>
              <p>
                In 2011, he left everything behind with a backpack, his dreams, and $800, and
                relocated to Hawaii to build the work full-time. He invested over $150,000 in
                training, refining what worked and discarding what didn't. By 2014, alongside his
                partner and co-founder Arielle Hecht, he established Awakened Academy as the first
                truly spiritually-grounded coach training of its kind.
              </p>
            </Reveal>

            <Reveal>
              <blockquote className="border-l-2 border-gold pl-6 font-serif text-[clamp(20px,2.8vw,26px)] italic leading-[1.4] text-ink">
                "The more we help others get what they want, the more we get everything that we
                want."
              </blockquote>
            </Reveal>

            <Reveal>
              <p>
                Today, Michael lives on Kauai, continues to mentor students 1-on-1, and writes about
                spiritual coaching, dharma, awakened business, and the inner work of being a
                spiritual leader.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WORK & PROJECTS */}
      <section className="bg-bg">
        <div className="mx-auto max-w-widest px-6 py-20">
          <Reveal>
            <div className="text-center">
              <span className="eyebrow">Work &amp; Projects</span>
              <h2 className="mt-3 font-serif text-[clamp(28px,5vw,42px)] font-light text-ink">
                Founded &amp; co-founded
              </h2>
              <div className="gold-line mt-6" />
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <ProjectCard
              name="Awakened Academy"
              role="Founder · Lead Mentor"
              year="2014"
              description="The flagship spiritual life coach certification, trusted by 1,250+ students across 25+ countries."
            />
            <ProjectCard
              name="Liberated Life Productions"
              role="Co-Founder"
              description="A production company for meditations, courses, and conscious media reaching millions of listeners."
            />
            <ProjectCard
              name="Superhero Training"
              role="Co-Founder"
              description="An early personal-development program teaching practical empowerment for spiritual seekers."
            />
            <ProjectCard
              name="Ombar Chocolate"
              role="Co-Founder"
              description="An award-winning conscious chocolate brand, proof that sacred values and great business can coexist."
            />
          </div>
        </div>
      </section>

      {/* WRITING */}
      <section className="bg-warm">
        <div className="mx-auto max-w-wide px-6 py-20 text-center">
          <Reveal>
            <span className="eyebrow">Writing</span>
            <h2 className="mt-3 font-serif text-[clamp(26px,4.5vw,36px)] font-light text-ink">
              Read Michael's articles on <em>spiritual coaching, dharma, and awakened business</em>
            </h2>
            <div className="gold-line mt-6" />
            <p className="mx-auto mt-7 max-w-xl text-[16px] leading-[1.75] text-ink2">
              The full archive of writing on the inner and outer work of being a spiritual coach,
              from career questions to soul-purpose practice to the realities of building a
              dharma-aligned business.
            </p>
            <div className="mt-9">
              <Link href="/blog" className="btn-teal">Read the Blog</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal text-white">
        <div className="mx-auto max-w-wide px-6 py-20 text-center">
          <Reveal>
            <span className="eyebrow !text-gold-lt">Work With Michael</span>
            <h2 className="mt-4 font-serif text-[clamp(28px,5vw,42px)] font-light leading-[1.15]">
              If you feel called to do this work, <em className="text-gold-lt">let's talk.</em>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[16px] leading-[1.75] text-white/85">
              Every certification student receives direct 1-on-1 access to Michael. Download the
              brochure or book a free discovery call to see whether this path is right for you.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                href="/download-free-brochure"
                className="inline-block rounded bg-gold px-7 py-3.5 text-[13px] font-medium text-white transition hover:bg-gold-dark"
              >
                Download Free Brochure
              </Link>
              <Link
                href="/schedule"
                className="inline-block rounded border-2 border-white px-7 py-3 text-[13px] font-medium text-white transition hover:bg-white hover:text-teal"
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

function ProjectCard({
  name,
  role,
  year,
  description,
}: {
  name: string;
  role: string;
  year?: string;
  description: string;
}) {
  return (
    <Reveal>
      <article className="rounded-md border border-ink/10 bg-white p-7 shadow-sm">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-serif text-[22px] font-light text-ink">{name}</h3>
          {year && <div className="text-[12px] text-teal">{year}</div>}
        </div>
        <div className="mt-2 text-[11px] uppercase tracking-[0.2em] text-soft">{role}</div>
        <div className="mt-4 h-px w-10 bg-gold" />
        <p className="mt-4 text-[15px] leading-[1.75] text-ink2">{description}</p>
      </article>
    </Reveal>
  );
}
