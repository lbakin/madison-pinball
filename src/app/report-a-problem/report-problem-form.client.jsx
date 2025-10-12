"use client";
import { useState } from "react";

export default function ReportProblemFormClient({
  formName = "report-a-problem",
  successTitle = "Thanks",
  successBody = "Your report has been submitted.",
  locations = [],
}) {
  const [submitted, setSubmitted] = useState(false);

  const encode = (form) =>
    new URLSearchParams([...new FormData(form)]).toString();

  if (submitted) {
    return (
      <div className="rounded-md border border-rose-800 bg-black p-6">
        <h2 className="mb-2 text-xl font-semibold">{successTitle}</h2>
        <p className="text-gray-300">{successBody}</p>
      </div>
    );
  }

  return (
    <form
      name={formName}
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="space-y-6"
      onSubmit={async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        await fetch("/__forms.html", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode(form),
        });
        setSubmitted(true);
        form.reset();
      }}
    >
      {/* Required for Netlify Forms */}
      <input type="hidden" name="form-name" value={formName} />
      {/* Honeypot */}
      <input type="hidden" name="bot-field" />

      {/* Location (with datalist if we have locations) */}
      <div>
        <label htmlFor="location" className="mb-2 block text-sm font-medium">
          Location
        </label>
        <input
          id="location"
          name="location"
          type="text"
          required
          list={locations.length ? "locations-list" : undefined}
          className="w-full rounded-md border border-gray-600 bg-black px-3 py-2 text-white placeholder-gray-400 focus:border-rose-800 focus:outline-none"
          placeholder="Example: I/O Arcade Bar"
        />
        {locations.length ? (
          <datalist id="locations-list">
            {locations.map((name) => (
              <option key={name} value={name} />
            ))}
          </datalist>
        ) : null}
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
        className="inline-flex items-center rounded-md bg-rose-800 px-5 py-2.5 font-medium text-white transition hover:bg-white hover:text-rose-800"
      >
        Send Report
      </button>
    </form>
  );
}
