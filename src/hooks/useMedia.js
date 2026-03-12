import { useEffect, useState } from "react";
import {
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchTrendingMovies,
  fetchUpcomingMovies,
} from "../services/movieFetcher";
import { fetchAiringTodayTvSeries } from "../services/tvSeriesFetcher";

export const useMedia = () => {
  const [movies, setMovies] = useState({
    trending: [],
    popular: [],
    topRated: [],
    upcoming: [],
    airingToday: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    const loadMovies = async () => {
      const [
        { data: trending, error: trendingError },
        { data: popular, error: popularError },
        { data: topRated, error: topRatedError },
        { data: upcoming, error: upcomingError },
        { data: airingToday, error: airingError },
      ] = await Promise.all([
        fetchTrendingMovies(),
        fetchPopularMovies(),
        fetchTopRatedMovies(),
        fetchUpcomingMovies(),
        fetchAiringTodayTvSeries(),
      ]);

      setMovies({
        trending,
        popular,
        topRated,
        upcoming,
        airingToday,
        loading: false,
        error:
          trendingError ||
          popularError ||
          topRatedError ||
          upcomingError ||
          airingError,
      });
    };

    loadMovies();
  }, []);

  return movies;
};
