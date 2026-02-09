# Madison Pinball Website

A modern rebuild of [madisonpinball.com](https://www.madisonpinball.com/), replacing the original Wix site with a faster, more flexible stack: **Next.js** for the frontend, **Sanity** as the content management system (CMS), and **Netlify** for hosting.

---

## How the Site Works (Big Picture)

The site is split into two parts:

1. **The website itself** — what visitors see at madisonpinball.com. It is built with Next.js (a React framework) and styled with Tailwind CSS.
2. **The content editor (Sanity Studio)** — a private dashboard where you can update text, images, pages, locations, and events without touching any code. You access it at [madisonpinball.com/studio](https://www.madisonpinball.com/studio).

When you publish a change in Sanity Studio, the live site picks it up automatically within about 60 seconds — no redeploy needed.

---

## Tech Stack at a Glance

| Layer | Technology | Role |
|-------|-----------|------|
| Frontend | **Next.js 15** (React 19) | Renders pages, handles routing |
| Styling | **Tailwind CSS 4** | Utility-based CSS for layout and design |
| CMS | **Sanity** | Stores and serves all editable content |
| Hosting | **Netlify** | Builds and deploys the site, handles forms |
| DNS | **Network Solutions** | Domain name management (nameservers point to Netlify) |

---

## Managing Content with Sanity Studio

### Getting In

Navigate to **[madisonpinball.com/studio](https://www.madisonpinball.com/studio)** and log in with your Sanity account.

### What You Can Edit

The Studio sidebar organizes content into several types:

| Content Type | What It Controls |
|-------------|-----------------|
| **Site Settings** | Logo, navigation links, and footer content (shared across every page) |
| **Home Page** | Hero image/text, intro section, and any content blocks on the landing page |
| **Locations** | Each arcade location — name, address, description, hours, game lineup, photos |
| **Monthly Meetups** | Tournament schedule and meetup details |
| **Killer Queen Arcade** | The dedicated Killer Queen cabinet page |
| **Contact (Buy/Sell/Fix)** | Contact page text and form configuration |
| **Report a Problem** | Problem report page text and form configuration |
| **Pages** (generic) | Any additional pages built using the page builder (see below) |

### The Page Builder

Generic **Pages** use a modular section system. When creating or editing a page, you add sections from a menu — each section is a building block:

- **Hero** — Large banner with image and headline (supports different layouts: background image, image left/right, image centered)
- **Text** — Rich text body content
- **Two Column** — Side-by-side layout with text and an image
- **Gallery** — Grid of images
- **Cards** — Grid of linked cards with images and descriptions
- **Call to Action** — Highlighted bar with a button
- **FAQ** — Expandable question-and-answer list
- **HTML** — Raw HTML embed (for widgets, iframes, etc.)

You can reorder, add, or remove sections to compose pages without writing code.

### Publishing Changes

After editing, click **Publish** in the Studio. The live site refreshes with your updates within about a minute.

---

## Project Structure (for Developers)

```
madison-pinball/
├── src/
│   ├── app/                        # Pages and routes (Next.js App Router)
│   │   ├── page.js                 # Home page
│   │   ├── layout.js               # Root layout (nav + footer wrapper)
│   │   ├── globals.css             # Global styles and Tailwind imports
│   │   ├── locations/              # /locations and /locations/[slug]
│   │   ├── monthly-meetups/        # /monthly-meetups
│   │   ├── killer-queen-arcade/    # /killer-queen-arcade
│   │   ├── buy-sell-fix-contact/   # /buy-sell-fix-contact
│   │   ├── report-a-problem/       # /report-a-problem
│   │   ├── [...slug]/              # Catch-all for CMS-built pages
│   │   ├── studio/                 # Sanity Studio (embedded CMS editor)
│   │   └── components/             # Shared UI components (Nav, Footer, Hero, etc.)
│   ├── sanity/                     # CMS schema definitions
│   │   ├── schemaTypes/            # Content models (location, page, etc.)
│   │   │   └── sections/           # Page builder section schemas
│   │   └── structure.js            # Studio sidebar organization
│   └── lib/                        # Utilities
│       ├── client.js               # Sanity API client
│       ├── queries.js              # All CMS queries (GROQ)
│       └── image.js                # Image URL helpers
├── public/                         # Static assets (logos, fallback images, favicon)
├── sanity.config.js                # Sanity Studio configuration
├── next.config.mjs                 # Next.js configuration
├── tailwind.config.js              # Tailwind CSS configuration
└── package.json                    # Dependencies and scripts
```

### Key Concepts

- **App Router** — Next.js organizes pages by folder. Each folder under `src/app/` maps to a URL path (e.g., `src/app/locations/` serves `/locations`).
- **Server vs. Client Components** — Most pages render on the server for speed. Interactive pieces (navigation menu, forms) are marked as client components with `"use client"` at the top of the file.
- **GROQ Queries** — All CMS data fetching is centralized in [queries.js](src/lib/queries.js). GROQ is Sanity's query language (similar in purpose to SQL, but for JSON documents).
- **Fallback Data** — Every page includes hardcoded fallback content so the site still renders if the CMS is temporarily unreachable.
- **ISR (Incremental Static Regeneration)** — Pages are statically generated at build time and then refreshed in the background every 60 seconds when a visitor requests them.

---

## Running the Project Locally

**Prerequisites:** Node.js 22+ and npm.

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be available at `http://localhost:3000` and the CMS editor at `http://localhost:3000/studio`.

| Command | What It Does |
|---------|-------------|
| `npm run dev` | Start local dev server with hot reload |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Run the code linter (ESLint) |

### Environment Variables

The project requires a `.env.local` file with Sanity credentials:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=<project-id>
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=<api-token>
```

These are already configured in the repository for development. The same values are set in Netlify's environment settings for production.

---

## Deployment

- The site is hosted on **Netlify**.
- Any push to the **`main`** branch triggers an automatic build and deploy.
- DNS is managed through **Network Solutions**, with nameservers pointed to Netlify.
- **Forms** (contact, report a problem) are processed by Netlify Forms — submissions are viewable in the Netlify dashboard and can be routed to email.

---

## Style Guide

### Colors

Colors follow Tailwind's built-in palette, chosen to complement the Madison Pinball logo:

- **Primary:** `rose-800`
- **Neutral:** `white`, `black`, `gray-700`
- **CSS Variables:** `--mp-ink` (dark), `--mp-cream` (light)

### Typography

- **Sans-serif (body):** Montserrat
- **Accent/cursive:** Dancing Script

### Theme

The site defaults to a dark theme (`black` background, `white` text) with lighter sections used for content contrast.

---

## License

**MIT License** &copy; Madison Pinball
