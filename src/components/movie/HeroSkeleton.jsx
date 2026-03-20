// src/components/movie/HeroSkeleton.jsx

export default function HeroSkeleton() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#0a0505]"
      style={{ height: "100svh", minHeight: "580px" }}
    >
      {/* Shimmer keyframe */}
      <style>{`
        @keyframes hero-shimmer {
          0%   { background-position: -700px 0; }
          100% { background-position:  700px 0; }
        }
        .hero-sk {
          background: linear-gradient(
            90deg,
            rgba(255,255,255,0.04) 25%,
            rgba(255,255,255,0.10) 50%,
            rgba(255,255,255,0.04) 75%
          );
          background-size: 700px 100%;
          animation: hero-shimmer 1.6s infinite linear;
          border-radius: 6px;
        }
      `}</style>

      {/* Dim background placeholder */}
      <div className="absolute inset-0 bg-[rgba(255,255,255,0.02)]" />

      {/* Bottom gradient — matches real hero */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(10,5,5,1) 0%, rgba(10,5,5,0.7) 30%, transparent 100%)",
        }}
      />

      {/* Content area */}
      <div className="absolute inset-0 flex flex-col justify-end px-4 sm:px-8 md:px-10 lg:px-16 pb-6 sm:pb-8 md:pb-10 lg:pb-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-10 w-full">
          {/* Left — info block skeleton */}
          <div className="w-full lg:max-w-[500px] space-y-3">
            <div className="hero-sk h-6 w-28" />
            <div className="hero-sk h-4 w-36" />
            <div className="hero-sk h-14 sm:h-16 md:h-20 w-4/5" />
            <div className="flex gap-3">
              <div className="hero-sk h-4 w-12" />
              <div className="hero-sk h-4 w-16" />
              <div className="hero-sk h-4 w-28" />
            </div>
            <div className="space-y-2 pt-1">
              <div className="hero-sk h-3.5 w-full max-w-md" />
              <div className="hero-sk h-3.5 w-5/6 max-w-md" />
              <div className="hero-sk h-3.5 w-3/4 max-w-md hidden sm:block" />
            </div>
            <div className="flex gap-3 pt-2">
              <div className="hero-sk h-12 w-32 rounded-xl" />
              <div className="hero-sk h-12 w-32 rounded-xl" />
            </div>
          </div>

          {/* Right — card queue skeleton (tablet + desktop only) */}
          <div className="hidden md:flex items-end gap-3 flex-shrink-0">
            <div
              className="hero-sk rounded-2xl"
              style={{ width: 168, height: 252 }}
            />
            <div
              className="hero-sk rounded-2xl opacity-60"
              style={{ width: 124, height: 192 }}
            />
            <div
              className="hero-sk rounded-2xl opacity-40"
              style={{ width: 124, height: 192 }}
            />
          </div>
        </div>

        {/* Progress bar skeleton */}
        <div className="flex items-center gap-3 mt-5 w-full lg:max-w-[420px] lg:self-end">
          <div className="flex gap-1.5">
            <div
              className="hero-sk rounded-full"
              style={{ width: 22, height: 7 }}
            />
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="hero-sk rounded-full"
                style={{ width: 7, height: 7 }}
              />
            ))}
          </div>
          <div className="flex items-center gap-2 flex-1">
            <div className="hero-sk h-[2px] w-5 rounded-full" />
            <div className="hero-sk h-[2px] flex-1 rounded-full" />
            <div className="hero-sk h-[2px] w-5 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
