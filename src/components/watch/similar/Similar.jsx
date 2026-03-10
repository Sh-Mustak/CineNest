import MovieRow from "../../movie/MovieRow";

export default function Similar({ similarMovies, loading }) {
  return (
    <div className="mt-25">
      <MovieRow
        movies={similarMovies}
        loading={loading}
        // error=""
        rowheader="More Like This"
      />
    </div>
  );
}
