// sanity/schemas/killerQueen.js
export default {
  name: "killerQueen",
  title: "Killer Queen (Page)",
  type: "document",
  options: { singleton: true },
  fields: [
    { name: "title", type: "string", title: "Page Title", initialValue: "Killer Queen Arcade" },
    { name: "description", type: "text", title: "Meta Description" },

    { name: "heroImage", type: "image", title: "Hero Image", options: { hotspot: true } },
    { name: "heroTagline", type: "string", title: "Hero Tagline" },

    {
      name: "intro",
      type: "text",
      title: "Intro Copy",
      rows: 5,
      description: "Main paragraph describing KQ + I/O Arcade Bar."
    },

    {
      name: "weeklyMeetup",
      title: "Weekly Meetup Block",
      type: "object",
      fields: [
        { name: "title", type: "string", title: "Heading", initialValue: "Weekly Meetups" },
        { name: "time", type: "string", title: "Time (e.g., 'Wednesdays · 7:00 PM')" },
        { name: "blurb", type: "text", title: "Details", rows: 3 }
      ]
    },

    {
      name: "stayInLoop",
      title: "Stay in the Loop",
      type: "object",
      fields: [
        { name: "title", type: "string", title: "Heading", initialValue: "Stay in the Loop" },
        { name: "blurb", type: "text", title: "Blurb", rows: 3 },
        { name: "ctaLabel", type: "string", title: "CTA Label", initialValue: "Join the Facebook Group" },
        { name: "ctaUrl", type: "url", title: "CTA URL" }
      ]
    },

    {
      name: "gallery",
      title: "Gallery (3 images)",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      validation: (Rule) => Rule.max(3)
    },

    {
      name: "location",
      title: "Location Block",
      type: "object",
      fields: [
        { name: "heading", type: "string", title: "Heading", initialValue: "Where to Play" },
        { name: "line1", type: "string", title: "Line 1", initialValue: "I/O Arcade Bar — 924 Williamson St, Madison, WI" },
        { name: "note", type: "string", title: "Small Note", initialValue: "Hours and availability can vary. Check the Facebook group for the latest pickup games and event plans." }
      ]
    }
  ]
};
