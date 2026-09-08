// The wall's card for EFL. Cover is a page from the 2025 portfolio PDF.
// status "live" with no Page: the tile shows the cover and does not link
// until a page exists. Build one from _template when ready.

import type { ProjectMeta } from "../types";
import cover from "./assets/cover.webp";

export const eflMeta: ProjectMeta = {
  slug: "efl",
  title: "EFL",
  kind: "brand identity",
  year: 2022,
  blurb: "A black-and-yellow wordmark and merch line.",
  cover,
  size: "wide",
  status: "live",
  accent: "#F5C400",
};
