"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";


// Simple inline SVG icons
function HouseIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
function FacebookIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 4.99 3.66 9.14 8.44 9.94v-7.03H7.9v-2.91h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22c4.78-.8 8.44-4.95 8.44-9.94Z"
        fill="currentColor"
      />
    </svg>
  );
}


export default function Nav({ items = [], locs = [], logoUrl = "/images/logo.png", siteTitle = "Madison Pinball" }) {
  const [open, setOpen] = useState(false);
  const [ddOpen, setDdOpen] = useState(false);
  const [mobileLocOpen, setMobileLocOpen] = useState(false);
  const panelRef = useRef(null);
  const ddRef = useRef(null);

  // Close mobile panel when clicking outside
  useEffect(() => {
    function onDocClick(e) {
      if (panelRef.current && !panelRef.current.contains(e.target)) setOpen(false);
    }
    if (open) document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [open]);

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    function onDocClick(e) {
      if (ddRef.current && !ddRef.current.contains(e.target)) setDdOpen(false);
    }
    if (ddOpen) document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [ddOpen]);


  return (
    <header className="sticky top-0 z-50">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/80 to-black/0" />
      <div className="relative border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="container mx-auto max-w-6xl flex items-center justify-between px-4 py-3">
          <Link
            href="/"
            className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-800"
            aria-label={siteTitle}
            title={siteTitle}
          >
            <Image
              src={logoUrl}
              alt={siteTitle}
              width={160}
              height={40}
              className="h-26 w-auto"
              priority
            />
            <span className="sr-only">{siteTitle}</span>
          </Link>

          {/* Desktop nav (lg+) */}
          <nav className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {items.map((item) => {
              if (item.label !== "Locations") {
                const baseLink =
                  "inline-flex h-9 items-center gap-2 whitespace-nowrap leading-none text-white/90 hover:text-rose-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-800";

                return (
                  <li key={item.href}>
                    <Link
                      className={`${baseLink} nav-link`} // keep your class if it doesn't override display/line-height
                      href={item.href}
                      aria-label={item.label === "Home" ? "Home" : undefined}
                      title={item.label === "Home" ? "Home" : undefined}
                    >
                      {item.label === "Home" ? (
                        <>
                          <HouseIcon className="h-5 w-5" />
                          <span className="sr-only">Home</span>
                        </>
                      ) : (
                        <span className="block">{item.label}</span>
                      )}
                    </Link>
                  </li>
                );
              }

              // "Locations" dropdown
              const btnBase =
                "inline-flex h-9 items-center gap-1 whitespace-nowrap leading-none text-white/90 hover:text-rose-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-800";

              return (
                <li key={item.href} className="relative" ref={ddRef}>
                  <button
                    type="button"
                    className={btnBase}
                    aria-haspopup="menu"
                    aria-expanded={ddOpen}
                    onClick={() => setDdOpen((v) => !v)}
                    onKeyDown={(e) => e.key === "Escape" && setDdOpen(false)}
                  >
                    <span className="block">Locations</span>
                    <svg
                      className={`ml-1 h-4 w-4 transition-transform ${ddOpen ? "rotate-180" : ""}`}
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M5 8l5 5 5-5" fill="currentColor" />
                    </svg>
                  </button>

                  <div
                    role="menu"
                    aria-label="Locations"
                    className={[
                      "absolute left-0 mt-2 w-64 overflow-hidden rounded-lg border border-white/10 bg-black/90 backdrop-blur",
                      "shadow-lg ring-1 ring-black/5 transition origin-top",
                      ddOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none",
                    ].join(" ")}
                  >
                    <ul className="py-2">
                      <li>
                        <Link
                          href="/locations"
                          className="block px-4 py-2 nav-link text-sm leading-none text-white/90 hover:bg-white/10"
                          onClick={() => setDdOpen(false)}
                          role="menuitem"
                        >
                          All Locations
                        </Link>
                      </li>
                      <li><div className="my-1 h-px bg-white/10" /></li>
                      {locs.map((l) => (
                        <li key={l.slug}>
                          <Link
                            href={`/locations/${l.slug}`}
                            className="block px-4 py-2 nav-link text-sm leading-none text-white/90 hover:bg-white/10"
                            onClick={() => setDdOpen(false)}
                            role="menuitem"
                          >
                            {l.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}

            <li>
              <a
                href="https://www.facebook.com/MadisonPinball"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 items-center gap-2 whitespace-nowrap leading-none text-white/90 hover:text-rose-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-800"
                aria-label="Madison Pinball Facebook Group"
                title="Facebook"
              >
                <FacebookIcon className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
            </li>
          </ul>

          </nav>

      {/* Mobile hamburger */}
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

        {/* Mobile panel */}
        <div
          id="mp-nav-panel"
          ref={panelRef}
          className={[
            "lg:hidden overflow-hidden border-t border-white/10 bg-black/85 backdrop-blur",
            "transition-all duration-300 ease-out",
            open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
          ].join(" ")}
        >
          <nav className="container mx-auto max-w-6xl px-4 py-3">
            <ul className="grid gap-1">
              {items.map((item) => {
                if (item.label !== "Locations") {
                  // unchanged
                  return (
                    <li key={item.href}>
                      <Link
                        onClick={() => setOpen(false)}
                        className="inline-flex nav-link items-center gap-2 py-2 text-white/90 hover:text-rose-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-800"
                        href={item.href}
                        aria-label={item.label === "Home" ? "Home" : undefined}
                        title={item.label === "Home" ? "Home" : undefined}
                      >
                        {item.label === "Home" ? (
                          <>
                            <HouseIcon className="h-5 w-5" />
                            <span>Home</span>
                          </>
                        ) : (
                          item.label
                        )}
                      </Link>
                    </li>
                  );
                }

                // Mobile "Locations" accordion driven by props.locs
                return (
                  <li key={item.href}>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between py-2 text-left text-white/90 hover:text-rose-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-800"
                      aria-expanded={mobileLocOpen}
                      onClick={() => setMobileLocOpen((v) => !v)}
                    >
                      <span>Locations</span>
                      <svg width="14" height="14" viewBox="0 0 20 20" aria-hidden="true">
                        <path d={mobileLocOpen ? "M5 12l5-5 5 5" : "M5 8l5 5 5-5"} fill="currentColor" />
                      </svg>
                    </button>
                    <div
                      className={[
                        "grid overflow-hidden transition-all",
                        mobileLocOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-70"
                      ].join(" ")}
                    >
                      <div className="min-h-0">
                        <ul className="pl-3">
                          <li>
                            <Link
                              onClick={() => { setOpen(false); setMobileLocOpen(false); }}
                              className="block nav-link py-2 text-white/80 hover:text-rose-400"
                              href="/locations"
                            >
                              All Locations
                            </Link>
                          </li>
                          {locs.map((l) => (
                            <li key={l.slug}>
                              <Link
                                onClick={() => { setOpen(false); setMobileLocOpen(false); }}
                                className="block nav-link py-2 text-white/80 hover:text-rose-400"
                                href={`/locations/${l.slug}`}
                              >
                                {l.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                );
              })}
           <li>
                <a
                  href="https://www.facebook.com/groups/MadisonKQ/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex nav-link items-center gap-2 py-2 text-white/90 hover:text-rose-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-800"
                  aria-label="Madison Pinball Facebook Group"
                  title="Facebook"
                  onClick={() => setOpen(false)}
                >
                  <FacebookIcon className="h-5 w-5" />
                  <span>Facebook</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

