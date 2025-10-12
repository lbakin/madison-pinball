export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    // HERO
    { name: 'heroEyebrow', title: 'Hero Eyebrow', type: 'string' },
    { name: 'heroHeading', title: 'Hero Heading', type: 'string' },
    { name: 'heroSubheading', title: 'Hero Subheading', type: 'text' },
    { name: 'heroImage', title: 'Hero Image', type: 'image', options: { hotspot: true } },
    { name: 'heroButtons', title: 'Hero Buttons', type: 'array', of: [{
      type: 'object',
      fields: [
        { name: 'label', type: 'string' },
        { name: 'href',  type: 'string' },
        { name: 'style', type: 'string', options: { list: ['solid','outline'] }, initialValue: 'solid' },
      ]
    }]},

    // COPY SECTION (WYSIWYG)
    { name: 'copyRich', title: 'Copy Section', type: 'array', of: [{ type: 'block' }] },

    // CTA BAR
    { name: 'ctaTitle',   title: 'CTA Title', type: 'string' },
    { name: 'ctaSummary', title: 'CTA Summary', type: 'text' },
    { name: 'ctaButtons', title: 'CTA Buttons', type: 'array', of: [{
      type: 'object',
      fields: [
        { name: 'label', type: 'string' },
        { name: 'href',  type: 'string' },
        { name: 'outline', type: 'boolean', initialValue: false },
      ]
    }]},
  ],
}
