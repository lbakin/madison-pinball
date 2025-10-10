import createImageUrlBuilder from '@sanity/image-url'
import { dataset, projectId } from '~/src/sanity/env'

// Single builder instance
const builder = createImageUrlBuilder({ projectId, dataset })

/**
 * Build a Sanity image URL with safe defaults.
 * - Forces webp (or switch to 'jpg' if you prefer)
 * - Lets callers chain width/height/fit as needed
 */
export const urlFor = (source) => {
  if (!source) return builder.image(null) // allows safe chaining without crashes
  return builder.image(source).format('webp')
}

// Optional helpers if you want common presets:
export const urlHero = (source) =>
  urlFor(source).width(1600).height(800).fit('crop')

export const urlLogo = (source) =>
  urlFor(source).width(1200).height(400).fit('max')
