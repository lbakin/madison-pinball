import Image from "next/image";
import Link from "next/link";
import { sanityClient } from "~/src/lib/client";
import { allLocationSlugsQuery, locationBySlugQuery } from "~/src/lib/queries";
import { urlFor } from "~/src/lib/image"
import PhotoGallery from "./PhotoGallery";
import LineupTable from "./LineupTable";


export const revalidate = 60;  

// Build-time slugs from Sanity
export async function generateStaticParams() {
  const slugs = await sanityClient.fetch(allLocationSlugsQuery);
  return (slugs || []).map(s => ({ slug: s.slug }));
}



// Metadata from Sanity
export async function generateMetadata(props) {
  const { slug: routeSlug } = await props.params;        
  const loc = await sanityClient.fetch(locationBySlugQuery, { slug: routeSlug });

  if (!loc) {
    return { title: "Location — Madison Pinball", description: "Pinball location details." };
  }
  return { title: `${loc.name} — Madison Pinball`, description: `Play pinball at ${loc.name}.` };
}

export default async function LocationPage(props) {
  const { slug: routeSlug } = await props.params;        
  const loc = await sanityClient.fetch(locationBySlugQuery, { slug: routeSlug });

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

  const { slug, name, venueUrl, address = {}, hours = [], lineup = [], images = [], logo } = loc;

  // Prefer CMS logo; fall back to /public png if missing
  const fileLogo = `/images/locations/${slug}.png`;
  const cmsLogoUrl = logo ? urlFor(logo).width(1200).fit("max").url() : null;
  const logoSrc = cmsLogoUrl || fileLogo;

  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:items-start">
          {/* LEFT: image → name → address */}
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
                  src={logoSrc}
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
            {(address.line1 || address.line2 || address.mapsUrl) && (
              <div className="mt-3">
                <a
                  href={
                    address.mapsUrl ||
                    `https://www.google.com/maps?q=${encodeURIComponent(
                      `${address.line1 || ""}${address.line2 ? ", " + address.line2 : ""}`
                    )}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-rose-800"
                >
                  {address.line1 && (
                    <span className="block text-white text-2xl sm:text-3xl leading-snug">{address.line1}</span>
                  )}
                  {address.line2 && (
                    <span className="block text-white text-2xl sm:text-3xl leading-snug">{address.line2}</span>
                  )}
                </a>
              </div>
            )}
          </div>

          {/* RIGHT: Hours */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-semibold">Hours</h2>
            <ul className="mt-4 divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white">
              {(hours || []).map((h) => (
                <li key={h.day} className="flex items-center justify-between px-4 py-2">
                  <span className="font-medium text-gray-900">{h.day}</span>
                  <span className="text-gray-700">
                    {h?.open && h?.close ? `${h.open} to ${h.close}` : "See venue"}
                  </span>
                </li>
              ))}
              {!hours?.length && (
                <li className="px-4 py-2 text-gray-700">See venue</li>
              )}
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

        {/* Photos: prefer Sanity gallery, otherwise fall back to /public files */}
        <PhotoGallery slug={slug} name={name} images={images} />

        {/* Sortable lineup table */}
        <LineupTable rows={lineup} />

        <div className="mt-6">
          <Link href="/locations" className="underline hover:text-rose-800">← Back to all locations</Link>
        </div>
      </div>
    </section>
  );
}
