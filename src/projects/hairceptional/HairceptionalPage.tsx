// Hairceptional's page, in Hairceptional's own language.
//
// Source: HIS 40-page "Hairceptional brand manual.ai" (Illustrator, 2021),
// in iCloud/Desktop/Hairceptional. Every colour name, hex, rule and quoted
// line below is read out of that document. The pidgin asides are the
// manual's own — they are the reason this page exists.
//
// NOT a source: the "hairceptional co" folder in ~/Downloads. That is someone
// else's logo-options document. Never use it here.

import "@fontsource-variable/dm-sans";
import "./hairceptional.css";

import intro from "./assets/intro.webp";
import tone from "./assets/tone.webp";
import logo from "./assets/logo.webp";
import colourWord from "./assets/colour-word.webp";
import colourIcon from "./assets/colour-icon.webp";
import palette from "./assets/palette.webp";
import elements from "./assets/elements.webp";
import rules from "./assets/rules.webp";
import typeface from "./assets/typeface.webp";
import women from "./assets/women.webp";
import photography from "./assets/photography.webp";
import humans from "./assets/humans.webp";

// Section 3 of the manual, with its own names.
const colours = [
  { name: "Hairceptional Burgundy", hex: "#812528", cmyk: "0 / 71 / 69 / 49" },
  { name: "Hairceptional Chestnut Rose", hex: "#D4554D", cmyk: "0 / 60 / 64 / 17" },
  { name: "Hairceptional Fantasy", hex: "#F9EEED", cmyk: "0 / 4 / 5 / 2" },
  { name: "Hairceptional Casal", hex: "#275B6B", cmyk: "64 / 15 / 0 / 58" },
] as const;

const personality = ["Quality", "Attention to details", "Tribe (Hairceptional women tribe)", "Top notch customer experience", "Immersion in the brand experience", "Luxury"];
const toneWords = ["Fresh", "Vibrant", "Youthful", "Pop culture", "Just vibes"];

export default function HairceptionalPage() {
  return (
    <div className="hc">
      <header className="hc-hero">
        <p className="hc-over">Brand identity · Brand manual · Custom wigs</p>
        <h1>Stepping up your <em>hair game</em>.</h1>
        <p className="hc-lede">
          Hairceptional makes custom wigs and rejuvenates old ones. It didn't
          need a logo so much as a set of rules its team could actually follow
          — so the deliverable was a forty-page brand manual, written to be
          read rather than filed.
        </p>
        <ul className="hc-facts">
          <li><b>Role</b> Identity, brand manual, elements, photography direction</li>
          <li><b>Manual</b> 6 chapters — who we are · logo · colours · elements · typeface · photography</li>
          <li><b>Typeface</b> Now (Variant)</li>
        </ul>
      </header>

      {/* The voice — the thing that makes this manual different */}
      <section className="hc-quote">
        <div className="hc-quote-inner">
          <p>"This is a detailed document, that serves as a guide to use our brand identity correctly."</p>
          <small>…and then, in brackets, underneath: "No come dey form creative."</small>
        </div>
      </section>

      <section className="hc-section">
        <p className="hc-num">01 — Voice</p>
        <h2>A brand manual that talks like a person</h2>
        <p className="hc-body">
          Most manuals are written in the passive voice by someone who will
          never have to use them. This one is written in Lagos English, with
          the asides left in — "Abeg, no ever reason am" next to the pattern
          rule, "If you don't get, forget abbourit" after explaining that the
          typeface is called Now. The register isn't decoration: the brand's
          own tone is Fresh, Vibrant, Youthful, Pop culture, Just Vibes, and a
          manual that reads like a corporate memo would have contradicted it
          on page one.
        </p>
        <div className="hc-pair">
          <figure className="hc-fig"><img src={intro} alt="The manual's opening page" /></figure>
          <figure className="hc-fig"><img src={tone} alt="Personality and tone pages" /></figure>
        </div>
        <div className="hc-cols">
          <div>
            <p className="hc-num">Personality</p>
            <ul className="hc-list">{personality.map((p) => <li key={p}>{p}</li>)}</ul>
          </div>
          <div>
            <p className="hc-num">Tone</p>
            <p className="hc-tone">{toneWords.join(" — ")}</p>
          </div>
        </div>
      </section>

      {/* Logo */}
      <section className="hc-section">
        <p className="hc-num">02 — Logo</p>
        <h2>One wordmark, one H</h2>
        <p className="hc-body">
          A wordmark with a full stop, and an iconmark that is just the H and
          the stop. The manual fixes four sizes — 80px, 40px, 20px and 8px
          horizontal — so whoever is placing it knows when to drop to the icon
          instead of guessing. Then the colour-use grid: every legal pairing of
          mark and ground, drawn out, so the answer is on the page.
        </p>
        <figure className="hc-fig"><img src={logo} alt="Wordmark, iconmark, scale, lock-up and safe zone" /></figure>
        <div className="hc-pair">
          <figure className="hc-fig"><img src={colourWord} alt="Colour use for the wordmark" /></figure>
          <figure className="hc-fig"><img src={colourIcon} alt="Colour use for the iconmark" /></figure>
        </div>
      </section>

      {/* Colour — live */}
      <section className="hc-section">
        <p className="hc-num">03 — Colours</p>
        <h2>Four colours, and a ratio</h2>
        <p className="hc-body">
          Named, not numbered. Burgundy carries the brand, Chestnut Rose does
          the warmth, Fantasy is the field almost everything sits on, and a
          sliver of Casal keeps it from going entirely warm. The manual also
          fixes the proportion — which is the part most palettes leave out.
        </p>
        <ul className="hc-swatches">
          {colours.map((c) => (
            <li key={c.hex} style={{ background: c.hex, color: ["#F9EEED"].includes(c.hex) ? "#812528" : "#F9EEED" }}>
              <b>{c.name}</b>
              <code>{c.hex}</code>
              <code style={{ opacity: .6 }}>C {c.cmyk}</code>
            </li>
          ))}
        </ul>
        <div className="hc-dominance" aria-label="Colour dominance: burgundy primary, rose accent, fantasy field, casal sliver">
          <span style={{ background: "#812528", width: "44%" }} />
          <span style={{ background: "#D4554D", width: "34%" }} />
          <span style={{ background: "#F9EEED", width: "18%" }} />
          <span style={{ background: "#275B6B", width: "4%" }} />
        </div>
        <div className="hc-dom-label"><span>Primary</span><span>Accent</span><span>Field</span></div>
        <figure className="hc-fig" style={{ marginTop: 30 }}><img src={palette} alt="The manual's colour palette and usage pages" /></figure>
      </section>

      {/* Elements */}
      <section className="hc-section hc-section-rose">
        <div className="hc-inner">
          <p className="hc-num">04 — Elements</p>
          <h2>Organic shapes, with a rule</h2>
          <p className="hc-body">
            "We are a free and organic hair brand, so it makes sense for that
            organic and natural feel to be represented in our graphic
            elements." Torn blobs, scribbled hatching, soft arcs. The rule that
            makes them work: keep them randomized and at the edge, so the
            centre stays clear for text. And the prohibition, stated flatly —
            no repetitive pattern, ever.
          </p>
          <div className="hc-pair">
            <figure className="hc-fig"><img src={elements} alt="The elements, placed at the edges" /></figure>
            <figure className="hc-fig"><img src={rules} alt="Don'ts, and the You Can / You Can't spread" /></figure>
          </div>
        </div>
      </section>

      {/* Type */}
      <section className="hc-section">
        <p className="hc-num">05 — Typeface</p>
        <h2>The typeface is called Now</h2>
        <p className="hc-body">
          One family, one variant, full character set specified. The manual's
          explanation is worth quoting in full: "Our typeface is 'Now', not
          like literally 'Now' obviously — but the name of the typeface is
          'Now'. You get? If you don't get, forget abbourit."
        </p>
        <div className="hc-pair">
          <figure className="hc-fig"><img src={typeface} alt="The Now specimen" /></figure>
          <figure className="hc-fig"><img src={women} alt="Customer names set in Now, with the Hairceptional woman badge" /></figure>
        </div>
      </section>

      {/* Photography */}
      <section className="hc-section">
        <p className="hc-num">06 — Photography</p>
        <h2>More humans, less Canva heads</h2>
        <p className="hc-body">
          The last chapter is a position, not a spec: "We really love our
          amazing wigs, but we love our beautiful Hairceptional women even
          more." Real customers, named — Joy, Janet, Tonia, Stephanie, Success,
          Christiana, Blessing, Nkiru, Mariam, Nkem — instead of stock heads.
          For a wig brand that is a product decision as much as an art one.
        </p>
        <figure className="hc-fig"><img src={photography} alt="The photography grid of real Hairceptional customers" /></figure>
        <figure className="hc-fig"><img src={humans} alt="The 'More humans, less Canva heads' page" /></figure>
      </section>

      <footer className="hc-foot">
        <p>Identity and brand manual by Daramola Olumide.</p>
      </footer>
    </div>
  );
}
