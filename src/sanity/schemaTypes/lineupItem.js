export default {
  name: 'lineupItem',
  title: 'Lineup Item',
  type: 'object',
  fields: [
    { name: 'game', title: 'Game', type: 'string' },
    { name: 'year', title: 'Year', type: 'string' },
    { name: 'manufacturer', title: 'Manufacturer', type: 'string' },
    { name: 'link', title: 'External Link', type: 'url' },

    // New: rich-text notes that allow links
    {
      name: 'notes',
      title: 'Notes',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                    validation: Rule =>
                      Rule.uri({ scheme: ['http', 'https', 'mailto', 'tel'] }),
                  },
                  {
                    name: 'blank',
                    type: 'boolean',
                    title: 'Open in new tab',
                    initialValue: true,
                  },
                ],
              },
            ],
          },
          // keep styles minimal; you can add more if you like
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
        },
      ],
      options: { spellCheck: true },
    },
  ],
}
