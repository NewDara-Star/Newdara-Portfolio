// The wall's card for Versuz. Cover is generated from the real wordmark
// vector, so it stays crisp — see assets/cover.webp build note in STATUS.

import type { ProjectMeta } from "../types";
import cover from "./assets/cover.webp";

export const versuzMeta: ProjectMeta = {
  slug: "versuz",
  title: "Versuz",
  kind: "brand identity",
  year: 2023,
  blurb: "Brand and product for a Nigerian sports-prediction platform.",
  cover,
  size: "wide",
  ratio: "4:3",
  status: "live",
  accent: "#BDFF05",
};
