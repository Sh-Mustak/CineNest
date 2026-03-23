import ResultItem from "./ResultItem";

export default function ResultsPanel({ query, results }) {
  return (
    <div
      className="rounded-md overflow-hidden mt-3"
      style={{
        background: "rgba(28,22,36,0.92)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 8px 40px rgba(0,0,0,0.6)",
      }}
    >
      <div className="flex flex-col gap-1 p-2">
        {query.trim() === "" ? (
          <p className="text-center text-slate-500 text-xs py-6">
            Start typing to search…
          </p>
        ) : results.length === 0 ? (
          <p className="text-center text-slate-500 text-xs py-6">
            No results for <span className="text-primary">"{query}"</span>
          </p>
        ) : (
          <>
            {results.map((item) => (
              <ResultItem key={item.id} item={item} />
            ))}

            <div className="mt-1 pt-2 border-t border-white/5 flex justify-center">
              <a className="text-primary text-[10px] font-bold uppercase tracking-widest cursor-pointer hover:opacity-80 transition-opacity">
                View all results
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}