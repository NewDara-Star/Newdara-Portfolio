// The wall's card for Les Gladiateurs. Cover is a page from the 2025 portfolio PDF.
// status "live" with no Page: the tile shows the cover and does not link
// until a page exists. Build one from _template when ready.

import type { ProjectMeta } from "../types";
import cover from "./assets/cover.webp";

export const gladiateursMeta: ProjectMeta = {
  slug: "gladiateurs",
  title: "Les Gladiateurs",
  kind: "brand identity",
  year: 2021,
  blurb: "Visual identity for UNILAG's NUESA Dean's Cup — six departments, one tournament.",
  cover,
  size: "wide",
  status: "live",
  accent: "#C8102E",
};
