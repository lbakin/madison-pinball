export default {
  name: 'sectionTwoCol',
  title: 'Two Column',
  type: 'object',
  fields: [
    { name: 'reverse', type: 'boolean', initialValue: false },
    { name: 'left', type: 'array', of: [{ type: 'block' }] },
    { name: 'right', type: 'array', of: [{ type: 'block' }] },
  ],
}