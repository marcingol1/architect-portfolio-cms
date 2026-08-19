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

The form on `/kontakt/` posts to `api/kontakt.js`, a Vercel Serverless Function
that validates the submission and emails it on with
[Resend](https://resend.com/). Both sides stay on free plans: Hobby includes
serverless functions, and Resend's free tier covers 3 000 emails/month
(100/day). The function has **no npm dependencies** — it calls Resend's REST API
with the `fetch` built into Node.

**Setup — no domain required**

Sign up at [resend.com](https://resend.com/) with the address that should receive
enquiries, then set two environment variables in
*Vercel → Settings → Environment Variables*:

| Variable | Example | Required |
| --- | --- | --- |
| `RESEND_API_KEY` | `re_...` | yes |
| `CONTACT_TO` | your inbox, e.g. `you@gmail.com` | yes |
| `CONTACT_FROM` | `Formularz <formularz@architektgol.pl>` | no — see below |

Without `CONTACT_FROM` the function sends from Resend's shared
`onboarding@resend.dev` sender, which needs no domain and no DNS records. While
the account has no verified domain, Resend only delivers to the address the
account was registered with, so keep `CONTACT_TO` equal to that address.

> **`CONTACT_FROM` cannot be a Gmail/Outlook/other free-mail address.** You may
> only send *from* a domain verified in Resend, and nobody can verify
> `gmail.com`. Setting it to a personal address fails every send with
> `403 The gmail.com domain is not verified`. Leave the variable unset until you
> own a domain. Receiving at a Gmail address (`CONTACT_TO`) is fine.

Once you own a domain and verify it in Resend, set `CONTACT_FROM` to an address
on it — that lifts the recipient restriction and makes messages arrive from your
own address instead of `resend.dev`. No code change needed.

`reply_to` always carries the visitor's address, so replying from your inbox
answers the client directly regardless of which sender is used.

Until the variables are set the function returns an error and the visitor is told
to email directly — it fails visibly rather than silently swallowing messages.

**How it behaves**

- **With JavaScript:** submits in the background and shows an inline status
  under the button; the page does not navigate and the fields are cleared.
- **Without JavaScript:** the form posts normally and the function redirects to
  `/kontakt/dziekujemy/` or `/kontakt/blad/`, both static pages. The form works
  with JS disabled.
- **Spam:** a hidden honeypot field (`bot-field`); when a bot fills it the
  submission is silently accepted but never delivered. Field lengths are capped
  server-side (name 120, email 200, message 5 000 characters).
- `reply_to` is set to the sender, so replying from the inbox answers the client
  directly.

To swap Resend for another provider, replace `sendEmail()` in `api/kontakt.js` —
it is the only provider-specific part of the file.
