"use client";
import { useState } from "react";

export default function ReportAProblemPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-[70vh] bg-black text-white">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="mb-4 text-3xl font-semibold">
          Uh-oh!  Something must have gone wrong with one of our games.  We want to get this fixed quickly for you, and appreciate being notified!
        </h1>

        <p className="mb-4">Please fill out the below form with:</p>

        <ol className="mb-4 list-decimal pl-6">
          <li>The location of this machine</li>
          <li>The name of the game with the problem</li>
          <li>Your Email info so we can let you know when the game is fixed.</li>
          <li>Describe the problem as best as possible. For example "Right upper flipper on Scared Stiff is not working" or "drop target on StarTrek is stuck up" or ...</li>
        </ol>

        <p className="mb-4">
          Thanks VERY much for supporting Madison pinball and helping us keep games working and playing well by reporting problems! We appreciate it!
        </p>

        <p className="">Sincerely,</p>
        <p className="mb-8">Hilton, Sean, and Garrett</p>

        {/* Netlify will parse this at build time */}
        {!submitted ? (
          <form
            name="report-a-problem"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="space-y-6"
            onSubmit={() => setSubmitted(true)}
          >
            {/* Required for Netlify Forms */}
            <input type="hidden" name="form-name" value="report-a-problem" />
            {/* Honeypot */}
            <input type="hidden" name="bot-field" />

            <div>
              <label htmlFor="location" className="mb-2 block text-sm font-medium">
                Location
              </label>
              <input
                id="location"
                name="location"
                type="text"
                required
                className="w-full rounded-md border border-gray-600 bg-black px-3 py-2 text-white placeholder-gray-400 focus:border-rose-800 focus:outline-none"
                placeholder="Example: I/O Arcade Bar"
              />
            </div>

            <div>
              <label htmlFor="game" className="mb-2 block text-sm font-medium">
                Game
              </label>
              <input
                id="game"
                name="game"
                type="text"
                required
                className="w-full rounded-md border border-gray-600 bg-black px-3 py-2 text-white placeholder-gray-400 focus:border-rose-800 focus:outline-none"
                placeholder="Example: Attack from Mars"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Your Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-md border border-gray-600 bg-black px-3 py-2 text-white placeholder-gray-400 focus:border-rose-800 focus:outline-none"
                placeholder="you@example.com"
                inputMode="email"
                autoComplete="email"
              />
            </div>

            <div>
              <label htmlFor="issue" className="mb-2 block text-sm font-medium">
                Issue Description
              </label>
              <textarea
                id="issue"
                name="issue"
                required
                rows={5}
                className="w-full rounded-md border border-gray-600 bg-black px-3 py-2 text-white placeholder-gray-400 focus:border-rose-800 focus:outline-none"
                placeholder="Describe what is happening, when it occurs, and anything else helpful."
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center rounded-md bg-rose-800 px-5 py-2.5 font-medium text-white hover:bg-white hover:text-rose-800 transition"
            >
              Send Report
            </button>
          </form>
        ) : (
          <div className="rounded-md border border-rose-800 bg-black p-6">
            <h2 className="mb-2 text-xl font-semibold">Thanks</h2>
            <p className="text-gray-300">
              Your report has been submitted. We will take a look.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
