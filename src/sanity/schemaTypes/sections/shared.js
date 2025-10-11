
// Optional app-specific modules
export const sectionMeetups = {
  name: 'sectionMeetups',
  title: 'Meetups Module',
  type: 'object',
  fields: [{ name: 'heading', type: 'string' }, { name: 'notes', type: 'text' }],
}

export const sectionLocations = {
  name: 'sectionLocations',
  title: 'Locations Grid',
  type: 'object',
  fields: [{ name: 'heading', type: 'string' }],
}

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