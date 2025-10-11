export default {
  name: 'sectionGallery',
  title: 'Gallery',
  type: 'object',
  fields: [
    { name: 'columns', type: 'number', initialValue: 3 },
    { name: 'images', type: 'array', of: [{ type: 'image', options: { hotspot: true } }] },
  ],
}