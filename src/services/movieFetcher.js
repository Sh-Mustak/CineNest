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

export const fetchAllMovies = async (page = 1) => {
  try {
    const data = await movieService.getAllMovies(page);

    const normalized = data.results.map((item) => ({
      ...item,
      media_type: "movie",
    }));

    return { data: { ...data, results: normalized }, error: null };
  } catch (error) {
    return { data: null, error: error.message };
  }
};
