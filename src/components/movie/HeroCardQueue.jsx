// src/components/movie/HeroCardQueue.jsx
// ─────────────────────────────────────────────────────────────────
// UPDATED — now accepts `slides` array as a prop instead of
// importing heroMovies directly. Everything else is identical.
// ─────────────────────────────────────────────────────────────────

import { useEffect, useRef, useCallback } from "react";

export default function HeroCardQueue({ slides = [], currentIdx, isLg, onJump }) {
  const vpRef    = useRef(null);
  const nodesRef = useRef([]);
  const prevIdx  = useRef(currentIdx);

  const total = slides.length;

  // ── Slot geometry ────────────────────────────────────────────
  const G = isLg
    ? { aW: 168, aH: 252, sW: 124, sH: 192, gap: 14 }
    : { aW: 144, aH: 218, sW: 108, sH: 168, gap: 12 };

  const vpW      = G.aW + G.gap + G.sW + G.gap + G.sW;
  const vpH      = G.aH;
  const slotX    = [0, G.aW + G.gap, G.aW + G.gap + G.sW + G.gap];
  const offRight = vpW + 90;
  const offLeft  = -(G.aW + 90);

  // ── Apply slot position + size ───────────────────────────────
  const applySlot = useCallback(
    (nodeIdx, slot, isActive, instant = false) => {
      const el = nodesRef.current[nodeIdx];
      if (!el) return;

      const W  = isActive ? G.aW : G.sW;
      const H  = isActive ? G.aH : G.sH;
      const x  =
        slot === "offLeft"  ? offLeft  :
        slot === "offRight" ? offRight :
        slotX[slot];
      const opacity = isActive ? 1 : slot === 1 ? 0.62 : 0.35;

      if (instant) el.style.transition = "none";
      el.style.width       = W + "px";
      el.style.height      = H + "px";
      el.style.transform   = `translateX(${x}px)`;
      el.style.opacity     = opacity;
      el.style.borderColor = isActive ? "rgba(230,10,13,0.5)" : "rgba(255,255,255,0.09)";
      el.style.boxShadow   = isActive
        ? "0 0 0 1.5px rgba(230,10,13,0.38), 0 14px 44px rgba(230,10,13,0.18)"
        : "none";
      if (instant) { void el.offsetWidth; el.style.transition = ""; }
    },
    [G, slotX, offLeft, offRight]
  );

  // ── Fill card HTML + events ──────────────────────────────────
  const fillCard = useCallback(
    (nodeIdx, movieIdx, isActive) => {
      const el = nodesRef.current[nodeIdx];
      if (!el || !slides[movieIdx]) return;

      const m   = slides[movieIdx];
      const fSz = isActive ? "14px" : "11px";

      el.innerHTML = `
        <img
          src="${m.poster}"
          alt="${m.title}"
          style="position:absolute;inset:0;width:100%;height:100%;
                 object-fit:cover;transition:transform 5s ease-out"
        />
        <div style="
          position:absolute;inset:0;padding:10px;
          display:flex;flex-direction:column;justify-content:space-between;
          background:linear-gradient(to top,rgba(0,0,0,0.92) 0%,transparent 50%,rgba(0,0,0,0.18) 100%)
        ">
          <span style="font-size:8px;font-weight:700;letter-spacing:.12em;
                       text-transform:uppercase;color:rgba(230,10,13,0.82)">
            ${m.genre?.split("·")[0]?.trim() ?? ""}
          </span>
          <div>
            <div style="display:flex;align-items:center;gap:4px;margin-bottom:3px">
              <svg style="width:9px;height:9px;fill:#f5c518;flex-shrink:0" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0
                  00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0
                  00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0
                  00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0
                  00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0
                  00.951-.69l1.07-3.292z"/>
              </svg>
              <span style="font-size:9px;font-weight:700;color:#f5c518;line-height:1">
                ${m.rating}
              </span>
            </div>
            <div style="font-family:'Bebas Neue',sans-serif;font-size:${fSz};
                        letter-spacing:1.5px;color:#fff;line-height:1.15">
              ${m.title}
            </div>
            <div style="font-size:8px;color:rgba(255,255,255,0.42);margin-top:3px">
              ${m.year} · ${m.genre ?? ""}
            </div>
          </div>
        </div>
        ${isActive
          ? `<div style="position:absolute;top:8px;right:8px;width:24px;height:24px;
                         background:#e60a0d;border-radius:50%;
                         display:flex;align-items:center;justify-content:center;
                         box-shadow:0 0 12px rgba(230,10,13,0.7)">
               <svg style="width:10px;height:10px;fill:white" viewBox="0 0 24 24">
                 <path d="M8 5v14l11-7z"/>
               </svg>
             </div>`
          : `<div class="hero-card-hint"
                  style="position:absolute;inset:0;display:flex;align-items:center;
                         justify-content:center;opacity:0;transition:opacity .3s;pointer-events:none">
               <div style="width:32px;height:32px;border-radius:50%;
                           background:rgba(255,255,255,0.2);backdrop-filter:blur(4px);
                           border:1px solid rgba(255,255,255,0.28);
                           display:flex;align-items:center;justify-content:center">
                 <svg style="width:14px;height:14px;fill:white" viewBox="0 0 24 24">
                   <path d="M8 5v14l11-7z"/>
                 </svg>
               </div>
             </div>`
        }
      `;

      if (!isActive) {
        el.onmouseenter = () => {
          const hint = el.querySelector(".hero-card-hint");
          if (hint) hint.style.opacity = "1";
          el.style.opacity = "0.88";
        };
        el.onmouseleave = () => {
          const hint = el.querySelector(".hero-card-hint");
          if (hint) hint.style.opacity = "0";
          el.style.opacity = el.dataset.slotOpacity ?? "0.55";
        };
        el.onclick = () => onJump(movieIdx);
      } else {
        el.onmouseenter = null;
        el.onmouseleave = null;
        el.onclick      = null;
      }
    },
    [slides, onJump]
  );

  // ── Build 3 DOM nodes on mount ───────────────────────────────
  useEffect(() => {
    if (!vpRef.current || total === 0) return;
    vpRef.current.innerHTML = "";
    nodesRef.current = [];

    for (let i = 0; i < 3; i++) {
      const el = document.createElement("div");
      el.className = "hero-card-item";
      vpRef.current.appendChild(el);
      nodesRef.current.push(el);
    }

    const idxs = [
      currentIdx % total,
      (currentIdx + 1) % total,
      (currentIdx + 2) % total,
    ];
    idxs.forEach((mIdx, ni) => {
      applySlot(ni, ni, ni === 0, true);
      nodesRef.current[ni].dataset.slotOpacity = ni === 0 ? "1" : ni === 1 ? "0.62" : "0.35";
      fillCard(ni, mIdx, ni === 0);
    });

    prevIdx.current = currentIdx;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total]); // rebuild when data arrives

  // ── Animate queue on currentIdx change ──────────────────────
  useEffect(() => {
    if (currentIdx === prevIdx.current || total === 0) return;
    prevIdx.current = currentIdx;

    const [n0, n1, n2] = nodesRef.current;
    if (!n0 || !n1 || !n2) return;

    // n0 exits left
    n0.style.transform = `translateX(${offLeft}px)`;
    n0.style.opacity   = "0";

    // n1 → active slot 0
    applySlot(1, 0, true);
    n1.dataset.slotOpacity = "1";
    fillCard(1, currentIdx % total, true);

    // n2 → next slot 1
    applySlot(2, 1, false);
    n2.dataset.slotOpacity = "0.62";
    fillCard(2, (currentIdx + 1) % total, false);

    // Recycle n0 to slot 2 from the right
    const t = setTimeout(() => {
      const next3 = (currentIdx + 2) % total;
      n0.style.transition  = "none";
      n0.style.transform   = `translateX(${offRight}px)`;
      n0.style.opacity     = "0.35";
      n0.style.width       = G.sW + "px";
      n0.style.height      = G.sH + "px";
      n0.style.borderColor = "rgba(255,255,255,0.09)";
      n0.style.boxShadow   = "none";
      n0.dataset.slotOpacity = "0.35";
      fillCard(0, next3, false);
      void n0.offsetWidth;
      n0.style.transition = "";
      n0.style.transform  = `translateX(${slotX[2]}px)`;
      n0.style.opacity    = "0.35";

      nodesRef.current = [n1, n2, n0];
    }, 580);

    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIdx]);

  return (
    <div
      ref={vpRef}
      style={{
        position: "relative",
        width:     vpW + "px",
        height:    vpH + "px",
        flexShrink: 0,
        overflow:  "hidden",
      }}
    />
  );
}