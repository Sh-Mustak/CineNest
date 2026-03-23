import ResultItem from "./ResultItem";
import { Link } from "react-router-dom";

export default function ResultsPanel({ query, results, closeModal }) {
  const limitedResults = results.slice(0, 5);

  return (
    <div className="rounded-md overflow-hidden">

      {/* Header: query + total count */}
      {query.trim() !== "" && results.length > 0 && (
        <div className="flex items-center justify-between px-4 py-1.5 border-b border-zinc-700">
          <p className="text-zinc-400 text-xs">
            Results for{" "}
            <span className="text-white font-medium">&ldquo;{query}&rdquo;</span>
          </p>
          <span className="text-xs text-zinc-500 bg-zinc-800 px-2 py-0.5 rounded-full">
            {results.length} {results.length === 1 ? "result" : "results"}
          </span>
        </div>
      )}

      <div className="flex flex-col gap-1 p-2">
        {query.trim() === "" ? (
          <p className="text-center text-zinc-500 text-xs py-6">
            Start typing to search…
          </p>
        ) : results.length === 0 ? (
          <p className="text-center text-zinc-500 text-xs py-6">
            No results for{" "}
            <span className="text-primary">&ldquo;{query}&rdquo;</span>
          </p>
        ) : (
          <>
            {limitedResults.map((item) => (
              <ResultItem key={item.id} item={item} closeModal={closeModal} />
            ))}

            {results.length > 5 && (
              <div className="mt-2 pt-2 border-t border-zinc-700 flex justify-center">
                <Link
                  to={`/search?q=${query}`}
                  onClick={closeModal}
                  className="text-primary text-[10px] font-bold uppercase tracking-widest hover:opacity-80"
                >
                  View all {results.length} results
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}