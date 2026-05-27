'use client';

/**
 * The Miracle Journal, bonus training delivery (client component).
 * v2, "more miraculous" pass: sunrise aurora hero, Flower of Life sacred
 * geometry behind the H1, gold ornamental section dividers, radial glow
 * behind the book cover, gold-particle dust in the bonus section, starfield
 * + Metatron motif in the navy final CTA.
 *
 * Visual language echoes the book cover (pink/gold sunrise + Flower of Life).
 * Restrained, NYT-magazine premium, not new-age tacky.
 *
 * Page structure (1:1 with source WP page):
 *   1. Hero      , sunrise aurora + Flower of Life + script "I believe in miracles"
 *   2. Intro     , "How to get the most from your Miracle Journal?" + 38-word para
 *   3. Audio Library, 8 stacked AudioCards
 *   4. Book + Buy, sunrise glow behind cover + Amazon link
 *   5. Bonus     , single navy/gold AudioCard with star badge
 *   6. Final CTA , navy starfield + Metatron motif, "Become A Spiritual Life Coach"
 *
 * Every word of source copy preserved verbatim. Audio URLs preserved.
 */

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Reveal from '@/components/Reveal';

// ───────────────────────────────────────────────────────────────────────────
// Data, verbatim from the WP /miracle page. No invented copy.
// ───────────────────────────────────────────────────────────────────────────

type AudioTrack = { number: number; title: string; src: string };

const TRAININGS: AudioTrack[] = [
  { number: 1, title: 'Miracle Journal Explanation',
    src: '/audio/miracle/01-1-Miracle-Journal-Explanation.mp3' },
  { number: 2, title: 'Creating Your Sacred Intentions',
    src: '/audio/miracle/02-2-Creating-Your-Sacred-Intentions.mp3' },
  { number: 3, title: 'Sacred Appreciation & Feel The Gratitude',
    src: '/audio/miracle/3-Sacred-Appreciation-Feel-The-Gratitude.mp3' },
  { number: 4, title: 'Yes! It Is Done',
    src: '/audio/miracle/04-4-Yes-It-Is-Done.mp3' },
  { number: 5, title: 'Your Sacred Rituals & Inspired Actions',
    src: '/audio/miracle/5-Your-Sacred-Rituals-Inspired-Actions.mp3' },
  { number: 6, title: 'Your Weekly Reflections',
    src: '/audio/miracle/7-Your-Weekly-Reflections.mp3' },
  { number: 7, title: 'How To Make Sure You Do It!!',
    src: '/audio/miracle/8-How-To-Make-Sure-You-Do-It.mp3' },
  { number: 8, title: 'Missing Manifestation Secret (Simple but essential)',
    src: '/audio/miracle/Missing-Manifestation-Secret-Simple-but-essential.mp3' }
];

const BONUS_TRACK: AudioTrack = {
  number: 0,
  title: 'BONUS: Advanced Law Of Attraction Training',
  src: '/audio/miracle/Advanced-Law-Of-Attraction-Training.mp3'
};

const INTRO_PARAGRAPH =
  "Listen to these short, powerful audios about how to access your miracle " +
  "consciousness and increase your manifestation powers. As you use this book " +
  "fully, you'll get better results with less effort. Have fun!";

const AMAZON_URL = 'https://amzn.to/3ep1cKq';
// Local path, Dan copies /img/Miracle-Journal.png from this rebuild folder
// into the AA project's /public/img/miracle/ folder.
const BOOK_IMAGE = '/img/miracle/Miracle-Journal.png';
const CERT_URL = '/spiritual-life-coach-certification/';

// ───────────────────────────────────────────────────────────────────────────
// Sacred geometry, Flower of Life SVG (used in hero + final CTA)
// ───────────────────────────────────────────────────────────────────────────

function FlowerOfLife({
  className = '',
  showOuterRing = true,
  strokeWidth = 1
}: {
  className?: string;
  showOuterRing?: boolean;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 600 600"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <g fill="none" stroke="currentColor" strokeWidth={strokeWidth}>
        {/* Center */}
        <circle cx="300" cy="300" r="60" />
        {/* Inner ring of 6 */}
        <circle cx="360" cy="300" r="60" />
        <circle cx="330" cy="248.04" r="60" />
        <circle cx="270" cy="248.04" r="60" />
        <circle cx="240" cy="300" r="60" />
        <circle cx="270" cy="351.96" r="60" />
        <circle cx="330" cy="351.96" r="60" />
        {/* Outer ring of 12 */}
        <circle cx="420" cy="300" r="60" />
        <circle cx="390" cy="196.08" r="60" />
        <circle cx="330" cy="144.12" r="60" />
        <circle cx="270" cy="144.12" r="60" />
        <circle cx="210" cy="196.08" r="60" />
        <circle cx="180" cy="300" r="60" />
        <circle cx="210" cy="403.92" r="60" />
        <circle cx="270" cy="455.88" r="60" />
        <circle cx="330" cy="455.88" r="60" />
        <circle cx="390" cy="403.92" r="60" />
        <circle cx="389.71" cy="248.04" r="60" />
        <circle cx="210.29" cy="248.04" r="60" />
        {showOuterRing && (
          <>
            <circle cx="300" cy="300" r="180" strokeWidth={strokeWidth * 1.2} />
            <circle cx="300" cy="300" r="200" strokeWidth={strokeWidth * 0.8} opacity={0.7} />
          </>
        )}
      </g>
    </svg>
  );
}

// ───────────────────────────────────────────────────────────────────────────
// Gold dust particles (hero)
// ───────────────────────────────────────────────────────────────────────────

const DUST_POSITIONS = [
  { l: '10%', b: '5%',  d: '0s'    }, { l: '18%', b: '12%', d: '2.4s' },
  { l: '28%', b: '8%',  d: '5.1s'  }, { l: '40%', b: '15%', d: '7.8s' },
  { l: '52%', b: '6%',  d: '1.3s'  }, { l: '64%', b: '11%', d: '9.2s' },
  { l: '74%', b: '18%', d: '3.7s'  }, { l: '82%', b: '9%',  d: '6.5s' },
  { l: '92%', b: '14%', d: '11s'   }, { l: '34%', b: '22%', d: '4.2s' },
  { l: '58%', b: '25%', d: '8.9s'  }, { l: '70%', b: '30%', d: '12.5s' }
];

// ───────────────────────────────────────────────────────────────────────────
// AudioCard, branded HTML5 player wrapper
// ───────────────────────────────────────────────────────────────────────────

function formatTime(seconds: number): string {
  if (!isFinite(seconds) || seconds < 0) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${mins}:${secs}`;
}

function AudioCard({
  track,
  badge,
  variant = 'default'
}: {
  track: AudioTrack;
  badge?: string;
  variant?: 'default' | 'bonus';
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    const onMeta = () => setDuration(el.duration);
    const onTime = () => {
      setCurrentTime(el.currentTime);
      setProgress(el.duration ? (el.currentTime / el.duration) * 100 : 0);
    };
    const onEnd = () => setIsPlaying(false);
    el.addEventListener('loadedmetadata', onMeta);
    el.addEventListener('timeupdate', onTime);
    el.addEventListener('ended', onEnd);
    return () => {
      el.removeEventListener('loadedmetadata', onMeta);
      el.removeEventListener('timeupdate', onTime);
      el.removeEventListener('ended', onEnd);
    };
  }, []);

  const togglePlay = () => {
    const el = audioRef.current;
    if (!el) return;
    if (isPlaying) { el.pause(); setIsPlaying(false); }
    else { el.play().catch(() => setIsPlaying(false)); setIsPlaying(true); }
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = audioRef.current;
    if (!el || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    el.currentTime = Math.max(0, Math.min(duration, duration * ratio));
  };

  const isBonus = variant === 'bonus';

  return (
    <article
      className={`group relative rounded-2xl border transition-all duration-300 ${
        isBonus
          ? 'bg-gradient-to-br from-navy to-[#070E22] text-cream border-gold/25 p-7 md:p-9 overflow-hidden'
          : 'bg-cream-paper border-line p-6 md:p-7 hover:border-gold/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_6px_18px_rgba(42,26,15,0.04)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_10px_28px_rgba(42,26,15,0.08)]'
      }`}
    >
      {isBonus && (
        <div
          aria-hidden
          className="absolute -right-10 -top-10 w-44 h-44 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(201,169,97,0.22) 0%, transparent 60%)' }}
        />
      )}
      <div className="relative flex items-start gap-5">
        <div
          className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-display text-xl ${
            isBonus
              ? 'bg-gold/20 text-gold border border-gold/45'
              : 'bg-teal/10 text-teal border border-teal/20'
          }`}
          aria-hidden
        >
          {badge ?? track.number}
        </div>

        <div className="flex-1 min-w-0">
          <h3
            className={`font-display text-[clamp(1.15rem,2vw,1.4rem)] leading-snug mb-3 ${
              isBonus ? 'text-cream' : 'text-ink'
            }`}
          >
            {track.title}
          </h3>

          <div className="flex items-center gap-4">
            <button
              onClick={togglePlay}
              aria-label={isPlaying ? `Pause ${track.title}` : `Play ${track.title}`}
              className={`shrink-0 w-11 h-11 rounded-full flex items-center justify-center transition-transform hover:scale-105 active:scale-95 ${
                isBonus
                  ? 'bg-gold text-navy hover:bg-[#D9B26A]'
                  : 'bg-teal text-cream hover:bg-teal-deep'
              }`}
            >
              {isPlaying ? (
                <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
                  <rect x="3" y="2.5" width="3.5" height="11" rx="1" fill="currentColor" />
                  <rect x="9.5" y="2.5" width="3.5" height="11" rx="1" fill="currentColor" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
                  <path d="M4 2.5v11a.75.75 0 0 0 1.15.63l8.5-5.5a.75.75 0 0 0 0-1.26l-8.5-5.5A.75.75 0 0 0 4 2.5z" fill="currentColor" />
                </svg>
              )}
            </button>

            <div className="flex-1 min-w-0">
              <div
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(progress)}
                aria-label={`${track.title} progress`}
                onClick={seek}
                className={`h-2 rounded-full cursor-pointer overflow-hidden ${
                  isBonus ? 'bg-cream/15' : 'bg-ink/10'
                }`}
              >
                <div
                  className={`h-full transition-[width] duration-150 ${
                    isBonus ? 'bg-gold' : 'bg-teal'
                  }`}
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div
                className={`mt-2 flex justify-between text-[12px] tabular-nums ${
                  isBonus ? 'text-cream/70' : 'text-ink/55'
                }`}
              >
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>
          </div>

          <audio ref={audioRef} preload="metadata" src={track.src} className="sr-only">
            <a href={track.src}>Download {track.title}</a>
          </audio>
        </div>
      </div>
    </article>
  );
}

// ───────────────────────────────────────────────────────────────────────────
// Ornamental divider
// ───────────────────────────────────────────────────────────────────────────

function Divider() {
  return (
    <div
      aria-hidden
      className="flex items-center justify-center gap-6 max-w-[300px] mx-auto my-10 text-gold"
    >
      <span className="flex-1 h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(201,169,97,0.45),transparent)' }} />
      <span className="text-lg leading-none opacity-85">✦</span>
      <span className="flex-1 h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(201,169,97,0.45),transparent)' }} />
    </div>
  );
}

// ───────────────────────────────────────────────────────────────────────────
// Page
// ───────────────────────────────────────────────────────────────────────────

export default function MiracleClient() {
  return (
    <main className="bg-cream text-ink min-h-screen">
      {/* Local keyframes for the dust particles. Scoped so it doesn't leak. */}
      <style>{`
        @keyframes aa-miracle-drift {
          0%   { opacity: 0;   transform: translateY(0)    scale(0.6); }
          20%  { opacity: 0.85; }
          100% { opacity: 0;   transform: translateY(-180px) scale(1.2); }
        }
        .aa-dust span {
          position: absolute;
          width: 3px; height: 3px;
          border-radius: 9999px;
          background: radial-gradient(circle, #D9B26A 0%, transparent 70%);
          animation: aa-miracle-drift 14s linear infinite;
          opacity: 0;
        }
      `}</style>

      {/* ─── HERO, sunrise + Flower of Life ───────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: [
            'radial-gradient(ellipse 80% 60% at 50% 0%,  #FFE9D6 0%, transparent 60%)',
            'radial-gradient(ellipse 70% 50% at 50% 10%, #FBD9C4 0%, transparent 65%)',
            'radial-gradient(ellipse 90% 70% at 50% 35%, #F4C6B8 0%, transparent 75%)',
            'linear-gradient(180deg, #E8B898 0%, #F2E8D5 100%)'
          ].join(', ')
        }}
      >
        {/* Sun-glow */}
        <div
          aria-hidden
          className="absolute pointer-events-none"
          style={{
            left: '50%', top: '30%',
            width: '680px', height: '680px',
            transform: 'translate(-50%,-50%)',
            background: 'radial-gradient(circle, rgba(255,248,225,0.85) 0%, rgba(255,248,225,0.4) 25%, transparent 60%)'
          }}
        />
        {/* Flower of Life, sacred geometry behind the title */}
        <div
          aria-hidden
          className="absolute pointer-events-none"
          style={{
            left: '50%', top: '50%',
            width: 'min(620px, 90vw)', aspectRatio: '1',
            transform: 'translate(-50%,-50%)',
            opacity: 0.16,
            color: '#7a4a3a'
          }}
        >
          <FlowerOfLife className="w-full h-full" />
        </div>

        {/* Gold dust particles */}
        <div className="aa-dust absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
          {DUST_POSITIONS.map((p, i) => (
            <span key={i} style={{ left: p.l, bottom: p.b, animationDelay: p.d }} />
          ))}
        </div>

        <div className="relative mx-auto max-w-3xl px-6 md:px-8 pt-24 md:pt-32 pb-24 md:pb-28 text-center z-[2]">
          <Reveal>
            <p
              className="italic text-rose mb-4 leading-none opacity-85"
              style={{ fontFamily: "'Allison', 'Fraunces', cursive", fontSize: 'clamp(2rem, 4vw, 2.8rem)' }}
            >
              I believe in miracles
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="text-[11px] md:text-[12px] tracking-[0.32em] uppercase text-teal mb-6">
              Sacred Bonus Manifestation Training
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1
              className="font-display text-ink mb-6"
              style={{ fontSize: 'clamp(2.6rem, 7vw, 4.5rem)', lineHeight: 1.02, letterSpacing: '-0.01em' }}
            >
              The Miracle Journal
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p
              className="font-display italic text-teal"
              style={{ fontSize: 'clamp(1.15rem, 2.2vw, 1.4rem)' }}
            >
              … and miracles find me
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── INTRO ─────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-2xl px-6 md:px-8 pt-16 md:pt-20 pb-8 md:pb-10 text-center">
        <Reveal>
          <h2
            className="font-display text-ink mb-5"
            style={{ fontSize: 'clamp(1.7rem, 3.6vw, 2.4rem)', lineHeight: 1.2 }}
          >
            How to get the most from your Miracle Journal?
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="text-[17px] md:text-[18px] leading-[1.75] text-ink/85">
            {INTRO_PARAGRAPH}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <Divider />
        </Reveal>
      </section>

      {/* ─── AUDIO LIBRARY ─────────────────────────────────────────────── */}
      <section className="mx-auto max-w-3xl px-6 md:px-8 pt-4 pb-20 md:pb-24">
        <Reveal>
          <p className="text-[11px] md:text-[12px] tracking-[0.32em] uppercase text-teal text-center mb-8">
            The Trainings
          </p>
        </Reveal>
        <div className="space-y-4 md:space-y-5">
          {TRAININGS.map((t, i) => (
            <Reveal key={t.src} delay={Math.min(i * 0.04, 0.2)}>
              <AudioCard track={t} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── BOOK + AMAZON LINK, sunrise glow ────────────────────────── */}
      <section
        className="relative overflow-hidden border-y border-line"
        style={{
          background: [
            'radial-gradient(ellipse 70% 60% at 30% 50%, #FFE9D6 0%, transparent 60%)',
            'radial-gradient(ellipse 60% 50% at 30% 50%, rgba(255,235,200,0.6) 0%, transparent 50%)',
            '#FBF5E8'
          ].join(', ')
        }}
      >
        <div className="relative mx-auto max-w-[880px] px-6 md:px-8 py-20 md:py-24 grid md:grid-cols-2 gap-12 md:gap-16 items-center z-[2]">
          <Reveal>
            <div className="relative flex justify-center">
              <div
                aria-hidden
                className="absolute pointer-events-none"
                style={{
                  left: '50%', top: '50%',
                  width: '120%', height: '120%',
                  transform: 'translate(-50%,-50%)',
                  background: 'radial-gradient(circle, rgba(255,225,180,0.55) 0%, transparent 60%)'
                }}
              />
              <a
                href={AMAZON_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get a copy of The Miracle Journal on Amazon"
                className="relative z-[1] block w-[min(280px,80%)] rounded-[6px] overflow-hidden transition-transform duration-500 hover:-translate-y-1.5 hover:-rotate-1"
                style={{
                  aspectRatio: '504 / 754',
                  boxShadow:
                    'inset 0 1px 0 rgba(255,255,255,0.5), 0 30px 60px -20px rgba(42,26,15,0.35), 0 18px 40px -10px rgba(42,26,15,0.2)'
                }}
              >
                <Image
                  src={BOOK_IMAGE}
                  alt="The Miracle Journal, cover by Michael Mackintosh"
                  fill
                  sizes="(max-width: 768px) 70vw, 280px"
                  className="object-cover"
                  priority
                />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="relative z-[2]">
              <p className="text-[11px] md:text-[12px] tracking-[0.32em] uppercase text-teal mb-4">
                The Journal
              </p>
              <h2
                className="font-display text-ink mb-5"
                style={{ fontSize: 'clamp(1.7rem, 3.4vw, 2.2rem)', lineHeight: 1.2 }}
              >
                Don&rsquo;t have the journal yet?
              </h2>
              <p className="text-[17px] leading-[1.7] text-ink/80 mb-7">
                The trainings above are the companion teachings. The journal itself
                is the practice, daily pages for your sacred intentions, gratitude,
                inspired action, and weekly reflection.
              </p>
              <a
                href={AMAZON_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-sm bg-teal text-cream font-medium tracking-wide hover:bg-teal-deep hover:-translate-y-0.5 transition-all"
              >
                Get a copy here
                <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
                  <path
                    d="M3 7h8M7 3l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── BONUS AUDIO ───────────────────────────────────────────────── */}
      <section className="mx-auto max-w-3xl px-6 md:px-8 py-20 md:py-24">
        <Reveal>
          <p className="text-[11px] md:text-[12px] tracking-[0.32em] uppercase text-gold text-center mb-4">
            Going Deeper
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2
            className="font-display text-ink text-center mb-10 max-w-2xl mx-auto"
            style={{ fontSize: 'clamp(1.7rem, 3.6vw, 2.4rem)', lineHeight: 1.2 }}
          >
            Learn more advanced teaching on the Law of Attraction
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <AudioCard track={BONUS_TRACK} badge="★" variant="bonus" />
        </Reveal>
      </section>

      {/* ─── FINAL CTA, navy starfield + Metatron ─────────────────────── */}
      <section
        className="relative overflow-hidden text-cream"
        style={{
          background: [
            'radial-gradient(ellipse 100% 60% at 50% 0%, rgba(201,169,97,0.15) 0%, transparent 60%)',
            'linear-gradient(180deg, #0F1A38 0%, #070E22 100%)'
          ].join(', ')
        }}
      >
        {/* Starfield */}
        <svg
          className="absolute inset-0 pointer-events-none w-full h-full opacity-50"
          viewBox="0 0 1000 600"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <g fill="#FBF5E8">
            {[
              [48,62,0.7],[142,38,0.8],[220,110,1],[305,55,0.6],[380,135,0.9],[460,74,0.7],
              [545,166,1.1],[620,42,0.6],[710,120,0.8],[790,60,0.9],[870,148,0.7],[945,85,0.8],
              [78,220,0.9],[160,280,0.6],[248,200,0.8],[336,265,0.7],[412,215,1],[498,290,0.7],
              [580,232,0.8],[668,278,0.9],[752,208,0.6],[836,262,0.8],[918,225,0.7],
              [58,370,0.7],[138,430,0.9],[225,395,0.6],[312,450,0.8],[395,380,0.7],[478,438,1],
              [562,402,0.6],[650,460,0.9],[735,392,0.8],[820,448,0.7],[908,415,0.9],
              [92,520,0.6],[175,565,0.8],[265,510,0.7],[350,558,0.9],[430,498,0.6],[515,552,0.8],
              [600,510,0.7],[685,568,0.9],[770,515,0.6],[858,555,0.8],[938,528,0.7]
            ].map(([cx, cy, r], i) => (
              <circle key={i} cx={cx} cy={cy} r={r} />
            ))}
          </g>
          <g fill="#C9A04C">
            <circle cx="200" cy="180" r="1.4" opacity="0.85" />
            <circle cx="640" cy="320" r="1.3" opacity="0.85" />
            <circle cx="830" cy="100" r="1.2" opacity="0.85" />
            <circle cx="340" cy="490" r="1.4" opacity="0.85" />
          </g>
        </svg>

        {/* Faint Metatron motif behind text */}
        <div
          aria-hidden
          className="absolute pointer-events-none"
          style={{
            left: '50%', top: '50%',
            width: 'min(800px, 120%)', aspectRatio: '1',
            transform: 'translate(-50%,-50%)',
            opacity: 0.06,
            color: '#C9A04C'
          }}
        >
          <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden>
            <g fill="none" stroke="currentColor" strokeWidth="0.8">
              <circle cx="300" cy="300" r="60" />
              <circle cx="360" cy="300" r="60" />
              <circle cx="330" cy="248.04" r="60" />
              <circle cx="270" cy="248.04" r="60" />
              <circle cx="240" cy="300" r="60" />
              <circle cx="270" cy="351.96" r="60" />
              <circle cx="330" cy="351.96" r="60" />
              <circle cx="300" cy="300" r="180" />
              <polygon points="300,180 404,240 404,360 300,420 196,360 196,240" />
            </g>
          </svg>
        </div>

        <div className="relative mx-auto max-w-3xl px-6 md:px-8 py-24 md:py-32 text-center z-[2]">
          <Reveal>
            <p className="text-[11px] md:text-[12px] tracking-[0.32em] uppercase text-gold mb-6">
              Ready to take it further?
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              className="font-display mb-8"
              style={{ fontSize: 'clamp(2.2rem, 4.6vw, 3.2rem)', lineHeight: 1.1 }}
            >
              Become A Spiritual Life Coach
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/download-free-brochure"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-sm bg-gold text-navy font-medium tracking-wide hover:bg-[#D9B26A] hover:-translate-y-0.5 transition-all"
              >
                Download Free Brochure
                <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
                  <path
                    d="M3 7h8M7 3l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </Link>
              <Link
                href="/schedule"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-sm border border-gold/60 text-cream font-medium tracking-wide hover:bg-gold/10 hover:-translate-y-0.5 transition-all"
              >
                Book a Call
              </Link>
            </div>
            <p className="mt-6 text-[12px] text-cream/55">
              Or <Link href={CERT_URL} className="underline decoration-gold/40 underline-offset-4 hover:text-gold">explore the full certification</Link>.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── FOOTER LINE ───────────────────────────────────────────────── */}
      <footer className="bg-cream border-t border-line">
        <div className="mx-auto max-w-3xl px-6 md:px-8 py-8 text-center">
          <p className="text-[13px] text-ink/55">
            &copy; {new Date().getFullYear()} Awakened Academy. Sending you love.
          </p>
        </div>
      </footer>
    </main>
  );
}
