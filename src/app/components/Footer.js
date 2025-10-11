import { PortableText } from '@portabletext/react'

export default function Footer({ footerValue = [], siteTitle = 'Madison Pinball' }) {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto max-w-6xl px-4 py-6 text-sm text-neutral-700">
        {footerValue?.length ? (
          <div className="prose prose-sm">
            <PortableText value={footerValue} />
          </div>
        ) : null}

        <p className="mt-2">
          © {year} {siteTitle} · All rights reserved
        </p>
      </div>
    </footer>
  )
}
