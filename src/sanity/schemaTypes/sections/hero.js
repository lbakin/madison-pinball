export default {
  name: 'sectionHero',
  title: 'Hero',
  type: 'object',
  fields: [
    { name: 'eyebrow', type: 'string' },
    { name: 'heading', type: 'string' },
    { name: 'subheading', type: 'text' },
    { name: 'image', type: 'image', options: { hotspot: true } },
    {
      name: 'layout',
      type: 'string',
      options: { list: ['image-left', 'image-right', 'image-bg'], layout: 'radio' },
      initialValue: 'image-bg',
    },
    { name: 'cta', type: 'array', of: [{ type: 'linkButton' }] },
  ],
  preview: { select: { title: 'heading', media: 'image' } },
}