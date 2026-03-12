import MovieRow from "../../movie/MovieRow";

export default function Similar({ similarMovies, loading }) {
  return (
    <div className="mt-25">
      <MovieRow
        rowheader="Similar Movies"
        movies={similarMovies}
        loading={loading}
        showHeader={true}
      />
    </div>
  );
}
