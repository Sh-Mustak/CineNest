import Pill from "./Pill";
import RangeSlider from "./RangeSlider";
import { GENRES, LANGUAGES, SORT_OPTIONS } from "./filterConfig";

export default function FilterPanel({ filters, onChange, onApply, onClear }) {
  const toggleGenre = (id) => {
    const next = filters.genres.includes(id)
      ? filters.genres.filter((g) => g !== id)
      : [...filters.genres, id];
    onChange({ ...filters, genres: next });
  };

  return (
    <div className="bg-[#111118] border border-white/5 rounded-xl mt-2 p-5
                    grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">

      {/* Genres */}
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