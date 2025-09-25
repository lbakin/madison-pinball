Madison Pinball Website

Rebuild of madisonpinball.com
 using Next.js, Sanity CMS, and Netlify. The goal is to replicate the existing Wix site while improving maintainability, performance, and flexibility.

Tech Stack

Next.js
 – React framework for the frontend

Tailwind CSS
 – Utility-first styling

Sanity
 – Headless CMS for content management

Netlify
 – Hosting, CI/CD, and DNS management


Project Structure

src/
  app/              # Next.js app router
    page.js         # Home page
    locations/      # Locations section + subpages
      io-arcade-bar/
      schwoeglers/
      pooleys/
      sugar-river-lanes/
    monthly-meetups/
    killer-queen-arcade/
    report-a-problem/
    buy-sell-fix-contact/
  components/       # Reusable React components (Nav, Footer, Hero, etc.)
  sanity/           # Sanity schemas and config
public/             # Static assets


Style Guide

Colors follow Tailwind’s built-in palette, chosen to complement the Madison Pinball logo.

Primary: rose-800

Accent: white, black, gray-700

Interactive: hover:text-rose-800, hover:bg-white

Typography:

Sans-serif: Montserrat

Cursive/accent: Dancing Script


Deployment

This project is deployed on Netlify. Any push to the main branch triggers a redeploy.

DNS is managed through Network Solutions, with nameservers pointed to Netlify.


License

MIT License © Madison Pinball