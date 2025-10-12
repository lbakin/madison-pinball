// /sanity/schemas/monthlyMeetups.js
export default {
  name: "monthlyMeetups",
  title: "Monthly Meetups (Page)",
  type: "document",
  options: { singleton: true },
  fields: [
    { name: "title", type: "string", title: "Title", initialValue: "Monthly Meetups" },

    {
      name: "intro",
      type: "text",
      title: "Intro Copy",
      rows: 5,
      description: "Short intro paragraph above the venue cards."
    },

    {
      name: "venues",
      title: "Venues",
      type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "name", type: "string", title: "Venue Name" },
          { name: "subtitle", type: "string", title: "Subtitle / Variant (optional)" },
          { name: "cadence", type: "string", title: "Cadence (e.g., 'Third Saturday')" },
          { name: "startTime", type: "string", title: "Start Time (e.g., '6:00 pm')" },
          { name: "note", type: "string", title: "Small note (optional)" },
        ],
        preview: {
          select: { name: "name", cadence: "cadence", startTime: "startTime" },
          prepare({ name, cadence, startTime }) {
            return { title: name, subtitle: `${cadence || ""} · ${startTime || ""}`.trim() }
          }
        }
      }]
    },

    {
      name: "rules",
      type: "text",
      title: "Rules and Officiating",
      rows: 6
    },

    {
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }]
    },

    {
      name: "scheduleYear",
      type: "number",
      title: "Schedule Year",
      initialValue: new Date().getFullYear()
    },

    // Simple, editor-friendly table data: one row per month.
    // Each cell is free text so editors can add “ - Launch Night” style notes inline.
    {
      name: "schedule",
      title: "Schedule (Table Rows)",
      type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "month", type: "string", title: "Month (e.g., 'January')" },
          { name: "schwoeglers", type: "string", title: "Schwoegler's (e.g., 'January 18' or '—')" },
          { name: "ioMain", type: "string", title: "I/O Arcade — Main" },
          { name: "ioHeadsUp", type: "string", title: "I/O Arcade — Heads-Up!" },
          { name: "pooleys", type: "string", title: "Pooley's" }
        ],
        preview: { select: { title: "month" } }
      }]
    }
  ]
};
