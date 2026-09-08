// THE WALL.
//
// Structure is Miyazaki's (Anders Norén) and stays that way: white ground,
// thin bar, a site title that overlaps the grid, a masonry with the label
// under the image. That structure is what lets fourteen unrelated brands hang
// next to each other without fighting, so it is load-bearing.
//
// The voice is Daramola's:
//   · the ND monogram, his own drawn mark (./mark.tsx)
//   · the NewDara wordmark as the site title — seven faces, outlined, drawn
//     from his own pick in the Wordmark Lab (./wordmark.tsx)
//   · the frame device — a rule offset up and right — which is his, lifted
//     from the Scattered Thoughts bubble and the NewDara price list
//   · gallery labels: numbered plaques, not hover captions
//   · a picture rail the work hangs from
//   · #F9423A is NOT borrowed from Miyazaki. He was already using that exact
//     value in price listing.ai in 2021. Same hex, verified. It is his.
//
// The site title is now the wordmark, so the display face only sets the
// chrome — nav, plaques, footer. Archivo remains a stand-in there until the
// face being cut for this site lands. See the type brief in the Life OS
// project (portfolio/TYPE-BRIEF.md).

import { useCallback, useEffect, useState } from "react";
import { wallProjects } from "../projects";
import { Tile } from "./Tile";
import { Monogram } from "./mark";
import { Masthead } from "./Masthead";
import "@fontsource-variable/archivo";
import "./wall.css";

export function Wall() {
  const [about, setAbout] = useState(false);
  const [opened, setOpened] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // The bar's monogram and the masthead are never both present: the monogram
  // is what stands in for the mark once the wordmark has scrolled away.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 90);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onDone = useCallback(() => setOpened(true), []);

  return (
    <div className={"wall" + (opened ? " is-open" : "") + (scrolled ? " is-scrolled" : "")}>
      <header className="bar">
        <a className="bar-mark" href="/" aria-label="NewDara — home" tabIndex={scrolled ? 0 : -1}>
          <Monogram />
        </a>
        <nav className="bar-nav" aria-label="Site">
          <a className="is-current" href="/">Work</a>
          <button type="button" aria-expanded={about} aria-controls="about" onClick={() => setAbout((v) => !v)}>
            About
          </button>
          <a href="mailto:iamdamobi@gmail.com">Contact</a>
        </nav>
        <span className="bar-loc">Dublin</span>
      </header>

      <section id="about" className="about" hidden={!about}>
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

      <main className="grid-wrap">
        {/* The mark and its opening. See Masthead.tsx — it starts centred
            and travels here. The practice name is the mark; the person's name
            sits under it, because people hire the person, not the practice. */}
        <Masthead onDone={onDone} />
        <div className="rail" aria-hidden="true" />
        <div className="masonry" aria-label="Work">
          {wallProjects.map((p, i) => (
            <Tile key={p.meta.slug} meta={p.meta} hasPage={!!p.Page} n={i + 1} />
          ))}
        </div>
      </main>

      {/* Paper over the wall until the mark has landed. */}
      <div className="veil" aria-hidden="true" />

      <footer className="foot">
        <span className="foot-mark"><Monogram /></span>
        <span>© {new Date().getFullYear()} Daramola Olumide · NewDara</span>
        <a href="mailto:iamdamobi@gmail.com">iamdamobi@gmail.com</a>
      </footer>
    </div>
  );
}
