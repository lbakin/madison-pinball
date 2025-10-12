
// Shared button type
export const linkButton = {
  name: 'linkButton',
  title: 'Link Button',
  type: 'object',
  fields: [
    { name: 'label', type: 'string' },
    { name: 'href', type: 'string' },
    { name: 'style', type: 'string', options: { list: ['solid', 'outline'] }, initialValue: 'solid' },
  ],
}