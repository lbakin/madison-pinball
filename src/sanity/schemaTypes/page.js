// /sanity/schemas/page.js
export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', validation: (R) => R.required() },
    {
      name: 'slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (R) => R.required(),
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        { name: 'description', type: 'text' },
        { name: 'image', type: 'image', options: { hotspot: true } },
      ],
    },
    {
      name: 'sections',
      type: 'array',
      of: [
        { type: 'sectionHero' },
        { type: 'sectionText' },
        { type: 'sectionTwoCol' },
        { type: 'sectionGallery' },
        { type: 'sectionCards' },
        { type: 'sectionCTA' },
        { type: 'sectionFAQ' },
        { type: 'sectionHTML' },
        // App-specific modules (toggle in as you need)
        { type: 'sectionMeetups' },
        { type: 'sectionLocations' },
      ],
    },
  ],
  preview: {
    select: { title: 'title' },
    prepare({ title }) {
      return { title, subtitle: 'Page Builder' }
    },
  },
}
