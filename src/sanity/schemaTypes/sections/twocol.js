// /schemas/sections/twocol.js
export default {
  name: 'sectionTwoCol',
  title: 'Two Column',
  type: 'object',
  fields: [
    { name: 'heading', title: 'Heading', type: 'string' },
    { name: 'reverse', title: 'Reverse layout', type: 'boolean', initialValue: false },
    { name: 'left', title: 'Left content', type: 'array', of: [{ type: 'block' }] },
    { name: 'right', title: 'Right content', type: 'array', of: [{ type: 'block' }] },
  ],
  preview: {
    select: { heading: 'heading' },
    prepare({ heading }) {
      return {
        title: 'Two Column',
        subtitle: heading || '',
      };
    },
  },
};
