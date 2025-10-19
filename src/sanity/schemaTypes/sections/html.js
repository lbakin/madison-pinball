export default {
  name: 'sectionHTML',
  title: 'Raw HTML / Embed',
  type: 'object',
  fields: [
    { name: 'html', title: 'HTML', type: 'text', description: 'Use responsibly.' },
  ],
  preview: {
    prepare() {
      return {
        title: 'Raw HTML / Embed',
        
      };
    },
  },
};
