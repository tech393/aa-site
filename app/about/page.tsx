import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: { absolute: "About Awakened Academy | Founded 2014 by Michael Mackintosh" },
  description:
    "Pioneering spiritual life coaching since 2004. Founded by Michael Mackintosh. 28 years personal practice. 650+ certified coaches in 25+ countries.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Awakened Academy | Founded 2014 by Michael Mackintosh",
    description: "Pioneering spiritual life coaching since 2004. Founded by Michael Mackintosh. 28 years personal practice. 650+ certified coaches in 25+ countries.",
    url: `${SITE.url}/about`,
  },
};

const peopleSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE.url}/about#michael`,
      name: "Michael Mackintosh",
      jobTitle: "Founder & Lead Mentor, Awakened Academy",
      description:
        "Pioneer of spiritual life coaching since 2004. Bestselling author, success coach, and co-founder of Awakened Academy, Superhero Training, Ombar Chocolate, and Liberated Life Productions.",
      worksFor: { "@type": "EducationalOrganization", name: "Awakened Academy", url: SITE.url },
      image: `${SITE.url}/images/michael-beach.jpg`,
      sameAs: ["https://insighttimer.com/michaelmackintosh"],
    },
    {
      "@type": "Person",
      "@id": `${SITE.url}/about#arielle`,
      name: "Arielle Hecht",
      jobTitle: "Co-Founder & Higher Self Mentor, Awakened Academy",
      description:
        "Higher Self mentor, singer/songwriter, globally regarded meditation teacher, and author of '3 Seconds to Being Your Higher Self.' Co-founder of Awakened Academy.",
      worksFor: { "@type": "EducationalOrganization", name: "Awakened Academy", url: SITE.url },
      image: `${SITE.url}/images/arielle.jpeg`,
      sameAs: ["https://insighttimer.com/ariellehecht"],
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(peopleSchema) }} />
      {/* HERO, golden field with mission statement */}
      <section className="relative isolate w-full overflow-hidden">
        <Image
          src="/images/golden-light.jpg"
          alt="Golden light at sunrise"
          fill
          priority
          className="-z-10 object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/30 via-black/20 to-black/45" />

        <div className="mx-auto flex min-h-[70vh] max-w-widest items-center px-6 py-24 md:py-32">
          <div className="mx-auto w-full text-center text-white">
            <Reveal>
              <h1 className="mx-auto max-w-4xl font-serif text-[clamp(28px,4.5vw,46px)] font-light leading-[1.2]">
                Spiritual Awakening + Coaching &amp; Business Systems Training<br />
                for the Next Generation of <em className="text-gold-lt">Awakened Leaders</em>
              </h1>
            </Reveal>
            <Reveal>
              <p className="mx-auto mt-10 max-w-3xl text-[clamp(12px,1.4vw,15px)] font-medium leading-[1.9] text-white/95 drop-shadow">
                Our mission is to restore dharma to the world. We are dedicated to bringing
                back beauty, wealth and freedom to the lives of those we serve, through higher
                consciousness, fearless creativity and awakened living.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="bg-bg">
        <div className="mx-auto max-w-wide px-6 py-20 text-center">
          <Reveal>
            <div className="space-y-3 font-serif text-[clamp(18px,2.4vw,24px)] font-light text-ink">
              <p>You are an eternal spiritual being.</p>
              <p>You came into this world for a reason.</p>
              <p>You're an awakened leader.</p>
              <p>It's your time.</p>
              <p className="text-teal"><em>Why wait?</em></p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="bg-warm">
        <div className="mx-auto max-w-widest px-6 py-20">
          <Reveal>
            <div className="text-center">
              <span className="eyebrow">The Founders</span>
              <h2 className="mt-3 font-serif text-[clamp(28px,5vw,42px)] font-light text-ink">
                Awakened Academy was co-founded by<br />
                <em>Michael Mackintosh &amp; Arielle Hecht</em>
              </h2>
              <div className="gold-line mt-6" />
            </div>
          </Reveal>

          <div className="mt-14 grid gap-12 md:grid-cols-2">
            <Reveal>
              <article className="space-y-5">
                <div className="relative aspect-[4/5] overflow-hidden rounded-md shadow-xl">
                  <Image src="/images/michael-beach.jpg" alt="Michael Mackintosh" fill className="object-cover" />
                </div>
                <h3 className="font-serif text-[24px] text-ink">Michael Mackintosh</h3>
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-teal">Founder · Lead Mentor</div>
                <p className="text-[15px] leading-[1.75] text-ink2">
                  Michael is known as the mentor for spiritual entrepreneurs. He helps awakened
                  souls reawaken their vision, unlock their genius, and systematically transform
                  ideas into tangible income, impact, and freedom without losing their soul in the
                  process.
                </p>
                <p className="text-[15px] leading-[1.75] text-ink2">
                  Michael began teaching what would later be called spiritual life coaching in 2004,
                  before the term existed, in a small room opposite King's College, Cambridge.
                  Twenty years of daily meditation and a personal journey through addiction,
                  depression, and awakening became the foundation of the work.
                </p>
                <p className="text-[15px] leading-[1.75] text-ink2">
                  An international bestselling author and host of the <em>Don't Die With Your Song
                  Inside</em> podcast, Michael has co-founded Superhero Training, Ombar Chocolate,
                  Awakened Academy, and Liberated Life Productions. His meditations on Insight
                  Timer have been reviewed 125,000+ times.
                </p>
                <p className="text-[15px] leading-[1.75] text-ink2">
                  Today Michael lives on the island of Kauai, mentors students 1-on-1 as part of
                  every certification cohort, and writes on spiritual coaching, dharma, and the
                  inner work of being a spiritual leader.
                </p>

                <div className="mt-2 grid grid-cols-3 gap-3 rounded-md border border-ink/10 bg-bg p-5">
                  <Stat n="650+" label="Certified coaches" />
                  <Stat n="25+" label="Countries" />
                  <Stat n="Since 2004" label="Teaching" />
                </div>

                <blockquote className="mt-4 border-l-2 border-gold pl-5 font-serif text-[18px] italic leading-[1.5] text-ink">
                  &ldquo;The more we help others get what they want, the more we get everything
                  that we want.&rdquo;
                </blockquote>

                <div className="pt-2">
                  <Link
                    href="/about/michael-mackintosh"
                    className="inline-flex items-center gap-2 text-[14px] font-medium text-teal transition hover:text-teal-deep"
                  >
                    Read Michael's full story <span aria-hidden>→</span>
                  </Link>
                </div>
              </article>
            </Reveal>

            <Reveal>
              <article className="space-y-5">
                <div className="relative aspect-[4/5] overflow-hidden rounded-md shadow-xl">
                  <Image src="/images/arielle.jpeg" alt="Arielle Hecht" fill className="object-cover" />
                </div>
                <h3 className="font-serif text-[24px] text-ink">Arielle Hecht</h3>
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-teal">Co-Founder · Higher Self Mentor</div>
                <p className="text-[15px] leading-[1.75] text-ink2">
                  Arielle is a Higher Self mentor who supports authentic spirituality and living
                  from truth, service, and wealth. Her work helps deeper souls step into the
                  fullest version of who they came here to be, without burning out their nervous
                  system along the way.
                </p>
                <p className="text-[15px] leading-[1.75] text-ink2">
                  A globally regarded meditation teacher and singer-songwriter, Arielle is the
                  author of <em>3 Seconds to Being Your Higher Self</em>, a guide for spiritual
                  coaches and seekers learning to anchor in their highest state on command. Her
                  meditations on Insight Timer have reached millions of listeners.
                </p>
                <p className="text-[15px] leading-[1.75] text-ink2">
                  Arielle co-founded Awakened Academy with Michael in 2014 and leads the deeper
                  transformational group work alongside the certification program. She also brings
                  the feminine balance to the Academy's curriculum: presence, embodiment, voice,
                  and the slower work of integration.
                </p>
                <p className="text-[15px] leading-[1.75] text-ink2">
                  Outside of Awakened Academy, Arielle records sacred music, leads private
                  retreats, and continues a long-standing daily meditation practice that informs
                  every part of the work.
                </p>

                <div className="mt-2 grid grid-cols-3 gap-3 rounded-md border border-ink/10 bg-bg p-5">
                  <Stat n="2014" label="Co-founded AA" />
                  <Stat n="Author" label="Higher Self" />
                  <Stat n="Daily" label="Meditation since 2008" />
                </div>

                <blockquote className="mt-4 border-l-2 border-gold pl-5 font-serif text-[18px] italic leading-[1.5] text-ink">
                  &ldquo;You are not separate from your Higher Self. You are three seconds away
                  from remembering.&rdquo;
                </blockquote>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4 AWAKENED PILLARS */}
      <section className="bg-bg">
        <div className="mx-auto max-w-widest px-6 py-20">
          <Reveal>
            <div className="text-center">
              <span className="eyebrow">Our Philosophy</span>
              <h2 className="mt-3 font-serif text-[clamp(28px,5vw,42px)] font-light text-ink">
                The <em>Four Awakened Pillars</em>
              </h2>
              <div className="gold-line mt-6" />
              <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-[1.7] text-ink2">
                The spiritual worldview underneath everything we teach.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-7 md:grid-cols-2">
            <PillarBlock
              roman="I"
              title="We are all spiritual family"
              image="/images/bands/group-meditation.jpg"
              imagePosition="center top"
              points={[
                "We are all unique spiritual beings part of One spiritual family.",
                "We're guests here from a Spiritual World.",
                "In that Spiritual World is our Spiritual Parent, the One, also known as God or the Divine.",
                "We belong to that One.",
              ]}
            />
            <PillarBlock
              roman="II"
              title="Everyone has a unique and special part to play"
              image="/images/bands/woman-on-mountain-top.jpg"
              imagePosition="center top"
              points={[
                "Everyone has a part to play in the world. Everyone has something to do here that is unique to them.",
                "Everyone has some intimate connection with the world.",
                "Everyone has their own unique path. You'll know you've found it when you feel at peace, aligned with your life, and a sense of deep belonging.",
              ]}
            />
            <PillarBlock
              roman="III"
              title="We each have a responsibility to become #1 of ourselves"
              image="/images/bands/woman-on-grass-2.jpg"
              imagePosition="center top"
              points={[
                "Everyone has their own personal highest version of themselves, #1 of yourself, not #1 of anyone else.",
                "Your mission can be big or small. The point is, it's YOUR mission, your dharma. You will feel deep peace on the inside when you are living it.",
              ]}
            />
            <PillarBlock
              roman="IV"
              title="By connecting with the One, we return to being #1 of ourselves"
              image="/images/bands/WOMAN-LOTUS-POOL.jpg"
              imagePosition="center top"
              points={[
                "Our aim in this life is to become #1 of ourselves and to return to our original path and highest way of being.",
                "In order to return to our highest self, we forge a connection with our Spiritual Parent/Friend/Bestower, the One, so we can purify old patterns and experience higher states of Being.",
                "This One is our North Star, here to help us return to the health, wealth and happiness that is our natural state.",
              ]}
            />
          </div>
        </div>
      </section>

      {/* WHY WE'RE DIFFERENT */}
      <section className="bg-warm">
        <div className="mx-auto max-w-wide px-6 py-20">
          <Reveal>
            <div className="text-center">
              <span className="eyebrow">Why We're Different</span>
              <h2 className="mt-3 font-serif text-[clamp(28px,5vw,42px)] font-light text-ink">
                What sets the Academy <em>apart</em>
              </h2>
              <div className="gold-line mt-6" />
            </div>
          </Reveal>

          <div className="mt-14 space-y-12">
            <DifferenceBlock title="A soul-based approach (not ego-based)">
              <p>
                Most personal development is "personality-based" development, ego development, aiming
                to provide a quick fix to a deeper problem. This patchwork, slap-on-a-fake-smile, learn
                to manipulate people approach is highly ineffective. It's based on the idea that you can
                fool others (or yourself) into believing you are OK using forced techniques.
              </p>
              <p className="mt-4">
                Sadly, this approach fails miserably with deeper souls who have deeper issues to address
                (and a clearer conscience and BS detector).
              </p>
              <p className="mt-4">
                Our soul-based approach starts from the awareness that you are already a spiritual being.
                You don't have a soul, you <em>are</em> a soul. Spirituality is not something you get or
                learn; it's what you are. You can't chase after spiritual awakening, you can only remove
                the blocks to it.
              </p>
              <p className="mt-4">
                Spiritual progress means returning back to your original state by releasing the junk that
                was picked up along the journey. It's about developing your inner nature, strengthening
                your spiritual powers, and mastering your mind, body and patterns, so you can transform
                your life from the inside out.
              </p>
              <p className="mt-4">Awakened Academy is for you, the soul.</p>
            </DifferenceBlock>

            <DifferenceBlock title="We help deeper souls, and celebrate you being different">
              <p>
                Thousands of people have come to us after they've tried mainstream personal and spiritual
                development and found it didn't work for them. Many mainstream books and courses simply
                don't go deep enough, they may be popular, but they don't get to the core of your
                challenges and deeper needs.
              </p>
              <p className="mt-4">
                All our content, books, products, programs and services are designed for old souls,
                deeper souls who are spiritually-minded and want more. Other people don't get you,
                but we do. And we think you're <em>awesome</em> for being different.
              </p>
            </DifferenceBlock>

            <DifferenceBlock title="Designed for high-achieving introverts and empaths">
              <p>
                Our work is designed for souls who thrive on alone time and need to take time away from
                the world, people and stimulation to relax, recharge and rest.
              </p>
              <p className="mt-4">
                Many courses are designed for more extroverted souls who thrive socializing and gaining
                their energy from being very active and engaged with others. We're sensitive souls
                ourselves, and thrive with ample alone time and just a few souls at a time.
              </p>
              <p className="mt-4">
                We're here to help you recharge, go deep, and be at peace with your more sensitive nature.
                We embrace and support your <em>softly powerful</em> nature.
              </p>
            </DifferenceBlock>

            <DifferenceBlock title="Leading-edge information for the new paradigm">
              <p>
                Most personal development work is based on old-paradigm models of success that promote
                greed, consumerism, materialism and dog-eat-dog competition. They bolster the ego and
                promise spiritual methods to achieve materialist goals.
              </p>
              <p className="mt-4">
                We're here to help you discover your own true dreams and attain happiness, love, freedom
                and abundance that's sustainable, reliable, and doesn't involve wrecking the planet or
                hurting other people. The new paradigm of success is one where you awaken to your higher
                self and follow your highest calling, creating a heaven on earth, starting in your own
                home.
              </p>
            </DifferenceBlock>

            <DifferenceBlock title="A truly holistic approach">
              <p>
                Many experts believe only their one way of doing things is right. If you go to a
                traditional doctor, you'll probably be treated with pills, as if the only thing wrong
                with you is your physical body. This one-dimensional view is limited and flawed.
              </p>
              <p className="mt-4">
                You are a multi-dimensional being with eight levels of reality: spiritual, mental,
                emotional, physical, behavioral, environmental, social and financial. If you are out
                of balance in any of these areas, it will eventually sabotage other parts of your life.
              </p>
              <p className="mt-4">
                We help you upgrade all areas of your life so you can live a truly soul-based,
                successful life here on Earth.
              </p>
            </DifferenceBlock>

            <DifferenceBlock title="The best of East &amp; West">
              <p>
                Awakened Academy combines the most powerful, effective and proven techniques and
                insights from both East and West, timeless spiritual truths integrated with the most
                effective and proven methods of the modern world.
              </p>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <div className="text-[11px] font-medium text-teal">East</div>
                  <ul className="mt-3 space-y-1.5 text-[14.5px] text-ink2">
                    <li>Meditation &amp; higher consciousness</li>
                    <li>Raja Yoga</li>
                    <li>Bhagavad Gita</li>
                    <li>Vedanta</li>
                    <li>Hatha Yoga</li>
                    <li>Advaita</li>
                    <li>The Dharmapada</li>
                    <li>Ayurveda</li>
                    <li>Vedic Astrology</li>
                  </ul>
                </div>
                <div>
                  <div className="text-[11px] font-medium text-teal">West</div>
                  <ul className="mt-3 space-y-1.5 text-[14.5px] text-ink2">
                    <li>80/20 Law</li>
                    <li>Results-based thinking</li>
                    <li>Power of full engagement</li>
                    <li>Work-the-systems mentality</li>
                    <li>Power of story</li>
                    <li>NLP</li>
                    <li>Positive psychology</li>
                    <li>Hypnosis</li>
                    <li>Human Design</li>
                    <li>Jungian psychology</li>
                    <li>Whole-food nutrition</li>
                  </ul>
                </div>
              </div>
            </DifferenceBlock>

            <DifferenceBlock title="Sanctuary &amp; soul-family connection">
              <p>
                Many souls feel disconnected from mainstream western culture. We provide a sanctuary
                where you can connect with like-minded souls and feel seen and heard for being who you
                are. It's a relief to be able to talk about deeper things on your mind without being
                judged or misunderstood, instead, you are loved, appreciated and met by a soul family
                who actually gets you.
              </p>
            </DifferenceBlock>

            <DifferenceBlock title="Lasting changes, not patchwork">
              <p>
                A soul-based approach is about feeling good now while achieving lasting results. You
                enjoy the process of change while you move gently into your dream reality via your
                state of consciousness, presence and actions.
              </p>
              <p className="mt-4">
                It's the opposite of the ego-based approach, which is about adding more fake patchwork
                on top of the mess. With a soul-based approach, we face the things that no longer work
                and heal them from the inside out, no more lying, avoiding or pretending.
              </p>
              <p className="mt-4">
                You can keep up the patchwork on a broken house full of cracks. Or you can demolish
                the old home and build a beautiful new one based on your true values, real dreams and
                eternal essence. <em>The choice is yours.</em>
              </p>
            </DifferenceBlock>

            <DifferenceBlock title="Do less, achieve more">
              <p>
                One of the main principles we work with is the law of the vital few, the 80/20 law.
                A tiny percentage of what we do (20% or less) creates massive positive impact, while
                most of what we do (80%) has a poor result and could often be removed entirely.
              </p>
              <p className="mt-4">
                We help you get clear on what's draining your energy and what's working, then remove
                or reduce the 80% that's pointless and increase the 20% that matters most. The result:
                double or triple your productivity, take longer breaks, get results up to 16x faster,
                reduce stress, increase happiness.
              </p>
              <p className="mt-4 font-serif text-[18px] italic text-ink">
                What would you love to make 16x better today?
              </p>
            </DifferenceBlock>

            <DifferenceBlock title="We're living it. Based on real practical experience.">
              <p>
                Our work is based on years of dedicated research, study, teaching and personal
                experience. These teachings come to you having been grounded into practical life and
                having helped thousands of people all over the world.
              </p>
              <p className="mt-4">
                This is not one of the countless weekend certification programs where anyone can
                become a certified expert and then try to heal others before they've applied it to
                themselves. We believe it's essential to learn only from people who have what you
                want in their real life.
              </p>
            </DifferenceBlock>

            <DifferenceBlock title="Beautiful settings, Sedona &amp; Hawaii">
              <p>
                The work we do comes from our homes on the paradise island of Kauai, Hawaii, and the
                sacred desert land of Sedona, Arizona. You get to enjoy the aloha vibes, beautiful
                nature, beaches and island life with us, along with the mystical golden energy of the
                sacred desert.
              </p>
            </DifferenceBlock>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="relative isolate overflow-hidden bg-teal-deep py-20 text-white">
        <Image
          src="/images/planet-earth.jpg"
          alt="Planet Earth from space"
          fill
          className="-z-10 object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 -z-10 bg-teal-deep/70" />
        <div className="mx-auto max-w-wide px-6">
          <Reveal>
            <div className="text-center">
              <span className="eyebrow !text-gold-lt">Our Vision</span>
              <h2 className="mt-3 font-serif text-[clamp(28px,5vw,42px)] font-light">
                A vision <em className="text-gold-lt">bigger than us</em>
              </h2>
              <div className="gold-line mt-6" />
            </div>
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <Reveal>
              <div className="rounded-md border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm">
                <div className="text-[10px] uppercase tracking-[0.24em] text-gold-lt">Spiritual Coaching &amp; Sacred Business</div>
                <p className="mt-4 text-[15.5px] leading-[1.7] text-white/90">
                  Through our work with 5 million souls, we enable awakened leaders to transform
                  100 million lives through coaching, authoring, speaking and teaching.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="rounded-md border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm">
                <div className="text-[10px] uppercase tracking-[0.24em] text-gold-lt">Free Spiritual Education</div>
                <p className="mt-4 text-[15.5px] leading-[1.7] text-white/90">
                  We enable 1 billion people to access core spiritual education for free so they may
                  know themselves, connect to Source and awaken during this pivotal time on Earth.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* INVITATION + CTA */}
      <section className="bg-bg">
        <div className="mx-auto max-w-wide px-6 py-20">
          <Reveal>
            <div className="text-center">
              <span className="eyebrow">An Invitation</span>
              <h2 className="mt-3 font-serif text-[clamp(28px,5vw,42px)] font-light text-ink">
                An invitation to <em>awakening</em>
              </h2>
              <div className="gold-line mt-6" />
            </div>

            <div className="mt-10 space-y-5 text-[17px] leading-[1.85] text-ink2">
              <p>
                Right now a global awakening is sweeping through the field of consciousness of humanity,
                and we are entering a new paradigm, faster than most of us can keep up with. What used
                to work, no longer does. There is a call for higher consciousness and a real remembering
                of who we truly are, why we're here and what life is all about.
              </p>
              <p>
                We know you are a deeper soul with a drive in your heart to fully awaken and help others
                in a big way. We are here for you.
              </p>
              <p>
                We also know you are sensitive and empathic, and that your spiritual practice and
                creating from a higher state of being is important to you. You want to make a difference
                in the world. And you don't want to sell out.
              </p>
              <p className="font-serif text-[clamp(20px,2.6vw,24px)] italic text-ink">
                How to merge the two together?
              </p>
              <p>
                Awakened Academy is where heart-centered business meets spiritual practice. In the new
                paradigm, business <em>is</em> a spiritual practice.
              </p>
              <p className="font-serif text-[clamp(20px,2.6vw,24px)] text-ink">
                Welcome to Awakened Academy.
              </p>
              <p className="text-[14px] text-soft">{SITE.founded.statement}</p>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <Link href="/spiritual-life-coach-certification#program-info" className="btn-teal">
                Download Free Brochure
              </Link>
              <Link href="/schedule" className="btn-ghost-teal">
                Book a Discovery Call
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function PillarBlock({
  roman,
  title,
  points,
  image,
  imagePosition = "center",
}: {
  roman: string;
  title: string;
  points: string[];
  image?: string;
  imagePosition?: string;
}) {
  return (
    <Reveal>
      <article className="flex h-full flex-col overflow-hidden rounded-md border border-ink/10 bg-white shadow-sm">
        {image && (
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <Image
              src={image}
              alt=""
              fill
              className="object-cover"
              style={{ objectPosition: imagePosition }}
              sizes="(min-width: 768px) 50vw, 100vw"
            />
            <div className="absolute left-5 top-5">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-cream-paper/95 font-serif text-[24px] leading-none text-gold-deep shadow-md backdrop-blur-sm">
                {roman}
              </span>
            </div>
          </div>
        )}
        <div className="flex flex-1 flex-col gap-5 p-7">
          {!image && (
            <div className="font-serif text-[40px] leading-none text-gold">{roman}</div>
          )}
          <h3 className="font-serif text-[20px] text-ink">{title}</h3>
          <ul className="mt-1 space-y-2.5 text-[14.5px] leading-[1.65] text-ink2">
            {points.map((p, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1 text-gold">→</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Reveal>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="text-center">
      <div className="font-serif text-[20px] leading-tight text-teal">{n}</div>
      <div className="mt-1 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-ink2">{label}</div>
    </div>
  );
}

function DifferenceBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Reveal>
      <article>
        <h3 className="font-serif text-[clamp(22px,3vw,28px)] font-light text-ink">{title}</h3>
        <div className="mt-2 h-px w-12 bg-gold" />
        <div className="mt-4 text-[16px] leading-[1.85] text-ink2">{children}</div>
      </article>
    </Reveal>
  );
}
