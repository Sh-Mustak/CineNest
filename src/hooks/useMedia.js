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
  fetchCrimeTvShows,
  fetchTopRatedHindiTvShows,
  fetchTopRatedTvShows,
    fetchBangladeshiTvShows,
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
          null,
      });
    };

    loadMovies();
  }, []);

  return movies;
};
