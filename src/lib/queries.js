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
