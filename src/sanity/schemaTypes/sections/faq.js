export default {
  name: 'sectionFAQ',
  title: 'FAQ',
  type: 'object',
  fields: [
    {
      name: 'items',
      type: 'array',
      of: [{ type: 'object', fields: [{ name: 'q', type: 'string' }, { name: 'a', type: 'text' }] }],
    },
  ],
}