// src/components/movie/HeroBackground.jsx

export default function HeroBackground({ slides = [] }) {
  return (
    <div className="absolute inset-0 z-0 mt-20">
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
              // ▼ KEY FIX: anchor the image to top-center so the subject
              //   (character face, scene focus) is never cropped off the top.
              //   "center center" (the default) shifts the image down by 50%
              //   which hides the top portion — exactly what you were seeing.
              objectPosition: "center top",
              // Reduced from 1.06 → 1.02 so less image is hidden off-screen
              // during the subtle Ken Burns zoom effect
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
          background:
            "linear-gradient(to right, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.45) 52%, transparent 100%)",
        }}
      />

      {/* Bottom gradient — blends into page background */}
      <div className="absolute inset-0 z-[1] pointer-events-none hero-overlay-bottom" />
    </div>
  );
}
