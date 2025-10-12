import Image from "next/image";
import Link from "next/link";
import { sanityClient } from "~/src/lib/client";
import { urlFor } from "~/src/lib/image";
import { contactPageQ } from "~/src/lib/queries";
import RichText from "@/components/RichText";
import ContactFormClient from "./contact-form.client";

export const revalidate = 60;

export default async function ContactPage() {
  const data = await sanityClient.fetch(contactPageQ);

  const {
    title = "We Buy / Sell / Fix and Play Pinball",
    intro = [],
    gallery = [],
    altContactLabel = "Prefer email?",
    altContactEmail = "pinballmadison@gmail.com",
    formName = "contact",
    successTitle = "Thanks",
    successBody = "Your message has been submitted. We’ll get back to you soon."
  } = data || {};

  const g0 = gallery?.[0] ? urlFor(gallery[0]).width(1600).height(1000).fit("crop").url() : "/images/msn-pinball-graphic.png";
  const g1 = gallery?.[1] ? urlFor(gallery[1]).width(1600).height(1200).fit("crop").url() : "/images/pinball-direct-center.jpg";

  return (
    <div className="min-h-[70vh] bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="mb-6 text-3xl font-semibold">{title}</h1>

        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          {/* Left images */}
          <div className="grid gap-4">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-gray-700">
              <Image src={g0} alt="Madison Pinball Graphic" fill className="object-cover" priority />
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-gray-700">
              <Image src={g1} alt="Close-up of a pinball playfield" fill className="object-cover" />
            </div>
          </div>

          {/* Right: Copy + Form */}
          <div>
            <div className="prose prose-invert max-w-none text-gray-200">
              <RichText value={intro} />
            </div>

            <ContactFormClient
              formName={formName}
              successTitle={successTitle}
              successBody={successBody}
              className="mt-8"
            />
          </div>
        </div>

        {/* Optional: secondary contact block */}
        <div className="mt-10 border-t border-gray-800 pt-6 text-sm text-gray-400">
          <p>
            {altContactLabel} You can also reach us at{" "}
            <Link className="underline hover:text-rose-800" href={`mailto:${altContactEmail}`}>
              {altContactEmail}
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
