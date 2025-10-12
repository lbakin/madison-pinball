import groq from 'groq'


export const siteSettingsQ = groq`*[_type == "siteSettings"][0]{
  title, logo, nav[]{label, href}, footer
}`


export const allLocationSlugsQuery = groq`*[_type == "location" && defined(slug.current)]|order(name asc){
  "slug": slug.current,
  name
}`

export const locationsIndexQ = groq`*[_type == "location"]|order(name asc){
  "slug": slug.current,
  name,
  "image": coalesce(logo, images[0])
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

export const pageBySlugQ = /* groq */ `
*[_type == "page" && slug.current == $slug][0]{
  _id, title, "slug": slug.current, seo,
  sections[]{
    _type,
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

export const homePageQ = groq`*[_type == "homePage"][0]{
  heroEyebrow, heroHeading, heroSubheading, heroImage, heroButtons[],
  copyRich,
  ctaTitle, ctaSummary, ctaButtons[]
}`

export const monthlyMeetupsQ = `
*[_type == "monthlyMeetups"][0]{
  title,
  intro,
  venues[]->{}, // not refs here, but keeps open for future ref change
  venues[]{
    name, subtitle, cadence, startTime, note
  },
  rules,
  gallery[]{asset->{url, metadata}, alt, caption},
  scheduleYear,
  schedule[]{
    month, schwoeglers, ioMain, ioHeadsUp, pooleys
  }
}
`;

export const killerQueenQ = `
*[_type == "killerQueen"][0]{
  title,
  description,
  heroImage,
  heroTagline,
  intro,
  weeklyMeetup{title, time, blurb},
  stayInLoop{title, blurb, ctaLabel, ctaUrl},
  gallery[]{asset->{url, metadata}},
  location{heading, line1, note}
}
`;

export const reportProblemQ = `
*[_type == "reportProblem"][0]{
  title, intro,
  formName, successTitle, successBody,
  useLocationsCollection, extraLocations
}
`;

export const contactPageQ = `
*[_type == "contactPage"][0]{
  title,
  intro,
  gallery[]{asset->{url, metadata}},
  altContactLabel,
  altContactEmail,
  formName,
  successTitle,
  successBody
}
`;

