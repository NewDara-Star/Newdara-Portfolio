// Scattered Thoughts' page, in its own language.
//
// Sources, all his:
//   iCloud/scattered thoughts/IDENTITY DIRECTION.ai  — 11pp of lockup work
//   iCloud/Desktop/january podcast/logo.ai           —  7pp of type + mark
//   iCloud/Desktop/january podcast/covers and reels.ai — the applied artwork
//   iCloud/Desktop/january podcast/Scattered Heads.ai  — the guest illustrations
// The wordmark, bubble and lockup are the real outlines, in ./marks.tsx.

import "@fontsource-variable/archivo";
import "@fontsource-variable/dm-sans";
import "./scattered-thoughts.css";
import { Wordmark, Lockup, Bubble } from "./marks";

import system from "./assets/system.webp";
import cover from "./assets/cover.webp";
import reel from "./assets/reel.webp";
import banner from "./assets/banner.webp";
import heads from "./assets/heads.webp";
import copa from "./assets/copa.webp";
import wc26 from "./assets/wc26.webp";
import quarters from "./assets/quarters.webp";

const palette = [
  { name: "Paper", hex: "#EDEDED" },
  { name: "Ink", hex: "#111111" },
  { name: "Wine", hex: "#962F4C" },
  { name: "White", hex: "#FFFFFF" },
] as const;

const names = [
  { title: "World Cup at Qatar", note: "too literal — dates the episode" },
  { title: "Trophy at the Desert", note: "closer, but reads as a place" },
  { title: "Trophy in the Sand", note: "same idea, softer" },
  { title: "Tournament at the Gold State", note: "picked", picked: true },
];

export default function ScatteredThoughtsPage() {
  return (
    <div className="st">
      <header className="st-hero">
        <p className="st-over">Brand identity · Podcast · Self-initiated · 2022 — still running</p>
        <Wordmark className="st-mark st-wordmark" />
        <h1>A mark that <em>holds</em> things.</h1>
        <p className="st-lede">
          My podcast. Every episode wants its own artwork, and most shows solve
          that by dropping a logo in the corner and hoping. So the logo here
          isn't a picture — it's a container. A speech bubble, and whatever this
          week is about goes inside it.
        </p>
        <ul className="st-facts">
          <li><b>Role</b> Name, mark, system, episode art, illustration, audio</li>
          <li><b>Built</b> Bubble container · ST monogram · episode lockups · guest portraits</li>
          <li><b>Explored</b> 11 pages of lockups, 7 pages of type, before landing</li>
        </ul>
      </header>

      {/* The system */}
      <section className="st-section">
        <p className="st-num">01 — The idea</p>
        <h2>The logo is a frame, not a picture</h2>
        <p className="st-body">
          One shape: a hard-edged bubble with a tail, and a thin outline
          shadowing it up and to the right so it reads as a card sitting on
          something. It works three ways — the wordmark set inside it, a still
          from the episode inside it, or an ST monogram when there's no room.
          The bubble beside this is the actual vector from the file, holding
          text instead of a picture. That's the whole system.
        </p>
        <div className="st-pair">
          <figure className="st-fig">
            <img src={system} alt="Variants of the Scattered Thoughts bubble and ST monogram" />
            <figcaption>The exploration — wordmark inside, image inside, monogram, stacked, striped.</figcaption>
          </figure>
          <div className="st-holder">
            <Bubble className="st-mark" />
            <div className="st-holder-in">
              <p style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: 17, marginBottom: 4 }}>
                Same container, different contents.
              </p>
              <p style={{ fontSize: 14, color: "#555" }}>
                Which means a new episode never needs a new logo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Naming */}
      <section className="st-section">
        <p className="st-num">02 — Naming an episode</p>
        <h2>Four names for one show</h2>
        <p className="st-body">
          The World Cup episode got named four different ways before it went
          out. Same bubble, same lockup, same wine — only the words change, and
          that's the point: the identity absorbs the decision instead of
          waiting on it.
        </p>
        <ul className="st-names">
          {names.map((n) => (
            <li key={n.title} data-picked={n.picked ? "" : undefined}>
              <b>{n.title}</b>
              <span>{n.note}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Applied */}
      <section className="st-section st-section-ink">
        <div className="st-inner">
          <p className="st-num">03 — In use</p>
          <h2>Guests get drawn, not photographed</h2>
          <p className="st-body">
            Cover art is a flat illustrated portrait of whoever is on, on a
            field of scattered wavy lines — the same restless line the name is
            about. Illustration rather than photography because a podcast
            records whenever it records, and nobody is doing a shoot first.
          </p>
          <div className="st-pair">
            <figure className="st-fig">
              <img src={cover} alt="Episode cover: illustrated portrait on the wave field with the bubble lockup" />
              <figcaption>"It's been a while", ft Precious — square cover.</figcaption>
            </figure>
            <figure className="st-fig">
              <img src={reel} alt="Vertical reel artwork with the bubble lockup and episode title" />
              <figcaption>The same episode as a vertical reel. Bubble top-right, title below.</figcaption>
            </figure>
          </div>
          <div className="st-pair">
            <figure className="st-fig">
              <img src={banner} alt="Wide lockup: bubble holding the cover thumbnail beside the episode title" />
              <figcaption>The bubble holding a thumbnail — the container doing its job.</figcaption>
            </figure>
            <figure className="st-fig">
              <img src={heads} alt="Two illustrated guest portraits, drawn flat" />
              <figcaption>Scattered Heads — guests drawn flat, reusable, no shoot required.</figcaption>
            </figure>
          </div>
        </div>
      </section>


      {/* 2026 */}
      <section className="st-section">
        <p className="st-num">04 — Four years on</p>
        <h2>The container earned it</h2>
        <p className="st-body">
          The 2026 covers are the argument settled. The bubble stops holding a
          still of the guests and starts holding the tournament's own artwork —
          Copa América in one week, World Cup 26 in the next — and the title
          takes its colour from whatever is inside the bubble. Red cover, red
          title. Blue cover, blue title. Nothing else moves: same frame, same
          wave field, same wordmark locked to the bottom of the bubble. Guests
          get drawn in their kit and lined up underneath.
        </p>
        <div className="st-pair">
          <figure className="st-fig">
            <img src={copa} alt="Tournament in the Americas cover with the Copa América trophy in the bubble" />
            <figcaption>"Tournament in the Americas", with Adeola and Samuel. Copa artwork in, red title out.</figcaption>
          </figure>
          <figure className="st-fig">
            <img src={wc26} alt="The same cover with World Cup 26 artwork in the bubble and a blue title" />
            <figcaption>Same layout, World Cup 26 artwork. The title just follows the picture.</figcaption>
          </figure>
        </div>
        <figure className="st-fig">
          <img src={quarters} alt="Quarter finals 26 cover: bubble holding a trophy photo, three guests in kit below" />
          <figcaption>"Quarter finals 26'". Four years and the frame hasn't been redrawn once.</figcaption>
        </figure>
      </section>

      {/* Palette */}
      <section className="st-section">
        <p className="st-num">05 — Colour</p>
        <h2>Paper, ink, one wine</h2>
        <p className="st-body">
          Near-white paper and black do the structure — the mark is a drawn
          outline, so the identity is mostly line. The single wine is held back
          for episode titles, which means colour always says the same thing:
          this is what this one is called.
        </p>
        <ul className="st-swatches">
          {palette.map((c) => (
            <li key={c.hex} style={{ background: c.hex, color: ["#111111", "#962F4C"].includes(c.hex) ? "#EDEDED" : "#111111" }}>
              <b>{c.name}</b>
              <code>{c.hex}</code>
            </li>
          ))}
        </ul>
      </section>

      <footer className="st-foot">
        <div className="st-foot-mark"><Lockup className="st-mark" /></div>
        <p>Name, identity, illustration and audio by Daramola Olumide.</p>
      </footer>
    </div>
  );
}
