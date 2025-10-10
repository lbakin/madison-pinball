import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../sanity/env'

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-12-01',
  useCdn: false, // true for public content; turn off for drafts/preview
})
