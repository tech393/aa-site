import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: { absolute: "Awakened Academy Success Stories | Graduate Coaches" },
  description:
    "Read stories from graduates who built thriving spiritual coaching practices. Real outcomes from real coaches in 25+ countries.",
  alternates: { canonical: "/awakened-academy-success-stories" },
  openGraph: { title: "Success Stories – Awakened Academy®", description: "Real transformation stories from Awakened Academy students worldwide." },
};

type Story = { title: string; author: string; location?: string; story: string; photo?: string };

const STORIES: Story[] = [
  { title: "Raise Your Hand", author: "Kacy Singh", location: "Canada", photo: "/stories/kacy.jpg", story: "Growing up, Kacy felt confused and never fit in. She dimmed her light to conform, even hiding her academic success. A pivotal moment in grade 11 chemistry, keeping her hand down despite knowing the answer, showed her how much she had chosen invisibility over standing out. Through self-reflection, she recognized her inner child's fear of further bullying. The turning point came through understanding quantum physics, that humans are beings of light, not mere physical forms. \"You were born to be legendary.\" Joining the Awakened Academy community gave her the support system to finally shine authentically. She now encourages others to \"raise your hand to God. Raise your hand to truth. Raise your hand to the miraculous.\"" },
  { title: "Overcoming Perfectionism", author: "Kyli Hope Vandemark", location: "Canada", photo: "/stories/kyli.jpeg", story: "Kyli suffered from severe perfectionism, needing complete control because she trusted only herself. This caused burnout, depression, guilt, and shame. She created a Shadow Work Journal for women but encountered resistance, later realizing it stemmed from perfectionism and fear of failure. After completing the journal, she faced a publishing opportunity but hesitated due to money blocks. Her higher self intervened with compassion. She accepted, paid the publisher, and experienced an energetic shift, releasing her money block and negative self-talk. \"What is the worst that can happen… that we haven't already overcome?\"" },
  { title: "Facing Your Fears", author: "Nick Levesque", location: "Canada", photo: "/stories/nick.png", story: "Nick had an extreme fear of heights that held him back from experiences. When his brother jokingly suggested skydiving, Nick initially dismissed it but then wondered: \"What if I do this? Will I overcome this fear?\" He booked a session despite terror. At 10,000 feet, he jumped, describing it as \"the best experience I have ever had in my life.\" His message: \"We can overcome anything, even if it terrifies us.\"" },
  { title: "Mirror, Mirror On The Wall", author: "Terri Lynn Marshall", location: "United States", photo: "/stories/terri.jpg", story: "At eight years old, Terri internalized her father's abusive words: she was worthless, ugly, and would never amount to anything. She spent decades wearing masks, appearing successful while harboring internal self-loathing. After divorce at 31, the loss of parents, sister, and daughter, and at age 57 the end of her 26-year marriage, she experienced an unexpected awakening, \"hit by a lightning bolt.\" She began Mirror Work, sitting before mirrors without judgment, singing songs of love to herself, finally offering her inner child the validation she never received. Now, passing mirrors: \"You are so beautiful to me.\"" },
  { title: "Growing Like Bamboo", author: "Marimba Arihi", location: "United Kingdom", photo: "/stories/marimba.jpg", story: "Marimba sought to live more inspired rather than forced. Overwhelmed by her to-do list, she allowed herself to pause and not act from obligation. In the stillness she experienced \"magical synchronicities\" and learned to trust intuition. She drew parallels to bamboo, plants with thick ridges supporting each growth stage, building strength quietly. Surrendering to Divine timing, she attracted five new coaching clients effortlessly. \"Success is first experienced on an energetic level, before it can truly be experienced on a physical level.\"" },
  { title: "Sitting with Fear… Literally", author: "Anonymous Student", story: "The author was overwhelmed by fears, experienced as \"big, threatening, grey clouds\" hovering overhead, causing nausea. Guided by Awakened Academy coaches, she gave the fear physical form, a shadowy, black figure, and invited it into her experience. Suddenly they sat together at a beach table, enjoying the sea. \"Calmness started washing over me, like I was greeting a friend.\" Key learning: identify the emotion, acknowledge it, and use your senses to explore it with curiosity until you feel calmer." },
  { title: "The Voice Inside My Head", author: "Anonymous Student", story: "She struggled with a negative internal voice saying money and wealth were evil. Upon learning about healing relationships with money, she realized: \"Abundance is our birthright. It is the key to embody the freedom that money allows us.\" She learned to change the voice, even laugh at it, realizing how simple it is to stop the voice from having such power, knowing in her heart that what it was telling her was untrue." },
  { title: "Moving Through Darkness", author: "Giulia Sarro", location: "Switzerland", photo: "/stories/giulia.jpg", story: "During spring, Giulia felt hopeless and unable to see light at the end of the tunnel, constant despair. She suspects she was purging and releasing ego identity as she worked on confidence and self-esteem. By summer, everything shifted. She reached the light. \"My soul was preparing itself for this.\" Her insight: \"We shouldn't fear darkness, it is there for a reason, to grow and learn, to let go and release so that we can vibrate at a higher frequency.\"" },
  { title: "Diving into a Growth Mindset", author: "Anonymous Student", story: "During scuba diving class, while practicing mask clearing at 20 feet deep, she panicked when inhaling water through her nose and quickly ascended. Her instructor reminded her: the regulator in her mouth had air available. She realized this parallels a fixed mindset, when anxious, we forget the tools and opportunities available. Adopting a growth mindset means remembering to \"breathe through the regulator\" when anxiety rises. Fear diminishes when we \"stop, breathe, and take the next best course of action.\"" },
  { title: "Releasing Resistance to Resistance", author: "Anonymous Student", story: "After launching a heart-centered coaching business, she experienced silence and doubt. Her ego voiced criticisms. She attempted to push away the resistance but found it ineffective, like shoving laundry under a bed and wondering why the room still smells. Encouraged to get curious instead, she asked: \"What would happen if I surrendered to resistance versus resisting it?\" Observing her resistance, she realized it signaled success, not failure. Surrendering rather than resisting, she increased trust in her Highest Self and Divine timing." },
  { title: "Being a Good Beginner", author: "Karlie Kuehn", location: "United States", photo: "/stories/karlie.jpeg", story: "Karlie affirms that \"being a beginner and releasing perfectionism is hard\" but celebrates the courage it requires. Being a beginner mirrors where growth is needed, pushing belief in oneself, developing support systems, and deepening Divine trust. \"Being a beginner is truly a beautiful journey that builds us up, even when we feel we are breaking down.\" Her message: embrace imperfections, take leaps of faith, surrender details to the Divine, and celebrate small victories." },
  { title: "Creating a Life Worth Living… Not Just Meditating", author: "Daniel Lesser", location: "United Kingdom", photo: "/stories/daniel.jpg", story: "Daniel spent months unable to travel to Spain, feeling trapped. When restrictions lifted, an \"incredible feeling of doors opening\" returned. He recognized wanting more than meditation: \"I want to create a life worth living, not just meditate.\" His digital nomad call to adventure reignited. He advocates balance: \"A balance between meditation, serving others, and having fun is greatly needed.\" His question for readers: \"What beliefs are you holding onto that are keeping you stuck?\"" },
  { title: "Looking for Me", author: "Anonymous Student", story: "She began a spiritual journey seeking her true self, feeling stuck, afraid, victimized, and powerless. The constant question: \"Who am I?\" Opening herself to change, shifts happened effortlessly. She surrendered blame, fear, and victimhood. She describes emerging into light: \"A glowing pure soul of light, walking toward light in a tunnel of light surrounding me.\" Her transformation culminated in freedom: \"I am free. I found me, a loving pure light that's me. I am really ME.\"" },
  { title: "The Power of Growth", author: "Anonymous Student", story: "When asked about her intention, she realized: \"I want growth and expansion. I want to be pulled out of my comfort zone.\" A business opportunity arrived, simultaneous discomfort, emotion, and joy. Rather than resisting, she allowed awareness to flow. She experienced a \"very strong Presence of deep love, beautifully warm. I was told all is well and for my highest good.\" Her insight: allowing growth's discomfort reveals transformation." },
  { title: "Letting Go", author: "Susan Brown", location: "United Kingdom", photo: "/stories/susan.jpg", story: "Susan believed she had to control everything and everyone. After a subconscious mind session releasing limiting beliefs, she understood: \"To move forward, to be free and have a true future, I can only work and change myself. I have no control over anything in my life.\" Releasing control meant trusting Divine care. \"I do not need to control everything in my life, because I am very well taken care of by the true Divine. I'm truly free to be who I was always meant to be.\"" },
  { title: "Mindset of Growth", author: "Artie Sabando", location: "United States", photo: "/stories/artie.jpg", story: "Before the program, Artie felt stuck without knowing why, unable to progress on her business website. She operated in a fixed mindset. Learning about growth versus fixed mindsets, she realized that celebrating progressive steps kept energy positive. Challenges became lessons rather than roadblocks. Shifting from fixed to growth mindset created measurable results, she started her spiritual life coaching business and acquired clients. She shared the mindset shift with a client who experienced significant improvements in income, health, and mental wellbeing." },
  { title: "Something More… This Is It", author: "Nicole Gillette", location: "United States", photo: "/stories/nicole.jpg", story: "Nicole spent 5½ years searching for where she perfectly fit, feeling passionate about teaching and helping others. She substitute taught and explored spirituality but sensed something more. During the pandemic, furloughed from teaching, she deepened spiritual studies. Reading Arielle's and Michael's emails, her heart recognized: \"This is it. This is my fit.\" Despite concerns about affordability, she invested in the certification with her husband's support, \"one of the best decisions I have ever made in my life, and for my soul.\"" },
  { title: "What Is Your Purpose?", author: "Anonymous Student", story: "She had wondered about deeper understanding and connection with life for years, sometimes feeling lost despite a five-year spiritual healing journey. During a self-awareness course, she was prompted to explore what she always did, what people knew her for, and what lit her up. The answer came clearly: spiritual life coaching. She found Awakened Academy and experienced profound shifts. She discovered that helping others be their \"most beautiful, empowered, truthful selves\" lights her up completely." },
  { title: "Grounding in My Truth", author: "Tamara Krissansen", location: "Australia", story: "Tamara and her \"Wolfpack\" family relocated to a remote location, leaving their safe community. The transition created energetic shifts and revealed her need for deeper spiritual discipline. After shaky days finding her footing, she resumed daily meditation, yoga, and journaling. \"Everything shifted. I could feel the sunshine coming back in.\" Her breakthrough: \"This is who I am now, the whole me.\" Now firmly rooted: \"I am not afraid of showing my truth, and I feel a lightness and a deep peace in my heart.\"" },
  { title: "I Am Consciousness Having an Experience", author: "Nalita Sharma", location: "Canada", story: "Nalita found writing her story difficult, as it brought up painful feelings. Through reflection, she shifted perspective: \"Maybe there is no 'uncomfortable.' Maybe there is no 'comfortable.'\" She realized the mind creates separation through labeling. Her transformative insight: \"I am consciousness having an experience.\" Rather than identifying with comfort or discomfort, she recognized herself as awareness experiencing all states." },
];

export default function SuccessStoriesPage() {
  return (
    <>
      <section className="relative isolate w-full overflow-hidden">
        <Image src="/images/golden-light.jpg" alt="Golden light" fill priority className="-z-10 object-cover object-center" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/35 via-black/25 to-black/55" />
        <div className="mx-auto max-w-widest px-6 py-24 text-center text-white md:py-32">
          <Reveal>
            <span className="eyebrow !text-gold-lt">Success Stories</span>
            <h1 className="mt-4 font-serif text-[clamp(32px,6vw,56px)] font-light leading-[1.1]">
              We love our students &amp; want to <em>celebrate their successes</em>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-[clamp(15px,2vw,18px)] leading-[1.7] text-white/95 drop-shadow">
              Here is a small selection of their stories, moments of breakthrough, surrender, and the
              kind of transformation that ripples outward.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-bg">
        <div className="mx-auto max-w-widest px-6 py-20">
          <div className="space-y-10">
            {STORIES.map((s, i) => (
              <Reveal key={i}>
                <article className="grid items-start gap-8 rounded-md border border-ink/10 bg-white p-8 shadow-sm md:grid-cols-[120px_1fr] md:p-10">
                  <div className="flex justify-center md:block">
                    {s.photo ? (
                      <div className="relative h-[120px] w-[120px] overflow-hidden rounded-full border-2 border-gold/30 shadow-sm">
                        <Image src={s.photo} alt={s.author} fill className="object-cover" />
                      </div>
                    ) : (
                      <div className="flex h-[120px] w-[120px] items-center justify-center rounded-full bg-gold/20 font-serif text-5xl text-gold-dark">
                        {s.author.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.24em] text-teal">Story {String(i + 1).padStart(2, "0")}</div>
                    <h2 className="mt-2 font-serif text-[clamp(22px,3.2vw,30px)] font-light leading-[1.2] text-ink">{s.title}</h2>
                    <div className="mt-2 text-[14px] text-soft">
                      <span className="font-medium text-ink2">{s.author}</span>
                      {s.location && <> · {s.location}</>}
                    </div>
                    <div className="mt-5 h-px w-12 bg-gold" />
                    <p className="mt-5 text-[15.5px] leading-[1.85] text-ink2">{s.story}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-teal text-white">
        <div className="mx-auto max-w-wide px-6 py-20 text-center">
          <Reveal>
            <h2 className="font-serif text-[clamp(28px,5vw,42px)] font-light">
              Ready to write <em className="text-gold-lt">your story?</em>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[16px] leading-[1.7] text-white/85">
              We are honored and blessed to empower thousands of amazing souls from all over the world.
              Thank you for being you. Thank you for being willing to awaken.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link href="/download-free-brochure" className="inline-block rounded bg-gold px-7 py-3.5 text-[13px] font-medium text-white transition hover:bg-gold-dark">Download Free Brochure</Link>
              <Link href="/schedule" className="inline-block rounded border-2 border-white px-7 py-3 text-[13px] font-medium text-white transition hover:bg-white hover:text-teal">Book a Discovery Call</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
