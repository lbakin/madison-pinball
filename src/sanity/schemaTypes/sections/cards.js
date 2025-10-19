export default {
  name: 'sectionCards',
  title: 'Cards',
  type: 'object',
  fields: [
    { name: 'heading', title: 'Heading', type: 'string' }, // NEW
    {
      name: 'items',
      title: 'Cards',
      type: 'array',
      of: [
        {
          name: 'cardItem',
          title: 'Card',
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'body', title: 'Body', type: 'text' },
            { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
            { name: 'link', title: 'Link URL', type: 'url' },
            { name: 'linkLabel', title: 'Link Label', type: 'string' },
          ],
        },
      ],
    },
  ],
  preview: {
    select: { heading: 'heading' },
    prepare({ heading }) {
      return {
        title: 'Cards',
        subtitle: heading || '',
      };
    },
  },
};
