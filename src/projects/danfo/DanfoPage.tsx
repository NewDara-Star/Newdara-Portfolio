// Danfo's page, in Danfo's own language.
//
// Only its own font, CSS and images. The palette is sampled from the project's
// own colour board; the type tiers and the mark story come from
// `danfo logo proposal.pdf` and `logo progress.pdf` in iCloud/Documents/danfo.
// Where the guide names a font I can't license for the web, the page says so
// rather than pretending.

import "@fontsource-variable/jost";
import "./danfo.css";

import doors from "./assets/doors.webp";
import aperture from "./assets/aperture.webp";
import lockupA from "./assets/lockup-a.webp";
import lockupB from "./assets/lockup-b.webp";
import lagosDanfo from "./assets/lagos-danfo.webp";
import lockup from "./assets/lockup.webp";
import display from "./assets/display.webp";
import monogram from "./assets/monogram.webp";
import figure from "./assets/figure.webp";
import stripes from "./assets/stripes.webp";

// Sampled off the project's colour board, left to right.
const palette = [
  { name: "Amber", hex: "#FBB817" },
  { name: "Bright", hex: "#FFDE00" },
  { name: "Danfo Yellow", hex: "#F9C700" },
  { name: "White", hex: "#FFFFFF" },
  { name: "Sky", hex: "#19AFD8" },
  { name: "Red", hex: "#ED321E" },
  { name: "Green", hex: "#0AAF8E" },
  { name: "Charcoal", hex: "#262626" },
  { name: "Black", hex: "#000000" },
] as const;

const tiers = [
  { tier: "Primary", face: "Avenir", note: "Signage, wayfinding, everything a passenger has to read at speed." },
  { tier: "Secondary", face: "XPLOR Bold", note: "Route numbers and short, loud labels." },
  { tier: "Tertiary", face: "Danfo Basic", note: "The display voice — fares, slogans, the side of the bus." },
] as const;

export default function DanfoPage() {
  return (
    <div className="df">
      <header className="df-hero">
        <p className="df-over">Brand identity · 2023 · Lagos</p>
        <h1>Lagos moves on yellow buses.</h1>
        <p className="df-lede">
          The danfo is the city's circulatory system and its most recognisable
          object: yellow, black-striped, everywhere. It has a livery but no
          identity — no mark, no palette, no type, no standard for the hundreds
          of thousands of signs, fares and route numbers painted on it by hand.
          This is a proposal for one.
        </p>
        <ul className="df-facts">
          <li><b>Role</b> Naming direction, mark, colour, type system, illustration</li>
          <li><b>Made</b> Mark · 3-tier type system · 9-colour palette · livery · illustration</li>
          <li><b>Status</b> Proposal — logo progress and proposal decks, 2023</li>
        </ul>
      </header>
      <div className="df-livery" aria-hidden="true">
        <div className="df-stripe" />
        <div className="df-stripe" />
      </div>

      {/* The mark */}
      <section className="df-section">
        <p className="df-num">01</p>
        <h2>The mark is a door</h2>
        <p className="df-body">
          Not a letter dressed up as a bus — the bus itself. Every danfo is a
          second-hand panel van with the same handful of door and window
          silhouettes, and those outlines are already read as "danfo" by anyone
          in Lagos. The mark is one of them, drawn flat.
        </p>
        <figure className="df-fig">
          <img src={doors} alt="Six danfo door and window silhouettes drawn as flat outlines" />
          <figcaption>Logo mark dynamism — the shapes the mark was drawn from.</figcaption>
        </figure>
        <figure className="df-fig">
          <img src={aperture} alt="The mark used as a frame, with a photograph of a danfo conductor inside it" />
          <figcaption>The chosen mark: the mirror door. Its counter is a real aperture — it frames the thing it names.</figcaption>
        </figure>
        <div className="df-pair">
          <figure className="df-fig"><img src={lockupA} alt="The mirror-door mark beside the Danfo wordmark" /></figure>
          <figure className="df-fig"><img src={lockupB} alt="The mirror-door mark above the Danfo wordmark" /></figure>
        </div>
      </section>

      {/* Explorations — labelled as such, because that is what they are. */}
      <section className="df-section df-section-white">
        <div className="df-inner">
          <p className="df-num">01b</p>
          <h2>What it isn't</h2>
          <p className="df-body">
            Before the door, the obvious route: a D/d monogram. Three of the
            explorations, kept here because a portfolio that only shows the
            answer is hiding the work.
          </p>
          <div className="df-trio">
            <figure className="df-fig"><img src={monogram} alt="Monogram exploration with the Danfo wordmark" /></figure>
            <figure className="df-fig"><img src={lockup} alt="Monogram exploration, stacked lockup" /></figure>
            <figure className="df-fig"><img src={display} alt="Monogram exploration with a display wordmark" /></figure>
          </div>
          <figure className="df-fig"><img src={lagosDanfo} alt="A Lagos Danfo lockup board" /></figure>
        </div>
      </section>

      {/* Type */}
      <section className="df-section df-section-ink">
        <div className="df-inner">
          <p className="df-num">02</p>
          <h2>Three voices</h2>
          <p className="df-body">
            Transit type has to do two jobs that pull apart: be read at 60km/h,
            and sound like the city it serves. So the system splits — a neutral
            face for information, a loud one for numbers, and a drawn one for
            everything with a personality.
          </p>
          <div className="df-tiers">
            {tiers.map((t) => (
              <div key={t.tier} className="df-tier">
                <b>{t.tier}</b>
                <span>{t.face}</span>
                <small>{t.note}</small>
              </div>
            ))}
          </div>
          <p className="df-body" style={{ marginTop: 28, marginBottom: 0 }}>
            This page is set in Jost, not Avenir — Avenir can't be licensed for
            the web. The display tier is shown by name only until the drawn
            letterforms are in as vectors.
          </p>
        </div>
      </section>

      {/* Colour */}
      <section className="df-section">
        <p className="df-num">03</p>
        <h2>Colour</h2>
        <p className="df-body">
          Three yellows, because a danfo is never quite one yellow — sun,
          repaint and dust all shift it. Black does the structure. The four
          brights are for routes and states, and nothing else.
        </p>
        <ul className="df-swatches">
          {palette.map((c) => (
            <li key={c.hex} style={{ background: c.hex, color: ["#262626", "#000000", "#ED321E"].includes(c.hex) ? "#F9C700" : "#000000" }}>
              <b>{c.name}</b>
              <code>{c.hex}</code>
            </li>
          ))}
        </ul>
      </section>

      {/* Livery + graphics */}
      <section className="df-section df-section-white">
        <div className="df-inner">
          <p className="df-num">04</p>
          <h2>Livery &amp; graphics</h2>
          <p className="df-body">
            The two black bands are already the most recognised graphic device
            in Lagos. The system keeps them and gives them a rule: a slanted
            break where the mark or a route number sits.
          </p>
          <div className="df-pair">
            <figure className="df-fig"><img src={stripes} alt="The two-band livery stripe with its slanted break" /></figure>
            <figure className="df-fig"><img src={figure} alt="An illustrated figure hauling a load, drawn in the Danfo style" /></figure>
          </div>
        </div>
      </section>

      <footer className="df-foot">
        <p>Mark, type and identity by Daramola Olumide, 2023.</p>
      </footer>
    </div>
  );
}
