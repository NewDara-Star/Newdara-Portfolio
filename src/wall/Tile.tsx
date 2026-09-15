// One work on the wall: one rounded glass card holding the cover and, beneath
// it, the numbered plaque.
//
// The ink rule offset up and to the right — the frame device that used to hang
// every tile — was taken off the wall on 2026-09-15. It is still his, still in
// his own files; it just isn't what the portfolio uses. Git history has it if
// it ever comes back.
//
// Cover and plaque are in the SAME card, cover full-bleed to the card's top
// corners, so the card clips it: that is why .tile-card has overflow:hidden
// and the image carries no radius of its own.
//
// Every cover is cropped to one of three canvases (3:4, 1:1, 4:3, 16:9) so the
// wall keeps a rhythm instead of inheriting whatever shape the source file was.
//
// The tile still knows nothing about the project's brand beyond the registry
// card — except its accent, which blooms behind the glass and is the only
// colour the wall borrows from a project.

import { Link } from "react-router-dom";
import type { ProjectMeta } from "../projects/types";

export function Tile({ meta, hasPage, n }: { meta: ProjectMeta; hasPage: boolean; n: number }) {
  const isSketch = meta.status === "sketch" || !meta.cover;

  const body = (
    <figure
      className={"tile" + (isSketch ? " tile-sketch" : "")}
      data-size={meta.size}
      data-ratio={meta.ratio ?? "4:3"}
      style={{ ["--accent" as string]: meta.accent }}
    >
      <div className="tile-card">
        {isSketch ? (
          <div className="tile-blank" aria-hidden="true" />
        ) : (
          <img src={meta.cover} alt="" loading="lazy" />
        )}
      </div>
      <figcaption className="tile-plaque">
        <span className="tile-n">{String(n).padStart(2, "0")}</span>
        <span className="tile-text">
          <span className="tile-title">{meta.title}</span>
          <span className="tile-kind">
            {meta.kind} · {meta.year}{isSketch ? " · in progress" : ""}
          </span>
        </span>
      </figcaption>
    </figure>
  );

  // Only a project with a page is a link. A cover alone is just hung.
  if (!hasPage) return body;
  return (
    <Link to={`/work/${meta.slug}`} className="tile-link" aria-label={`${meta.title} — ${meta.kind}`}>
      {body}
    </Link>
  );
}
