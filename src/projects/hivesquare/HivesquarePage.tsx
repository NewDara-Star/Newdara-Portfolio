// Hivesquare's page, in Hivesquare's own language.
//
// Same rule as every project page: it imports only its own font, CSS and
// images. Tokens come from the brand guide's Figma file; the story and the
// images come from Daramola_Olumide_Portfolio.pdf (pages 5–17), rendered
// at 200 dpi. Nothing here is a guess.

import "@fontsource-variable/plus-jakarta-sans";
import "./hivesquare.css";

import wordmark from "./assets/wordmark-pink.webp";
import cubeGrid from "./assets/cube-grid.webp";
import lockup from "./assets/lockup.webp";
import pattern from "./assets/pattern.webp";
import devices from "./assets/devices.webp";
import tags from "./assets/tags.webp";
import billboard from "./assets/billboard.webp";
import sticker from "./assets/sticker.webp";

const palette = [
  { name: "Hive pink", hex: "#CE0941", role: "The brand. Backgrounds, CTAs, the pattern field." },
  { name: "Hive burgundy", hex: "#75042F", role: "Headings on light, depth in illustrations." },
  { name: "Dark burgundy", hex: "#510424", role: "Outlines, shadows, the darkest value." },
  { name: "Orange", hex: "#F5A53E", role: "Highlight tag." },
  { name: "Yellow", hex: "#F5C53E", role: "Highlight tag." },
  { name: "Green", hex: "#41E59A", role: "Success, verified." },
  { name: "Blue", hex: "#00C3FF", role: "Info." },
  { name: "Grey", hex: "#E5E5E5", role: "Rules and fields." },
  { name: "Black", hex: "#060606", role: "Body text on light." },
] as const;

// The guide's own chapters, in its own order. Numbered because the guide is.
const chapters = [
  ["1.0", "Intro / Brandtone", "Who Hivesquare is for and how it should sound."],
  ["2.0", "Logo", "Mark, wordmark, lockups, optical spacing at four sizes, safe space, misuse."],
  ["3.0", "Colours", "A nine-colour set with tint ramps for every hue."],
  ["4.0", "Typography", "Plus Jakarta Sans throughout, and the highlight-tag treatment."],
  ["5.0", "Brand graphics", "The tarp-stripe pattern and a two-tone illustration system."],
  ["6.0", "Brand in use", "Billboards, stickers, the app — the identity out in Lagos."],
] as const;

// The names that didn't make it. From the portfolio, verbatim.
const rejected = "Hathor. Naba. Ruda. Rudasure. Coinsure. Kreda. Creda. Trada. Tradary. Tradance. Payex. Encom. Sotex. Develi…";

export default function HivesquarePage() {
  return (
    <div className="hs">
      <header className="hs-hero">
        <p className="hs-kicker">Brand naming &amp; identity · 2023 · Lagos</p>
        <h1>
          Infogramme<br />
          became <em>Hivesquare.</em>
        </h1>
        <p className="hs-lede">
          Early in 2023 I was brought in to name and build the identity for a
          community-powered marketplace — a place where cottage businesses,
          side hustlers and neighbourhood vendors could feel at home. The
          brief: warm, local, trustworthy. Community with commerce. Digital,
          but keep the humanity in it.
        </p>
        <ul className="hs-facts">
          <li><b>Role</b> Naming, identity, 35-page brand guide, illustration system</li>
          <li><b>Deliverables</b> Name · logo suite · colour set · type system · brand graphics · applications</li>
          <li><b>Type</b> Plus Jakarta Sans</li>
        </ul>
      </header>

      {/* Naming — the part of the job most portfolios skip. */}
      <section className="hs-section">
        <h2>Finding the name</h2>
        <p className="hs-body">
          I did what most creatives do first: threw spaghetti at the wall.
          The list we ran through in meetings —
        </p>
        <p className="hs-rejected">{rejected}</p>
        <p className="hs-body">
          It was giving fintech. It was giving app-store overload. It wasn't
          giving heart. So I went back to the root of the idea, and two words
          kept coming back.
        </p>
        <div className="hs-pair">
          <div className="hs-namecard">
            <h3>Hive</h3>
            <p>A symbol of togetherness, motion, productivity, community.</p>
          </div>
          <div className="hs-namecard">
            <h3>Square</h3>
            <p>The old-school meeting point. The town market. A physical space to trade, talk and trust.</p>
          </div>
        </div>
      </section>

      {/* Tone — the guide's intro, condensed to what the identity had to carry. */}
      <section className="hs-section hs-section-tone"><div className="hs-inner">
        <h2>What it had to say</h2>
        <div className="hs-tone">
          <p>
            <mark className="hs-tag hs-tag-y">Community</mark> first: a warm,
            closely knit marketplace, not a cold catalogue.
          </p>
          <p>
            <mark className="hs-tag hs-tag-o">Trust</mark> built in: secure
            escrow, so a first-time buyer and a first-time seller can meet.
          </p>
          <p>
            <mark className="hs-tag hs-tag-b">Small</mark> is the point: cottage
            businesses and SMEs get the visibility big brands buy.
          </p>
        </div>
        <p className="hs-note">
          That highlight-tag treatment is the guide's own typographic device —
          the billboard further down is built from it. These are live text.
        </p>
      </div></section>

      {/* The mark */}
      <section className="hs-section">
        <h2>The mark</h2>
        <figure className="hs-fig">
          <img src={lockup} alt="Hivesquare horizontal lockup: burgundy cube mark beside the script wordmark" />
        </figure>
        <div className="hs-pair">
          <figure className="hs-fig">
            <img src={cubeGrid} alt="The cube icon on its construction grid" />
            <figcaption>A cube icon that doubles as a market stall and hints at a hive's hexagonal shape.</figcaption>
          </figure>
          <figure className="hs-fig">
            <img src={wordmark} alt="The hivesquare wordmark, white on Hive pink" />
            <figcaption>A soft, approachable wordmark — with a wing-inspired "h" to nod at the bee.</figcaption>
          </figure>
        </div>
        <p className="hs-body">
          The guide sets four lockup sizes with optical spacing rules (tiny
          under 139px, small to 199, medium to 348, large above) and a 3× safe
          space measured from the cube.
        </p>
      </section>

      {/* Colour — real tokens, rendered live. */}
      <section className="hs-section">
        <h2>Colour set</h2>
        <p className="hs-body">
          One brand colour that does most of the work, two burgundies for
          depth, and five accents that only ever appear as tags, states or
          illustration fills. Every hue has a seven-step tint ramp in the guide.
        </p>
        <ul className="hs-swatches">
          {palette.map((c) => (
            <li key={c.hex} className="hs-swatch" style={{ background: c.hex }}
              data-light={["#E5E5E5", "#F5C53E", "#F5A53E", "#41E59A", "#00C3FF"].includes(c.hex) ? "" : undefined}>
              <b>{c.name}</b>
              <code>{c.hex}</code>
              <span>{c.role}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Type */}
      <section className="hs-section hs-section-type"><div className="hs-inner">
        <h2>Type</h2>
        <p className="hs-body">
          Plus Jakarta Sans, one family for everything. Heavy and tight for
          display, regular and open for reading. Geometric enough to sit next
          to the cube, friendly enough to sit next to the script.
        </p>
        <div className="hs-specimen">
          <p className="hs-spec-xl">Say hello to the marketplace</p>
          <p className="hs-spec-l">Discover the power of community</p>
          <p className="hs-spec-m">Buyers and sellers from around the world, connecting in their own backyard.</p>
          <p className="hs-spec-s">PLUS JAKARTA SANS · 200–800 · VARIABLE</p>
        </div>
      </div></section>

      {/* Graphics */}
      <section className="hs-section">
        <h2>Brand graphics</h2>
        <p className="hs-body">
          The pattern takes its form from the striped tarp on the cube icon —
          the same stripes a market stall wears. Alongside it, a set of
          marketplace icons and the tag system: rating, discount, verified,
          hot deal, sponsored, category.
        </p>
        <div className="hs-pair">
          <figure className="hs-fig"><img src={pattern} alt="The tarp-stripe pattern in two pinks, with the cube icon" /></figure>
          <figure className="hs-fig"><img src={tags} alt="Rating stars, discount tag, verified tick, and the tag pills" /></figure>
        </div>
      </section>

      {/* In use */}
      <section className="hs-section">
        <h2>In use</h2>
        <figure className="hs-fig">
          <img src={billboard} alt="A Hivesquare billboard on a Lagos street, built from the highlight-tag sentence" />
        </figure>
        <div className="hs-pair">
          <figure className="hs-fig"><img src={devices} alt="The Hivesquare app icon on a phone and the web store on a laptop" /></figure>
          <figure className="hs-fig"><img src={sticker} alt="A hand holding a 'Welcome to Hivesquare' stall sticker" /></figure>
        </div>
      </section>

      {/* The guide itself — a real sequence, so numbered. */}
      <section className="hs-section hs-section-guide"><div className="hs-inner">
        <h2>The guide</h2>
        <p className="hs-body">
          Thirty-five pages, handed over with the master files and a one-page
          readme so the client's team could use it without me.
        </p>
        <ol className="hs-chapters">
          {chapters.map(([n, title, what]) => (
            <li key={n}>
              <span className="hs-ch-n">{n}</span>
              <span className="hs-ch-t">{title}</span>
              <span className="hs-ch-w">{what}</span>
            </li>
          ))}
        </ol>
      </div></section>

      <footer className="hs-foot">
        <p>Name, identity, guide and illustration by Daramola Olumide, 2023.</p>
      </footer>
    </div>
  );
}
