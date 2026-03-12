import { movieService } from "../api/movieService";

// This file contains functions that fetch movie data and handle errors gracefully.

export const fetchTrendingMovies = async () => {
  try {
    const trendingMovies = await movieService.getTrendingMovies();
    return { trendingMovies, trendingError: null };
  } catch (error) {
    return { trendingMovies: [], trendingError: error.message };
  }
};

export const fetchPopularMovies = async () => {
  try {
    const popularMovies = await movieService.getPopularMovies();
    return { popularMovies, popularError: null };
  } catch (error) {
    return { popularMovies: [], popularError: error.message };
  }
};

export const fetchTopRatedMovies = async () => {
  try {
    const topRatedMovies = await movieService.getTopRatedMovies();
    return { topRatedMovies, topRatedError: null };
  } catch (error) {
    return { topRatedMovies: [], topRatedError: error.message };
  }
};

export const fetchUpcomingMovies = async () => {
  try {
    const upcomingMovies = await movieService.getUpcomingMovies();
    return { upcomingMovies, upcomingError: null };
  } catch (error) {
    return { upcomingMovies: [], upcomingError: error.message };
  }
};

const movieDetailsCache = new Map();

export const fetchMovieDetails = async (movieId) => {
  try {
    // check cache first
    if (movieDetailsCache.has(movieId)) {
      return { details: movieDetailsCache.get(movieId), detailsError: null };
    }

    const details = await movieService.getMovieDetails(movieId);

    // store in cache
    movieDetailsCache.set(movieId, details);

    return { details, detailsError: null };
  } catch (error) {
    return { details: null, detailsError: error.message };
  }
};
