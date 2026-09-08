// One work on the wall: a framed image and a numbered plaque under it.
//
// The frame is the point. It is drawn — a white mat with an ink rule, and a
// second rule offset up and to the right — which is Daramola's own device,
// the same one holding the Scattered Thoughts wordmark and boxing the NewDara
// price list. On hover the offset closes: the frame settles onto the wall.
//
// The tile still knows nothing about the project's brand beyond the registry
// card. Frames are neutral so the pictures in them don't have to be.

import { Link } from "react-router-dom";
import type { ProjectMeta } from "../projects/types";

export function Tile({ meta, hasPage, n }: { meta: ProjectMeta; hasPage: boolean; n: number }) {
  const isSketch = meta.status === "sketch" || !meta.cover;

  const body = (
    <figure className={"tile" + (isSketch ? " tile-sketch" : "")} data-size={meta.size}
      style={{ ["--accent" as string]: meta.accent }}>
      <div className="tile-frame">
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
