"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/writing", label: "Writing" },
  { href: "/writing?topic=business", label: "Business" },
  { href: "/writing?topic=trading-cards", label: "Trading Cards" },
  { href: "/writing?topic=stocks", label: "Stocks" },
  { href: "/writing?topic=real-estate", label: "Real Estate" },
  { href: "/about", label: "About" },
  { href: "/#subscribe", label: "Subscribe" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      const handleEscape = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
      window.addEventListener("keydown", handleEscape);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleEscape);
      };
    }
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-[var(--navy)] text-white shadow-sm safari-backdrop-blur"
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <nav className="mx-auto flex h-14 min-h-[44px] max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="rounded-sm font-serif text-xl font-semibold tracking-tight text-inherit focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2 focus:ring-offset-[var(--navy)]"
          onClick={closeMenu}
        >
          Nate Brantley
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm font-medium tracking-wide text-inherit transition-colors hover:opacity-80"
                onClick={closeMenu}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 min-w-[44px] items-center justify-center rounded-sm text-inherit hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2 focus:ring-offset-[var(--navy)] lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 flex flex-col bg-[var(--navy)] text-white transition-opacity duration-200 lg:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{
          top: "calc(3.5rem + env(safe-area-inset-top))",
          paddingBottom: "env(safe-area-inset-bottom)",
        }}
        aria-hidden={!menuOpen}
      >
        <ul className="flex flex-1 flex-col items-center justify-center gap-1 px-4 py-8">
          {navLinks.map(({ href, label }) => (
            <li key={href} className="w-full max-w-xs">
              <Link
                href={href}
                onClick={closeMenu}
                className="flex min-h-[48px] items-center justify-center rounded-sm text-center font-medium tracking-wide text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2 focus:ring-offset-[var(--navy)]"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
