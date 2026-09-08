# Adding a project page — the pattern

Copy this folder to `src/projects/<slug>/`. Then:

1. `meta.ts` — the wall's card. Import a cover image from `./assets/`.
2. `<Name>Page.tsx` — the page. It imports ONLY its own CSS, fonts and images.
   Never import from `../../wall`. The back pill is added by the router.
3. `<slug>.css` — every selector starts with `.<prefix>` (BoredGame uses `.bg`).
   Define the project's colours and fonts as CSS variables on the root class.
4. Register it in `src/projects/index.ts`: import the meta, add
   `Page: lazy(() => import("./<slug>/<Name>Page"))`, set `status: "live"`.

Fonts: `npm i @fontsource-variable/<font>` and `import "@fontsource-variable/<font>"`
at the top of the page file. Bundled, not Google-hosted — works on any host.

The test: open the page, then open BoredGame's. If anything looks shared
except the back pill, the page is not tailor-made yet.
