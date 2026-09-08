// Entry point. Two routes, that's the whole site:
//   /              the wall
//   /work/:slug    whichever project page the registry maps that slug to
//
// `Suspense` is what shows while a lazy page's code downloads. Kept plain on
// purpose — it renders on the wall's plaster, before the project's colours
// arrive, so it must not clash with any of them.

import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, HashRouter, Routes, Route, useParams, Link } from "react-router-dom";

// The single-file preview build has no server to rewrite /work/x → index.html,
// so it uses #/work/x instead. Production uses real URLs.
const Router = import.meta.env.VITE_HASH_ROUTER === "1" ? HashRouter : BrowserRouter;
import { Wall } from "./wall/Wall";
import { bySlug } from "./projects";

function Work() {
  const { slug = "" } = useParams();
  const project = bySlug(slug);

  if (!project?.Page) {
    return (
      <main style={{ padding: 32, fontFamily: "system-ui" }}>
        <p>Nothing hung here yet.</p>
        <Link to="/">Back to the wall</Link>
      </main>
    );
  }
  const Page = project.Page;
  return (
    <>
      <Link to="/" className="back-to-wall">← the wall</Link>
      <Suspense fallback={<div style={{ minHeight: "100dvh" }} />}>
        <Page />
      </Suspense>
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Wall />} />
        <Route path="/work/:slug" element={<Work />} />
        <Route path="*" element={<Wall />} />
      </Routes>
    </Router>
  </StrictMode>
);
