import { useEffect, useRef, useState } from "react";
import ResultsPanel from "./ResultsPanel";

export default function DesktopSearch({ query, setQuery, data, loading }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
        setQuery("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    const handler = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <div ref={ref} className="relative hidden lg:block">
      {/* Search trigger input */}
      <div className="flex items-center gap-2 bg-zinc-800 border border-zinc-600 rounded-md px-3 py-2 w-60 focus-within:border-zinc-400 transition-colors">
        <span className="material-symbols-outlined text-zinc-400 text-[18px]">
          search
        </span>

        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          className="bg-transparent outline-none  text-white placeholder-zinc-400 text-sm w-full"
          placeholder="Movie,Tv Shows, Anime..."
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white"
          >
            Clear
          </button>
        )}
      </div>

      {/* Dropdown results panel */}
      {open && (
        <div className="absolute top-full p-1 mt-6 right-0 w-[380px] rounded-md shadow-2xl bg-zinc-900 border border-zinc-700">
          {loading ? (
            <p className="text-center text-sm text-zinc-400 py-4">Loading…</p>
          ) : (
            <ResultsPanel
              query={query}
              results={data}
              closeModal={() => setOpen(false)}
              setQuery={setQuery}
            />
          )}
        </div>
      )}
    </div>
  );
}
