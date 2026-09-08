# Portfolio — Daramola Olumide

A gallery wall in the spirit of the Miyazaki WordPress theme: white ground,
thin bar, masonry of images, captions on hover. Each tile opens a page built
100% in that project's own visual language.

## Structure
- `src/wall/` — the landing page. Neutral. Never takes a project's colour.
- `src/projects/index.ts` — THE REGISTRY. One entry per project, in hanging order.
- `src/projects/<slug>/` — meta.ts (wall card), <Name>Page.tsx, <slug>.css, assets/.
- `src/projects/_template/` — copy this to start a new page. README inside.

## Rules
1. A project page imports only its own CSS, fonts, images. Never `../../wall`.
2. Every project CSS selector carries the project's prefix (`.bg-…`). No globals.
3. Fonts are bundled via `@fontsource-variable/*`, never linked from Google —
   the site must work on plain Apache hosting as well as Vercel.
4. Content on a page is factual. A claim about a project must be true of the
   shipped thing; delete anything that isn't.
5. Registry `status: "sketch"` = on the wall as a tinted blank tile, no link.
   Promote to `"live"` only with a cover and a page.

## Build
- `npm run dev` — local.
- `npm run build` — production to `dist/` (BrowserRouter; needs SPA rewrite:
  vercel.json for Vercel, public/.htaccess for Namecheap/Apache).
- `npx vite build -c vite.preview.config.ts` — one-file preview in
  `dist-preview/index.html` (HashRouter). For sharing, not hosting.

## Learning notes (Daramola is using this repo to learn JS/TS)
Every file has a header comment explaining WHY, not what. The pattern to
internalise: registry (data) → wall (reads data) → page (lazy, self-contained).
Three pages exist as worked examples: BoredGame (toy/playful), Hivesquare
(brand guide/editorial), Patch (product/system). Next page to build by hand:
pick one from the wall and follow _template/README.md.
