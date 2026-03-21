/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import useHeroSlider from "../../hooks/useHeroSlider";
import HeroBackground from "./HeroBackground";
import HeroCardQueue from "./HeroCardQueue";
import HeroInfoBlock from "./HeroInfoBlock";
import HeroProgressBar from "./HeroProgressBar";
import HeroSkeleton from "./HeroSkeleton";

export default function HeroSection({ movies }) {
  const slides = movies && movies.length > 0 ? movies : [];
  const isLoading = slides.length === 0;

  // ── Slider (only active when real data is present) ─────────
  const {
    current,
    progKey,
    goTo,
    onTouchStart,
    onTouchEnd,
    onProgressClick,
    SLIDE_DURATION,
  } = useHeroSlider(slides);

  // ── Responsive breakpoints ─────────────────────────────────
  const [isMd, setIsMd] = useState(window.innerWidth >= 768);
  const [isLg, setIsLg] = useState(window.innerWidth >= 1024);
  useEffect(() => {
    const fn = () => {
      setIsMd(window.innerWidth >= 768);
      setIsLg(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  // ── Info text crossfade (imperative DOM, no setState) ──────
  const infoRef = useRef(null);
  const fadeTimer = useRef(null);
  useEffect(() => {
    const el = infoRef.current;
    if (!el) return;
    el.classList.add("hero-info-out");
    el.classList.remove("hero-info-in");
    clearTimeout(fadeTimer.current);
    fadeTimer.current = setTimeout(() => {
      el.classList.remove("hero-info-out");
      el.classList.add("hero-info-in");
    }, 380);
    return () => clearTimeout(fadeTimer.current);
  }, [current]);

  // ── Show skeleton while API data is loading ────────────────
  if (isLoading) return <HeroSkeleton />;

  const movie = slides[current];
  if (!movie) return null;

  return (
    <section
      className="hero-grain relative w-full overflow-hidden "
      style={{ height: "100svh", minHeight: "580px" }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <HeroBackground slides={slides} />

      <div className="absolute inset-0 z-10 flex flex-col justify-end px-4 sm:px-8 md:px-10 lg:px-16 pb-6 sm:pb-8 md:pb-10 lg:pb-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-10 w-full">
          <HeroInfoBlock movie={movie} infoRef={infoRef} />

          {isLg && (
            <HeroCardQueue
              slides={slides}
              currentIdx={current}
              isLg={isLg}
              onJump={goTo}
            />
          )}
        </div>

        <HeroProgressBar
          current={current}
          total={slides.length}
          progKey={progKey}
          slideDuration={SLIDE_DURATION}
          onDotClick={goTo}
          onProgressClick={onProgressClick}
        />
      </div>
    </section>
  );
}
