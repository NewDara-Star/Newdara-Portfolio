// Patch's page, in Patch's own language.
//
// Same rule as every project page: only its own font, CSS and images; nothing
// from ../../wall. Every colour, gradient, type size and section name below
// is lifted from the real 37-page guideline (iCloud/Desktop/patch/Patch Brand
// identity Guideline-compressed.pdf, 2022) — read out of the document, not
// invented. Images are that guide's own pages at 130 dpi.

import "@fontsource-variable/sora";
import "./patch.css";

import wordmark from "./assets/wordmark.webp";
import icon from "./assets/icon.webp";
import spacing from "./assets/spacing.webp";
import illustration from "./assets/illustration.webp";
import icons from "./assets/icons.webp";
import pattern from "./assets/pattern.webp";
import screens from "./assets/screens.webp";
import social from "./assets/social.webp";
import tees from "./assets/tees.webp";
import billboard from "./assets/billboard.webp";
import desk from "./assets/desk.webp";

// 3.0 Primary colours + 3.1 accent colours, exactly as the guide lists them.
const primary = [
  { name: "Dark Blue", hex: "#00002B", cmyk: "17 / 17 / 0 / 83" },
  { name: "Patch Blue", hex: "#1D43F5", cmyk: "85 / 70 / 0 / 4" },
  { name: "Light Blue", hex: "#0273FF", cmyk: "99 / 55 / 0 / 0" },
] as const;

const accent = [
  { name: "Orange", hex: "#FFA73E" },
  { name: "Alert Red", hex: "#FD3259" },
  { name: "Green", hex: "#36FF9D" },
  { name: "Light Gray", hex: "#F3F3F3" },
  { name: "White", hex: "#FFFFFF" },
  { name: "Charcoal", hex: "#151515" },
] as const;

// 3.2 Gradients.
const gradients = [
  { name: "Dark", from: "#05054B", to: "#00002B" },
  { name: "Patch", from: "#1D43F5", to: "#0273FF" },
  { name: "Orange", from: "#F39651", to: "#FFCE4E" },
  { name: "Green", from: "#36FF9D", to: "#00BFCA" },
  { name: "Light", from: "#5D98FB", to: "#62E0FD" },
] as const;

// 4.2 Typography hierarchy — the guide's own table, rendered live in Sora.
const scale = [
  { role: "Heading 1", weight: 700, size: 96, ls: "-1.5%", sample: "Heading 1" },
  { role: "Heading 2", weight: 300, size: 60, ls: "-0.5%", sample: "Heading 2" },
  { role: "Heading 3", weight: 400, size: 48, ls: "0%", sample: "Heading 3" },
  { role: "Subtitle 1", weight: 300, size: 34, ls: "0.25%", sample: "Subtitle 1" },
  { role: "Subtitle 2", weight: 500, size: 24, ls: "0%", sample: "Subtitle 2" },
  { role: "Body", weight: 400, size: 16, ls: "0%", sample: "Body" },
  { role: "Button", weight: 500, size: 14, ls: "1.25%", sample: "Button" },
  { role: "Caption", weight: 400, size: 12, ls: "0.4%", sample: "Caption" },
  { role: "Overline", weight: 300, size: 12, ls: "1.5%", sample: "overline" },
] as const;

const chapters = [
  ["1.0", "Intro"],
  ["2.0", "Logo"],
  ["3.0", "Colours"],
  ["4.0", "Typography"],
  ["5.0", "Pattern and graphics"],
  ["6.0", "Brand in use"],
] as const;

export default function PatchPage() {
  return (
    <div className="pt">
      <header className="pt-hero">
        <p className="pt-over">Brand identity · 2022 · Lagos</p>
        <h1>
          Getting a thing<br />from <em>A</em> to <em>B</em>.
        </h1>
        <p className="pt-sub">
          Patch is a company providing supply-chain services through
          supply-chain technology. Supply chain is a simple idea with a hard
          middle: move a product from one point to another. For physical goods
          those points are places; for digital ones they're addresses. The
          identity had to hold both.
        </p>
        <ul className="pt-facts">
          <li><b>Role</b> Identity, illustration system, product UI, 37-page guideline</li>
          <li><b>Built</b> Logo suite · 9-colour palette · 5 gradients · Sora type scale · pattern · app</li>
          <li><b>Credit</b> Designed by NewDara</li>
        </ul>
      </header>

      {/* The mark */}
      <section className="pt-section">
        <p className="pt-num">2.0</p>
        <h2>Logo</h2>
        <p className="pt-body">
          A lowercase p whose bowl opens into an arrow — the package and the
          route in one shape. It works as a full logotype and, cut down, as a
          standalone icon for tight spaces.
        </p>
        <figure className="pt-fig pt-fig-dark">
          <img src={wordmark} alt="The Patch logotype, white on charcoal" />
        </figure>
        <div className="pt-pair">
          <figure className="pt-fig">
            <img src={icon} alt="The Patch icon in four colourways" />
            <figcaption>2.4 — the icon on dark blue, white, light gray and Patch blue.</figcaption>
          </figure>
          <figure className="pt-fig">
            <img src={spacing} alt="Optical spacing at four sizes" />
            <figcaption>2.1 — optical spacing. Tiny under 29px, small to 99, medium to 199, large above.</figcaption>
          </figure>
        </div>
      </section>

      {/* Colour — live, from the guide's own values */}
      <section className="pt-section pt-section-dark">
        <div className="pt-inner">
          <p className="pt-num">3.0</p>
          <h2>Colours</h2>
          <p className="pt-body">
            Three blues carry the brand; five accents do the signalling. Every
            swatch below is the guide's own hex, and the gradients are the real
            stops — rendered live, not screenshotted.
          </p>
          <ul className="pt-swatches">
            {primary.map((c) => (
              <li key={c.hex} className="pt-swatch pt-swatch-lg" style={{ background: c.hex }}>
                <b>{c.name}</b>
                <code>{c.hex}</code>
                <span>C {c.cmyk}</span>
              </li>
            ))}
          </ul>
          <ul className="pt-swatches pt-swatches-sm">
            {accent.map((c) => (
              <li key={c.hex} className="pt-swatch" style={{ background: c.hex }}
                data-ink={["#FFFFFF", "#F3F3F3", "#36FF9D", "#FFA73E"].includes(c.hex) ? "" : undefined}>
                <b>{c.name}</b>
                <code>{c.hex}</code>
              </li>
            ))}
          </ul>
          <h3 className="pt-h3">3.2 Gradients</h3>
          <ul className="pt-grads">
            {gradients.map((g) => (
              <li key={g.name} style={{ background: `linear-gradient(150deg, ${g.from}, ${g.to})` }}>
                <b>{g.name}</b>
                <code>{g.from} → {g.to}</code>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Type — the guide's table, live */}
      <section className="pt-section">
        <p className="pt-num">4.0</p>
        <h2>Typography</h2>
        <p className="pt-body">
          Sora, variable, for everything — a geometric grotesque with enough
          width to stay friendly at 96px and enough clarity to survive at 12.
          The guide fixes nine roles; this is that table, set in the real face.
        </p>
        <ul className="pt-scale">
          {scale.map((s) => (
            <li key={s.role}>
              <span className="pt-scale-meta">
                <b>{s.role}</b>
                {s.weight} · {s.size}px · {s.ls}
              </span>
              <span className="pt-scale-sample"
                style={{ fontWeight: s.weight, fontSize: `clamp(18px, ${s.size / 14}vw, ${s.size}px)`, letterSpacing: s.ls.replace("%", "") + "%" }}>
                {s.sample}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Illustration + pattern */}
      <section className="pt-section pt-section-tint">
        <div className="pt-inner">
          <p className="pt-num">5.0</p>
          <h2>Pattern and graphics</h2>
          <p className="pt-body">
            A flat character set that puts people on bikes, in cars and behind
            phones, drawn to sit on the blues; Feather for iconography; and a
            dot-field pattern that fills a panel without competing with the
            logo.
          </p>
          <figure className="pt-fig"><img src={illustration} alt="Two Patch characters beside the words 'This is Patch'" /></figure>
          <div className="pt-pair">
            <figure className="pt-fig"><img src={icons} alt="The illustration and icon set: riders, vehicles, phones" /></figure>
            <figure className="pt-fig"><img src={pattern} alt="The brand pattern used across three panels" /></figure>
          </div>
        </div>
      </section>

      {/* In use */}
      <section className="pt-section">
        <p className="pt-num">6.0</p>
        <h2>Brand in use</h2>
        <p className="pt-body">
          The app is where the identity does its real work: three onboarding
          screens — request a ride, confirm it, track your rider — then out
          into merch, social and a board on the Third Mainland.
        </p>
        <figure className="pt-fig"><img src={screens} alt="Three Patch app onboarding screens" /></figure>
        <div className="pt-pair">
          <figure className="pt-fig"><img src={social} alt="Patch on Instagram and in a phone mockup" /></figure>
          <figure className="pt-fig"><img src={desk} alt="Patch notebook and laptop mockup" /></figure>
        </div>
        <div className="pt-pair">
          <figure className="pt-fig"><img src={tees} alt="Patch core-team t-shirts, front and back" /></figure>
          <figure className="pt-fig"><img src={billboard} alt="A Patch billboard over a Lagos expressway" /></figure>
        </div>
      </section>

      {/* The guide */}
      <section className="pt-section pt-section-blue">
        <div className="pt-inner">
          <h2>The guideline</h2>
          <p className="pt-body">
            Thirty-seven pages, six chapters, handed over with the master file
            so the team could keep building without me.
          </p>
          <ol className="pt-chapters">
            {chapters.map(([n, t]) => (
              <li key={n}><span>{n}</span>{t}</li>
            ))}
          </ol>
        </div>
      </section>

      <footer className="pt-foot">
        <p>Identity, illustration and guideline by Daramola Olumide · NewDara, 2022.</p>
      </footer>
    </div>
  );
}
