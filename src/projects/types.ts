// ---------------------------------------------------------------------------
// The contract every project on the wall has to satisfy.
//
// WHY a type at all: the wall (landing page) never looks inside a project.
// It only reads this small card of metadata — title, cover, frame style —
// and hands the click off to the project's own page. That is what lets each
// project page be 100% its own brand: the wall has no opinion about it.
// ---------------------------------------------------------------------------

import type { ComponentType } from "react";

/** Tile proportions on the wall. A live tile takes its cover's real aspect
 *  ratio; a sketch has no image, so this decides its shape. */
export type TileSize = "tall" | "wide" | "square";

/** The only three canvases a cover may be hung in. Every image is cropped to
 *  one of them, so the wall has a rhythm instead of whatever shape the source
 *  file happened to be. Portrait 4:3 is written 3:4. */
export type TileRatio = "3:4" | "1:1" | "4:3" | "16:9";

/** The four families the wall can be filtered by. Derived from `kind`, not
 *  stored — a project's kind is the fact; the family is how the wall groups it. */
export type TileGroup = "brand" | "product" | "play";

export type ProjectKind =
  | "app"
  | "brand identity"
  | "game"
  | "artwork"
  | "social media"
  | "product";

export interface ProjectMeta {
  /** URL slug: /work/<slug>. Lowercase, no spaces. */
  slug: string;
  title: string;
  kind: ProjectKind;
  year: number;
  /** One line under the title on the wall plaque. */
  blurb: string;
  /** Wall cover. `undefined` while the project is still "sketch" status —
   *  the wall draws a quiet placeholder tile instead of a broken image. */
  cover?: string;
  size: TileSize;
  /** Which of the three canvases this cover is hung in. Defaults to 4:3. */
  ratio?: TileRatio;
  /** "live" = has a page. "sketch" = on the wall as intent only. */
  status: "live" | "sketch";
  /** Colour a sketch tile is tinted with, so it hints at the brand before the
   *  brand exists on the wall. Any CSS colour. */
  accent: string;
}

export interface Project {
  meta: ProjectMeta;
  /** The tailor-made page. Lazy-loaded so BoredGame's fonts and screenshots
   *  never ship to someone who only opened the Danfo page. */
  Page?: ComponentType;
}

/** Which tab a project falls under. Client identity work is "brand"; things he
 *  designed AND shipped as software are "product"; everything made to be looked
 *  at or played is "play". */
export function groupOf(kind: ProjectKind): TileGroup {
  if (kind === "brand identity") return "brand";
  if (kind === "app" || kind === "product") return "product";
  return "play";
}
