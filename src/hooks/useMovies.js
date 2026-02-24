import { useEffect, useState } from "react";
import {
  fetchPopularMovies,
  fetchTrendingMovies,
  fetchTopRatedMovies,
  fetchUpcomingMovies,
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
        { upcomingMovies, error: upcomingError },
      ] = await Promise.all([fetchTrendingMovies(), fetchPopularMovies(), fetchTopRatedMovies(), fetchUpcomingMovies()]);

      setMovies({
        trending: trendingMovies,
        popular: popularMovies,
        topRated: topRatedMovies,
        upcoming: upcomingMovies,
        loading: false,
        error: trendingError || popularError || topRatedError || upcomingError,
      });
    };

    loadMovies();
  }, []);

  return movies;
};
