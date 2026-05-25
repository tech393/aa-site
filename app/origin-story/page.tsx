import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: { absolute: "The Awakened Academy Origin Story | Michael Mackintosh" },
  description:
    "How Awakened Academy began. The path from spiritual practice in 2004 to certifying coaches since 2012 to founding AA in 2014.",
  alternates: { canonical: "/origin-story" },
  openGraph: { title: "Origin Story – How Awakened Academy Was Born", description: "From a Cambridge meditation room in 2004 to certifying coaches in 25+ countries." },
};

export default function OriginStoryPage() {
  return (
    <>
      {/* HERO */}
      <ImageSection image="/images/story/story-hero.jpg" minH="68vh" overlay="strong">
        <Reveal>
          <div className="text-center text-white">
            <span className="eyebrow !text-gold-lt">Our Origin Story</span>
            <h1 className="mt-4 font-serif text-[clamp(34px,6vw,58px)] font-light leading-[1.1]">
              The Story of<br /><em>Awakened Academy</em>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-[clamp(15px,2vw,18px)] leading-[1.7] text-white/95 drop-shadow">
              From a small meditation room opposite King's College, Cambridge, to certifying
              spiritual coaches in 25+ countries.
            </p>
          </div>
        </Reveal>
      </ImageSection>

      {/* WHERE IT ALL BEGAN */}
      <TextSection title="Where it all began" eyebrow="2004 · Cambridge, England">
        <p>
          In 2004, Michael was teaching meditation in a small room opposite King's College, Cambridge
          University. After practicing meditation daily since his own spiritual awakening, he noticed
          an unexpected pattern: students would arrive seeking peace through meditation, but would
          quickly begin sharing personal struggles and aspirations.
        </p>
        <p>
          They valued the practice, but they also needed help addressing real obstacles in their
          lives. From this observation, he began to develop what would eventually become spiritual
          life coaching, though the term didn't exist yet in 2004. He refined these methods without
          external guidance, creating an entirely new approach to personal transformation.
        </p>
      </TextSection>

      {/* LEAP OF FAITH, windswept image */}
      <ImageSection image="/images/story/wind.jpg" minH="50vh" overlay="strong">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center text-white">
            <span className="eyebrow !text-gold-lt">The Leap of Faith</span>
            <h2 className="mt-4 font-serif text-[clamp(28px,5vw,42px)] font-light leading-[1.15]">
              He left everything behind, with a backpack,<br />
              <em>dreams, and $800.</em>
            </h2>
          </div>
        </Reveal>
      </ImageSection>

      <TextSection>
        <p>
          Recognizing a deeper calling, Michael made a decisive move: he left everything behind with
          only a backpack, his dreams, and $800, and relocated to Hawaii. From there, he began
          coaching clients online while developing his methodology.
        </p>
        <p>
          He invested over $150,000 in courses and trainings, learning what worked and what didn't.
          Seeking authenticity, he rejected approaches that didn't align with his values and created
          a spiritually grounded business model that felt genuinely aligned with his heart.
        </p>
      </TextSection>

      {/* LIVING THE DREAM, ocean waves */}
      <ImageSection image="/images/story/ocean-waves.jpg" minH="50vh" overlay="strong">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center text-white">
            <span className="eyebrow !text-gold-lt">2012 · Kauai, Hawaii</span>
            <h2 className="mt-4 font-serif text-[clamp(28px,5vw,42px)] font-light leading-[1.15]">
              Living the dream, <em>and noticing what was missing.</em>
            </h2>
          </div>
        </Reveal>
      </ImageSection>

      <TextSection title="Living the dream">
        <p>
          By 2012, Michael had built the lifestyle many aspire toward. Living on Kauai, Hawaii, he
          enjoyed:
        </p>
        <ul className="mt-4 space-y-2 text-[16px] leading-[1.7] text-ink2">
          <li className="flex items-start gap-3"><span className="mt-1 text-gold">→</span>Freedom to structure his own schedule</li>
          <li className="flex items-start gap-3"><span className="mt-1 text-gold">→</span>Access to natural beauty and outdoor pursuits</li>
          <li className="flex items-start gap-3"><span className="mt-1 text-gold">→</span>Mornings dedicated to meditation, yoga, and nature</li>
          <li className="flex items-start gap-3"><span className="mt-1 text-gold">→</span>Evening work serving thousands globally through coaching and courses</li>
          <li className="flex items-start gap-3"><span className="mt-1 text-gold">→</span>Client fees of $10,000 or more</li>
        </ul>
        <p className="mt-6 font-serif text-[clamp(20px,2.6vw,24px)] italic text-ink">
          The more we help others get what they want, the more we get everything that we want.
        </p>
      </TextSection>

      {/* THE QUESTIONS */}
      <TextSection title="The questions that changed everything" bg="warm">
        <p>
          By late 2012, a consistent pattern emerged in student inquiries. Repeatedly, people asked
          variations of the same questions about balancing spiritual values with financial stability
          and meaningful work.
        </p>
        <p>
          Many were naturally gifted helpers who couldn't monetize their gifts. Others struggled in
          unfulfilling jobs that contradicted their values. Some had tried other programs but found
          them lacking spiritual depth and genuine transformation.
        </p>
        <blockquote className="my-8 border-l-2 border-gold pl-6 font-serif text-[clamp(22px,3vw,28px)] italic leading-[1.4] text-ink">
          "How can I live a spiritual life, do meaningful work, and make an abundant living?"
        </blockquote>
        <p>
          The same question, over and over, in different voices and from different countries.
        </p>
      </TextSection>

      {/* 40 DAYS, nature-lights image */}
      <ImageSection image="/images/story/nature-lights.jpg" minH="60vh" overlay="medium">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center text-white">
            <span className="eyebrow !text-gold-lt">40 Days of Meditation</span>
            <h2 className="mt-4 font-serif text-[clamp(28px,5vw,42px)] font-light leading-[1.15]">
              Walking by ocean waves, sitting beneath waterfalls, <em>grappling with whether they were the ones to do this.</em>
            </h2>
          </div>
        </Reveal>
      </ImageSection>

      <TextSection>
        <p>
          Recognizing the significance of these repeated requests, Michael and his partner Arielle
          dedicated 40 days to meditation and contemplation. During this period, walking by ocean
          waves, sitting beneath mountain waterfalls, watching sunsets, they grappled with self-doubt
          and uncertainty about whether they were equipped for this work.
        </p>
        <p>
          Reflecting on his own past, years of addiction and depression before his awakening,
          Michael realized his transformation story <em>itself</em> was the qualification. A single
          mentor had shown up with love and opened his eyes to life-changing possibilities. He
          recognized the potential impact if more people helped others awaken.
        </p>
      </TextSection>

      {/* DIVINE LIGHT */}
      <ImageSection image="/images/story/divine-light.jpg" minH="62vh" overlay="medium">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center text-white">
            <span className="eyebrow !text-gold-lt">The Night of the Divine Light</span>
            <h2 className="mt-4 font-serif text-[clamp(28px,5vw,42px)] font-light leading-[1.15]">
              "Empower souls as spiritual leaders.<br /><em>Teach the teachers.</em>"
            </h2>
          </div>
        </Reveal>
      </ImageSection>

      <TextSection>
        <p>
          Near year's end, they invited a small group to their home for meditation and sound healing.
          During the session, participants described experiencing a golden light filling the room,
          accompanied by a palpable sense of sacred energy.
        </p>
        <p>
          Both Michael and Arielle received the same inner message:{" "}
          <em className="text-ink">Empower souls as spiritual leaders. Teach the teachers.</em>
        </p>
        <p>
          That experience crystallized their direction, and led to the creation of Awakened Academy.
        </p>
      </TextSection>

      {/* CREATING SOMETHING THAT DIDN'T EXIST */}
      <TextSection title="Creating something that didn't exist" bg="warm">
        <p>
          Their vision was explicit: develop the first truly spiritually-grounded coaching and
          leadership certification. Not a corporate program with spiritual aesthetics. Not a
          superficial retreat. A comprehensive training that would guide students from where they
          actually were to the life they envisioned.
        </p>
        <p>
          They retained only essential elements and eliminated everything inessential to that
          mission.
        </p>
        <p>
          When they introduced the program, the response was immediate and enthusiastic. Early
          students reported that this offering answered deep, long-held intentions. The
          transformation among initial participants became evident quickly, confirming they had
          created something genuinely needed.
        </p>
      </TextSection>

      {/* TODAY */}
      <ImageSection image="/images/story/today.jpg" minH="50vh" overlay="strong">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center text-white">
            <span className="eyebrow !text-gold-lt">Awakened Academy Today</span>
            <h2 className="mt-4 font-serif text-[clamp(28px,5vw,42px)] font-light leading-[1.15]">
              Twenty years on, the work has <em>only deepened.</em>
            </h2>
          </div>
        </Reveal>
      </ImageSection>

      <TextSection>
        <p>Since 2004, the work has evolved and expanded:</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <StatCard number="1,250+" label="Students trained across 25+ countries" />
          <StatCard number="125,000+" label="Five-star reviews across our work" />
          <StatCard number="10M+" label="Downloads of meditations and content" />
          <StatCard number="20+ yrs" label="Pioneer experience in spiritual life coaching" />
        </div>
        <p className="mt-8">
          The founders emphasize they don't position themselves as gurus, but rather as experienced
          guides willing to share what they've learned.
        </p>
      </TextSection>

      {/* WHAT MAKES THIS DIFFERENT */}
      <TextSection title="What makes this different" bg="warm">
        <p>
          Many spiritual life coaching programs now exist, but most lack essential balance. Some
          were created by people studying Michael's original work. Others slap "spiritual" labels
          on conventional life coaching. Some remain overly corporate; others lack practical
          grounding.
        </p>
        <p>Awakened Academy distinguishes itself through:</p>
        <ul className="mt-4 space-y-3 text-[16px] leading-[1.7] text-ink2">
          <li className="flex items-start gap-3"><span className="mt-1 text-gold">→</span>Over 20 years of pioneer experience in this specific field</li>
          <li className="flex items-start gap-3"><span className="mt-1 text-gold">→</span>Methods proven first on Michael's own life and high-ticket clients</li>
          <li className="flex items-start gap-3"><span className="mt-1 text-gold">→</span>Integration of personal transformation, coaching framework, meditation teacher training, and business tools</li>
          <li className="flex items-start gap-3"><span className="mt-1 text-gold">→</span>Support from practitioners with two decades of real-world application</li>
        </ul>
        <p className="mt-6 italic">This combination remains unavailable elsewhere.</p>
      </TextSection>

      {/* WHO IT HAS HELPED */}
      <TextSection title="Who Awakened Academy has helped">
        <p className="mb-8">A few of the people whose lives have shifted since walking the path:</p>
        <div className="grid gap-6 md:grid-cols-2">
          <StudentCard
            name="Rita Andorinho"
            story="Left her corporate law career, relocated to her dream Portuguese farm property, authored a book, lost 13 kg, found a loving relationship, and established her coaching practice. She describes her previous depressed self as gone."
          />
          <StudentCard
            name="Dorise"
            story="Doubled her income while reducing working hours, started her own foundation, published a book, and attracted a potential $100M investment for her projects."
          />
          <StudentCard
            name="Rakhee C. Patel"
            story="Departed from pharmacy work after 17 years to become a spiritual life coach, describing this as her best career decision."
          />
          <StudentCard
            name="Mick Rutjes"
            story="Left his psychology degree at 19. Now he co-hosts retreats in Tuscany, serves 100+ clients globally, and has traveled to 27 countries building his freedom-based business."
          />
        </div>
      </TextSection>

      {/* WHY WE CARE */}
      <TextSection title="Why we care" bg="warm">
        <p>
          The world currently faces unprecedented challenges that require substantive guidance,
          not social media noise or generic programming. We have heard repeatedly from students who
          wasted years and thousands of dollars with derivative programs that misunderstood our
          principles.
        </p>
        <p>
          We believe spiritually-gifted healers deserve financial freedom to practice full-time.
          When gifted practitioners remain trapped in unfulfilling employment, the people who need
          their help never receive it. Conversely, when such people work freely in their calling,
          the positive effects multiply exponentially.
        </p>
      </TextSection>

      {/* CALL TO ADVENTURE */}
      <ImageSection image="/images/story/loa.jpg" minH="62vh" overlay="medium">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center text-white">
            <span className="eyebrow !text-gold-lt">Your Call to Adventure</span>
            <h2 className="mt-4 font-serif text-[clamp(28px,5vw,46px)] font-light leading-[1.15]">
              If you feel called to help others<br />while building a spiritually-aligned, abundant life, <em>this is for you.</em>
            </h2>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                href="/brochure-download"
                className="inline-block rounded bg-gold px-7 py-3.5 text-[13px] font-medium text-white transition hover:bg-gold-dark"
              >
                Download Free Brochure
              </Link>
              <Link
                href="/schedule"
                className="inline-block rounded border-2 border-white px-7 py-3 text-[13px] font-medium text-white transition hover:bg-white hover:text-ink"
              >
                Schedule a Free Clarity Call
              </Link>
            </div>
            <p className="mt-10 font-serif text-[18px] italic text-white/85">
              Thank you for being part of this journey. You are a blessing to our world.
            </p>
            <p className="mt-3 text-[12px] uppercase tracking-[0.24em] text-gold-lt">
              — Michael &amp; Arielle
            </p>
          </div>
        </Reveal>
      </ImageSection>
    </>
  );
}

function TextSection({
  title,
  eyebrow,
  children,
  bg = "bg",
}: {
  title?: string;
  eyebrow?: string;
  children: ReactNode;
  bg?: "bg" | "warm";
}) {
  return (
    <section className={bg === "warm" ? "bg-warm" : "bg-bg"}>
      <div className="mx-auto max-w-wide px-6 py-16 md:py-20">
        <Reveal>
          {(eyebrow || title) && (
            <div className="mb-8">
              {eyebrow && <span className="eyebrow">{eyebrow}</span>}
              {title && (
                <h2 className="mt-3 font-serif text-[clamp(28px,4.5vw,40px)] font-light leading-[1.2] text-ink">
                  {title}
                </h2>
              )}
              {title && <div className="mt-5 h-px w-14 bg-gold" />}
            </div>
          )}
          <div className="space-y-5 text-[17px] leading-[1.85] text-ink2">{children}</div>
        </Reveal>
      </div>
    </section>
  );
}

function ImageSection({
  image,
  minH,
  overlay,
  children,
}: {
  image: string;
  minH: string;
  overlay: "strong" | "medium" | "light";
  children: ReactNode;
}) {
  const overlayClass =
    overlay === "strong"
      ? "bg-gradient-to-b from-black/55 via-black/45 to-black/65"
      : overlay === "medium"
        ? "bg-gradient-to-b from-black/45 via-black/35 to-black/55"
        : "bg-gradient-to-b from-black/30 via-black/20 to-black/40";
  return (
    <section className="relative isolate w-full overflow-hidden" style={{ minHeight: minH }}>
      <Image src={image} alt="" fill priority={false} className="-z-10 object-cover object-center" />
      <div className={`absolute inset-0 -z-10 ${overlayClass}`} />
      <div className="mx-auto flex max-w-widest items-center px-6 py-24" style={{ minHeight: minH }}>
        <div className="w-full">{children}</div>
      </div>
    </section>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="rounded-md border border-ink/10 bg-white p-6 text-center shadow-sm">
      <div className="font-serif text-[34px] font-light leading-none text-teal">{number}</div>
      <div className="mt-3 text-[13px] leading-[1.5] text-ink2">{label}</div>
    </div>
  );
}

function StudentCard({ name, story }: { name: string; story: string }) {
  return (
    <article className="rounded-md border border-ink/10 bg-white p-6 shadow-sm">
      <div className="font-serif text-[20px] text-ink">{name}</div>
      <div className="mt-2 h-px w-10 bg-gold" />
      <p className="mt-4 text-[14.5px] leading-[1.7] text-ink2">{story}</p>
    </article>
  );
}
