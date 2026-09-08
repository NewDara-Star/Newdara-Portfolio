// ---------------------------------------------------------------------------
// THE REGISTRY. Adding a project to the portfolio = adding one entry here.
//
// Order matters: it is the order tiles are hung on the wall, read down the
// columns. Put the strongest work first.
//
// Three states a project can be in:
//   · meta + Page        — hung, links to its own tailor-made page
//   · meta with a cover  — hung, image only, no link yet (page to come)
//   · status: "sketch"   — a tinted blank; no assets yet
//
// `lazy(() => import(...))` is the one piece of magic worth understanding:
// Vite splits each page into its own file, and the browser only downloads a
// page when someone clicks its tile. Every project can bring its own fonts
// and images without slowing the wall down for everyone else.
// ---------------------------------------------------------------------------

import { lazy } from "react";
import type { Project } from "./types";

import { boredgameMeta } from "./boredgame/meta";
import { hivesquareMeta } from "./hivesquare/meta";
import { patchMeta } from "./patch/meta";
import { hairceptionalMeta } from "./hairceptional/meta";
import { gladiateursMeta } from "./gladiateurs/meta";
import { twowinnersMeta } from "./two-winners/meta";
import { eflMeta } from "./efl/meta";
import { northodoxMeta } from "./northodox/meta";
import { kolorsMeta } from "./kolors/meta";
import { scatteredthoughtsMeta } from "./scattered-thoughts/meta";
import { socialMeta } from "./social/meta";
import { danfoMeta } from "./danfo/meta";
import { versuzMeta } from "./versuz/meta";

export const projects: Project[] = [
  {
    meta: boredgameMeta,
    Page: lazy(() => import("./boredgame/BoredGamePage")),
  },
  {
    meta: hivesquareMeta,
    Page: lazy(() => import("./hivesquare/HivesquarePage")),
  },
  {
    meta: patchMeta,
    Page: lazy(() => import("./patch/PatchPage")),
  },
  {
    meta: versuzMeta,
    Page: lazy(() => import("./versuz/VersuzPage")),
  },
  {
    meta: danfoMeta,
    Page: lazy(() => import("./danfo/DanfoPage")),
  },
  {
    meta: hairceptionalMeta,
    Page: lazy(() => import("./hairceptional/HairceptionalPage")),
  },
  { meta: gladiateursMeta },
  { meta: twowinnersMeta },
  { meta: eflMeta },
  { meta: northodoxMeta },
  { meta: kolorsMeta },
  { meta: scatteredthoughtsMeta },
  { meta: socialMeta },

  // -- Sketches: no assets yet. On the wall as intent. ---------------------
  {
    meta: {
      slug: "eyo",
      title: "Creation of Eyo",
      kind: "artwork",
      year: 2025,
      blurb: "The Creation of Adam, retold with Eyo masquerades. Printed, framed, on my wall.",
      size: "wide",
      status: "sketch",
      accent: "#B8862B",
    },
  },
];

export const bySlug = (slug: string) =>
  projects.find((p) => p.meta.slug === slug);
