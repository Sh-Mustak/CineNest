import { useCallback, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MoviesGrid from "../components/moviesPage/MoviesGrid";
import { useDiscover } from "../hooks/useDiscover";

import FilterPanel from "../components/filters/FilterPanel";
import FilterToggle from "../components/filters/FilterToggle";
import { DEFAULT_FILTERS } from "../components/filters/filterConfig";

export default function TvShows() {
  const [params] = useSearchParams();
  const category = params.get("category");
  const typeFromUrl = params.get("type");

  // filter states (same as Movies page)
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState(DEFAULT_FILTERS);
  const [applied, setApplied] = useState(DEFAULT_FILTERS);

  const {
    items: tvShows,
    loading,
    error,
    lastElementRef,
  } = useDiscover(typeFromUrl || "tv", category, applied);

  // active filter count
  const activeCount =
    draft.genres.length +
    (draft.language ? 1 : 0) +
    (draft.minRating > 0 ? 1 : 0) +
    (draft.fromYear > 1980 ? 1 : 0) +
    (draft.maxRuntime < 240 ? 1 : 0) +
    (draft.sortBy !== "popularity.desc" ? 1 : 0);

  // handlers
  const handleApply = useCallback(() => {
    setApplied(draft);
    setOpen(false);
  }, [draft]);

  const handleClear = useCallback(() => {
    setDraft(DEFAULT_FILTERS);
    setApplied(DEFAULT_FILTERS);
  }, []);

  return (
    <div className="mx-auto px-4 md:py-8 lg:py-8 md:mt-15 lg:mt-15">

      {/* Toggle button */}
      <FilterToggle
        open={open}
        setOpen={setOpen}
        activeCount={activeCount}
      />

      {/* Collapsible panel */}
      <div
        className="overflow-hidden transition-all duration-[400ms] ease-in-out mb-4"
        style={{ maxHeight: open ? "800px" : "0px" }}
      >
        <FilterPanel
          filters={draft}
          onChange={setDraft}
          onApply={handleApply}
          onClear={handleClear}
        />
      </div>

      {/* Grid */}
      <MoviesGrid
        movies={tvShows}
        loading={loading}
        error={error}
        lastElementRef={lastElementRef}
      />

      {/* Loader */}
      {loading && tvShows.length > 0 && (
        <div className="flex justify-center items-center mt-6 space-x-2">
          <div className="w-6 h-6 border-4 border-t-white border-b-white border-gray-700 rounded-full animate-spin" />
          <span className="text-white font-medium text-lg opacity-80 drop-shadow-lg">
            Loading more...
          </span>
        </div>
      )}
    </div>
  );
}