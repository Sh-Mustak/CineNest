import MoviesGrid from "../components/moviesPage/MoviesGrid";
import PageHeader from "../components/moviesPage/PageHeader";
import useMovies from "../hooks/useMovies";

export default function Movies() {
  const { movies, loading, error, lastElementRef } = useMovies();

  return (
    <div className="mx-auto py-8">
      <PageHeader />

      <MoviesGrid
        movies={movies}
        loading={loading}
        error={error}
        lastElementRef={lastElementRef}
      />

      {loading && movies.length > 0 && (
        <div className="flex justify-center items-center mt-6 space-x-2">
          {/* Spinner Circle */}
          <div className="w-6 h-6 border-4 border-t-white border-b-white border-gray-700 rounded-full animate-spin"></div>

          {/* Loading Text */}
          <span className="text-white font-medium text-lg opacity-80 drop-shadow-lg">
            Loading more...
          </span>
        </div>
      )}
    </div>
  );
}
