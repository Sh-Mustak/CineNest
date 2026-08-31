// src/hooks/useHeroSlider.js
// ─────────────────────────────────────────────────────────────────
// Clean rewrite that fixes two problems:
//
// PROBLEM 1 — "setState in effect" warning:
//   setCurrent / setProgKey were called directly inside useEffect
//   bodies. React warns against this because it causes cascading
//   renders. Fix: only call setState from event handlers (goTo,
//   onTouchEnd, onProgressClick) — never inside useEffect.
//
// PROBLEM 2 — Background reverting after 2+ transitions:
//   Managing clip-path via both CSS classes AND inline styles
//   created conflicts. A slide that was previously active kept its
//   old open clip-path value and would reappear later.
//   Fix: ALL background state lives in a single ref (`activeBgIdx`).
//   switchBg() is a plain function that touches exactly 2 DOM nodes
//   per transition — prev (snap shut) and next (sweep open).
//   No CSS classes involved at all for the transition logic.
// ─────────────────────────────────────────────────────────────────

import { useState, useEffect, useRef, useCallback } from "react";

const SLIDE_DURATION = 10000;

// ── Pure DOM helper — switches background from prevIdx → nextIdx ──
// Called from event handlers only (never inside useEffect).
// Touches exactly 2 DOM nodes per call. No class toggling.
function switchBg(prevIdx, nextIdx) {
  const prevEl = document.getElementById(`hero-bg-${prevIdx}`);
  const nextEl = document.getElementById(`hero-bg-${nextIdx}`);

  // 1. Snap the outgoing slide shut instantly (no animation)
  if (prevEl && prevIdx !== nextIdx) {
    prevEl.style.transition = "none";
    prevEl.style.clipPath   = "inset(0 100% 0 0)";
    // Restore transition after the snap has painted
    requestAnimationFrame(() => {
      if (prevEl) prevEl.style.transition = "";
    });
  }

  // 2. Sweep the incoming slide open (right → left)
  if (nextEl) {
    // Ensure it starts fully hidden with no transition
    nextEl.style.transition = "none";
    nextEl.style.clipPath   = "inset(0 100% 0 0)";
    // Force the browser to register the hidden state before animating
    void nextEl.offsetWidth;
    // Now re-enable the CSS transition and open it
    nextEl.style.transition = "";
    nextEl.style.clipPath   = "inset(0 0% 0 0)";
  }
}

export default function useHeroSlider(slides = []) {
  const total = slides.length || 1;

  // React state — only changes that need a re-render live here
  const [current,   setCurrent]   = useState(0);
  const [animating, setAnimating] = useState(false);
  const [progKey,   setProgKey]   = useState(0);

  const timerRef   = useRef(null);
  const touchXRef  = useRef(0);
  const goToRef    = useRef(null);
  // Source of truth for which BG is open — lives in a ref, not state
  const activeBgIdx = useRef(0);

  // ── Auto-advance timer ───────────────────────────────────────
  // Restarted when `total` changes (new data arrived from API).
  // We read activeBgIdx.current inside the interval so we always
  // have the latest index without a stale closure.
  useEffect(() => {
    if (total <= 1) return;
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      goToRef.current?.((activeBgIdx.current + 1) % total);
    }, SLIDE_DURATION);
    return () => clearInterval(timerRef.current);
  }, [total]);

  // ── Core goTo — called from user interactions only ───────────
  const goTo = useCallback(
    (idx) => {
      if (idx === activeBgIdx.current || animating) return;

      setAnimating(true);

      // Switch the background (pure DOM, no setState)
      switchBg(activeBgIdx.current, idx);

      // Update the ref immediately (synchronous, no re-render)
      activeBgIdx.current = idx;

      // Update React state (triggers re-render for info text, dots, etc.)
      setCurrent(idx);
      setProgKey((k) => k + 1);

      // Restart the auto-advance timer from this new slide
      clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        goToRef.current?.((activeBgIdx.current + 1) % total);
      }, SLIDE_DURATION);

      // Release animation lock after card queue finishes (~750ms)
      setTimeout(() => setAnimating(false), 750);
    },
    [animating, total]
    // Note: `current` is intentionally NOT in the dep array.
    // We use activeBgIdx.current (a ref) for the "previous" check
    // so the closure never goes stale between renders.
  );

  // Keep goToRef in sync so timer closures always call the latest goTo
  useEffect(() => { goToRef.current = goTo; }, [goTo]);

  // ── Touch / swipe handlers ───────────────────────────────────
  const onTouchStart = useCallback((e) => {
    touchXRef.current = e.touches[0].clientX;
  }, []);

  const onTouchEnd = useCallback((e) => {
    const dx = e.changedTouches[0].clientX - touchXRef.current;
    if (Math.abs(dx) > 48) {
      const next = dx < 0
        ? (activeBgIdx.current + 1) % total
        : (activeBgIdx.current - 1 + total) % total;
      goToRef.current?.(next);
    }
  }, [total]);

  // ── Progress bar click ───────────────────────────────────────
  const onProgressClick = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pct  = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const idx  = Math.min(Math.floor(pct * total), total - 1);
    goToRef.current?.(idx);
  }, [total]);

  return {
    current,
    animating,
    progKey,
    goTo,
    onTouchStart,
    onTouchEnd,
    onProgressClick,
    SLIDE_DURATION,
    total,
  };
}