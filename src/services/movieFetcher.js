import { movieService } from "../api/movieService";

export const fetchTrendingMovies = async (page) => {
  try {
    const data = await movieService.getTrendingMovies(page);
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

export const fetchAllMovies = async (
  page,
  // sort_by = "popularity.desc",
  category 
) => {
  try {
    let data;

    if (category === "trending") {
      data = await movieService.getTrendingMovies(page);
    } else if (category === "top_rated") {
      data = await movieService.getTopRatedMovies(page);
    } else if (category === "popular") {
      data = await movieService.getPopularMovies(page);
    } else {
      data = await movieService.getAllMovies(page);
    }

    const normalized = data.results.map((item) => ({
      ...item,
      media_type: "movie",
    }));

    return { data: { ...data, results: normalized }, error: null };
  } catch (error) {
    return { data: null, error: error.message };
  }
};
