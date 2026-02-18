import FilterMovies from "../components/moviesPage/FilterMovies";
import MoviesGrid from "../components/moviesPage/MoviesGrid";
import PageHeader from "../components/moviesPage/PageHeader";

export default function Movies() {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <PageHeader />
      <FilterMovies />
      <MoviesGrid />
    </div>
  );
}
