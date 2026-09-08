// The wall's card for Kolors. Cover is a page from the 2025 portfolio PDF.
// status "live" with no Page: the tile shows the cover and does not link
// until a page exists. Build one from _template when ready.

import type { ProjectMeta } from "../types";
import cover from "./assets/cover.webp";

export const kolorsMeta: ProjectMeta = {
  slug: "kolors",
  title: "Kolors",
  kind: "brand identity",
  year: 2022,
  blurb: "Wordmark, illustration and show posters.",
  cover,
  size: "wide",
  status: "live",
  accent: "#E8321C",
};
