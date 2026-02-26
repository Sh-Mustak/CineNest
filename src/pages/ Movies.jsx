import FilterMovies from "../components/moviesPage/FilterMovies";
import MoviesGrid from "../components/moviesPage/MoviesGrid";
import PageHeader from "../components/moviesPage/PageHeader";
import { useMovieContext } from "../context/useMovieContext";

export default function Movies() {
  const { trending, loading, error } = useMovieContext();
  return (
    <div className="mx-auto py-8">
      <PageHeader />
      <FilterMovies />
      <MoviesGrid movies={trending} loading={loading} error={error} />
    </div>
  );
}
