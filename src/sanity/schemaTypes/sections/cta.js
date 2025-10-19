export default {
  name: 'sectionCTA',
  title: 'Call to Action',
  type: 'object',
  fields: [
    { name: 'heading', title: 'Heading', type: 'string' },
    { name: 'body', title: 'Body', type: 'text' },
    { name: 'buttons', title: 'Buttons', type: 'array', of: [{ type: 'linkButton' }] },
  ],
  preview: {
    select: { heading: 'heading' },
    prepare({ heading }) {
      return {
        title: 'Call to Action',
        subtitle: heading || '',
      };
    },
  },
};