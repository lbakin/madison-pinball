export default {
  name: 'sectionText',
  title: 'Text',
  type: 'object',
  fields: [
    { name: 'width', type: 'string', options: { list: ['narrow', 'wide'] }, initialValue: 'narrow' },
    { name: 'body', type: 'array', of: [{ type: 'block' }] }, // Portable Text
  ],
  preview: { select: { title: 'width' }, prepare: ({ title }) => ({ title: `Text (${title})` }) },
}