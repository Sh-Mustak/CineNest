import MovieCard from "../movie/MovieCard";
export default function MoviesGrid() {
  return (
    <div
      className="
  grid
  grid-cols-2
  sm:[grid-template-columns:repeat(auto-fit,minmax(220px,1fr))]
  
  justify-items-center
"
    >
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </div>
  );
}
