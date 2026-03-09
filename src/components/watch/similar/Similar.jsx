import { useMovieContext } from "../../../context/useMovieContext";
import MovieRow from "../../movie/MovieRow";

export default function Similar() {
  const { trending, loading, error } = useMovieContext();
  return (
    <div className = "mt-25">
      <MovieRow
        movies={trending}
        loading={loading}
        error={error}
        rowheader="More Like This"
      />
    </div>
  );
}
