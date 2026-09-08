// BoredGame's page, in BoredGame's own language.
//
// The rule for every project page: the page IS the brand. Nothing from the
// wall leaks in except the fixed "back" pill. So this file imports its own
// fonts, its own CSS, and its own screenshots — and nothing in ../../wall.
//
// Content is factual and comes from the real repo (CLAUDE.md / STATUS.md).
// If a claim here is not true of the shipped app, delete it.

import "@fontsource-variable/fredoka";
import "@fontsource-variable/nunito";
import "./boredgame.css";

import home from "./assets/home.webp";
import play from "./assets/play.webp";
import picto from "./assets/picto.webp";
import trivia from "./assets/trivia.webp";
import squareoff from "./assets/squareoff.webp";
import homeDesk from "./assets/home-desk.webp";

const LIVE = "https://boredgame-three.vercel.app";

const screens = [
  { src: home, label: "Home — your week, your streak" },
  { src: play, label: "All games" },
  { src: picto, label: "Picto Phrase — read the picture" },
  { src: trivia, label: "Star Trivia — burn two wrong answers" },
  { src: squareoff, label: "Square Off — answer right to claim a square" },
];

// The palette, as data, so the swatches below are guaranteed to match the
// CSS tokens in boredgame.css. One source of truth beats two.
const palette = [
  ["hot", "#FF2E88"],
  ["acid", "#C8F831"],
  ["pop", "#FFD028"],
  ["picto", "#FF5A1F"],
  ["trivia", "#2B4BFF"],
  ["ink", "#14100D"],
  ["paper", "#FBF4E6"],
] as const;

export default function BoredGamePage() {
  return (
    <div className="bg">
      {/* Header band: same hot pink bar the app itself wears. */}
      <header className="bg-band">
        <span className="bg-logo">BoredGame</span>
        <a className="bg-piece bg-press bg-cta" href={LIVE} target="_blank" rel="noreferrer">
          Play it ↗
        </a>
      </header>

      <section className="bg-hero">
        <div className="bg-hero-copy">
          <p className="bg-kicker">Game · 2026 · Design + build</p>
          <h1>
            A toy,<br />
            <span className="hot">not a dashboard.</span>
          </h1>
          <p className="bg-lede">
            Ten short games for two people on two phones — rebus puzzles,
            trivia, board games where you earn your move. Built so I could
            play with my little sister across the Irish Sea, and shipped as a
            PWA with real-time head-to-head rooms.
          </p>
          <ul className="bg-facts">
            <li><b>Role</b> Everything — brand, UI, front end, backend, content</li>
            <li><b>Stack</b> React · TypeScript · Vite · Tailwind 4 · Supabase Realtime</li>
            <li><b>Status</b> Live, 100+ puzzles in the bank</li>
          </ul>
        </div>
        <div className="bg-hero-art">
          <img className="bg-phone" src={home} alt="BoredGame home screen on a phone" />
        </div>
      </section>

      {/* The screens, as a horizontal strip on phone and a row on desktop. */}
      <section className="bg-strip" aria-label="Screens">
        {screens.map((s) => (
          <figure key={s.label} className="bg-shot">
            <img src={s.src} alt={s.label} loading="lazy" />
            <figcaption>{s.label}</figcaption>
          </figure>
        ))}
      </section>

      <section className="bg-section">
        <h2>The rules of the look</h2>
        <p>
          The brief I gave myself: it has to read as a toy you could pick up,
          not a quiz app. Four rules do all the work, and they are all in the
          CSS you're looking at right now — these pieces are live, not images.
        </p>
        <div className="bg-rules">
          <div className="bg-piece bg-press bg-rule">
            <b>1. Outline + hard shadow</b>
            Everything sits on a 2.5px ink line with a 5px offset shadow. Objects, not panels.
          </div>
          <div className="bg-piece bg-press bg-rule">
            <b>2. Press it, it moves</b>
            Tap this. It drops onto its own shadow. The whole app gives that feedback.
          </div>
          <div className="bg-piece bg-press bg-rule">
            <b>3. Round, heavy type</b>
            Fredoka for display, Nunito for reading. Nothing thin, anywhere.
          </div>
          <div className="bg-piece bg-press bg-rule">
            <b>4. Flat, saturated colour</b>
            No gradients, no glass, no glow. Light-only — a toy in a dark room is a different product.
          </div>
        </div>

        <div className="bg-swatches" aria-label="Palette">
          {palette.map(([name, hex]) => (
            <div key={name} className="bg-piece bg-swatch" style={{ background: hex }} data-dark={name === "ink" ? "" : undefined}>
              <span>{name}</span>
              <small>{hex}</small>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-section bg-section-alt">
        <h2>Two decisions that made it exist</h2>
        <div className="bg-cols">
          <article className="bg-piece bg-card">
            <h3>A rebus is data, not a picture.</h3>
            <p>
              The 2025 prototype had five puzzles, because each one was an
              afternoon in Figma. This time a puzzle is a few lines of JSON
              rendered as SVG on a 100×100 canvas. Adding one costs three
              lines. That is the whole reason there is content now: 104
              puzzles, and a script that flags overlapping or unreadable
              layouts before they reach the database.
            </p>
          </article>
          <article className="bg-piece bg-card">
            <h3>It works with no backend.</h3>
            <p>
              Content is bundled; Supabase is a layer on top for accounts,
              sync and rooms. Single player was fully playable before a
              database existed, and the app can never fail to boot because a
              key is missing. Every screenshot on this page was taken from a
              build with no keys at all.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-section">
        <h2>Proof, not vibes</h2>
        <p>
          The repo keeps a STATUS file where a feature is only "working" if
          there is a command that proves it. A few lines from it:
        </p>
        <ul className="bg-proof">
          <li><span>A full solo Square Off game plays</span><code>Playwright drove 60 turns to "The bot wins", no console errors</code></li>
          <li><span>Options aren't guessable by position</span><code>seeded shuffle: 25.1 / 25.5 / 24.9 / 24.5 % over 2000 ids</code></li>
          <li><span>Board and answers fit one phone screen</span><code>verified at 390×844</code></li>
          <li><span>Profiles can't be self-inflated</span><code>column_privileges: UPDATE on username, avatar only</code></li>
        </ul>
        <img className="bg-desk" src={homeDesk} alt="BoredGame on desktop" />
      </section>

      <footer className="bg-foot">
        <a className="bg-piece bg-press bg-cta big" href={LIVE} target="_blank" rel="noreferrer">
          Play BoredGame ↗
        </a>
        <p>Design, code and content by Daramola Olumide.</p>
      </footer>
    </div>
  );
}
