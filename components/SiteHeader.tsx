import Link from "next/link";
import Image from "next/image";
import MobileNav from "@/components/MobileNav";
import { SITE } from "@/lib/site-config";

const ABOUT_SUBMENU = [
  { href: "/about", label: "About" },
  { href: "/origin-story", label: "Origin Story" },
  { href: "/where-we-are-coming-from", label: "Where We Are Coming From" },
  { href: "/awakened-academy-success-stories", label: "Success Stories" },
  { href: "/wall-of-gratitude", label: "Wall of Gratitude" },
];

export default function SiteHeader() {
  return (
    <>
      {/* Top utility bar */}
      <div className="bg-magenta text-white text-[12.5px]">
        <div className="mx-auto flex max-w-widest items-center justify-between gap-6 px-6 py-2">
          <div className="flex items-center gap-5">
            <a href={SITE.phoneHref} className="text-white/90 hover:text-gold-lt">📞 {SITE.phone.replace("+1 ", "")}</a>
            <a href={`mailto:${SITE.email}`} className="hidden text-white/90 hover:text-gold-lt sm:inline">✉ {SITE.email}</a>
          </div>
          <Link href="/schedule" className="text-white/85 hover:text-gold-lt">Book a Call →</Link>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-teal text-white">
        <div className="mx-auto flex max-w-widest items-center justify-between gap-6 px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/images/logo-white.png" alt="Awakened Academy" width={64} height={64} priority />
            <span className="sr-only">{SITE.name}</span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            <Link href="/" className="text-[13.5px] tracking-wide transition hover:text-gold-lt">Home</Link>

            {/* About submenu, CSS hover dropdown */}
            <div className="group relative">
              <button
                type="button"
                className="flex items-center gap-1 text-[13.5px] tracking-wide transition hover:text-gold-lt"
              >
                About
                <span className="text-[10px] transition group-hover:rotate-180">▾</span>
              </button>
              <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
                <ul className="min-w-[240px] rounded-md border border-ink/10 bg-white py-2 shadow-xl">
                  {ABOUT_SUBMENU.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="block px-5 py-2.5 text-[13.5px] text-ink2 transition hover:bg-warm hover:text-teal"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Link href="/spiritual-life-coach-certification" className="text-[13.5px] tracking-wide transition hover:text-gold-lt">Get Certified</Link>

            <Link href="/free-gifts-for-you" className="text-[13.5px] tracking-wide transition hover:text-gold-lt">Free Gifts</Link>

            <Link href="/wall-of-gratitude" className="text-[13.5px] tracking-wide transition hover:text-gold-lt">Reviews</Link>
            <a href="https://awakenedacademy.mykajabi.com/login" className="text-[13.5px] tracking-wide transition hover:text-gold-lt">Login</a>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/spiritual-life-coach-certification#program-info" className="hidden rounded bg-gold px-5 py-2.5 text-[12px] font-medium text-white transition hover:bg-gold-dark sm:block">
              Download Free Brochure
            </Link>
            <MobileNav />
          </div>
        </div>
      </header>
    </>
  );
}
