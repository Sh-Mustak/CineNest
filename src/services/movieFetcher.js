import { movieService } from "../api/movieService";

export const fetchTrendingMovies = async () => {
  try {
    const data = await movieService.getTrendingMovies();
    return { data, error: null };
  } catch (error) {
    return { data: [], error: error.message };
  }
};

export const fetchPopularMovies = async () => {
  try {
    const data = await movieService.getPopularMovies();
    return { data, error: null };
  } catch (error) {
    return { data: [], error: error.message };
  }
};

export const fetchTopRatedMovies = async () => {
  try {
    const data = await movieService.getTopRatedMovies();
    return { data, error: null };
  } catch (error) {
    return { data: [], error: error.message };
  }
};

export const fetchUpcomingMovies = async () => {
  try {
    const data = await movieService.getUpcomingMovies();
    return { data, error: null };
  } catch (error) {
    return { data: [], error: error.message };
  }
};

// Movie details cache
const movieDetailsCache = new Map();

export const fetchMovieDetails = async (movieId) => {
  try {
    if (movieDetailsCache.has(movieId)) {
      return { details: movieDetailsCache.get(movieId), detailsError: null };
    }

    const details = await movieService.getMovieDetails(movieId);
    movieDetailsCache.set(movieId, details);

    return { details, detailsError: null };
  } catch (error) {
    return { details: null, detailsError: error.message };
  }
};