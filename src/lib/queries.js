import groq from 'groq'

export const allLocationSlugsQuery = groq`*[_type == "location" && defined(slug.current)]{
  "slug": slug.current
}`

export const locationBySlugQuery = groq`*[_type == "location" && slug.current == $slug][0]{
  name,
  "slug": slug.current,
  venueUrl,
  address,
  hours,
  images,
  logo,
  lineup
}`

// /src/lib/queries.js
export const pageBySlugQ = /* groq */ `
*[_type == "page" && slug.current == $slug][0]{
  _id, title, "slug": slug.current, seo,
  sections[]{
    _type,
    // Hero
    ...select(
      _type == "sectionHero" => {
        eyebrow, heading, subheading, image, layout, cta
      },
      _type == "sectionText" => { width, body },
      _type == "sectionTwoCol" => { reverse, left, right },
      _type == "sectionGallery" => { columns, images },
      _type == "sectionCards" => { items },
      _type == "sectionCTA" => { heading, body, buttons },
      _type == "sectionFAQ" => { items },
      _type == "sectionHTML" => { html },
      _type == "sectionMeetups" => { heading, notes },
      _type == "sectionLocations" => { heading }
    )
  }
}
`
