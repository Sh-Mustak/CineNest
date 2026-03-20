// src/components/movie/HeroInfoBlock.jsx
// ─────────────────────────────────────────────────────────────────
// Left panel: badge, stars, title, meta, description, CTA buttons.
//
// Props:
//   movie   — current movie object
//   infoRef — forwarded ref so HeroSection can toggle CSS classes
//             directly on this div (avoids setState inside useEffect)
// ─────────────────────────────────────────────────────────────────

export default function HeroInfoBlock({ movie, infoRef }) {
  if (!movie) return null;

  return (
    <div
      ref={infoRef}
      // Start visible. HeroSection.jsx toggles hero-info-out/in on this
      // element imperatively via the ref — no React state involved.
      className="hero-info-trans hero-info-in w-full lg:max-w-[500px] xl:max-w-[560px]"
    >
      {/* ── Badge ─────────────────────────────────────────── */}
      <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 text-primary px-3 py-1.5 rounded-sm text-[10px] font-bold uppercase tracking-[2.5px] mb-3">
        <span className="w-1.5 h-1.5 bg-primary rounded-full hero-blink" />
        {movie.badge}
      </div>

      {/* ── Stars + IMDb Score ────────────────────────────── */}
      <div className="flex items-center gap-3 mb-2">
        <div className="flex items-center text-yellow-500">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className="material-symbols-outlined text-sm"
              style={{ fontVariationSettings: star <= movie.stars ? "'FILL' 1" : "'FILL' 0" }}
            >
              star
            </span>
          ))}
        </div>
        <span className="text-white font-bold text-sm">{movie.rating}/10</span>
        <span className="text-[9px] font-bold text-white/30 tracking-widest uppercase">IMDb</span>
      </div>

      {/* ── Title ─────────────────────────────────────────── */}
      <h1
        className="font-black text-white tracking-tight leading-[0.9] mb-3"
        style={{ fontSize: "clamp(36px, 7.5vw, 88px)", textShadow: "0 4px 36px rgba(0,0,0,0.55)" }}
      >
        {movie.title}
      </h1>

      {/* ── Meta ──────────────────────────────────────────── */}
      <div className="flex items-center flex-wrap gap-3 text-slate-300 font-medium mb-3 md:mb-4">
        <span className="text-[13px]">{movie.year}</span>
        <span className="h-1 w-1 rounded-full bg-primary" />
        <span className="text-[13px]">{movie.dur}</span>
        <span className="h-1 w-1 rounded-full bg-primary" />
        <span className="text-[12px] bg-white/[0.07] border border-white/10 px-2.5 py-0.5 rounded-full text-white/60">
          {movie.genre}
        </span>
      </div>

      {/* ── Description ───────────────────────────────────── */}
      <p
        className="text-slate-300 leading-relaxed mb-6 md:mb-7 max-w-none md:max-w-[430px]"
        style={{ fontSize: "clamp(12px, 1.35vw, 15px)" }}
      >
        {movie.desc}
      </p>

      {/* ── CTA Buttons ───────────────────────────────────── */}
      <div className="flex items-center gap-3 flex-wrap">
        <button className="bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold flex items-center gap-2 transition-all active:scale-95 hover:scale-105">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
            play_arrow
          </span>
          Watch Now
        </button>

        <button className="bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold flex items-center gap-2 transition-all">
          <span className="material-symbols-outlined">add</span>
          <span className="hidden sm:inline">My </span>Watchlist
        </button>

        <button className="hidden sm:flex w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 items-center justify-center transition-all backdrop-blur-sm">
          <span className="material-symbols-outlined text-white">info</span>
        </button>
      </div>
    </div>
  );
}