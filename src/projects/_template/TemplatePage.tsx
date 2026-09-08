// import "@fontsource-variable/<your-font>";
import "./template.css";

export default function TemplatePage() {
  return (
    <div className="tp">
      <header className="tp-hero">
        <p className="tp-kicker">Brand identity · 2023</p>
        <h1>Project name</h1>
        <p className="tp-lede">What it is, in two sentences. Who it was for.</p>
      </header>
      <section className="tp-section">
        <h2>What I made</h2>
        {/* images, marks, type specimens */}
      </section>
      <section className="tp-section">
        <h2>How I got there</h2>
        {/* the decisions, not the process diary */}
      </section>
    </div>
  );
}
