export default {
  name: 'sectionCards',
  title: 'Cards',
  type: 'object',
  fields: [
    {
      name: 'items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string' },
            { name: 'body', type: 'text' },
            { name: 'image', type: 'image', options: { hotspot: true } },
            { name: 'link', type: 'url' },
            { name: 'linkLabel', type: 'string' },
          ],
        },
      ],
    },
  ],
}