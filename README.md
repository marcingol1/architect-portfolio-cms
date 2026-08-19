# Anna Gol — Pracownia Architektury

Portfolio pracowni architektonicznej zbudowane jako w pełni statyczna strona
**bez CMS i bez frameworka po stronie przeglądarki**. Cała treść mieszka
w repozytorium, grafiki projektów są rysowane w kodzie (SVG), a strony nie
ładują żadnego bundle'a JS — tylko HTML, jeden plik CSS i ~2 KB czystego
JavaScriptu (menu, filtry, animacje reveal).

Live: https://architektgol.pl/

## Stack

- [Astro 5](https://astro.build/) — statyczny build, zero JS domyślnie
- SCSS (kompilowany przez Vite/Astro)
- Fonty self-hosted: Space Grotesk + Inter (`@fontsource/*`)
- Zero CMS, zero Reacta w przeglądarce, zero trackingu
- pnpm jako menedżer pakietów

## Edycja treści

| Co | Gdzie |
| --- | --- |
| Projekty (tytuły, opisy, dane, kategorie) | `src/data/projects.js` |
| Grafiki projektów (warianty SVG) | `src/lib/project-art.js` |
| Teksty strony głównej / pracowni / kontaktu | `src/pages/*.astro` |
| Nawigacja, stopka, dane kontaktowe, SEO | `src/layouts/Base.astro` |
| Kolory, typografia, layout | `src/styles/main.scss` |

Nowy projekt = nowy wpis w `src/data/projects.js` (pole `variant` wybiera jedną
z grafik: `villa`, `housing`, `museum`, `pavilion`, `tower`, `barn`; `accent` to
kolor akcentu). Podstrona `/realizacje/<slug>/` generuje się automatycznie
(`src/pages/realizacje/[slug].astro`).

## Development

```bash
pnpm install
pnpm dev       # http://localhost:4321
pnpm build     # produkcyjny build do dist/
pnpm preview   # podgląd builda
```

## Deploy (Netlify)

Konfiguracja w `netlify.toml`: build `pnpm build`, katalog `dist/`, plus
przekierowania 301 ze starych adresów (`/works`, `/contact`). Formularz
kontaktowy używa [Netlify Forms](https://docs.netlify.com/forms/setup/)
(`data-netlify="true"`) — działa bez backendu. Sitemap generuje
`@astrojs/sitemap`.
