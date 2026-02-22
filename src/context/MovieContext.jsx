import { useEffect, useState } from "react";
import { movieService } from "../api/movieService";
import { MovieContext } from "./MovieContextDefinition";

export const MovieProvider = ({ children }) => {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setLoading(true);
        const response = await movieService.getTrendingMovies();
        setTrending(response);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTrendingMovies();
  }, []);
  return (
    <MovieContext.Provider value={{ trending, loading, error }}>
      {children}
    </MovieContext.Provider>
  );
};
