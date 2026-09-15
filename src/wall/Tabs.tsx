// The filter above the wall: a segmented control, one segment per family of
// work. Borrowed shape (Lotachi Anidi's portfolio), his materials — the same
// glass and radius the tiles use, and Archivo caps to match the bar.
//
// A tab with nothing in it is not rendered. Daramola has four families on
// paper but only some of them are hung yet, and a tab that opens onto an
// empty wall reads as broken, where a tab that isn't there yet reads as
// nothing at all. Wall.tsx counts first and passes only the live ones.
//
// The white pill is ONE element that slides, not a background on each tab.
// That is the whole trick: it is measured off the active button after layout
// (useLayoutEffect, before paint) so it never lands a frame late, and it is
// re-measured on resize because the buttons change width with the type.

import { useLayoutEffect, useRef, useState } from "react";

export function Tabs<T extends string>({
  tabs, value, onChange,
}: {
  tabs: { id: T; label: string }[];
  value: T;
  onChange: (id: T) => void;
}) {
  const wrap = useRef<HTMLDivElement>(null);
  const [pill, setPill] = useState<{ x: number; w: number } | null>(null);

  useLayoutEffect(() => {
    const place = () => {
      const el = wrap.current?.querySelector<HTMLElement>(`[data-tab="${value}"]`);
      if (!el || !wrap.current) return;
      setPill({ x: el.offsetLeft, w: el.offsetWidth });
    };
    place();
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [value, tabs.length]);

  if (tabs.length < 2) return null;

  return (
    <div className="tabs" ref={wrap} role="tablist" aria-label="Filter work">
      <span
        className="tabs-pill"
        aria-hidden="true"
        style={pill ? { transform: `translateX(${pill.x}px)`, width: pill.w } : { opacity: 0 }}
      />
      {tabs.map((t) => (
        <button
          key={t.id}
          type="button"
          data-tab={t.id}
          role="tab"
          aria-selected={t.id === value}
          className={"tabs-tab" + (t.id === value ? " is-active" : "")}
          onClick={() => onChange(t.id)}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
