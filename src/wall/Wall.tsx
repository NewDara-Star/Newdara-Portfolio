// THE WALL.
//
// Centred column, one screen wide at most: mark, a short bio, the filter, the
// work, and a dark footer whose whole job is the email address. There is no
// top bar — no nav, no location, no name under the mark. The tabs navigate and
// the footer is the contact, so a bar would only repeat them.
//
// Miyazaki (Anders Norén) is still underneath it: a site title far larger than
// anything else, a masonry with the label under the image, and a ground that
// refuses to take any project's colour. That last part is load-bearing — it is
// what lets fourteen unrelated brands hang next to each other without fighting.
//
// The voice is Daramola's:
//   · the ND monogram, his own drawn mark (./mark.tsx)
//   · the NewDara wordmark as the site title — seven faces, outlined, drawn
//     from his own pick in the Wordmark Lab (./wordmark.tsx)
//   · gallery labels: numbered plaques, not hover captions
//   · a picture rail the work hangs from
//   · the accent bloom behind each tile — the one colour the wall borrows
//   · #F9423A is NOT borrowed from Miyazaki. He was already using that exact
//     value in price listing.ai in 2021. Same hex, verified. It is his.
//
// The site title is now the wordmark, so the display face only sets the
// chrome — tabs, plaques, footer. Archivo remains a stand-in there until the
// face being cut for this site lands. See the type brief in the Life OS
// project (portfolio/TYPE-BRIEF.md).

import { useCallback, useMemo, useState } from "react";
import { wallProjects } from "../projects";
import type { TileRatio, TileGroup } from "../projects/types";
import { groupOf } from "../projects/types";
import { Tabs } from "./Tabs";
import { Tile } from "./Tile";
import { Monogram } from "./mark";
import { Masthead } from "./Masthead";
import "@fontsource-variable/archivo";
import "./wall.css";

export function Wall() {
  const [opened, setOpened] = useState(false);
  const [copied, setCopied] = useState(false);

  const copy = useCallback(() => {
    navigator.clipboard?.writeText("iamdamobi@gmail.com").then(
      () => { setCopied(true); setTimeout(() => setCopied(false), 1800); },
      () => {},
    );
  }, []);

  const onDone = useCallback(() => setOpened(true), []);

  // The filter. Four families exist on paper; only the ones with work hung
  // under them get a tab, because a tab that opens onto an empty wall reads
  // as broken. "Product" appears the day Avaia or Stride goes up.
  const [tab, setTab] = useState<TileGroup | "all">("all");
  const tabs = useMemo(() => {
    const has = (g: TileGroup) => wallProjects.some((p) => groupOf(p.meta.kind) === g);
    const all = [
      { id: "all" as const, label: "All" },
      { id: "brand" as const, label: "Brand" },
      { id: "product" as const, label: "Product" },
      { id: "play" as const, label: "Play" },
    ];
    return all.filter((t) => t.id === "all" || has(t.id));
  }, []);

  const shown = useMemo(
    () => (tab === "all" ? wallProjects : wallProjects.filter((p) => groupOf(p.meta.kind) === tab)),
    [tab],
  );

  // Three columns, filled shortest-first.
  //
  // CSS multicol balances by content FLOW, not by height, so with seven tiles
  // the third column ended up half empty. Here each tile's height is known
  // before it renders — it is its canvas ratio plus the plaque — so the wall
  // can just hand each one to whichever column is currently shortest. Order is
  // preserved well enough to read down the columns, and the plaque numbers
  // carry the real order anyway.
  const columns = useMemo(() => {
    const H: Record<TileRatio, number> = {
      "3:4": 4 / 3, "1:1": 1, "4:3": 3 / 4, "16:9": 9 / 16,
    };
    const PLAQUE = 0.21;                       // plaque height as a share of column width
    const cols: (typeof wallProjects)[] = [[], [], []];
    const h = [0, 0, 0];
    for (const p of shown) {
      const i = h.indexOf(Math.min(...h));
      cols[i].push(p);
      h[i] += H[p.meta.ratio ?? "4:3"] + PLAQUE;
    }
    return cols;
  }, [shown]);

  return (
    <div className={"wall" + (opened ? " is-open" : "")}>
      <main className="grid-wrap">
        {/* The mark and its opening. See Masthead.tsx — it starts centred
            and travels here. The practice name is the mark; the person's name
            sits under it, because people hire the person, not the practice. */}
        <Masthead onDone={onDone} />

        {/* The bar is gone — no nav, no location, no name under the mark. The
            tabs are the navigation now, and the footer is the contact. What
            used to hide behind an "About" toggle is simply here, because a
            person deciding whether to hire him should not have to press a
            button to find out what he does. */}
        <section className="site-bio">
          <p>
            Brand, product, games, artwork. I no get one discipline — I get one
            standard.
          </p>
          <p>
            Every frame on this wall opens into a page built in that project's
            own language: its colours, its type, its rules. Not this site's. If a
            page looks nothing like the one you're reading, that's the job done.
          </p>
        </section>
        <div className="rail" aria-hidden="true" />
        <Tabs tabs={tabs} value={tab} onChange={setTab} />
        <div className="masonry" aria-label="Work">
          {columns.map((col, c) => (
            <div className="masonry-col" key={c}>
              {col.map((p) => (
                <Tile
                  key={p.meta.slug}
                  meta={p.meta}
                  hasPage={!!p.Page}
                  n={wallProjects.indexOf(p) + 1}
                />
              ))}
            </div>
          ))}
        </div>
      </main>

      {/* Paper over the wall until the mark has landed. */}
      <div className="veil" aria-hidden="true" />

      {/* The footer is the one dark thing on the site, and the whole of it is
          one instruction: write to him. The address is set as display type
          because it is the only call to action the wall has. */}
      <footer className="foot">
        <div className="foot-inner">
        <span className="foot-mark"><Monogram /></span>
        <a className="foot-mail" href="mailto:iamdamobi@gmail.com">
          <span>iamdamobi</span>
          <span>@gmail.com</span>
        </a>
        <button type="button" className="foot-copy" onClick={copy}>
          {copied ? "Copied" : "Copy"}
        </button>
        <div className="foot-end">
          <span>© {new Date().getFullYear()} Daramola Olumide · NewDara</span>
          <span>V1 · Built in Dublin</span>
        </div>
        </div>
      </footer>
    </div>
  );
}
