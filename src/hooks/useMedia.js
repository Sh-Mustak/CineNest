import { useEffect, useState } from "react";
import {
  fetchBangladeshiMovies,
  fetchPopularMovies,
  fetchTopHindiMovies,
  fetchTopRatedMovies,
  fetchTrendingMovies,
  fetchUpcomingMovies,
} from "../services/movieFetcher";
import {
  fetchAiringTodayTvSeries,
  fetchBangladeshiTvShows,
  fetchCrimeTvShows,
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
    crimeTvShows: [],
    bdMovies: [],
    bdTvShows: [],
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
        { data: crimeTvShows, error: crimeTvShowsError },
        { data: bdTvShows, error: bdTvShowsError },
        { data: bdMovies, error: bdMoviesError },
      ] = await Promise.all([
        fetchTrendingMovies(),
        fetchPopularMovies(),
        fetchTopRatedMovies(),
        fetchUpcomingMovies(),
        fetchAiringTodayTvSeries(),
        fetchTopRatedTvShows(),
        fetchTopRatedHindiTvShows(),
        fetchTopHindiMovies(),
        fetchCrimeTvShows(),
        fetchBangladeshiTvShows(),
        fetchBangladeshiMovies(),
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
        crimeTvShows,
        bdMovies,
        bdTvShows,
        loading: false,
        error:
          trendingError ||
          popularError ||
          topRatedError ||
          upcomingError ||
          airingError ||
          topRatedTvShowsError ||
          topRatedHindiTvShowsError ||
          topHindiMoviesError ||
          crimeTvShowsError ||
          bdTvShowsError ||
          bdMoviesError ||
          null,
      });
    };

    loadMovies();
  }, []);

  return movies;
};
