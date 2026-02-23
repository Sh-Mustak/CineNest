import { movieService } from "../api/movieService";

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
