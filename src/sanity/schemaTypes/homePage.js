export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    // HERO
    
    { name: 'heroHeading', title: 'Hero Heading', type: 'string' },
    { name: 'heroSubheading', title: 'Hero Subheading', type: 'text' },
    { name: 'heroImage', title: 'Hero Image', type: 'image', options: { hotspot: true } },
    {
      name: 'heroButtons',
      title: 'Hero Buttons',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'label', title: 'Label', type: 'string', validation: Rule => Rule.required() },
          { name: 'href',  title: 'Link (URL or path)', type: 'string' },
          {
            name: 'style',
            title: 'Style',
            type: 'string',
            initialValue: 'solid',
            options: {
              layout: 'radio', // or 'dropdown' if you prefer
              list: [
                { title: 'Solid (rose)', value: 'solid' },
                { title: 'Outline',      value: 'outline' },
                { title: 'Ghost',        value: 'ghost' },
                { title: 'White',        value: 'white' }, // NEW
              ],
            },
          },
        ],
    }]},

    // COPY SECTION (WYSIWYG)
    {
      name: "copyRich",
      title: "Body Copy",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Underline", value: "underline" },
              // alignment — separate from styles
              { title: "Center", value: "center" },
              { title: "Right Align", value: "alignRight" },
              { title: "Lead", value: "lead" },
              { title: "Small", value: "small" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  { name: "href", type: "url", title: "URL" },
                  { name: "blank", type: "boolean", title: "Open in new tab" },
                ],
              },
            ],
          },
        },
      ],
    },

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
