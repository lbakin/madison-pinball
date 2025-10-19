// /src/app/[[...slug]]/page.jsx
import { notFound } from 'next/navigation'
import { sanityClient } from '~/src/lib/client'
import { pageBySlugQ } from '~/src/lib/queries'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import Link from "next/link"
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

function computePageClasses(style) {
  // const theme = style?.theme || 'dark'
  // if (theme === 'light') return { bg: 'bg-white', text: 'text-black' }
  // if (theme === 'custom') {
  //   return {
  //     bg: style?.bg || 'bg-black',
  //     text: style?.text || 'text-white',
  //   }
  // }
  // default dark
  return { bg: 'bg-black', text: 'text-white' }
}

export default async function CMSPage({ params, searchParams }) {
  const { slug } = await params        
  const qp = await searchParams         

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

  const { bg, text } = computePageClasses(data.style)

  return (
    <main className={`mx-auto max-w-5xl px-4 py-10 ${bg} ${text}`}>
      <h1 className="mb-8 text-3xl font-semibold">{data.title}</h1>
      <Sections sections={data.sections || []} invertProse={data?.style?.invertProse !== false} />
    </main>
  )
}

function Sections({ sections, invertProse }) {
  const proseCls = invertProse ? 'prose prose-invert' : 'prose';
  return (
    <>
      {sections.map((s) => {
        switch (s._type) {
          case 'sectionHero':
            return <Hero key={s._key} {...s} />;

          case 'sectionText':
            return (
              <div key={s._key} className={s.width === 'wide' ? `${proseCls} max-w-none mb-8` : `${proseCls} mb-8`}>
                <PortableText value={s.body} components={ptComponents} />
              </div>
            );

          case 'sectionTwoCol':
            return <TwoCol key={s._key} {...s} invertProse={invertProse} />;

          case 'sectionGallery':
            return <Gallery key={s._key} {...s} />;

          case 'sectionCards':
            return <Cards key={s._key} {...s} />;

          case 'sectionCTA':
            return <CTA key={s._key} {...s} />;

          case 'sectionFAQ':
            return <FAQ key={s._key} {...s} />;

          case 'sectionHTML':
            return <RawHTML key={s._key} {...s} />;

          default:
            return null;
        }
      })}
    </>
  );
}
function Hero({
  eyebrow,
  heading,
  subheading,
  image,
  layout = "image-bg",
  cta = [],
  // optional: allow overriding min height for bg layout if you want
  minHeight = "min-h-[60vh]",
}) {
  if (layout === "image-bg") return <HeroBg {...{ eyebrow, heading, subheading, image, cta, minHeight }} />
  if (layout === "image-left") return <HeroSide side="left" {...{ eyebrow, heading, subheading, image, cta }} />
  if (layout === "image-right") return <HeroSide side="right" {...{ eyebrow, heading, subheading, image, cta }} />
  // image-center (default fallback)
  return <HeroCenter {...{ eyebrow, heading, subheading, image, cta }} />
}

/* ========== Layouts ========== */

function HeroBg({ eyebrow, heading, subheading, image, cta, minHeight }) {
  return (
    <section
      className={`relative isolate w-screen ${minHeight}
      left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden bg-black`}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        {image ? (
          <Image
            src={urlFor(image).width(2400).height(1400).url()}
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        ) : null}
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Content container still respects your site max width */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <div className="max-w-3xl">
          <Eyebrow text={eyebrow} tone="light" />
          <Heading text={heading} level="h1" tone="light" />
          <Subheading text={subheading} tone="light" />
          <HeroCtas items={cta} invert />
        </div>
      </div>
    </section>
  )
}

function HeroSide({ side = "left", eyebrow, heading, subheading, image, cta }) {
  const imageFirst = side === "left"
  return (
    <section className="w-full">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 py-12 sm:py-16 md:grid-cols-2">
        {imageFirst ? <Media image={image} /> : null}

        <div>
          <Eyebrow text={eyebrow} />
          <Heading text={heading} level="h2" />
          <Subheading text={subheading} />
          <HeroCtas items={cta} />
        </div>

        {!imageFirst ? <Media image={image} /> : null}
      </div>
    </section>
  )
}

function HeroCenter({ eyebrow, heading, subheading, image, cta }) {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
        {image ? (
          <div className="relative mx-auto mb-8 aspect-[16/9] w-full overflow-hidden rounded-2xl sm:mb-10">
            <Image
              src={urlFor(image).width(1600).height(900).url()}
              alt=""
              fill
              priority
              className="object-cover object-center"
              sizes="(min-width: 768px) 768px, 100vw"
            />
          </div>
        ) : null}

        <div className="text-center">
          <Eyebrow text={eyebrow} />
          <Heading text={heading} level="h2" />
          <Subheading text={subheading} />
          <div className="flex justify-center">
            <HeroCtas items={cta} />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ========== Bits ========== */

function Media({ image }) {
  if (!image) return null
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
      <Image
        src={urlFor(image).width(1200).height(900).url()}
        alt=""
        fill
        className="object-cover object-center"
        sizes="(min-width: 768px) 50vw, 100vw"
        priority
      />
    </div>
  )
}

function Eyebrow({ text, tone = "dark" }) {
  if (!text) return null
  const cls = tone === "light" ? "text-white/80" : "text-neutral-600 dark:text-neutral-300"
  return <p className={`mb-3 text-sm font-semibold uppercase tracking-wide ${cls}`}>{text}</p>
}

function Heading({ text, level = "h2", tone = "auto" }) {
  if (!text) return null
  const Tag = level
  const cls = tone === "light" ? "text-white" : "text-neutral-900 dark:text-white"
  return <Tag className={`text-4xl font-extrabold tracking-tight sm:text-5xl ${cls}`}>{text}</Tag>
}

function Subheading({ text, tone = "auto" }) {
  if (!text) return null
  const cls = tone === "light" ? "text-white/90" : "text-neutral-700 dark:text-neutral-200"
  return <p className={`mt-4 text-lg leading-relaxed ${cls}`}>{text}</p>
}

function HeroCtas({ items = [], invert = false }) {
  if (!Array.isArray(items) || items.length === 0) return null
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {items.map((b, i) =>
        b?.href && b?.label ? (
          <Link
            key={i}
            href={b.href}
            className={`inline-flex items-center rounded-full px-6 py-3 text-base font-medium focus:outline-none focus-visible:ring-2 ${
              invert
                ? "bg-rose-700 text-white hover:bg-rose-600 focus-visible:ring-rose-300"
                : "bg-neutral-900 text-white hover:bg-neutral-800 focus-visible:ring-neutral-400 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
            }`}
          >
            {b.label}
          </Link>
        ) : null
      )}
    </div>
  )
}


function TwoCol({ heading, reverse, left, right, invertProse }) {
  const proseCls = invertProse ? 'prose prose-invert' : 'prose';
  return (
    <section className="mb-10">
      {heading ? <h2 className="mb-4 text-2xl font-semibold">{heading}</h2> : null}
      <div className={`grid gap-8 md:grid-cols-2 ${reverse ? 'md:[&>*:first-child]:col-start-2' : ''}`}>
        <div className={proseCls}><PortableText value={left} /></div>
        <div className={proseCls}><PortableText value={right} /></div>
      </div>
    </section>
  );
}



function Gallery({ heading, columns = 3, images = [], style = {} }) {
  const cls =
    columns >= 4 ? 'lg:grid-cols-4'
    : columns === 2 ? 'md:grid-cols-2'
    : 'md:grid-cols-3'

  const align = style.align || 'start' // start | center | end
  const fit = style.fit || 'cover'     // cover | contain
  const radius = style.radius || 'rounded-lg'
  const shadow = style.shadow ? 'shadow-lg' : ''

  // Grid alignment for tiles (centers each item in its cell if chosen)
  const justify =
    align === 'center' ? 'justify-items-center'
    : align === 'end' ? 'justify-items-end'
    : 'justify-items-start'

  // Image fit presets:
  // - cover: fills tile, nice uniform grid
  // - contain: no crop; fixed height tile with centered image
  const imgFit =
    fit === 'contain'
      ? 'object-contain w-auto h-64 mx-auto' // true centering inside a fixed-height tile
      : 'object-cover w-full h-40'           // uniform cropped tiles

  return (
    <section className={`mb-10 grid gap-3 ${cls} ${justify}`}>
       {heading ? <h2 className="mb-4 text-2xl font-semibold">{heading}</h2> : null}
      {images.map((img, i) => (
        <Image
          key={i}
          src={urlFor(img).width(1000).fit('crop').url()}
          alt={`Gallery ${i + 1}`}
          width={1000}
          height={700}
          className={`${radius} ${shadow} ${imgFit}`}
        />
      ))}
    </section>
  )
}


function Cards({ heading, items = [] }) {
  return (
    <section className="mb-10">
      {heading ? <h2 className="mb-4 text-2xl font-semibold">{heading}</h2> : null}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
      </div>
    </section>
  );
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

function FAQ({ heading, items = [] }) {
  return (
    <section className="mb-10">
      {heading ? <h2 className="mb-4 text-2xl font-semibold">{heading}</h2> : null}
      <ul className="space-y-3">
        {items.map((f, i) => (
          <li key={i} className="rounded-xl bg-zinc-900 p-4">
            <p className="font-medium">{f.q}</p>
            <p className="mt-1 text-sm text-zinc-300">{f.a}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function RawHTML({ html }) {
  return (
    <section className="mb-10">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </section>
  );
}

