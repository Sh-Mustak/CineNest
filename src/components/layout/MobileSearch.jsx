import { useEffect, useRef, useState } from "react";
import ResultsPanel from "./ResultsPanel";

export default function MobileSearch({ query, setQuery, data, loading }) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const handler = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white lg:hidden"
      >
        <span className="material-symbols-outlined">search</span>
      </button>

      {open && (
        <div className="fixed top-[64px] inset-x-0 z-50 flex justify-center items-start pt-4 px-4">
          {/* Overlay for dimming background */}
          <div className="fixed inset-0 -z-10 bg-black/50" />

          <div
            ref={panelRef}
            className="w-full max-w-md p-4 rounded-xl bg-zinc-900 border border-zinc-700 shadow-2xl"
          >
            {/* Search input */}
            <div className="relative mb-3">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 text-[18px]">
                search
              </span>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
                className="w-full bg-zinc-800 text-white placeholder-zinc-400 pl-9 pr-3 py-2 rounded-lg border border-zinc-600 focus:border-zinc-400 focus:outline-none text-sm"
                placeholder="Search..."
              />
            </div>

            {/* Results area */}
            {loading ? (
              <p className="text-center text-sm text-zinc-400 py-4">
                Loading…
              </p>
            ) : (
              <ResultsPanel
                query={query}
                results={data}
                closeModal={() => setOpen(false)}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}