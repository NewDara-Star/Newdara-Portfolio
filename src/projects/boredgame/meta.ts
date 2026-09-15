// The wall's card for BoredGame. Kept separate from the page so the wall can
// import it without pulling in the page's fonts and screenshots.

import type { ProjectMeta } from "../types";
import cover from "./assets/home.webp";

export const boredgameMeta: ProjectMeta = {
  slug: "boredgame",
  title: "BoredGame",
  kind: "game",
  year: 2026,
  blurb: "Ten short games for two people on two phones.",
  cover,
  size: "tall",
  ratio: "3:4",
  status: "live",
  accent: "#FF2E88",
};
