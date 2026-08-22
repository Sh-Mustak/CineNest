import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import MoviesGrid from "../components/moviesPage/MoviesGrid";
import { useSearch } from "../hooks/useSearch";

export default function Search() {
  const { search } = useLocation();

  const query = useMemo(() => {
    return new URLSearchParams(search).get("q") || "";
  }, [search]);

  const {
    data: results = [],
    loading,
    error,
    lastElementRef,
  } = useSearch(query);

  // No query state
  if (!query) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4 animate-pulse">
          <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
            <svg className="w-7 h-7 text-amber-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
            </svg>
          </div>
          <p className="text-zinc-300 text-lg font-semibold tracking-wide">Discover Movies</p>
          <p className="text-zinc-500 text-sm">Start typing to search for films</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950">
      <div className="max-w-[1460px] mx-auto px-4 sm:px-6 lg:px-8 md:mt-15">

        {/* ── Header ── */}
        <div className="mb-10">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-amber-400" />
            <span className="text-amber-400 text-xs font-semibold tracking-[3px] uppercase">
              Search Results
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-none mb-5">
            &ldquo;
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              {query}
            </span>
            &rdquo;
          </h1>

          {/* Meta row */}
          <div className="flex items-center gap-3 flex-wrap">
            <span className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/25 rounded-full px-4 py-1.5 text-sm font-semibold text-amber-400">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              {loading ? "Searching…" : `${results.length} ${results.length === 1 ? "film" : "films"} found`}
            </span>
            <span className="text-zinc-500 text-sm font-light">
              for query{" "}
              <span className="text-zinc-300 italic font-medium">"{query}"</span>
            </span>
          </div>
        </div>

        {/* ── Gradient Divider ── */}
        <div className="h-px bg-gradient-to-r from-amber-500/40 via-amber-500/10 to-transparent mb-10" />

        {/* ── Error Banner ── */}
        {error && (
          <div className="flex items-center gap-3 bg-red-500/8 border border-red-500/20 border-l-2 border-l-red-500 rounded-xl px-4 py-3.5 mb-8 text-sm text-red-300">
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4M12 16h.01" strokeLinecap="round" />
            </svg>
            Something went wrong while fetching results. Please try again.
          </div>
        )}

        {/* ── No Results ── */}
        {!loading && !error && results.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 gap-3">
            <div className="w-16 h-16 rounded-2xl bg-zinc-800/60 border border-zinc-700/50 flex items-center justify-center text-3xl mb-2">
              🎬
            </div>
            <p className="text-zinc-200 text-xl font-bold tracking-wide">No Results Found</p>
            <p className="text-zinc-500 text-sm font-light">
              Try different keywords or check your spelling
            </p>
          </div>
        )}

        {/* ── Movies Grid ── */}
        <MoviesGrid
          movies={results}
          loading={loading}
          error={error}
          mediaType="movie"
          lastElementRef={lastElementRef}
        />

      </div>
    </div>
  );
}