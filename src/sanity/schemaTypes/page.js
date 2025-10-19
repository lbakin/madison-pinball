// /sanity/schemas/page.js
export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', validation: (R) => R.required() },
    {
      name: 'slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (R) => R.required(),
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        { name: 'description', type: 'text' },
      ],
    },
    // {
    //   name: 'style',
    //   title: 'Page Style',
    //   type: 'object',
    //   fields: [
    //     {
    //       name: 'theme',
    //       title: 'Theme',
    //       type: 'string',
    //       options: {
    //         list: [
    //           { title: 'Dark (default)', value: 'dark' },
    //           { title: 'Light', value: 'light' },
    //           { title: 'Custom', value: 'custom' },
    //         ],
    //         layout: 'radio',
    //         direction: 'horizontal',
    //       },
    //       initialValue: 'dark',
    //     },
    //     {
    //       name: 'bg',
    //       title: 'Custom Background',
    //       type: 'string',
    //       hidden: ({ parent }) => parent?.theme !== 'custom',
    //       options: {
    //         list: [
    //           { title: 'bg-black', value: 'bg-black' },
    //           { title: 'bg-zinc-950', value: 'bg-zinc-950' },
    //           { title: 'bg-zinc-900', value: 'bg-zinc-900' },
    //           { title: 'bg-white', value: 'bg-white' },
    //           { title: 'bg-zinc-50', value: 'bg-zinc-50' },
    //         ],
    //       },
    //     },
    //     {
    //       name: 'text',
    //       title: 'Custom Text Color',
    //       type: 'string',
    //       hidden: ({ parent }) => parent?.theme !== 'custom',
    //       options: {
    //         list: [
    //           { title: 'text-white', value: 'text-white' },
    //           { title: 'text-zinc-100', value: 'text-zinc-100' },
    //           { title: 'text-zinc-200', value: 'text-zinc-200' },
    //           { title: 'text-black', value: 'text-black' },
    //           { title: 'text-zinc-900', value: 'text-zinc-900' },
    //         ],
    //       },
    //     },
    //     {
    //       name: 'invertProse',
    //       title: 'Invert body text (for PortableText)',
    //       description: 'Use "prose-invert" when body is on a dark background.',
    //       type: 'boolean',
    //       initialValue: true,
    //     },
    //   ],
    // },
    {
      name: 'sections',
      type: 'array',
      of: [
        { type: 'sectionHero' },
        { type: 'sectionText' },
        { type: 'sectionTwoCol' },
        { type: 'sectionGallery' },
        { type: 'sectionCards' },
        { type: 'sectionCTA' },
        { type: 'sectionFAQ' },
        { type: 'sectionHTML' },
      ],
    },
  ],
  preview: {
    select: { title: 'title' },
    prepare({ title }) {
      return { title, subtitle: 'Page Builder' }
    },
  },
}
