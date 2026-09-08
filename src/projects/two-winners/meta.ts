// The wall's card for Two Winners. Cover is a page from the 2025 portfolio PDF.
// status "live" with no Page: the tile shows the cover and does not link
// until a page exists. Build one from _template when ready.

import type { ProjectMeta } from "../types";
import cover from "./assets/cover.webp";

export const twowinnersMeta: ProjectMeta = {
  slug: "two-winners",
  title: "Two Winners",
  kind: "brand identity",
  year: 2022,
  blurb: "Mark and kit for a gaming-and-football brand.",
  cover,
  size: "wide",
  status: "live",
  accent: "#F2711C",
};
