import ResultItem from "./ResultItem";
import { Link } from "react-router-dom";

export default function ResultsPanel({ query, results, closeModal }) {
  const limitedResults = results.slice(0, 5); 

  return (
    <div
      className="rounded-md overflow-hidden mt-3"
  
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
            {limitedResults.map((item) => (
              <ResultItem
                key={item.id}
                item={item}
                closeModal={closeModal}
              />
            ))}

            {results.length > 5 && (
              <div className="mt-2 pt-2 border-t border-white/5 flex justify-center">
                <Link
                  to={`/search?q=${query}`}
                  onClick={closeModal}
                  className="text-primary text-[10px] font-bold uppercase tracking-widest hover:opacity-80"
                >
                  View all results
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}