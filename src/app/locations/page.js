import Link from "next/link";
import Image from "next/image";

const LOCS = [
  { slug: "io-arcade-bar", name: "IO Arcade Bar" },
  { slug: "schwoeglers", name: "Schwoeglers" },
  { slug: "pooleys", name: "Pooleys" },
  { slug: "sugar-river-lanes", name: "Sugar River Lanes" }
];

function LocationCard({ slug, name }) {
  
  const imgSrc = `/images/locations/${slug}.png`;
  return (
    <li className="h-full">
      <Link
        href={`/locations/${slug}`}
        className="group block h-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-800"
        aria-label={`View details for ${name}`}
      >
        <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
          <Image
            src={imgSrc}
            alt={name}
            fill
            className="object-contain transition-transform duration-300 group-hover:scale-[1.03]"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        </div>
        <div className="p-5">
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <span className="mt-1 inline-block text-sm text-gray-700 underline decoration-gray-300 underline-offset-4 transition group-hover:text-rose-800 group-hover:decoration-rose-800">
            View details →
          </span>
        </div>
      </Link>
    </li>
  );
}

export default function LocationsIndex() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="mt-2 text-3xl font-bold">Where to Play</h1>
        <p className="mx-auto mt-2 max-w-2xl">
          Stop on by any of these great locations to play some pinball, grab some food or drink, and unwind.
        </p>

        <ul className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2">
          {LOCS.map((l) => (
            <LocationCard key={l.slug} slug={l.slug} name={l.name} />
          ))}
        </ul>
      </div>
    </section>
  );
}
