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
