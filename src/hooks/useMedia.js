import { useEffect, useState } from "react";
import {
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchTrendingMovies,
  fetchUpcomingMovies,
} from "../services/movieFetcher";
import {
  fetchAiringTodayTvSeries,
  fetchTopRatedHindiTvShows,
  fetchTopRatedTvShows,
} from "../services/tvSeriesFetcher";

export const useMedia = () => {
  const [movies, setMovies] = useState({
    trending: [],
    popular: [],
    topRated: [],
    upcoming: [],
    airingToday: [],
    topRatedTvShows: [],
    topRatedHindiTvShows: [],
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
        { data: topRatedTvShows, error: topRatedTvShowsError },
        { data: topRatedHindiTvShows, error: topRatedHindiTvShowsError },
      ] = await Promise.all([
        fetchTrendingMovies(),
        fetchPopularMovies(),
        fetchTopRatedMovies(),
        fetchUpcomingMovies(),
        fetchAiringTodayTvSeries(),
        fetchTopRatedTvShows(),
        fetchTopRatedHindiTvShows(),
      ]);

      setMovies({
        trending,
        popular,
        topRated,
        upcoming,
        airingToday,
        topRatedTvShows,
        topRatedHindiTvShows,
        loading: false,
        error:
          trendingError ||
          popularError ||
          topRatedError ||
          upcomingError ||
          airingError ||
          topRatedTvShowsError ||
          topRatedHindiTvShowsError,
      });
    };

    loadMovies();
  }, []);

  return movies;
};
