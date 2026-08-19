# Anna Gol — Architecture Studio

Portfolio site for an architecture studio, built as a fully static page with
**no CMS and no client-side framework**. All content lives in the repository,
project artwork is drawn in code (SVG), and pages ship no JS bundle — just
HTML, a single CSS file and ~2 KB of plain JavaScript (menu, filters, reveal
animations).

Live: https://architektgol.pl/

> **Language note:** the site copy is in Polish, since it serves a Polish
> audience. Code comments and this documentation are in English.

## Stack

- [Astro 5](https://astro.build/) — static build, zero JS by default
- SCSS (compiled by Vite/Astro)
- Self-hosted fonts: Space Grotesk + Inter (`@fontsource/*`)
- No CMS, no React in the browser, no tracking
- pnpm as the package manager

## Editing content

| What | Where |
| --- | --- |
| Projects (titles, descriptions, facts, categories) | `src/data/projects.js` |
| Project artwork (SVG variants) | `src/lib/project-art.js` |
| Home / studio / contact page copy | `src/pages/*.astro` |
| Navigation, footer, contact details, SEO | `src/layouts/Base.astro` |
| Colors, typography, layout | `src/styles/main.scss` |

A new project = a new entry in `src/data/projects.js` (the `variant` field picks
one of the artworks: `villa`, `housing`, `museum`, `pavilion`, `tower`, `barn`;
`accent` is its accent color). The `/realizacje/<slug>/` page is generated
automatically by `src/pages/realizacje/[slug].astro`.

## Development

```bash
pnpm install
pnpm dev       # http://localhost:4321
pnpm build     # production build into dist/
pnpm preview   # preview the build
```

Node 22 is required (pinned via `engines.node` and `.nvmrc`).

## Deployment

The site deploys on **Vercel** — that is the deployment flow for this project.

- **Production** builds from the `prod` branch; every other branch and PR gets a
  Vercel preview deployment automatically.
- `vercel.json` holds the config, and it deliberately overrides the Vercel
  dashboard: `framework: astro`, `buildCommand: pnpm build`,
  `outputDirectory: dist`. Keeping it in the repo means the build settings are
  versioned rather than clicked in a UI.
- It also defines the 301 redirects from the previous Gatsby/DatoCMS URLs
  (`/works`, `/works/*` → `/realizacje/`, `/contact` → `/kontakt/`).
- Node 22 is pinned via `engines.node`, which takes precedence over the
  project's Node setting in the dashboard.

To promote a change to production, merge into `prod`.

The sitemap is generated at build time by `@astrojs/sitemap`.

### Contact form

The form in `src/pages/kontakt.astro` is still marked up for
[Netlify Forms](https://docs.netlify.com/forms/setup/) (`data-netlify="true"`),
which does nothing on Vercel — **submissions are not delivered yet**. It needs a
handler: a Vercel serverless function under `api/`, or a third-party endpoint
such as Formspree.
