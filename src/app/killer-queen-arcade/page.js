import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Killer Queen Arcade | Madison Pinball",
  description:
    "Madison Pinball hosts one of the few Killer Queen cabinets in the world. Meetups, pick-up games, and community info.",
};

export default function KillerQueenPage() {
  return (
    <div className="min-h-[70vh] bg-black text-white">
      {/* Hero */}
      <section
        className="relative isolate"
        aria-labelledby="kq-hero-title"
      >
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/killer-queen/kq-photo.png"
            alt="Players gathered around a Killer Queen cabinet"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Overlay + subtle honeycomb pattern */}
          <div className="absolute inset-0 bg-black/60" />
          <div
            className="absolute inset-0 opacity-30 mix-blend-overlay"
            aria-hidden="true"
            style={{
              backgroundImage:
                "radial-gradient(transparent 62%, rgba(255,255,255,0.08) 64%), radial-gradient(transparent 62%, rgba(255,255,255,0.08) 64%)",
              backgroundSize: "18px 18px, 18px 18px",
              backgroundPosition: "0 0, 9px 9px",
            }}
          />
        </div>

        <div className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
          <h1
            id="kq-hero-title"
            className="text-4xl font-extrabold tracking-tight sm:text-5xl"
          >
            Killer Queen Arcade
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-200">
            Five-on-five co-op, strategy, and pure arcade hype — right here in
            Madison.
          </p>
          <div className="mt-8 inline-flex gap-3">
            <a
              href="#details"
              className="rounded-full border border-white/40 px-5 py-2 text-sm font-medium hover:border-rose-800 hover:bg-white hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-800"
            >
              Learn more
            </a>
            <Link
              href="https://www.facebook.com/groups/MadisonKQ/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-rose-800 px-5 py-2 text-sm font-semibold hover:bg-white hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-800"
            >
              Join the Facebook Group
            </Link>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section id="details" className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Copy + callouts */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Play in Madison</h2>
            <p className="text-gray-200 leading-relaxed">
              Killer Queen is a 5 v 5 co-operative arcade game. With
              approximately 50 machines currently in the entire world, Madison
              Pinball is proud to feature one of these locally at the{" "}
              <strong>I/O Arcade Bar</strong> (924 Williamson St).
            </p>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-semibold">Weekly Meetups</h3>
              <p className="mt-2 text-gray-200 leading-relaxed">
                Wednesday nights are the weekly scheduled meet-up night at{" "}
                <strong>7:00 PM</strong>, but pick-up games happen regularly on
                other days of the week as well.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-semibold">Stay in the Loop</h3>
              <p className="mt-2 text-gray-200 leading-relaxed">
                Join the Madison Killer Queen Facebook group to stay up to date
                on happenings and be in the loop for regular meetups.
              </p>
              <Link
                href="https://www.facebook.com/groups/MadisonKQ/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block rounded-lg border border-rose-800 px-4 py-2 text-sm font-medium hover:bg-white hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-800"
              >
                facebook.com/groups/MadisonKQ
              </Link>
            </div>
          </div>

          {/* Image collage (two left, one right stacked on lg) */}
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {/* Tall left column images */}
            <div className="col-span-1 row-span-2 overflow-hidden rounded-lg border border-white/10">
              <Image
                src="/images/killer-queen/kq-players-b2b.jpg"
                alt="Killer Queen cabinets"
                width={900}
                height={1400}
                className="h-full w-full object-cover transition duration-300 hover:scale-[1.03]"
                priority
              />
            </div>

            {/* Top-right */}
            <div className="col-span-1 row-span-1 overflow-hidden rounded-lg border border-white/10">
              <Image
                src="/images/killer-queen/kq-gameplay.jpg"
                alt="Close-up gameplay with teams battling for the win"
                width={900}
                height={700}
                className="h-full w-full object-cover transition duration-300 hover:scale-[1.03]"
              />
            </div>

            {/* Bottom-right */}
            <div className="col-span-1 row-span-1 overflow-hidden rounded-lg border border-white/10">
              <Image
                src="/images/killer-queen/kq-excitement.jpg"
                alt="Players high-fiving after a match"
                width={900}
                height={700}
                className="h-full w-full object-cover transition duration-300 hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>

        {/* Location card */}
        <div className="mt-12 rounded-xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-semibold">Where to Play</h3>
          <p className="mt-2 text-gray-200">
            I/O Arcade Bar — 924 Williamson St, Madison, WI
          </p>
          <p className="mt-1 text-sm text-gray-400">
            Hours and availability can vary. Check the Facebook group for the
            latest pickup games and event plans.
          </p>
        </div>
      </section>
    </div>
  );
}
