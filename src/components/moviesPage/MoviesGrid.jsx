import MovieCard from "../movie/MovieCard";

export default function MoviesGrid({ movies, loading, error }) {
  if (loading) {
    return <div className="text-white text-center py-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center py-10">{error}</div>;
  }

  return (
    <div
      className="grid gap-3 sm:gap-4 px-2 sm:px-4"
      style={{ gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))" }}
    >
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} fullWidth />
      ))}
    </div>
  );
}
