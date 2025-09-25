import Link from "next/link";

const LOCS = [
  { slug: "io-arcade-bar", name: "IO Arcade Bar" },
  { slug: "schwoeglers", name: "Schwoeglers" },
  { slug: "pooleys", name: "Pooleys" },
  { slug: "sugar-river-lanes", name: "Sugar River Lanes" }
];

export default function LocationsIndex() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Locations</h1>
      <ul className="grid gap-4 sm:grid-cols-2">
        {LOCS.map(l => (
          <li key={l.slug} className="rounded border p-4">
            <h2 className="text-xl font-semibold">{l.name}</h2>
            <Link className="mt-2 inline-block underline" href={`/locations/${l.slug}`}>
              View details →
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
