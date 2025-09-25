import Link from "next/link";

export default function CtaBar() {
  return (
    <section className="bg-rose-800">
      <div className="mx-auto max-w-6xl px-4 py-10 text-center">
        <h2 className="text-2xl font-extrabold text-white">
          Thanks for playing, Madison!
        </h2>
        <p className="mt-2 text-white/90">
          Keep up with monthly meetups, Killer Queen nights, and more.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/killer-queen-arcade"
            className="rounded-xl bg-white px-5 py-3 font-semibold text-gray-900 hover:bg-gray-100"
          >
            Killer Queen Arcade
          </Link>
          <Link
            href="/buy-sell-fix-contact"
            className="rounded-xl border border-white/70 px-5 py-3 font-semibold text-white hover:bg-white/10"
          >
            Buy • Sell • Fix • Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
