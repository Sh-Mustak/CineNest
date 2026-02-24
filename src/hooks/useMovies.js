import { useEffect, useState } from "react";
import {
  fetchPopularMovies,
  fetchTrendingMovies,
  fetchTopRatedMovies,
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
        { topRatedMovies, error: topRatedError },
      ] = await Promise.all([fetchTrendingMovies(), fetchPopularMovies(), fetchTopRatedMovies()]);

      setMovies({
        trending: trendingMovies,
        popular: popularMovies,
        topRated: topRatedMovies,
        loading: false,
        error: trendingError || popularError || topRatedError,
      });
    };

    loadMovies();
  }, []);

  return movies;
};
