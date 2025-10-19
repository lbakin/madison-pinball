export default {
  name: 'sectionFAQ',
  title: 'FAQ',
  type: 'object',
  fields: [
    { name: 'heading', title: 'Heading', type: 'string' },
    {
      name: 'items',
      title: 'Questions',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'q', title: 'Question', type: 'string' },
            { name: 'a', title: 'Answer', type: 'text' },
          ],
        },
      ],
    },
  ],
  preview: {
    select: { heading: 'heading' },
    prepare({ heading }) {
      return {
        title: 'FAQ',
        subtitle: heading || '',
      };
    },
  },
};
