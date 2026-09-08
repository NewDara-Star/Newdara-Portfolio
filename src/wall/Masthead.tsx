// THE MASTHEAD, and its opening.
//
// The sequence, once per page load:
//   1. "NewDara" appears in a plain grotesk, centred in the viewport, on a
//      paper veil that hides the wall.
//   2. Each character SPLIT-FLAPS to its real face, left to right. The plain
//      letter slides up and out of its slot as the outlined glyph slides up
//      into it. No fade, no blur — a type change, drawn.
//   3. The name fades up under it.
//   4. The whole mark travels to its masthead position and the veil lifts.
//
// It is ONE element the whole way. There is no clone and no second copy: the
// real masthead simply starts life with a transform that puts it centre-screen
// at a larger size, and that transform animates back to identity. Nothing to
// keep in sync, and if the JS never runs the mark is already in the right
// place, in the right faces.
//
// Slots are pre-sized to each FINAL glyph's advance, so flipping a letter
// never reflows the word.

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { GLYPHS, EM, ASC, DESC, TRACK, totalEm } from "./glyphs";

/** Module-level, so the opening plays on a real page load but NOT every time
 *  someone comes back to the wall from a project page. */
let hasPlayed = false;

const STEP = 110;    // ms between letters
const HOLD = 520;    // ms before the first letter flips
const FLY = 760;     // ms for the trip to the masthead
const TOTAL = totalEm(GLYPHS);   // the mark's width in slot-em

export function Masthead({ onDone }: { onDone: () => void }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [flipped, setFlipped] = useState<number>(hasPlayed ? GLYPHS.length : 0);
  const [named, setNamed] = useState(hasPlayed);

  // Place the mark centre-screen BEFORE first paint, so it never flashes in
  // the masthead slot first.
  useLayoutEffect(() => {
    if (hasPlayed) return;
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    const target = Math.min(window.innerWidth * 0.78, 720);
    const s = target / r.width;
    const tx = window.innerWidth / 2 - (r.width * s) / 2 - r.left;
    const ty = window.innerHeight / 2 - (r.height * s) / 2 - r.top;
    el.style.transform = `translate(${tx}px, ${ty}px) scale(${s})`;
  }, []);

  useEffect(() => {
    if (hasPlayed) { onDone(); return; }
    hasPlayed = true;
    const el = ref.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !el) { setFlipped(GLYPHS.length); setNamed(true); onDone(); return; }

    const timers: number[] = [];
    GLYPHS.forEach((_, i) =>
      timers.push(window.setTimeout(() => setFlipped(i + 1), HOLD + i * STEP)));
    timers.push(window.setTimeout(() => setNamed(true), HOLD + GLYPHS.length * STEP + 160));
    timers.push(window.setTimeout(() => {
      el.style.transition = `transform ${FLY}ms cubic-bezier(.55,0,.15,1)`;
      el.style.transform = "none";
      onDone();
      window.setTimeout(() => { el.style.transition = ""; }, FLY + 60);
    }, HOLD + GLYPHS.length * STEP + 820));
    return () => timers.forEach(clearTimeout);
  }, [onDone]);

  return (
    <h1 className="site-title" ref={ref}>
      <span
        className="site-wm"
        style={{ fontSize: `calc(var(--wm-w) / ${TOTAL.toFixed(4)})` }}
        aria-label="NewDara"
      >
        {GLYPHS.map((g, i) => (
          <span
            key={i}
            className="slot"
            data-flipped={i < flipped ? "" : undefined}
            style={{
              width: `${(g.adv / EM).toFixed(4)}em`,
              marginRight: i < GLYPHS.length - 1 ? `${TRACK}em` : undefined,
            }}
          >
            <span className="slot-plain" aria-hidden="true">{g.ch}</span>
            <span className="slot-glyph">
              <svg viewBox={`0 ${-ASC} ${g.adv} ${ASC + DESC}`} aria-hidden="true">
                <path d={g.d} />
              </svg>
            </span>
          </span>
        ))}
      </span>
      <span className={"site-name" + (named ? " on" : "")}>Daramola Olumide</span>
    </h1>
  );
}
