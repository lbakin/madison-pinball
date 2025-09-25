"use client";
import Link from "next/link";
import { useState } from "react";

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

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur text-black">
      <div className="container mx-auto max-w-6xl flex items-center justify-between px-4 py-3">
        <Link href="/" className="font-bold tracking-tight">Madison Pinball</Link>
        <button
          className="md:hidden rounded px-3 py-2 border"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mp-nav"
        >
          Menu
        </button>
        <nav id="mp-nav" className="hidden md:block">
          <ul className="flex gap-6">
            {navItems.map(item => (
              <li key={item.href}>
                <Link className="hover:underline" href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white">
          <nav className="container mx-auto max-w-6xl px-4 py-4">
            <ul className="grid gap-3">
              {navItems.map(item => (
                <li key={item.href}>
                  <Link onClick={() => setOpen(false)} className="block py-2" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
