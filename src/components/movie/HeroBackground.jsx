// src/components/movie/HeroBackground.jsx

export default function HeroBackground({ slides = [] }) {
  return (
    <div className="absolute inset-0 z-0">
      {slides.map((movie, i) => (
        <div
          key={movie.id ?? i}
          id={`hero-bg-${i}`}
          style={{
            position: "absolute",
            inset: 0,
            clipPath: i === 0 ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
          }}
        >
          <img
            src={movie.bg}
            alt={movie.title}
            loading={i === 0 ? "eager" : "lazy"}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",

              objectPosition: "center top",

              transform: "scale(1.02)",
              transition: "transform 9s ease-out",
            }}
          />
        </div>
      ))}

      {/* Left gradient — keeps text readable */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `
      linear-gradient(to right, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.50) 40%, rgba(0,0,0,0.15) 65%, transparent 100%),
      linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.20) 40%, transparent 100%)
    `,
        }}
      />

      {/* Bottom gradient — blends into page background */}
      <div className="absolute inset-0 z-[1] pointer-events-none hero-overlay-bottom" />
    </div>
  );
}
