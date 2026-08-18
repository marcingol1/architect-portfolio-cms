# Anna Gol — Pracownia Architektury

Portfolio pracowni architektonicznej zbudowane jako w pełni statyczna strona **bez CMS**.
Cała treść mieszka w repozytorium, a grafiki projektów są rysowane w kodzie (SVG) —
strona nie ma żadnych zewnętrznych zależności w czasie działania.

Live: https://architektgol.pl/

## Stack

- [Gatsby 5](https://www.gatsbyjs.com/) (React 18, statyczny build)
- SCSS (`gatsby-plugin-sass`)
- Fonty self-hosted: Space Grotesk + Inter (`@fontsource/*`)
- Zero CMS, zero zewnętrznych obrazków, zero trackingu

## Edycja treści

| Co | Gdzie |
| --- | --- |
| Projekty (tytuły, opisy, dane, kategorie) | `src/data/projects.js` |
| Grafiki projektów (warianty SVG) | `src/components/project-art.js` |
| Teksty strony głównej / pracowni / kontaktu | `src/pages/*.js` |
| Dane kontaktowe i stopka | `src/components/layout.js` |
| Kolory, typografia, layout | `src/styles/main.scss` |

Nowy projekt = nowy wpis w `src/data/projects.js` (pole `variant` wybiera jedną
z grafik: `villa`, `housing`, `museum`, `pavilion`, `tower`, `barn`; `accent` to
kolor akcentu). Podstrona `/realizacje/<slug>/` generuje się automatycznie
w `gatsby-node.js`.

## Development

```bash
pnpm install
pnpm develop   # http://localhost:8000
pnpm build     # produkcyjny build do public/
pnpm serve     # podgląd builda
```

Formularz kontaktowy jest przygotowany pod [Netlify Forms](https://docs.netlify.com/forms/setup/)
(`data-netlify="true"`) — działa od razu po wdrożeniu na Netlify, bez backendu.
