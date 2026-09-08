# STATUS — portfolio

Last updated: 2026-09-08 (v1.1 — Hairceptional built from his real 40-page brand manual)

## Verified working
| Claim | Proof |
|---|---|
| Typechecks + builds clean | `npm run build` — tsc -b then vite, 0 errors, 652 ms |
| BoredGame page is code-split | build output: `BoredGamePage-*.js` 6.2 kB separate from `index-*.js` |
| Fonts are bundled, not Google-hosted | build output lists `fredoka-latin-wght-normal-*.woff2`, `nunito-*.woff2`; index.html has no fonts.googleapis link |
| Wall renders as masonry: 1 live tile, 7 tinted sketch tiles, captions | Playwright screenshot 1400×900 (4 cols) and 390×844 (2 cols) |
| BoredGame page renders in its own palette/fonts | Playwright full-page screenshots; Fredoka display confirmed (not fallback) |
| Sketch frames are not links | Frame.tsx returns `<figure>` not `<Link>` when status is sketch |
| Hivesquare page complete: 8 real images (portfolio PDF p9–17 at 200 dpi), naming story verbatim from the PDF | Playwright full-page 1400 and 390; tokens match Figma `get_variable_defs` on node 43:7554 |
| Only tiles with a page link; covers without a page hang but don't link | Tile.tsx `hasPage`; BoredGame + Hivesquare link, Patch does not |
| Hairceptional built from HIS OWN manual | `iCloud/Desktop/Hairceptional/Hairceptional brand manual.ai` (40pp, Illustrator, 2021, 136 MB). Colour names/hex/CMYK, the six chapters, the typeface name and every quoted line read out with pdftotext |
| Versuz logo and X mark are real vector, inlined | extracted from the live site's own SVG data-URIs via the browser pane (container + device shells have no egress); saved to `src/projects/versuz/assets/*.svg` and inlined in `marks.tsx` so they take currentColor and scale losslessly. Rendered side by side to verify |
| Versuz palette and type are the project's own | lime #BDFF05 read off the live site's computed styles; #FE4E40 #5E57F2 #6BF6FF #FFE381 #9CFF79 #00070D from the product's own CSS token export (`versuz code*.zip`); faces Pilat Extended + DM Sans named in those tokens |
| Danfo page built from the real project folder | palette sampled off the project's own colour board (`logo progress.pdf` p6): #FBB817 #FFDE00 #F9C700 #FFFFFF #19AFD8 #ED321E #0AAF8E #262626 #000000; type tiers read from the proposal deck |
| Patch page built from the real guideline | every hex, gradient stop, type role and chapter name read out of `Patch Brand identity Guideline-compressed.pdf` (37pp, 2022) with pdftotext; images are that PDF at 130 dpi |
| Patch type scale renders in real Sora at the guide's own nine sizes | `@fontsource-variable/sora` bundled; screenshot at 1400 shows Heading 1 at 700/96px |
| Hivesquare hero pattern is the real construction | `pdftocairo -svg` on the guide page; read the actual geometry (stripe 4.836pt thick, 7.258pt lean over a 12.55pt band, 9.5pt pitch, bands mirror AND shift half a pitch, stripe = white at 10%). Rendered side by side against the guide page: match |
| Wall matches Miyazaki 2.2 (Teko, overlapping title, red current-item, titles under tiles) | compared against ~/Downloads/miyazaki/screenshot.jpg + style.css |
| Preview single-file build works with hash routes | `dist-preview/index.html` 1.04 MB, published as artifact |

## Not verified / not done
- Not deployed to any host. No git remote. Domain not pointed anywhere.
- BoredGame screenshots were taken from a local no-backend build with the
  offline banner hidden — they match the shipped app's look but not its
  live data (0 streak, "stranger").
- 7 projects are hung with ONE cover each and no page:
  Les Gladiateurs, Two Winners, EFL, Northodox, Kolors, Scattered Thoughts,
  Posters & Social.
  Source: Daramola_Olumide_Portfolio.pdf, all 82 pages rendered to
  ~/Downloads/portfolio-pages/hi/p-NN.webp (page map: Patch 19–29,
  Hairceptional 30–42, Gladiateurs 43–53, Two Winners 54–61, EFL 62–67,
  Northodox 68–72, Kolors 74–77, Scattered Thoughts 78–81).
- UNVERIFIED years on those 8 (guessed 2021–2023) and blurbs for Two Winners,
  EFL, Northodox, Kolors, Posters & Social — written from the images.
- Scattered Thoughts is Daramola's PODCAST and has its own identity; its
  cover is now the logo (PDF p78). The Instagram grid (p81) was wrongly
  filed under it and is now its own project, "Posters & Social" — brand
  social media work, not one client.
- 1 project still has no assets and is a sketch: Creation of Eyo
  (material is in iCloud/Desktop/nft/Benin and Eyo). Not in the PDF. ("Vessels" was a mishearing of Versuz
  and has been removed.)
- Every project has its own identity, so every project page gets its own
  palette and type. Six are built (BoredGame, Hivesquare, Patch, Danfo, Versuz, Hairceptional); seven to go.
- Infogramme "before" logo (Drive id 1NVJCfDItNbBWknwDL24tQa65M1O7F2C0)
  not on the Hivesquare page; the PDF never mentions Infogramme.
- Asset hunt complete (whole disk + iCloud). See ASSET-INVENTORY.md in the
  Life OS project for where every project's source files are. Headlines:
  Patch has 475 files incl. its brand guideline PDF and .ai; Scattered
  Thoughts has 3 identity .ai files; the portfolio master .ai and 10 artboard
  SVGs are in iCloud/Mac Archive 2026-08/DARAMOLA PORTFOLIO 2025.
- Danfo FOUND: iCloud/Documents/danfo (441 files). Page built.
- /Users/newdara (second macOS account) is permission-denied from this
  session and has its own Desktop/Documents/Downloads. Possible source of
  more work; needs copying across while logged into that account.
- No `<meta og:image>`; no favicon of his own (Vite's default removed).
- CSS-columns masonry balances by count, not height: with 8 items the first
  column is short. Fine once there are 12+ tiles; revisit otherwise.

## Danfo — corrections made 2026-09-08 (from Daramola)
- The CHOSEN mark is the mirror door from the "logo mark dynamism" board.
  The D/d monogram artboards are EXPLORATIONS and are now labelled as such
  in their own "What it isn't" section.
- The chunky italic alphabet in the deck is NOT the typeface he drew. That
  claim has been removed from the page. His own face exists as SVG in
  `danfo/SCRAP/` (Danfo Basic.svg, Danfotransit.svg) — unseen so far.

## Danfo — known gaps
- `Danfo Basic.ttf` / `Danfotransit.ttf` (his own typeface, in `danfo/SCRAP/`)
  could NOT be staged: 8 folders below the connected root, and the bridge
  supports 7. To use the real face as a webfont, move those .ttf files up to
  `danfo/` (or anywhere shallower) and they can be staged and converted.
  Same for `danfo/Illustrations/`.
- The page is set in Jost as a stand-in: the guide specifies Avenir, which
  can't be licensed for the web. The page says so rather than hiding it.

## Versuz — known gaps
- The page substitutes Archivo (width 125%) for Pilat Extended, which isn't
  web-licensable. DM Sans is the real face.
- App screens are JPGs from the 2025 portfolio folder. The Figma source
  (team "Versuz Company") was not reachable — no file key.
- Not on the page yet, and worth adding: the gamification badges
  (Novice → Legend), the app icon variants, and the campaign/social work the
  case study mentions. Sources not yet located.

## DO NOT USE — not his work
- `~/Downloads/hairceptional co/` is SOMEONE ELSE'S logo-options document for
  Hairceptional (CorelDRAW, Nov 2025). A page was built from it in error on
  2026-09-08 and removed the same session. Nothing from that folder may appear
  in the portfolio.
- His real Hairceptional source is `iCloud/Desktop/Hairceptional` (357 files,
  incl. the brand manual .ai, signage, bag and QR artwork) plus
  `iCloud/Documents/hairceptional Pitch deck .pdf`.

## Scattered Thoughts — verified 2026-09-08
Page rebuilt from the real vectors. Proof commands:
- `pdftocairo -svg -f 4 -l 4 "iCloud/scattered thoughts/IDENTITY DIRECTION.ai"` —
  the chosen lockup. Wordmark, bubble and full lockup were lifted path-by-path
  out of that SVG into `src/projects/scattered-thoughts/marks.tsx`. No font
  substitution, no redraw.
- `pdftoppm -r 96 -png "iCloud/Desktop/january podcast/covers and reels.ai"` —
  8pp of applied artwork. cover/reel/banner .webp come from pages 1, 7, 5.
- `pdftoppm -r 40 -png ".../Scattered Heads.ai"` and `Scattered Heads (1).ai` —
  the two guest portraits in heads.webp.
- `npm run build` → `ScatteredThoughtsPage-*.js 36.03 kB` (vectors are inline).

Corrected in this pass:
- The old Wordmark was `january podcast/Asset 1.svg`, which is NOT the
  wordmark — it is a "New episode out!" social graphic. Replaced.
- "World Cup at Qatar / Trophy at the Desert / Trophy in the Sand /
  Tournament at the Gold State" are FOUR NAMES FOR ONE EPISODE, not four
  episodes. The page said four episodes; fixed.

Still unverified / not reachable:
- `january podcast/{IT'S BEEN A WHILE, Trophy in the Gold state, SCATTERED
  ANIMATE}` are 8 folders below the connected root — too deep to stage, and
  cloud-only so device_bash can't read them either. Their .ai files and
  full-res artboards are not in the repo.
- "Tournament in the Americas" FOUND — not in `january podcast`, it is at
  `iCloud/Mac Archive 2026-08/Tournament in the americas/`. 2026 episodes with
  Adeola and Samuel. `covertemplate.ai` there (49 MB, 8pp) is the source of
  copa/wc26/quarters .webp. Proof: `pdftoppm -r 96 -png covertemplate.ai`,
  pages 1, 3, 6.
- Its `1x/` and `300ppi/` export folders are 8 deep — not stageable.
- `scattered thoughts/covertemplate.ai` (12 MB, a different file) not yet opened.
- `iCloud/Mac Archive 2026-08/DARAMOLA PORTFOLIO 2025/` exists and has not been
  looked at. Likely relevant.
