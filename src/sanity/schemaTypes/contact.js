export default {
  name: "contactPage",
  title: "Contact (Page)",
  type: "document",
  options: { singleton: true },
  fields: [
    { name: "title", type: "string", title: "Title", initialValue: "We Buy / Sell / Fix and Play Pinball" },

    // Rich text intro
    {
      name: "intro",
      title: "Intro Content",
      type: "array",
      of: [{ type: "block" }],
      description: "Main copy above the form (paragraphs, lists, headings)."
    },

    // Two images for the left column
    {
      name: "gallery",
      title: "Left Images (2)",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      validation: Rule => Rule.max(2)
    },

    // Alt section at bottom
    { name: "altContactLabel", type: "string", title: "Alt Contact Label", initialValue: "Prefer email?" },
    { name: "altContactEmail", type: "string", title: "Alt Contact Email", initialValue: "pinballmadison@gmail.com" },

    // Netlify form config + success copy
    { name: "formName", type: "string", title: "Form Name", initialValue: "contact" },
    { name: "successTitle", type: "string", title: "Success Title", initialValue: "Thanks" },
    {
      name: "successBody",
      type: "text",
      title: "Success Body",
      rows: 3,
      initialValue: "Your message has been submitted. We’ll get back to you soon."
    },
  ]
};
