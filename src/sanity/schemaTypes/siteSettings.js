export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    { name: 'title', title: 'Site Title', type: 'string' },
    { name: 'logo', title: 'Logo', type: 'image', options: { hotspot: true } },
    {
      name: 'nav',
      title: 'Navigation',
      type: 'array',
      of: [{ type: 'object', fields: [
        { name: 'label', type: 'string', title: 'Label' },
        { name: 'href', type: 'string', title: 'Href' },
      ]}],
    },
    {name: 'footer',
    title: 'Footer Content',
    type: 'array',
    of: [{ type: 'block' }],
    description: 'Rich footer text. You can add links, bold, etc.'}
  ]
}
