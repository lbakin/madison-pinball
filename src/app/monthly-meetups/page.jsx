// src/app/monthly-meetups/page.jsx
import Image from "next/image";
import { sanityClient } from "~/src/lib/client";
import { urlFor } from "~/src/lib/image";
import { monthlyMeetupsQ } from "~/src/lib/queries";

export const revalidate = 60; // ISR: refresh once per minute

export default async function MonthlyMeetupsPage() {
  const data = await sanityClient.fetch(monthlyMeetupsQ);

  const {
    title = "Monthly Meetups",
    intro = "",
    venues = [],
    rules = "",
    gallery = [],
    scheduleYear,
    schedule = [],
  } = data || {};

  // Two images like your current layout (fallbacks if fewer)
  const galleryA = gallery?.[0];
  const galleryB = gallery?.[1];

  const imgA =
    galleryA?.asset?.url ||
    (galleryA ? urlFor(galleryA).width(1600).height(900).fit("crop").url() : null);
  const imgB =
    galleryB?.asset?.url ||
    (galleryB ? urlFor(galleryB).width(1600).height(900).fit("crop").url() : null);

  const venueCards = venues?.length
    ? venues
    : [
        { name: "Schwoegler's", cadence: "Third Saturday", startTime: "6:00 pm" },
        { name: "I/O Arcade — Heads-Up", cadence: "Second Wednesday", startTime: "7:00 pm", note: "“Casual competitive” head-to-head format" },
        { name: "I/O Arcade — Main", cadence: "Fourth Wednesday", startTime: "7:00 pm", note: "“Casual competitive” format" },
        { name: "Pooley's", cadence: "First Thursday", startTime: "6:30 pm" },
      ];

  const tableRows = schedule?.length ? schedule : [
    { month: "January",    schwoeglers: "January 18", ioMain: "January 22", ioHeadsUp: "January 8", pooleys: "" },
    { month: "February",   schwoeglers: "February 15", ioMain: "February 26", ioHeadsUp: "February 12", pooleys: "" },
    { month: "March",      schwoeglers: "March 15", ioMain: "March 26", ioHeadsUp: "March 12", pooleys: "" },
    { month: "April",      schwoeglers: "April 19", ioMain: "April 23", ioHeadsUp: "April 9", pooleys: "" },
    { month: "May",        schwoeglers: "May 17", ioMain: "May 28", ioHeadsUp: "May 14 - Evil Dead Launch", pooleys: "" },
    { month: "June",       schwoeglers: "June 21", ioMain: "June 25", ioHeadsUp: "June 11", pooleys: "" },
    { month: "July",       schwoeglers: "July 19", ioMain: "July 23", ioHeadsUp: "July 9 - King Kong Launch", pooleys: "July 3" },
    { month: "August",     schwoeglers: "August 16", ioMain: "August 27", ioHeadsUp: "August 13", pooleys: "August 7" },
    { month: "September",  schwoeglers: "September 20", ioMain: "September 24", ioHeadsUp: "September 10", pooleys: "September 4" },
    { month: "October",    schwoeglers: "October 18", ioMain: "October 22", ioHeadsUp: "October 8", pooleys: "October 2" },
    { month: "November",   schwoeglers: "November 15", ioMain: "November 26", ioHeadsUp: "November 12", pooleys: "November 6" },
    { month: "December",   schwoeglers: "December 20", ioMain: "December 18", ioHeadsUp: "December 10", pooleys: "December 4" },
  ];

  return (
    <section className="bg-black text-gray-100">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:py-14">
        {/* Title */}
        <header className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight">
            {title || "Monthly Meetups"}
          </h1>
        </header>

        {/* Copy block */}
        <div className="mb-10 space-y-8 leading-relaxed text-gray-200">
          {intro ? (
            <p>{intro}</p>
          ) : (
            <p>
              We host monthly meetups for fun, prizes and IFPA points at a number of
              locations. Just show up and play! Prizes are provided at all monthly
              events. If you've never participated in a tournament before, we encourage
              you to please stop out and join in the fun. They're "casual competitive"
              with new players as well as some regulars. They're a{" "}
              <span className="font-bold">
                great way to learn how to play better and meet some new people!
              </span>
            </p>
          )}

          <section aria-labelledby="venues-heading" className="space-y-4">
            <h2 id="venues-heading" className="text-xl font-semibold tracking-tight">
              Where and when
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {venueCards.map((v, i) => (
                <div key={i} className="rounded-lg border border-gray-800 bg-gray-950 p-4">
                  <h3 className="text-lg font-semibold">
                    {v.name}{v.subtitle ? ` — ${v.subtitle}` : ""}
                  </h3>
                  <p className="mt-1 text-sm text-gray-300">
                    <span className="font-medium">{v.cadence}</span> · {v.startTime} start
                  </p>
                  {v.note ? (
                    <p className="mt-1 text-xs text-gray-400">{v.note}</p>
                  ) : null}
                </div>
              ))}
            </div>
          </section>

          <aside
            aria-labelledby="rules-heading"
            className="rounded-lg border border-gray-800 bg-gray-950 p-4 text-sm text-gray-300"
          >
            <h3 id="rules-heading" className="mb-2 font-semibold">
              Rules and officiating
            </h3>
            <p>
              {rules ||
                `Hosts will aim to be consistent and follow standard IFPA-recommended rulings when handling
                malfunctions. In all instances, the officials’ and head official’s rulings are final.
                Hosts are not perfect but strive to be fair and consistent.`}
            </p>
          </aside>
        </div>

        {/* Gallery (2 images) */}
        {(imgA || imgB) && (
          <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {imgA && (
              <div className="overflow-hidden rounded-lg border border-gray-800">
                <Image
                  src={imgA}
                  alt={galleryA?.alt || "Monthly meetups"}
                  width={1600}
                  height={900}
                  className="h-48 w-full object-cover sm:h-56"
                  priority={false}
                />
              </div>
            )}
            {imgB && (
              <div className="overflow-hidden rounded-lg border border-gray-800">
                <Image
                  src={imgB}
                  alt={galleryB?.alt || "Monthly meetups"}
                  width={1600}
                  height={900}
                  className="h-48 w-full object-cover sm:h-56"
                  priority={false}
                />
              </div>
            )}
          </div>
        )}

        {/* Schedule Table */}
        <div className="overflow-x-auto rounded-lg border border-gray-800">
          <h2 className="p-4 text-xl font-semibold">
            Upcoming Tournament Dates{scheduleYear ? ` (${scheduleYear})` : ""}:
          </h2>

          <table className="min-w-full border-collapse text-sm">
            <caption className="sr-only">Monthly meetup dates by location</caption>

            <thead className="bg-gray-900 text-left text-gray-300">
              <tr>
                <th scope="col" className="px-4 py-3 font-medium">Schwoegler&apos;s</th>
                <th scope="col" className="px-4 py-3 font-medium">I/O Arcade Main</th>
                <th scope="col" className="px-4 py-3 font-medium">I/O Arcade Heads-Up!</th>
                <th scope="col" className="px-4 py-3 font-medium">Pooley&apos;s</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-800">
              {tableRows.map((row, idx) => {
                const cells = [
                  row.schwoeglers || "",
                  row.ioMain || "",
                  row.ioHeadsUp || "",
                  row.pooleys || "",
                ];
                return (
                  <tr key={idx} className="hover:bg-gray-900/40">
                    {cells.map((cell, cIdx) => {
                      const hasNote = cell && cell.includes(" - ");
                      const date = hasNote ? cell.split(" - ")[0] : cell;
                      const note = hasNote ? cell.split(" - ")[1] : "";

                      return (
                        <td key={cIdx} className="px-4 py-3 align-top">
                          {cell ? (
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="whitespace-nowrap">{date}</span>
                              {note && (
                                <span className="rounded-full border border-rose-800/60 bg-rose-800/10 px-2 py-0.5 text-[11px] leading-none">
                                  {note}
                                </span>
                              )}
                            </div>
                          ) : (
                            <span className="italic text-gray-500">No meetup</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Footnote */}
        <p className="mt-4 text-xs text-gray-400">
          Schedule is subject to change. Check Facebook page for last-minute updates.
        </p>
      </div>
    </section>
  );
}
