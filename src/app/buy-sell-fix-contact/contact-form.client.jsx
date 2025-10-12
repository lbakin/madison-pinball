"use client";
import { useState } from "react";

export default function ContactFormClient({
  formName = "contact",
  successTitle = "Thanks",
  successBody = "Your message has been submitted. We’ll get back to you soon.",
  className = ""
}) {
  const [submitted, setSubmitted] = useState(false);
  const encode = (form) => new URLSearchParams([...new FormData(form)]).toString();

  if (submitted) {
    return (
      <div className="mt-8 rounded-md border border-rose-800 bg-black p-6">
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
      className={`space-y-6 ${className}`}
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
      {/* Netlify requirements */}
      <input type="hidden" name="form-name" value={formName} />
      <input type="hidden" name="bot-field" />

      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium">Name *</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-md border border-gray-600 bg-black px-3 py-2 text-white placeholder-gray-400 focus:border-rose-800 focus:outline-none"
          placeholder="Your name"
          autoComplete="name"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium">Email *</label>
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
        <label htmlFor="subject" className="mb-2 block text-sm font-medium">Subject *</label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          className="w-full rounded-md border border-gray-600 bg-black px-3 py-2 text-white placeholder-gray-400 focus:border-rose-800 focus:outline-none"
          placeholder="Buy, sell, fix, or general question"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">Message *</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="w-full rounded-md border border-gray-600 bg-black px-3 py-2 text-white placeholder-gray-400 focus:border-rose-800 focus:outline-none"
          placeholder="Tell us a bit about the machine or request."
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center rounded-md bg-rose-800 px-5 py-2.5 font-medium text-white transition hover:bg-white hover:text-rose-800"
      >
        Send Message
      </button>
    </form>
  );
}
