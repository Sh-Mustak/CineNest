import MoviesGrid from "../components/moviesPage/MoviesGrid";
import PageHeader from "../components/moviesPage/PageHeader";
import useMovies from "../hooks/useMovies";

export default function Movies() {
  const { movies, loading, error } = useMovies();
  console.log(movies);

  return (
    <div className="mx-auto py-8">
      <PageHeader />
      {/* <FilterMovies /> */}
      <MoviesGrid movies={movies} loading={loading} error={error} />
    </div>
  );
}
