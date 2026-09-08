// The NewDara monogram — an N cut out of a D.
//
// This is the one piece of Daramola's own identity on the wall, and it is a
// real drawn outline, lifted path-by-path out of his own file:
//   iCloud/Desktop/NewDara/price listing.ai, page 1  (pdftocairo -svg)
// Everything else about the wall stays neutral so the project pages can be
// loud. The mark is small on purpose; it holds at 24px.

export function Monogram({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 62.66 71.88" role="img" aria-label="NewDara">
      <path d="M 62.66 35.547 C 62.66 45.516 59.145 54.062 52.117 61.188 C 45.09 68.316 36.578 71.879 26.574 71.879 L 8.629 71.879 C 4.641 71.879 2.156 71.062 1.176 69.426 C 0.395 68.055 0 65.961 0 63.152 L 0 58.328 L 13.895 58.328 L 13.895 36.59 L 32.703 58.328 L 45.266 58.328 L 45.266 13.551 L 32.055 13.551 L 32.055 35.613 L 13.246 13.551 L 0 13.551 L 0 8.633 C 0 7.062 0.051 5.918 0.148 5.199 C 0.246 4.48 0.555 3.629 1.078 2.648 C 1.996 0.883 4.543 0 8.727 0 L 26.871 0.098 C 36.348 0.098 44.684 3.516 51.875 10.348 C 59.062 17.18 62.66 25.578 62.66 35.547" fill="currentColor" />
    </svg>
  );
}
