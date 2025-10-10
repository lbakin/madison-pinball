export default {
  name: 'lineupItem',
  title: 'Lineup Item',
  type: 'object',
  fields: [
    { name: 'game', title: 'Game', type: 'string' },
    { name: 'year', title: 'Year', type: 'string' },
    { name: 'manufacturer', title: 'Manufacturer', type: 'string' },
    { name: 'link', title: 'External Link', type: 'url' },
  ],
}
