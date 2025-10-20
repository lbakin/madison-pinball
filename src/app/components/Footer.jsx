import { PortableText } from '@portabletext/react'

export default function FooterPanel({ footerValue = [], siteTitle = 'Madison Pinball' }) {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-zinc-950">
      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="rounded-2xl border border-white/10 bg-zinc-900/60 px-6 py-6 text-sm text-zinc-300 backdrop-blur">
          {footerValue?.length ? (
            <div className="prose prose-sm prose-invert prose-a:underline hover:prose-a:text-rose-800">
              <PortableText value={footerValue} />
            </div>
          ) : null}

          <p className="mt-2 text-xs text-zinc-400">
            © {year} {siteTitle} · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
