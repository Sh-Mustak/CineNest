import { useEffect, useState } from "react";
import {
  fetchPopularMovies,
  fetchTrendingMovies,
} from "../services/movieFetcher";

export const useMovies = () => {
  const [movies, setMovies] = useState({
    trending: [],
    popular: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    const loadMovies = async () => {
      const [
        { trendingMovies, error: trendingError },
        { popularMovies, error: popularError },
      ] = await Promise.all([fetchTrendingMovies(), fetchPopularMovies()]);

      setMovies({
        trending: trendingMovies,
        popular: popularMovies,
        loading: false,
        error: trendingError || popularError,
      });
    };

    loadMovies();
  }, []);

  return movies;
};
