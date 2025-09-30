import Image from "next/image";
import Link from "next/link";
import { getLocation, LOCATIONS } from "~/lib/locations";
import PhotoGallery from "./PhotoGallery";
import LineupTable from "./LineupTable";

export async function generateStaticParams() {
  return LOCATIONS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }) {
  const loc = getLocation(params.slug);
  return {
    title: loc ? `${loc.name} — Madison Pinball` : "Location — Madison Pinball",
    description: loc ? `Play pinball at ${loc.name}.` : "Pinball location details."
  };
}

export default function LocationPage({ params }) {
  const loc = getLocation(params.slug);
  if (!loc) {
    return (
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-2xl font-bold">Location not found</h1>
        <p className="mt-2">
          <Link href="/locations" className="underline hover:text-rose-800">Back to Locations</Link>
        </p>
      </section>
    );
  }

  const { slug, name, venueUrl, address, hours, lineup } = loc;
  const logoSrc = `/images/locations/${slug}.png`;

  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
       {/* Header: 2-column layout (left 2/3, right 1/3). Stacks on mobile */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:items-start">
          {/* LEFT: image → name → address (centered). Spans 2/3 on lg+ */}
          <div className="lg:col-span-2 flex flex-col items-center text-center">
            {/* Logo */}
            <Link
              href={venueUrl || "#"}
              target={venueUrl ? "_blank" : undefined}
              rel={venueUrl ? "noopener noreferrer" : undefined}
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-800 rounded"
              aria-label={`Visit ${name} website`}
            >
              <div className="relative h-56 w-[32rem] max-w-full sm:h-60">
                <Image
                  src={`/images/locations/${slug}.png`}
                  alt={`${name} logo`}
                  fill
                  className="object-contain"
                  sizes="(min-width: 1024px) 640px, (min-width: 640px) 480px, 360px"
                  priority
                />
              </div>
            </Link>

            {/* Name */}
            <h1 className="mt-6 text-3xl sm:text-4xl font-bold text-white">{name}</h1>

            {/* Address */}
            <div className="mt-3">
              <a
                href={
                  address.mapsUrl ||
                  `https://www.google.com/maps?q=${encodeURIComponent(
                    `${address.line1}${address.line2 ? ", " + address.line2 : ""}`
                  )}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-rose-800"
              >
                <span className="block text-white text-2xl sm:text-3xl leading-snug">{address.line1}</span>
                {address.line2 ? (
                  <span className="block text-white text-2xl sm:text-3xl leading-snug">{address.line2}</span>
                ) : null}
              </a>
            </div>
          </div>

          {/* RIGHT: Hours (1/3 width on lg+) */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-semibold">Hours</h2>
            <ul className="mt-4 divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white">
              {hours.map((h) => (
                <li key={h.day} className="flex items-center justify-between px-4 py-2">
                  <span className="font-medium text-gray-900">{h.day}</span>
                  <span className="text-gray-700">
                    {h.open && h.close ? `${h.open} to ${h.close}` : "See venue"}
                  </span>
                </li>
              ))}
            </ul>
            {venueUrl ? (
              <div className="mt-3 text-sm">
                <Link href={venueUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-rose-800">
                  Visit website
                </Link>
              </div>
            ) : null}
          </div>
        </div>


        {/* Photos: only show ones that exist */}
        <PhotoGallery slug={slug} name={name} />

        {/* Sortable lineup table */}
        <LineupTable rows={lineup} />

        <div className="mt-6">
          <Link href="/locations" className="underline hover:text-rose-800">← Back to all locations</Link>
        </div>
      </div>
    </section>
  );
}
