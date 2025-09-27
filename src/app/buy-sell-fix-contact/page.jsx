"use client";
import { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-[70vh] bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="mb-6 text-3xl font-semibold">We Buy / Sell / Fix and Play Pinball</h1>

        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          
          <div className="grid gap-4">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-gray-700">
              <Image
                src="/images/msn-pinball-graphic.png"
                alt="Madison Pinball Graphic"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-gray-700">
              <Image
                src="/images/pinball-direct-center.jpg"
                alt="Close-up of a pinball playfield"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right: Copy + Form */}
          <div>
            <div className="prose prose-invert max-w-none text-gray-200">
              <p className="mb-4">
                Have a pinball in need of repair? Looking to sell your machine, or want to
                purchase one? Maybe you just have a question? Although our schedules can be
                booked up, we are happy to help if we can. Please contact us using the form
                below and we will respond soon.
              </p>
              <p>
                If you own a location in the Madison area (bowling alley, bar, brewery, etc.)
                and are interested in having high quality games at your location, please get in touch.
              </p>
            </div>

            {!submitted ? (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                className="mt-8 space-y-6"
                onSubmit={() => setSubmitted(true)}
              >
                {/* Netlify requirements */}
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />

                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium">
                    Name *
                  </label>
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
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    Email *
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
                  <label htmlFor="subject" className="mb-2 block text-sm font-medium">
                    Subject *
                  </label>
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
                  <label htmlFor="message" className="mb-2 block text-sm font-medium">
                    Message *
                  </label>
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
            ) : (
              <div className="mt-8 rounded-md border border-rose-800 bg-black p-6">
                <h2 className="mb-2 text-xl font-semibold">Thanks</h2>
                <p className="text-gray-300">
                  Your message has been submitted. We’ll get back to you soon.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Optional: secondary contact block */}
        <div className="mt-10 border-t border-gray-800 pt-6 text-sm text-gray-400">
          <p>
            Prefer email? You can also reach us at{" "}
            <a className="underline hover:text-rose-800" href="mailto:pinballmadison@gmail.com">
              pinballmadison@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
