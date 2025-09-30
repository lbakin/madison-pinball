"use client";

import Image from "next/image";

export default function MonthlyMeetupsPage() {
  return (
    <section className="bg-black text-gray-100">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:py-14">
        {/* Title */}
        <header className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight ">
            Monthly Meetups
          </h1>
        </header>

      {/* Copy block */}
<div className="mb-10 space-y-8 leading-relaxed text-gray-200">
  <p>
  We host monthly meetups for fun, prizes and IFPA points at a number of locations.  Just show up and play!!  Prizes are provided at all monthly events.  If you've never participated in a tournament before, we encourage you to please stop out and join in the fun.  They're "casual competitive" with new players as well as some regulars. They're a <span className="font-bold">great way to learn how to play better and meet some new people!</span>
  </p>

  <section aria-labelledby="venues-heading" className="space-y-4">
    <h2 id="venues-heading" className="text-xl font-semibold tracking-tight ">
      Where and when
    </h2>

    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {/* Schwoegler's */}
      <div className="rounded-lg border border-gray-800 bg-gray-950 p-4">
        <h3 className="text-lg font-semibold ">Schwoegler&apos;s</h3>
        <p className="mt-1 text-sm text-gray-300">
          <span className="font-medium">Third Saturday</span> · 6:00 pm start
        </p>
      </div>

      {/* I/O Arcade — Heads-Up */}
      <div className="rounded-lg border border-gray-800 bg-gray-950 p-4">
        <h3 className="text-lg font-semibold ">I/O Arcade — Heads-Up</h3>
        <p className="mt-1 text-sm text-gray-300">
          <span className="font-medium">Second Wednesday</span> · 7:00 pm start
        </p>
        <p className="mt-1 text-xs text-gray-400">“Casual competitive” head-to-head format</p>
      </div>

      {/* I/O Arcade — Main */}
      <div className="rounded-lg border border-gray-800 bg-gray-950 p-4">
        <h3 className="text-lg font-semibold ">I/O Arcade — Main</h3>
        <p className="mt-1 text-sm text-gray-300">
          <span className="font-medium">Fourth Wednesday</span> · 7:00 pm start
        </p>
        <p className="mt-1 text-xs text-gray-400">“Casual competitive” format</p>
      </div>

      {/* Pooley's */}
      <div className="rounded-lg border border-gray-800 bg-gray-950 p-4">
        <h3 className="text-lg font-semibold ">Pooley&apos;s</h3>
        <p className="mt-1 text-sm text-gray-300">
          <span className="font-medium">First Thursday</span> · 6:30 pm start
        </p>
      </div>
    </div>
  </section>

  <aside
    aria-labelledby="rules-heading"
    className="rounded-lg border border-gray-800 bg-gray-950 p-4 text-sm text-gray-300"
  >
    <h3 id="rules-heading" className="mb-2 font-semibold ">
      Rules and officiating
    </h3>
    <p>
      Hosts will aim to be consistent and follow standard IFPA-recommended rulings when handling
      malfunctions. In all instances, the officials’ and head official’s rulings are final. Hosts
      are not perfect but strive to be fair and consistent.
    </p>
  </aside>
</div>


        
        
        <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="overflow-hidden rounded-lg border border-gray-800">
            <Image
              src="/images/pinball-close.jpg"
              alt="Players at IO Arcade Bar"
              width={1600}
              height={900}
              className="h-48 w-full object-cover sm:h-56"
              priority={false}
            />
            </div>
          
          <div className="overflow-hidden rounded-lg border border-gray-800">
            <Image
              src="/images/kiss-closeup.jpg"
              alt="Schwoeglers bowling and pinball lineup"
              width={1600}
              height={900}
              className="h-48 w-full object-cover sm:h-56"
              priority={false}
            />
            
          </div>
        </div>
        

       {/* Table wrapper */}
<div className="overflow-x-auto rounded-lg border border-gray-800">
  <h2 className="text-xl font-semibold ">Upcoming Tournament Dates At Each Location:
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
      {[
        ["January 18", "January 22", "January 8", ""],
        ["February 15", "February 26", "February 12", ""],
        ["March 15", "March 26", "March 12", ""],
        ["April 19", "April 23", "April 9", ""],
        ["May 17", "May 28", "May 14 - Evil Dead Launch", ""],
        ["June 21", "June 25", "June 11", ""],
        ["July 19", "July 23", "July 9 - King Kong Launch", "July 3"],
        ["August 16", "August 27", "August 13", "August 7"],
        ["September 20", "September 24", "September 10", "September 4"],
        ["October 18", "October 22", "October 8", "October 2"],
        ["November 15", "November 26", "November 12", "November 6"],
        ["December 20", "December 18", "December 10", "December 4"],
      ].map((row, rIdx) => (
        <tr key={rIdx} className="hover:bg-gray-900/40">
          {row.map((cell, cIdx) => {
            // Extract optional note after " - "
            const hasNote = cell && cell.includes(" - ");
            const date = hasNote ? cell.split(" - ")[0] : cell;
            const note = hasNote ? cell.split(" - ")[1] : "";

            return (
              <td key={cIdx} className="px-4 py-3 align-top">
                {cell ? (
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="whitespace-nowrap">{date}</span>
                    {note && (
                      <span className="rounded-full border border-rose-800/60 bg-rose-800/10 px-2 py-0.5 text-[11px] leading-none ">
                        {note}
                      </span>
                    )}
                  </div>
                ) : (
                  <span className="text-gray-500 italic">No meetup</span>
                )}
              </td>
            );
          })}
        </tr>
      ))}
    </tbody>
  </table>
</div>


        {/* Small footnote area for recurring rules or contact link */}
        <p className="mt-4 text-xs text-gray-400">
          Schedule is subject to change. Check facebook page for last-minute updates.
        </p>
      </div>
    </section>
  );
}
