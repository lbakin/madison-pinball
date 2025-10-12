export default {
  name: "reportProblem",
  title: "Report a Problem (Page)",
  type: "document",
  options: { singleton: true },
  fields: [
    { name: "title", type: "string", title: "Title", initialValue: "Report a Problem" },

    // replace the existing "intro" field with this:
{
  name: "intro",
  title: "Intro Content",
  type: "array",
  of: [
    {
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Numbered", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
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
  description: "Use headings, paragraphs, and lists for your intro and instructions.",
},


    // Form basics
    { name: "formName", type: "string", title: "Form Name", initialValue: "report-a-problem" },
    { name: "successTitle", type: "string", title: "Success Title", initialValue: "Thanks" },
    {
      name: "successBody",
      type: "text",
      title: "Success Body",
      rows: 3,
      initialValue: "Your report has been submitted. We will take a look.",
    },

    // Optional: drive Location dropdown from Sanity Locations
    {
      name: "useLocationsCollection",
      type: "boolean",
      title: "Use Locations from Sanity",
      initialValue: true,
    },
    {
      name: "extraLocations",
      type: "array",
      title: "Extra Locations (manual)",
      of: [{ type: "string" }],
      hidden: ({ parent }) => parent?.useLocationsCollection,
    },
  ],
};
