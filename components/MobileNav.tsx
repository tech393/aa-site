"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site-config";

type NavItem = { href: string; label: string; external?: boolean };

const ABOUT_SUBMENU: NavItem[] = [
  { href: "/about", label: "About" },
  { href: "/origin-story", label: "Origin Story" },
  { href: "/where-we-are-coming-from", label: "Where We Are Coming From" },
  { href: "/awakened-academy-success-stories", label: "Success Stories" },
  { href: "/wall-of-gratitude", label: "Wall of Gratitude" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close on escape key
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {/* Hamburger button, visible only on mobile */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="flex h-10 w-10 items-center justify-center rounded text-white transition hover:bg-white/10 md:hidden"
      >
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
          <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      {/* Full-screen overlay menu */}
      <div
        className={`fixed inset-0 z-[100] flex transform flex-col bg-bg transition-transform duration-300 md:hidden ${open ? "translate-x-0" : "translate-x-full"}`}
        aria-hidden={!open}
      >
        {/* Top bar, teal with logo + close */}
        <div className="flex items-center justify-between bg-teal px-5 py-4">
          <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
            <Image src="/images/logo-white.png" alt="Awakened Academy" width={48} height={48} priority />
            <span className="sr-only">{SITE.name}</span>
          </Link>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded text-white transition hover:bg-white/10"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Scrollable menu body */}
        <nav className="flex-1 overflow-y-auto px-6 py-6">
          <MobileLink href="/" onClose={() => setOpen(false)}>Home</MobileLink>

          <MobileGroup label="About">
            {ABOUT_SUBMENU.map((item) => (
              <MobileSubLink key={item.href} href={item.href} onClose={() => setOpen(false)}>
                {item.label}
              </MobileSubLink>
            ))}
          </MobileGroup>

          <MobileLink href="/spiritual-life-coach-certification" onClose={() => setOpen(false)}>
            Get Certified
          </MobileLink>

          <MobileLink href="/free-gifts-for-you" onClose={() => setOpen(false)}>Free Gifts</MobileLink>

          <MobileLink href="/wall-of-gratitude" onClose={() => setOpen(false)}>Reviews</MobileLink>
          <MobileLink href="/schedule" onClose={() => setOpen(false)}>Book a Call</MobileLink>
          <a
            href="https://awakenedacademy.mykajabi.com/login"
            onClick={() => setOpen(false)}
            className="block border-b border-ink/10 py-4 font-serif text-[18px] text-ink transition hover:text-teal"
          >
            Login
          </a>
        </nav>

        {/* Sticky CTA + contact strip */}
        <div className="border-t border-ink/10 bg-warm px-6 py-5">
          <Link
            href="/download-free-brochure"
            onClick={() => setOpen(false)}
            className="block w-full rounded bg-gold py-3.5 text-center text-[13px] font-medium text-white shadow-sm transition hover:bg-gold-dark"
          >
            Download Free Brochure
          </Link>
          <div className="mt-4 flex flex-col items-center gap-1.5 text-[12.5px] text-ink2">
            <a href={SITE.phoneHref} className="hover:text-teal">📞 {SITE.phone.replace("+1 ", "")}</a>
            <a href={`mailto:${SITE.email}`} className="hover:text-teal">✉ {SITE.email}</a>
          </div>
        </div>
      </div>
    </>
  );
}

function MobileLink({ href, onClose, children }: { href: string; onClose: () => void; children: React.ReactNode }) {
  return (
    <Link href={href} onClick={onClose} className="block border-b border-ink/10 py-4 font-serif text-[18px] text-ink transition hover:text-teal">
      {children}
    </Link>
  );
}

function MobileSubLink({ href, onClose, children }: { href: string; onClose: () => void; children: React.ReactNode }) {
  return (
    <Link href={href} onClick={onClose} className="block py-2.5 pl-4 text-[15px] text-ink2 transition hover:text-teal">
      {children}
    </Link>
  );
}

function MobileGroup({ label, children }: { label: string; children: React.ReactNode }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="border-b border-ink/10">
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-center justify-between py-4 font-serif text-[18px] text-ink transition hover:text-teal"
      >
        <span>{label}</span>
        <span className={`text-sm transition ${expanded ? "rotate-180" : ""}`}>▾</span>
      </button>
      <div className={`overflow-hidden transition-all duration-200 ${expanded ? "max-h-[600px] pb-3" : "max-h-0"}`}>
        {children}
      </div>
    </div>
  );
}
