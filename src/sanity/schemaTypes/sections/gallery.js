export default {
  name: 'sectionGallery',
  title: 'Gallery',
  type: 'object',
  fields: [
    { name: 'columns', title: 'Columns', type: 'number', initialValue: 3 },
    {
      name: 'style',
      title: 'Image Style',
      type: 'object',
      fields: [
        {
          name: 'align',
          title: 'Alignment',
          type: 'string',
          options: {
            list: [
              { title: 'Left', value: 'start' },
              { title: 'Center', value: 'center' },
              { title: 'Right', value: 'end' },
            ],
            layout: 'radio',
            direction: 'horizontal',
          },
          initialValue: 'start',
        },
        {
          name: 'fit',
          title: 'Object Fit',
          type: 'string',
          options: {
            list: [
              { title: 'Cover (crop to fill)', value: 'cover' },
              { title: 'Contain (no crop)', value: 'contain' },
            ],
            layout: 'radio',
            direction: 'horizontal',
          },
          initialValue: 'cover',
        },
        {
          name: 'radius',
          title: 'Corner Radius',
          type: 'string',
          options: {
            list: [
              { title: 'None', value: 'rounded-none' },
              { title: 'Large', value: 'rounded-lg' },
              { title: 'XL', value: 'rounded-xl' },
              { title: '2XL', value: 'rounded-2xl' },
            ],
          },
          initialValue: 'rounded-lg',
        },
        {
          name: 'shadow',
          title: 'Shadow',
          type: 'boolean',
          initialValue: false,
        },
      ],
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: (R) => R.min(1),
    },
  ],
  preview: {
    select: { },
    prepare({ }) {
      return { title: 'Gallery' }
    },
  },
}
