export default {
  name: 'sectionCTA',
  title: 'Call to Action',
  type: 'object',
  fields: [
    { name: 'heading', type: 'string' },
    { name: 'body', type: 'text' },
    { name: 'buttons', type: 'array', of: [{ type: 'linkButton' }] },
  ],
}