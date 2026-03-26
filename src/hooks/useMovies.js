import { useEffect, useState } from "react";
import { fetchAllMovies } from "../services/movieFetcher";

export default function useMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true);

      const { data, error } = await fetchAllMovies();

      if (error) {
        setError(error);
      } else {
        setMovies(data);
      }

      setLoading(false);
    };

    loadMovies();
  }, []);

  return { movies, loading, error };
}