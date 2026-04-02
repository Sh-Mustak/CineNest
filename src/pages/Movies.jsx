import { useState, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import MoviesGrid from "../components/moviesPage/MoviesGrid";
import { useDiscover } from "../hooks/useDiscover";

// ── Filter config ──────────────────────────────────────────────
const GENRES = [
  { id: 28, label: "Action" }, { id: 35, label: "Comedy" },
  { id: 18, label: "Drama" },  { id: 27, label: "Horror" },
  { id: 878, label: "Sci-Fi" }, { id: 53, label: "Thriller" },
  { id: 10749, label: "Romance" }, { id: 16, label: "Animation" },
  { id: 99, label: "Documentary" }, { id: 14, label: "Fantasy" },
];

const LANGUAGES = [
  { code: "", label: "Any" }, { code: "en", label: "EN" },
  { code: "fr", label: "FR" }, { code: "ko", label: "KO" },
  { code: "ja", label: "JA" }, { code: "es", label: "ES" },
];

const SORT_OPTIONS = [
  { value: "popularity.desc",    label: "Most Popular" },
  { value: "vote_average.desc",  label: "Highest Rated" },
  { value: "release_date.desc",  label: "Newest First" },
  { value: "release_date.asc",   label: "Oldest First" },
  { value: "revenue.desc",       label: "Box Office" },
];

const DEFAULT_FILTERS = {
  genres: [],
  language: "",
  sortBy: "popularity.desc",
  minRating: 0,
  fromYear: 1980,
  maxRuntime: 240,
};

// ── Sub-components ─────────────────────────────────────────────
function Pill({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 rounded-full text-xs font-medium border transition-all duration-150 whitespace-nowrap
        ${active
          ? "bg-orange-600 border-orange-600 text-white"
          : "border-white/10 text-neutral-400 hover:border-orange-500 hover:text-white"
        }`}
    >
      {label}
    </button>
  );
}

function RangeSlider({ label, min, max, step, value, format, onChange }) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[10px] font-semibold uppercase tracking-widest text-neutral-500">
        {label}
      </label>
      <div className="flex justify-between text-xs text-neutral-500 mb-1">
        <span>{format(min)}</span>
        <span className="text-orange-500 font-semibold">{format(value)}</span>
        <span>{format(max)}</span>
      </div>
      <input
        type="range"
        min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-[3px] rounded-full outline-none cursor-pointer appearance-none accent-orange-600"
        style={{
          background: `linear-gradient(to right, #ea580c ${pct}%, #252535 ${pct}%)`,
        }}
      />
    </div>
  );
}

// ── Main filter panel ──────────────────────────────────────────
function FilterPanel({ filters, onChange, onApply, onClear }) {
  const toggleGenre = (id) => {
    const next = filters.genres.includes(id)
      ? filters.genres.filter((g) => g !== id)
      : [...filters.genres, id];
    onChange({ ...filters, genres: next });
  };

  return (
    <div className="bg-[#111118] border border-white/5 rounded-xl mt-2 p-5
                    grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">

      {/* Genres — full width */}
      <div className="col-span-full">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-neutral-500 mb-3">
          Genre
        </p>
        <div className="flex flex-wrap gap-2">
          {GENRES.map((g) => (
            <Pill
              key={g.id}
              label={g.label}
              active={filters.genres.includes(g.id)}
              onClick={() => toggleGenre(g.id)}
            />
          ))}
        </div>
      </div>

      <div className="col-span-full h-px bg-white/5" />

      {/* Rating */}
      <RangeSlider
        label="Min Rating"
        min={0} max={10} step={0.5}
        value={filters.minRating}
        format={(v) => `${v} ★`}
        onChange={(v) => onChange({ ...filters, minRating: v })}
      />

      {/* Year */}
      <RangeSlider
        label="From Year"
        min={1980} max={2025} step={1}
        value={filters.fromYear}
        format={(v) => `${v}`}
        onChange={(v) => onChange({ ...filters, fromYear: v })}
      />

      {/* Runtime */}
      <RangeSlider
        label="Max Runtime"
        min={30} max={240} step={10}
        value={filters.maxRuntime}
        format={(v) => `${v}m`}
        onChange={(v) => onChange({ ...filters, maxRuntime: v })}
      />

      {/* Language */}
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-widest text-neutral-500 mb-3">
          Language
        </p>
        <div className="flex flex-wrap gap-2">
          {LANGUAGES.map((l) => (
            <Pill
              key={l.code}
              label={l.label}
              active={filters.language === l.code}
              onClick={() => onChange({ ...filters, language: l.code })}
            />
          ))}
        </div>
      </div>

      {/* Sort */}
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-widest text-neutral-500 mb-3">
          Sort By
        </p>
        <select
          value={filters.sortBy}
          onChange={(e) => onChange({ ...filters, sortBy: e.target.value })}
          className="w-full bg-[#0a0a0f] border border-white/10 text-neutral-200 text-sm
                     rounded-lg px-3 py-2 outline-none focus:border-orange-600 cursor-pointer"
        >
          {SORT_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      </div>

      <div className="col-span-full h-px bg-white/5" />

      {/* Footer */}
      <div className="col-span-full flex items-center justify-between gap-3 flex-wrap">
        <button
          onClick={onClear}
          className="text-sm text-neutral-500 hover:text-orange-500 transition-colors"
        >
          ✕ Clear all
        </button>
        <button
          onClick={onApply}
          className="bg-orange-600 hover:bg-orange-500 text-white text-sm font-semibold
                     px-6 py-2 rounded-lg transition-colors active:scale-95"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
}

// ── Page component ─────────────────────────────────────────────
export default function Movies() {
  const [params] = useSearchParams();
  const category = params.get("category");
  const typeFromUrl = params.get("type");

  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState(DEFAULT_FILTERS);   // live edits
  const [applied, setApplied] = useState(DEFAULT_FILTERS); // sent to API

  const { items: movies, loading, error, lastElementRef } = useDiscover(
    typeFromUrl || "movie",
    category,
    applied   // pass filters to your hook
  );

  const activeCount = draft.genres.length
    + (draft.language ? 1 : 0)
    + (draft.minRating > 0 ? 1 : 0)
    + (draft.fromYear > 1980 ? 1 : 0)
    + (draft.maxRuntime < 240 ? 1 : 0)
    + (draft.sortBy !== "popularity.desc" ? 1 : 0);

  const handleApply = useCallback(() => {
    setApplied(draft);
    setOpen(false);
  }, [draft]);

  const handleClear = useCallback(() => {
    setDraft(DEFAULT_FILTERS);
    setApplied(DEFAULT_FILTERS);
  }, []);

  return (
    <div className="mx-auto py-8 px-4 mt-15">

      {/* ── Filter toggle row ── */}
      <div className="flex items-center gap-3 mb-2">
        <button
          onClick={() => setOpen((o) => !o)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium
                      transition-all duration-200
                      ${open
                        ? "border-orange-600 text-orange-500 bg-orange-600/10"
                        : "border-white/10 text-neutral-300 hover:border-orange-600 hover:text-orange-500"
                      }`}
        >
          {/* Filter icon */}
          <svg width="15" height="15" fill="none" viewBox="0 0 24 24"
               stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M3 4h18M7 12h10M11 20h2" />
          </svg>
          Filters
          {activeCount > 0 && (
            <span className="bg-orange-600 text-white text-[11px] font-bold
                             px-2 py-0.5 rounded-full leading-none">
              {activeCount}
            </span>
          )}
          {/* Chevron */}
          <svg
            width="13" height="13" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" strokeWidth={2.5}
            className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <span className="text-xs text-neutral-500 ml-auto">
          {activeCount > 0 ? `${activeCount} filter${activeCount > 1 ? "s" : ""} active` : "Showing all results"}
        </span>
      </div>

      {/* ── Collapsible panel ── */}
      <div
        className="overflow-hidden transition-all duration-[400ms] ease-in-out"
        style={{ maxHeight: open ? "800px" : "0px" }}
      >
        <FilterPanel
          filters={draft}
          onChange={setDraft}
          onApply={handleApply}
          onClear={handleClear}
        />
      </div>

      {/* ── Movies grid ── */}
      <div className="mt-6">
        <MoviesGrid
          movies={movies}
          loading={loading}
          error={error}
          lastElementRef={lastElementRef}
        />
      </div>

      {loading && movies.length > 0 && (
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