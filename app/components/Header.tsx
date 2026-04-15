"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/home" },
  { label: "Our Story", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Volunteer", href: "/volunteer" },
] as const;

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/home") {
      return pathname === "/" || pathname === "/home";
    }

    return pathname === href;
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/5 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
      <div className="flex justify-between items-center px-6 md:px-12 py-5 max-w-screen-2xl mx-auto">
        {/* Logo */}
        <Link href="/home" className="flex items-center gap-2 group">
          <span
            className="material-symbols-outlined text-amber-200 text-3xl"
            style={{ fontVariationSettings: '"FILL" 1' }}
          >
            star
          </span>
          <span className="text-2xl font-black tracking-tighter text-amber-200 drop-shadow-[0_0_15px_rgba(251,191,36,0.5)] font-[var(--font-display)]">
            Project Liwanag
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10 font-[var(--font-display)] text-sm tracking-wide uppercase font-semibold">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                isActive(item.href)
                  ? "text-amber-200 border-b-2 border-amber-400 pb-1"
                  : "text-slate-300 hover:text-white transition-colors duration-300"
              }
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="/volunteer"
            className="hidden sm:inline-flex bg-gradient-to-r from-golden-glow to-golden-star text-text-on-gold px-8 py-3 rounded-full font-[var(--font-display)] font-bold text-sm tracking-wider uppercase hover:brightness-110 active:scale-95 transition-all duration-200"
          >
            Join the Mission
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-amber-200 p-2"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-night-sky-light/95 backdrop-blur-xl border-t border-white/5 px-6 py-6 space-y-4 font-[var(--font-display)] text-sm tracking-wide uppercase font-semibold">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={
                isActive(item.href)
                  ? "block text-amber-200 py-2"
                  : "block text-slate-300 hover:text-white transition-colors py-2"
              }
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/volunteer"
            onClick={() => setMobileOpen(false)}
            className="block bg-gradient-to-r from-golden-glow to-golden-star text-text-on-gold px-6 py-3 rounded-full font-bold text-center mt-4"
          >
            Join the Mission
          </Link>
        </div>
      )}
    </nav>
  );
}
