// src/components/movie/HeroProgressBar.jsx
// ─────────────────────────────────────────────────────────────────
// The bottom control row: dot pills + numbered progress bar.
// Visible on ALL screen sizes (mobile, tablet, desktop).
//
// Props:
//   current         — active slide index
//   total           — total number of slides
//   progKey         — increments each slide change → resets animation
//   slideDuration   — how long each slide lasts in ms (e.g. 6000)
//   onDotClick      — (idx) => void
//   onProgressClick — (MouseEvent) => void
// ─────────────────────────────────────────────────────────────────

import { useEffect, useRef } from "react";

export default function HeroProgressBar({
  current,
  total,
  progKey,
  slideDuration,
  onDotClick,
  onProgressClick,
}) {
  const fillRef = useRef(null);

  // Reset + replay the CSS width transition every time progKey changes
  // (i.e. every time the slide advances)
  useEffect(() => {
    const el = fillRef.current;
    if (!el) return;

    // 1. Kill transition and snap back to 0%
    el.style.transition = "none";
    el.style.width      = "0%";

    // 2. Force the browser to repaint at 0%
    void el.offsetWidth;

    // 3. Animate to 100% over slideDuration ms
    el.style.transition = `width ${slideDuration}ms linear`;
    el.style.width      = "100%";
  }, [progKey, slideDuration]);

  return (
    <div className="flex items-center gap-2.5 mt-4 sm:mt-5 md:mt-6 w-full lg:max-w-[420px] lg:self-end">

      {/* ── Dot pills ─────────────────────────────────────── */}
      {/* Active dot = wide pill with primary glow              */}
      {/* Inactive dots = small circles, clickable             */}
      <div className="flex items-center gap-1.5 flex-shrink-0">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => onDotClick(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="rounded-full border-none outline-none cursor-pointer transition-all duration-500"
            style={
              i === current
                ? {
                    width:     "22px",
                    height:    "7px",
                    background: "var(--color-primary, #e60a0d)",
                    boxShadow:  "0 0 8px rgba(230,10,13,0.65)",
                  }
                : {
                    width:     "7px",
                    height:    "7px",
                    background: "rgba(255,255,255,0.25)",
                  }
            }
          />
        ))}
      </div>

      {/* ── Numbered progress bar ─────────────────────────── */}
      <div className="flex items-center gap-2 flex-1">
        {/* Current slide number */}
        <span className="text-[10px] sm:text-[11px] font-bold text-white/30 tabular-nums w-5 text-right flex-shrink-0">
          {String(current + 1).padStart(2, "0")}
        </span>

        {/* The bar — padded for a larger touch target on mobile */}
        <div
          className="relative flex-1 cursor-pointer group py-2 -my-2"
          onClick={onProgressClick}
        >
          <div className="relative h-[2px] rounded-full overflow-hidden"
               style={{ background: "rgba(255,255,255,0.13)" }}>
            {/* Animated fill */}
            <div
              ref={fillRef}
              className="absolute inset-y-0 left-0 h-full rounded-full"
              style={{
                background:  "var(--color-primary, #e60a0d)",
                width:       "0%",
                boxShadow:   "0 0 10px rgba(230,10,13,0.72)",
              }}
            />
            {/* Hover shimmer */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-full"
              style={{
                background: "linear-gradient(to right, transparent, rgba(230,10,13,0.1))",
              }}
            />
          </div>
        </div>

        {/* Total slide count */}
        <span className="text-[10px] sm:text-[11px] font-bold text-white tabular-nums w-5 flex-shrink-0">
          {String(total).padStart(2, "0")}
        </span>
      </div>

    </div>
  );
}