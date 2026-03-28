import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import MoviesGrid from "../components/moviesPage/MoviesGrid";
import {useSearch} from "../hooks/useSearch";

export default function Search() {
  const { search } = useLocation();

  // extract query safely
  const query = useMemo(() => {
    return new URLSearchParams(search).get("q") || "";
  }, [search]);

  // fetch data
  const {
    data: results = [],
    loading,
    error,
    lastElementRef,
  } = useSearch(query);

  // if no query
  if (!query) {
    return (
      <div className="text-center py-10 text-zinc-400">
        Start typing to search movies...
      </div>
    );
  }

  return (
    <div className="mx-auto py-8 px-4">
      {/* ✅ Heading */}
      <h1 className="text-xl font-bold mb-6 text-white">
        Results for "{query}"
      </h1>

      {/*  Error State */}
      {error && (
        <p className="text-red-500 text-center">
          Something went wrong. Try again.
        </p>
      )}

      {/*  Empty State */}
      {!loading && results.length === 0 && (
        <p className="text-center text-zinc-400">
          No results found for "{query}"
        </p>
      )}

      {/* ✅ Results */}
      <MoviesGrid
        movies={results}
        loading={loading}
        error={error}
        mediaType="movie"
        lastElementRef={lastElementRef}
      />
    </div>
  );
}
