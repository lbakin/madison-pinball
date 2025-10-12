// /src/app/[[...slug]]/page.jsx
import { notFound } from 'next/navigation'
import { sanityClient } from '~/src/lib/client'
import { pageBySlugQ } from '~/src/lib/queries'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { urlFor } from '~/src/lib/image'

export const dynamic = 'force-dynamic'     // TEMP, for debugging only
export const revalidate = 0                // TEMP, disable caching


 
const RESERVED = new Set([
  
  'locations',
  'monthly-meetups',
  'killer-queen-arcade',
  'report-a-problem',
  'buy-sell-fix-contact',
])

const ptComponents = {
  // Minimal Portable Text renderers, expand as needed
  marks: {
    link: ({ value, children }) => (
      <a href={value?.href} className="underline hover:text-rose-800">{children}</a>
    ),
  },
}

export default async function CMSPage({ params, searchParams }) {
  const { slug } = await params          // <-- await params itself
  const qp = await searchParams          // <-- if you use query params

  const slugPath = Array.isArray(slug) ? slug.join('/') : ''
  if (!slugPath || RESERVED.has(slugPath)) notFound()

  const data = await sanityClient.fetch(pageBySlugQ, { slug: slugPath })
  if (!data) notFound()

  if (qp?.debug === '1') {
    return (
      <pre className="text-xs whitespace-pre-wrap break-words p-4 bg-zinc-900 text-white rounded">
        {JSON.stringify({ slugPath, data }, null, 2)}
      </pre>
    )
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 text-white">
      <h1 className="mb-8 text-3xl font-semibold">{data.title}</h1>
      <Sections sections={data.sections || []} />
    </main>
  )
}

function Sections({ sections }) {
  return (
    <>
      {sections.map((s, i) => {
        switch (s._type) {
          case 'sectionHero':
            return <Hero key={i} {...s} />
          case 'sectionText':
            return (
              <div key={i} className={s.width === 'wide' ? 'prose prose-invert max-w-none mb-8' : 'prose prose-invert mb-8'}>
                <PortableText value={s.body} components={ptComponents} />
              </div>
            )
          case 'sectionTwoCol':
            return <TwoCol key={i} {...s} />
          case 'sectionGallery':
            return <Gallery key={i} {...s} />
          case 'sectionCards':
            return <Cards key={i} {...s} />
          case 'sectionCTA':
            return <CTA key={i} {...s} />
          case 'sectionFAQ':
            return <FAQ key={i} {...s} />
          case 'sectionHTML':
            return <div key={i} className="mb-10" dangerouslySetInnerHTML={{ __html: s.html }} />
          default:
            return null
        }
      })}
    </>
  )
}

function Hero({ eyebrow, heading, subheading, image, layout, cta }) {
  if (layout === 'image-bg' && image) {
    return (
      <section className="mb-10 relative overflow-hidden rounded-2xl">
        <Image
          src={urlFor(image).width(2000).height(1000).fit('crop').url()}
          alt={heading || 'Hero'}
          width={2000}
          height={1000}
          className="h-80 w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="px-6 md:px-10">
            {eyebrow && <p className="text-sm tracking-wide text-zinc-200">{eyebrow}</p>}
            {heading && <h2 className="mt-1 text-4xl font-bold">{heading}</h2>}
            {subheading && <p className="mt-2 max-w-2xl text-zinc-200">{subheading}</p>}
            {cta?.length ? (
              <div className="mt-4 flex gap-3">
                {cta.map((b, i) => (
                  <a
                    key={i}
                    href={b.href}
                    className={b.style === 'outline'
                      ? 'rounded-2xl border px-4 py-2 hover:bg-white hover:text-black'
                      : 'rounded-2xl bg-rose-800 px-4 py-2 hover:bg-white hover:text-black'}
                  >
                    {b.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </section>
    )
  }
  // image-left / image-right
  return (
    <section className="mb-10 grid gap-6 md:grid-cols-2 items-center">
      {layout === 'image-left' && image && <HeroImg image={image} />}
      <div>
        {eyebrow && <p className="text-sm tracking-wide text-zinc-300">{eyebrow}</p>}
        {heading && <h2 className="mt-1 text-3xl font-semibold">{heading}</h2>}
        {subheading && <p className="mt-2 text-zinc-300">{subheading}</p>}
      </div>
      {layout === 'image-right' && image && <HeroImg image={image} />}
    </section>
  )
}
function HeroImg({ image }) {
  return (
    <Image
      src={urlFor(image).width(1200).height(900).fit('crop').url()}
      alt=""
      width={1200}
      height={900}
      className="h-auto w-full rounded-2xl object-cover"
    />
  )
}

function TwoCol({ reverse, left, right }) {
  return (
    <section className={`mb-10 grid gap-8 md:grid-cols-2 ${reverse ? 'md:[&>*:first-child]:col-start-2' : ''}`}>
      <div className="prose prose-invert"><PortableText value={left} /></div>
      <div className="prose prose-invert"><PortableText value={right} /></div>
    </section>
  )
}

function Gallery({ columns = 3, images = [] }) {
  const cls = columns >= 4 ? 'lg:grid-cols-4' : columns === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'
  return (
    <section className={`mb-10 grid gap-3 ${cls}`}>
      {images.map((img, i) => (
        <Image key={i} src={urlFor(img).width(1000).fit('crop').url()} alt={`Gallery ${i + 1}`} width={1000} height={700} className="rounded-lg object-cover w-full h-auto" />
      ))}
    </section>
  )
}

function Cards({ items = [] }) {
  return (
    <section className="mb-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((c, i) => (
        <div key={i} className="rounded-2xl bg-zinc-900 p-4">
          {c.image && (
            <Image
              src={urlFor(c.image).width(800).fit('crop').url()}
              alt={c.title || 'Card'}
              width={800}
              height={500}
              className="mb-3 h-40 w-full rounded-lg object-cover"
            />
          )}
          {c.title && <h3 className="text-lg font-medium">{c.title}</h3>}
          {c.body && <p className="mt-1 text-sm text-zinc-300">{c.body}</p>}
          {c.link && (
            <a href={c.link} className="mt-3 inline-block rounded-xl bg-rose-800 px-3 py-1 hover:bg-white hover:text-black">
              {c.linkLabel || 'Learn more'}
            </a>
          )}
        </div>
      ))}
    </section>
  )
}

function CTA({ heading, body, buttons }) {
  return (
    <section className="mb-12 rounded-2xl bg-zinc-900 p-6 text-center">
      {heading && <h3 className="text-2xl font-semibold">{heading}</h3>}
      {body && <p className="mx-auto mt-2 max-w-2xl text-zinc-300">{body}</p>}
      {buttons?.length ? (
        <div className="mt-4 flex justify-center gap-3">
          {buttons.map((b, i) => (
            <a
              key={i}
              href={b.href}
              className={b.style === 'outline'
                ? 'rounded-2xl border px-4 py-2 hover:bg-white hover:text-black'
                : 'rounded-2xl bg-rose-800 px-4 py-2 hover:bg-white hover:text-black'}
            >
              {b.label}
            </a>
          ))}
        </div>
      ) : null}
    </section>
  )
}

function FAQ({ items = [] }) {
  return (
    <section className="mb-10">
      <ul className="space-y-3">
        {items.map((f, i) => (
          <li key={i} className="rounded-xl bg-zinc-900 p-4">
            <p className="font-medium">{f.q}</p>
            <p className="mt-1 text-sm text-zinc-300">{f.a}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

