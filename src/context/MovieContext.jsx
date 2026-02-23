import { useEffect, useState } from "react";
import {
  fetchPopularMovies,
  fetchTrendingMovies,
} from "../services/movieFetcher";
import { MovieContext } from "./MovieContextDefinition";

export const MovieProvider = ({ children }) => {
  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true);

      const [
        { trendingMovies, trendingError },
        { popularMovies, popularError },
      ] = await Promise.all([fetchTrendingMovies(), fetchPopularMovies()]);

      if (trendingError || popularError) {
        setError(trendingError || popularError);
      } else {
        setTrending(trendingMovies);
        setPopular(popularMovies);
      }

      setLoading(false);
    };

    loadMovies();
  }, []);
  return (
    <MovieContext.Provider value={{ trending, popular, loading, error }}>
      {children}
    </MovieContext.Provider>
  );
};
