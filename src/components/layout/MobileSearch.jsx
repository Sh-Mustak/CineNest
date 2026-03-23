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
        className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white hover:bg-primary/80 active:scale-95 transition-all duration-200 shadow-lg shadow-primary/30 lg:hidden"
      >
        <span
          className="material-symbols-outlined"
          style={{ fontSize: "20px" }}
        >
          search
        </span>
      </button>

      {open && (
        <div className="fixed top-[64px] inset-x-0 bg-black/70 z-50 flex justify-center items-start pt-4">
          <div
            ref={panelRef}
            className="bg-[#0a0505] w-full max-w-md p-4 rounded-xl"
          >
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-white/5 p-2 rounded text-white"
              placeholder="Search..."
            />

            {loading ? (
              <p className="text-center text-sm text-slate-400 py-4">
                Loading...
              </p>
            ) : (
              <ResultsPanel query={query} results={data} />
            )}
          </div>
        </div>
      )}
    </>
  );
}
