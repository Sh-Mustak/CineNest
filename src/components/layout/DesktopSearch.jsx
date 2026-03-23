import { useEffect, useRef, useState } from "react";
import ResultsPanel from "./ResultsPanel";

export default function DesktopSearch({ query, setQuery, data, loading }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
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
      <div className="flex items-center gap-2 bg-white/5 border rounded-md px-3 py-2 w-60">
        <span className="material-symbols-outlined text-slate-400">search</span>

        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value); // ✅ now global
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          className="bg-transparent outline-none text-white text-sm w-full"
          placeholder="Search…"
        />
      </div>

      {open && (
        <div className="absolute top-full mt-3 right-0 w-[380px] bg-[#0a0505] rounded-xl shadow-xl">
          {loading ? (
            <p className="text-center text-sm text-slate-400 py-4">
              Loading...
            </p>
          ) : (
            <ResultsPanel query={query} results={data} />
          )}
        </div>
      )}
    </div>
  );
}
