export default function FilterToggle({ open, setOpen, activeCount }) {
  return (
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
        <svg width="15" height="15" fill="none" viewBox="0 0 24 24"
             stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h18M7 12h10M11 20h2" />
        </svg>
        Filters
        {activeCount > 0 && (
          <span className="bg-orange-600 text-white text-[11px] font-bold px-2 py-0.5 rounded-full leading-none">
            {activeCount}
          </span>
        )}
        <svg
          width="13" height="13" fill="none" viewBox="0 0 24 24"
          stroke="currentColor" strokeWidth={2.5}
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <span className="text-xs text-neutral-500 ml-auto">
        {activeCount > 0
          ? `${activeCount} filter${activeCount > 1 ? "s" : ""} active`
          : "Showing all results"}
      </span>
    </div>
  );
}