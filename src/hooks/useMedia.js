import { useEffect, useState } from "react";
import {
  fetchPopularMovies,
  fetchTopHindiMovies,
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
    topHindiMovies: [],

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
        { data: topHindiMovies, error: topHindiMoviesError },
      ] = await Promise.all([
        fetchTrendingMovies(),
        fetchPopularMovies(),
        fetchTopRatedMovies(),
        fetchUpcomingMovies(),
        fetchAiringTodayTvSeries(),
        fetchTopRatedTvShows(),
        fetchTopRatedHindiTvShows(),
        fetchTopHindiMovies(),
      ]);

      setMovies({
        trending,
        popular,
        topRated,
        upcoming,
        airingToday,
        topRatedTvShows,
        topRatedHindiTvShows,
        topHindiMovies,

        loading: false,
        error:
          trendingError ||
          popularError ||
          topRatedError ||
          upcomingError ||
          airingError ||
          topRatedTvShowsError ||
          topRatedHindiTvShowsError ||
          topHindiMoviesError,
      });
    };

    loadMovies();
  }, []);

  return movies;
};
