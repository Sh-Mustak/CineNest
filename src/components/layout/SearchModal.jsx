import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const IMG_BASE = "https://image.tmdb.org/t/p/w92";

const typeStyles = {
  movie: { label: "Movie", color: "#e74c3c", bg: "rgba(220,38,38,0.15)" },
  tv: { label: "TV Show", color: "#3b82f6", bg: "rgba(59,130,246,0.15)" },
};

export default function SearchModal({ inputValue, results, onClose }) {
  const navigate = useNavigate();
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [onClose]);

  return (
    <div
      ref={modalRef}
      className="absolute top-full mt-3 left-1/2 -translate-x-1/2 w-full min-w-[280px] z-50"
      style={{
        animation: "dropIn 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      }}
    >
      <style>{`
        @keyframes dropIn {
          from { opacity: 0; transform: translateY(-8px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .result-row:hover .result-arrow { opacity: 1; transform: translateX(0); }
        .result-arrow { opacity: 0; transform: translateX(-4px); transition: all 0.2s ease; }
        .result-poster { transition: transform 0.3s ease; }
        .result-row:hover .result-poster { transform: scale(1.05); }
        .search-scroll::-webkit-scrollbar { width: 3px; }
        .search-scroll::-webkit-scrollbar-track { background: transparent; }
        .search-scroll::-webkit-scrollbar-thumb { background: rgba(220,38,38,0.4); border-radius: 8px; }
      `}</style>

      <div
        style={{
          background: "rgba(10, 5, 5, 0.95)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1px solid rgba(220,38,38,0.15)",
          borderRadius: "16px",
          boxShadow:
            "0 32px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04), 0 0 40px rgba(220,38,38,0.06)",
          overflow: "hidden",
        }}
      >
        {/* Top red accent line */}
        <div
          style={{
            height: "2px",
            background:
              "linear-gradient(90deg, transparent, rgba(220,38,38,0.8), transparent)",
          }}
        />

        {/* Header */}
        <div className="flex items-center justify-between px-4 py-2.5">
          <div className="flex items-center gap-2">
            <span
              className="material-symbols-outlined text-primary"
              style={{ fontSize: "15px" }}
            >
              search
            </span>
            <span className="text-xs text-slate-400">
              Results for{" "}
              <span className="text-white font-medium">"{inputValue}"</span>
            </span>
          </div>
          <span className="text-xs text-slate-600">{results.length} found</span>
        </div>

        <div
          style={{
            height: "1px",
            background: "rgba(255,255,255,0.05)",
            margin: "0 16px",
          }}
        />

        {/* Results */}
        <div
          className="search-scroll"
          style={{ maxHeight: "260px", overflowY: "auto" }}
        >
          {results.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-8 gap-2">
              <span
                className="material-symbols-outlined text-slate-600"
                style={{ fontSize: "32px" }}
              >
                search_off
              </span>
              <p className="text-sm text-slate-500">No results found</p>
            </div>
          ) : (
            results.map((item, i) => {
              // ✅ TMDB uses title for movies, name for TV shows
              const displayTitle = item.title || item.name || "Unknown";

              // ✅ use media_type not item.type
              const tag = typeStyles[item.media_type] || typeStyles.movie;

              // ✅ year from release_date (movie) or first_air_date (tv)
              const year = (
                item.release_date ||
                item.first_air_date ||
                ""
              ).slice(0, 4);

              // ✅ real poster from TMDB or fallback
              const posterUrl = item.poster_path
                ? `${IMG_BASE}${item.poster_path}`
                : null;

              return (
                <div
                  key={item.id}
                  className="result-row flex items-center gap-3 px-4 py-2.5 cursor-pointer"
                  style={{
                    transition: "background 0.15s ease",
                    borderBottom:
                      i < results.length - 1
                        ? "1px solid rgba(255,255,255,0.03)"
                        : "none",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background =
                      "rgba(255,255,255,0.04)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "transparent")
                  }
                  onClick={() =>
                    navigate(`/watch/${item.media_type}/${item.id}`)
                  }
                >
                  {/* ✅ Real poster image with fallback */}
                  <div
                    className="result-poster shrink-0 rounded-lg overflow-hidden flex items-center justify-center"
                    style={{
                      width: "34px",
                      height: "50px",
                      background:
                        "linear-gradient(135deg, rgba(220,38,38,0.2), rgba(10,5,5,0.8))",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    {posterUrl ? (
                      <img
                        src={posterUrl}
                        alt={displayTitle}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      <span
                        className="material-symbols-outlined text-primary/40"
                        style={{ fontSize: "15px" }}
                      >
                        movie
                      </span>
                    )}
                  </div>

                  {/* ✅ Dynamic title + year + type badge */}
                  <div className="flex flex-col gap-1 flex-1 min-w-0">
                    <span className="text-sm text-white font-medium truncate">
                      {displayTitle}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <span
                        className="w-fit text-[10px] font-semibold px-2 py-0.5 rounded-full"
                        style={{ color: tag.color, background: tag.bg }}
                      >
                        {tag.label}
                      </span>
                      {year && (
                        <span className="text-[10px] text-slate-500">
                          {year}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Arrow */}
                  <span
                    className="result-arrow material-symbols-outlined text-primary/70"
                    style={{ fontSize: "15px" }}
                  >
                    arrow_forward
                  </span>
                </div>
              );
            })
          )}
        </div>

        <div
          style={{
            height: "1px",
            background: "rgba(255,255,255,0.05)",
            margin: "0 16px",
          }}
        />

        {/* Footer */}
        <div
          onClick={() => navigate(`/search?q=${inputValue}`)}
          className="flex items-center justify-center gap-2 px-4 py-2.5 cursor-pointer"
          style={{ transition: "background 0.15s ease" }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "rgba(220,38,38,0.08)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "transparent")
          }
        >
          <span className="text-sm font-semibold text-primary">
            View all results
          </span>
          <span
            className="material-symbols-outlined text-primary"
            style={{ fontSize: "15px" }}
          >
            east
          </span>
        </div>
      </div>
    </div>
  );
}
