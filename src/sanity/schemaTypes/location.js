export default {
  name: 'location',
  title: 'Location',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string', validation: Rule => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name', maxLength: 96 }, validation: Rule => Rule.required() },
    { name: 'venueUrl', title: 'Venue Website', type: 'url' },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
      description: 'Shown at the top of the page. PNG with transparent background works well.'
    },
    {
      name: 'address',
      title: 'Address',
      type: 'object',
      fields: [
        { name: 'line1', title: 'Line 1', type: 'string' },
        { name: 'line2', title: 'Line 2', type: 'string' },
        { name: 'mapsUrl', title: 'Google Maps URL', type: 'url' },
      ]
    },
    {
      name: 'hours',
      title: 'Hours',
      type: 'array',
      of: [{ type: 'hoursItem' }],
    },
    {
      name: 'images',
      title: 'Photo Gallery',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }]
    },
    {
      name: 'lineup',
      title: 'Current Lineup',
      type: 'array',
      of: [{ type: 'lineupItem' }],
    },
  ]
}
