// The wall's card for Northodox. Cover is a page from the 2025 portfolio PDF.
// status "live" with no Page: the tile shows the cover and does not link
// until a page exists. Build one from _template when ready.

import type { ProjectMeta } from "../types";
import cover from "./assets/cover.webp";

export const northodoxMeta: ProjectMeta = {
  slug: "northodox",
  title: "Northodox",
  kind: "brand identity",
  year: 2022,
  blurb: "Identity and campaign photography for a streetwear label.",
  cover,
  size: "wide",
  status: "live",
  accent: "#7CD400",
};
