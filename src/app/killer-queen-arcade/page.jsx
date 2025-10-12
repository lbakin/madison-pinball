import Image from "next/image";
import Link from "next/link";
import { sanityClient } from "~/src/lib/client";
import { urlFor } from "~/src/lib/image";
import { killerQueenQ } from "~/src/lib/queries";

export const revalidate = 60;

export const metadata = {
  title: "Killer Queen Arcade | Madison Pinball",
  description:
    "Madison Pinball hosts one of the few Killer Queen cabinets in the world. Meetups, pick-up games, and community info.",
};

export default async function KillerQueenPage() {
  const data = await sanityClient.fetch(killerQueenQ);

  const {
    title = "Killer Queen Arcade",
    description,
    heroImage,
    heroTagline = "Five-on-five co-op, strategy, and pure arcade hype — right here in Madison.",
    intro = `Killer Queen is a 5 v 5 co-operative arcade game. With approximately 50 machines in the world, Madison Pinball is proud to feature one locally at the I/O Arcade Bar (924 Williamson St).`,
    weeklyMeetup = { title: "Weekly Meetups", time: "Wednesdays · 7:00 PM", blurb: "Pick-up games happen regularly on other days as well." },
    stayInLoop = { title: "Stay in the Loop", blurb: "Join the Madison Killer Queen Facebook group to stay up to date on happenings and meetups.", ctaLabel: "Join the Facebook Group", ctaUrl: "https://www.facebook.com/groups/MadisonKQ/" },
    gallery = [],
    location = { heading: "Where to Play", line1: "I/O Arcade Bar — 924 Williamson St, Madison, WI", note: "Hours and availability can vary. Check the Facebook group for the latest pickup games and event plans." }
  } = data || {};

  const heroSrc = heroImage ? urlFor(heroImage).width(2000).height(1100).fit("crop").url() : "/images/killer-queen/kq-photo.png";
  const g0 = gallery?.[0] ? urlFor(gallery[0]).width(900).height(1400).fit("crop").url() : "/images/killer-queen/kq-players-b2b.jpg";
  const g1 = gallery?.[1] ? urlFor(gallery[1]).width(900).height(700).fit("crop").url() : "/images/killer-queen/kq-gameplay.jpg";
  const g2 = gallery?.[2] ? urlFor(gallery[2]).width(900).height(700).fit("crop").url() : "/images/killer-queen/kq-excitement.jpg";

  return (
    <div className="min-h-[70vh] bg-black text-white">
      {/* Hero */}
      <section className="relative isolate" aria-labelledby="kq-hero-title">
        <div className="absolute inset-0 -z-10">
          <Image
            src={heroSrc}
            alt="Players gathered around a Killer Queen cabinet"
            fill
            priority
            className="object-cover object-center"
          />
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
          <h1 id="kq-hero-title" className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-200">
            {heroTagline}
          </p>
        </div>
      </section>

      {/* Main content */}
      <section id="details" className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Copy + callouts */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Play in Madison</h2>
            <p className="leading-relaxed text-gray-200">
              {intro}
            </p>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-semibold">{weeklyMeetup?.title}</h3>
              <p className="mt-2 leading-relaxed text-gray-200">
                <strong>{weeklyMeetup?.time}</strong>{weeklyMeetup?.blurb ? ` — ${weeklyMeetup.blurb}` : ""}
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-semibold">{stayInLoop?.title}</h3>
              <p className="mt-2 leading-relaxed text-gray-200">{stayInLoop?.blurb}</p>

              {stayInLoop?.ctaUrl && (
                <Link
                  href={stayInLoop.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block rounded-full bg-rose-800 px-5 py-2 text-sm font-semibold hover:bg-white hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-800"
                >
                  {stayInLoop?.ctaLabel || "Join the Facebook Group"}
                </Link>
              )}
            </div>
          </div>

          {/* Image collage */}
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <div className="col-span-1 row-span-2 overflow-hidden rounded-lg border border-white/10">
              <Image
                src={g0}
                alt="Killer Queen cabinets"
                width={900}
                height={1400}
                className="h-full w-full object-cover transition duration-300 hover:scale-[1.03]"
                priority
              />
            </div>

            <div className="col-span-1 row-span-1 overflow-hidden rounded-lg border border-white/10">
              <Image
                src={g1}
                alt="Close-up gameplay with teams battling for the win"
                width={900}
                height={700}
                className="h-full w-full object-cover transition duration-300 hover:scale-[1.03]"
              />
            </div>

            <div className="col-span-1 row-span-1 overflow-hidden rounded-lg border border-white/10">
              <Image
                src={g2}
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
          <h3 className="text-lg font-semibold">{location?.heading || "Where to Play"}</h3>
          <p className="mt-2 text-gray-200">{location?.line1}</p>
          <p className="mt-1 text-sm text-gray-400">{location?.note}</p>
        </div>
      </section>
    </div>
  );
}
