import { useEffect, useState } from "react";
import { fetchMovieDetails } from "../services/movieFetcher";

export function useMovieDetails(id) {
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const load = async () => {
      setLoading(true);
      const { details } = await fetchMovieDetails(id);
      setMovieDetails(details);
      setLoading(false);
    };

    load();
  }, [id]);

  return { movieDetails, loading };
}
