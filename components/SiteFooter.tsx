import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site-config";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy text-white/85">
      <div className="mx-auto grid max-w-widest gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <Image src="/images/logo-white.png" alt="Awakened Academy" width={56} height={56} />
            <div className="font-serif text-xl text-gold-light">
              {SITE.name}<span>®</span>
            </div>
          </div>
          <p className="mt-4 max-w-md text-[13.5px] leading-relaxed text-white/70">
            {SITE.founded.statement}
          </p>
          <div className="mt-5 text-[13px] text-white/60">
            <a href={`mailto:${SITE.email}`} className="hover:text-gold-lt">{SITE.email}</a>
            {" · "}
            <a href={SITE.phoneHref} className="hover:text-gold-lt">{SITE.phone}</a>
          </div>
          <div className="mt-1 text-[13px] text-white/60">{SITE.address}</div>
        </div>

        <div>
          <div className="text-[10px] uppercase tracking-[0.24em] text-gold-lt">Explore</div>
          <ul className="mt-4 space-y-2 text-[13.5px] text-white/75">
            <li><Link href="/" className="hover:text-gold-lt">Home</Link></li>
            <li><Link href="/about" className="hover:text-gold-lt">About</Link></li>
            <li><Link href="/origin-story" className="hover:text-gold-lt">Origin Story</Link></li>
            <li><Link href="/spiritual-life-coach-certification" className="hover:text-gold-lt">Get Certified</Link></li>
            <li><Link href="/blog" className="hover:text-gold-lt">Blog</Link></li>
            <li><Link href="/dharma" className="hover:text-gold-lt">Dharma</Link></li>
            <li><Link href="/ep" className="hover:text-gold-lt">Enlightenedpreneurs</Link></li>
            <li><Link href="/introvert" className="hover:text-gold-lt">Softly Powerful</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-[10px] uppercase tracking-[0.24em] text-gold-lt">Connect</div>
          <ul className="mt-4 space-y-2 text-[13.5px] text-white/75">
            <li><Link href="/schedule" className="hover:text-gold-lt">Book a Call</Link></li>
            <li><Link href="/contact" className="hover:text-gold-lt">Contact Us</Link></li>
            <li><Link href="/jobs" className="hover:text-gold-lt">Careers</Link></li>
            <li><a href={SITE.directory} className="hover:text-gold-lt">Coach Directory →</a></li>
            <li><a href="https://awakenedacademy.mykajabi.com/login" className="hover:text-gold-lt">Student Login</a></li>
          </ul>
        </div>

      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-widest flex-col justify-between gap-2 px-6 py-5 text-[12px] text-white/50 md:flex-row">
          <div>© {year} {SITE.name}. Sending you love.</div>
          <div className="flex gap-5">
            <Link href="/terms" className="hover:text-gold-lt">Terms</Link>
            <Link href="/privacy" className="hover:text-gold-lt">Privacy</Link>
            <Link href="/earnings-disclaimer" className="hover:text-gold-lt">Earnings Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
