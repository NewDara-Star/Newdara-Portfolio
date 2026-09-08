// Versuz's page, in Versuz's own language.
//
// Only its own fonts, CSS and images. The logo and the X are REAL VECTOR,
// inlined from the live product site — see ./marks.tsx. Colours come from
// the site's computed styles and the product's own CSS token export
// (iCloud/Documents/versuz code*). The narrative quotes his case study.

import "@fontsource-variable/archivo";
import "@fontsource-variable/dm-sans";
import "./versuz.css";
import { Wordmark, Mark } from "./marks";

import explore from "./assets/explore.webp";
import pick from "./assets/pick.webp";
import quickpicks from "./assets/quickpicks.webp";
import create from "./assets/create.webp";
import anon from "./assets/anon.webp";

// Brand colours, read off the live site; product colours from the token export.
const brand = [
  { name: "Lime", hex: "#BDFF05", use: "The one accent. CTAs, marks, emphasis." },
  { name: "Ink", hex: "#00070D", use: "Ground. Near-black, not black." },
  { name: "Coral", hex: "#FE4E40", use: "Tertiary-500 — alerts, live states." },
  { name: "Violet", hex: "#5E57F2", use: "1v1." },
  { name: "Aqua", hex: "#6BF6FF", use: "Highlights in-product." },
  { name: "Khaki", hex: "#FFE381", use: "Rewards, badges." },
  { name: "Mint", hex: "#9CFF79", use: "Wins, positive balance." },
] as const;

const modes = [
  { name: "1v1", bg: "#5E57F2", note: "Connect with a friend, or pair with someone." },
  { name: "League", bg: "#FE4E40", note: "Do you have what it takes to fight for glory and become champion?" },
  { name: "Pool", bg: "#8A5CF0", note: "Enter a pool and win big." },
] as const;

const screens = [
  { src: anon, cap: "Explore, signed out — the wall of live games is the front door." },
  { src: explore, cap: "Explore, signed in. Colour-coded cards; balance always in the header." },
  { src: pick, cap: "Pick Games — the bet slip. Every market is a plain button, no jargon." },
  { src: quickpicks, cap: "Quick picks — a whole matchday in one scroll." },
  { src: create, cap: "Create — the three game modes, each with its own colour." },
];

export default function VersuzPage() {
  return (
    <div className="vz">
      <header className="vz-hero">
        <p className="vz-over">Brand &amp; product · 2023 · Lagos</p>
        <Wordmark className="vz-wordmark" />
        <p className="vz-tag">how do you make betting feel like a video game, not a financial app?</p>
        <p className="vz-lede">
          That was the design question. Versuz is a sports-prediction platform
          built on head-to-head play rather than house odds — 1v1, League and
          Pool. I built the brand and the product: the mark, the system, the
          app, and the campaign work that launched it.
        </p>
        <ul className="vz-facts">
          <li><b>Role</b> Brand &amp; UI designer, co-founder</li>
          <li><b>Built</b> Logo &amp; app icons · colour system · type · component library · gamification badges · campaigns</li>
          <li><b>Tools</b> Figma, Illustrator, Framer, Photoshop</li>
        </ul>
      </header>

      {/* The mark */}
      <section className="vz-section">
        <p className="vz-num">01 — Mark</p>
        <h2>an x, because versus</h2>
        <div className="vz-markrow">
          <Mark className="vz-mark" />
          <p className="vz-mark-note">
            Two strokes crossing: the versus sign, a bow tie, a fixture. It is
            the app icon, the loading state, the bullet between two team names
            and the thing on the trophy. Drawn once, used at every size — this
            page renders the actual outline, so it is sharp at any scale.
          </p>
        </div>
        <div className="vz-sizes" aria-label="The mark at three sizes">
          <Mark className="vz-s1" />
          <Mark className="vz-s2" />
          <Mark className="vz-s3" />
        </div>
      </section>

      {/* Colour */}
      <section className="vz-section">
        <p className="vz-num">02 — Colour</p>
        <h2>one acid, on near-black</h2>
        <p className="vz-body">
          The brand is disciplined: a near-black ground and a single acid lime
          that only ever means "act". Everything else is product colour, and it
          earns its place by encoding a game mode or a state — never decoration.
        </p>
        <ul className="vz-swatches">
          {brand.map((c) => (
            <li key={c.hex} style={{ background: c.hex, color: ["#00070D"].includes(c.hex) ? "#FCFDFD" : "#00070D" }}>
              <b>{c.name}</b>
              <code>{c.hex}</code>
              <small>{c.use}</small>
            </li>
          ))}
        </ul>
      </section>

      {/* Type */}
      <section className="vz-section">
        <p className="vz-num">03 — Type</p>
        <h2>extended, then quiet</h2>
        <p className="vz-body">
          Pilat Extended for display — wide, heavy, lowercase, so the wordmark
          and the headlines feel like the same object. DM Sans for everything
          you actually read: balances, odds, terms. This page substitutes
          Archivo at its widest for Pilat, which isn't web-licensable; DM Sans
          is the real thing.
        </p>
      </section>

      {/* Product — light, because the product is light */}
      <section className="vz-section vz-section-light">
        <div className="vz-inner">
          <p className="vz-num">04 — Product</p>
          <h2>the app is light. the brand isn't.</h2>
          <p className="vz-body">
            A deliberate split. Marketing is black-and-lime and loud; the app
            is white, so that money, odds and team badges stay legible for four
            minutes at a time. Continuity comes from the mark, the corner radii
            and the colour coding — not from the ground.
          </p>
          <div className="vz-modes">
            {modes.map((m) => (
              <div key={m.name} className="vz-mode" style={{ background: m.bg }}>
                <b>{m.name}</b>
                <span>{m.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vz-section vz-section-light" style={{ paddingTop: 0 }}>
        <div className="vz-inner">
          <div className="vz-screens">
            {screens.map((s) => (
              <figure key={s.cap} className="vz-shot">
                <img src={s.src} alt={s.cap} />
                <figcaption>{s.cap}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Reflection — his own words from the case study */}
      <section className="vz-section">
        <p className="vz-num">05 — What it taught me</p>
        <h2>the hard parts</h2>
        <ul className="vz-facts" style={{ maxWidth: "60ch", fontSize: 16 }}>
          <li>Balancing UX clarity with bold branding for a competitive product.</li>
          <li>Creating a scalable component system in Figma.</li>
          <li>Translating product design into campaign-ready visual content.</li>
        </ul>
        <p className="vz-body" style={{ marginTop: 30, marginBottom: 0 }}>
          Versuz Associates Ltd was registered in Nigeria in 2023. I hold 10%
          of the original entity and, under a documented separation, kept the
          brand and its assets — which is why the name now points at a football
          competition format rather than a betting platform.
        </p>
      </section>

      <footer className="vz-foot">
        <p>Brand and product design by Daramola Olumide, 2023.</p>
      </footer>
    </div>
  );
}
