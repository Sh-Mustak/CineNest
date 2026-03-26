import MovieCard from "../movie/MovieCard";
import MovieCardSkeleton from "../Skeleton/MovieCardSkeleton";

export default function MoviesGrid({ movies, loading, error, lastElementRef }) {
  if (error) {
    return <div className="text-red-500 text-center py-10">{error}</div>;
  }

  // Single grid container
  return (
    <div
      className="grid gap-3 sm:gap-4 px-2 sm:px-4"
      style={{ gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))" }}
    >
      {/* Render movies */}
      {movies.map((movie, index) => {
        if (movies.length === index + 1) {
          return (
            <div ref={lastElementRef} key={movie.id}>
              <MovieCard movie={movie} fullWidth mediaType="movie" />
            </div>
          );
        }

        return (
          <MovieCard key={movie.id} movie={movie} fullWidth mediaType="movie" />
        );
      })}

      {/* Render skeletons while loading */}
      {loading &&
        Array.from({ length: movies.length === 0 ? 20 : 10 }).map((_, i) => (
          <MovieCardSkeleton key={`skeleton-${i}`} />
        ))}
    </div>
  );
}
