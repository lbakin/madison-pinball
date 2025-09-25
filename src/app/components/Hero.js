"use client";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden bg-black">
      
      <div className="absolute inset-0">
        <Image
          src="/images/neon-detail.jpg"
          alt="Close-up of a lit pinball machine"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>

      
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-24 sm:py-28">
        <div className="max-w-3xl">
          
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl drop-shadow">
            Bringing Quality Pinball To Madison
          </h1>


          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/locations"
              className="rounded-xl bg-rose-600 px-5 py-3 text-white font-semibold hover:bg-rose-700 transition"
            >
              Where to Play
            </Link>
            <Link
              href="/monthly-meetups"
              className="rounded-xl bg-white/10 px-5 py-3 text-white backdrop-blur hover:bg-white/20 transition"
            >
              Monthly Meetups
            </Link>
            <Link
              href="/report-a-problem"
              className="rounded-xl border border-white/30 px-5 py-3 text-white hover:bg-white/10 transition"
            >
              Report a Problem
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
