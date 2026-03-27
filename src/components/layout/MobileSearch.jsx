import { useEffect, useRef, useState } from "react";
import ResultsPanel from "./ResultsPanel";

export default function MobileSearch({ query, setQuery, data, loading }) {
  const [open, setOpen] = useState(false);
  const modalRef = useRef(null);

  // ✅ Handle outside click
  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setOpen(false);
        setQuery("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, setQuery]);

  return (
    <>
      {/* Button */}
      <button
        onClick={() => setOpen(true)}
        className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white lg:hidden"
      >
        <span className="material-symbols-outlined">search</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex justify-center items-start mt-[64px] px-4">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Modal */}
          <div
            ref={modalRef}
            className="relative z-10 w-full max-w-md p-4 rounded-md bg-zinc-900 border border-zinc-700 shadow-2xl mt-4.5"
          >
            {/* Input */}
            <div className="relative mb-3">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 text-[18px]">
                search
              </span>

              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
                className="w-full bg-zinc-800 text-white placeholder-zinc-400 pl-9 pr-12 py-2 rounded-md border border-zinc-600 focus:border-zinc-400 focus:outline-none text-sm"
                placeholder="Search..."
              />

              {/* Clear */}
              {query && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setQuery("");
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Results */}
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
        </div>
      )}
    </>
  );
}
