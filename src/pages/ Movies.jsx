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
        <p className="text-center mt-4 text-white">Loading more...</p>
      )}
    </div>
  );
}