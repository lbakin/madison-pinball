// /src/components/Hero.jsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "~/src/lib/image";

export default function Hero({
  // Sanity-driven props (all optional)
  image,          // Sanity image object
  heading,        // string
  subheading,     // string
  buttons = [],   // [{label, href, style:'solid'|'outline'}]
}) {
  const bgUrl = image
    ? urlFor(image).width(2000).height(1200).fit("crop").url()
    : "/images/neon-detail.jpg";

  // Fallback buttons if none provided by Sanity
  const btns = buttons?.length
    ? buttons
    : [
        { label: "Where to Play", href: "/locations", style: "solid" },
        { label: "Monthly Meetups", href: "/monthly-meetups", style: "ghost" },
        { label: "Report a Problem", href: "/report-a-problem", style: "outline" },
      ];

  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={bgUrl}
          alt={heading || "Close-up of a lit pinball machine"}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>

      {/* Foreground */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-24 sm:py-28">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl drop-shadow">
            {heading || "Bringing Quality Pinball To Madison"}
          </h1>

          {subheading ? (
            <p className="mt-3 max-w-2xl text-white/90">{subheading}</p>
          ) : null}

          <div className="mt-10 flex flex-wrap gap-3">
            {btns.map((b, i) => {
              const base =
                "rounded-xl px-5 py-3 font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-800";
              const cls =
                b.style === "outline"
                  ? `${base} border border-white/30 text-white hover:bg-white/10`
                  : b.style === "ghost"
                  ? `${base} bg-white/10 text-white backdrop-blur hover:bg-white/20`
                  : b.style === "white" // NEW
                  ? `${base} bg-white text-black hover:bg-white/90`
                  : `${base} bg-rose-600 text-white hover:bg-rose-700`; // solid (default)

              return (
                <Link key={i} href={b.href || "#"} className={cls}>
                  {b.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
