import MovieRow from "../../movie/MovieRow";

export default function Similar({ mediaDetails, loading }) {
  return (
    <div className="mt-25">
      <MovieRow
        rowheader="Similar Movies"
        movies={mediaDetails?.recommendations?.results}
        loading={loading}
        showHeader={true}
      />
    </div>
  );
}
