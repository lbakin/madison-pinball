"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/locations", label: "Locations" },
  { href: "/monthly-meetups", label: "Monthly Meetups" },
  { href: "/killer-queen-arcade", label: "Killer Queen Arcade" },
  { href: "/report-a-problem", label: "Report a Problem" },
  { href: "/buy-sell-fix-contact", label: "Buy/Sell/Fix/Contact" }
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);

  // Close menu when clicking outside panel
  useEffect(() => {
    function onDocClick(e) {
      if (!open) return;
      if (panelRef.current && !panelRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/80 to-black/0" />

      <div className="relative border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="container mx-auto max-w-6xl flex items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-800">
            <Image
              src="/images/logo.png"
              alt="Madison Pinball"
              width={160}
              height={40}
              className="h-26 w-auto"
              priority
            />
            <span className="sr-only">Madison Pinball</span>
          </Link>

          {/* Collapse sooner: show desktop nav only on lg+ */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    className="text-white/90 hover:text-rose-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-800"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className="lg:hidden inline-flex items-center gap-2 rounded-md border border-white/20 px-3 py-2 text-white/90 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-800"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mp-nav-panel"
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d={open ? "M6 18L18 6M6 6l12 12" : "M3 6h18M3 12h18M3 18h18"}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            Menu
          </button>
        </div>

        
        <div
          id="mp-nav-panel"
          ref={panelRef}
          className={[
            "lg:hidden overflow-hidden border-t border-white/10 bg-black/85 backdrop-blur",
            "transition-all duration-300 ease-out",
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          ].join(" ")}
        >
          <nav className="container mx-auto max-w-6xl px-4 py-3">
            <ul className="grid gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    onClick={() => setOpen(false)}
                    className="block py-2 text-white/90 hover:text-rose-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-800"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
