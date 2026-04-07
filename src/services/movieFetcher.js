import { movieService } from "../api/movieService";

const normalizeMovies = (data) => {
  return {
    ...data,
    results: data.results.map((item) => ({
      ...item,
      media_type: "movie",
    })),
  };
};

export const fetchTrendingMovies = async (page) => {
  try {
    const data = await movieService.getTrendingMovies(page);
    return { data: normalizeMovies(data), error: null };
  } catch (error) {
    return { data: [], error: error.message };
  }
};

export const fetchPopularMovies = async (page) => {
  try {
    const data = await movieService.getPopularMovies(page);
    return { data: normalizeMovies(data), error: null };
  } catch (error) {
    return { data: [], error: error.message };
  }
};

export const fetchTopRatedMovies = async (page) => {
  try {
    const data = await movieService.getTopRatedMovies(page);
    return { data: normalizeMovies(data), error: null };
  } catch (error) {
    return { data: [], error: error.message };
  }
};

export const fetchUpcomingMovies = async (page) => {
  try {
    const data = await movieService.getUpcomingMovies(page);
    return { data: normalizeMovies(data), error: null };
  } catch (error) {
    return { data: [], error: error.message };
  }
};
export const fetchTopHindiMovies = async (page) => {
  try {
    const data = await movieService.getTopHindiMovies(page);
    return { data: normalizeMovies(data), error: null };
  } catch (error) {
    return { data: [], error: error.message };
  }
};
export const fetchAllMovies = async (page, category) => {
  try {
    let data;

    if (category === "trending") {
      data = await movieService.getTrendingMovies(page);
    } else if (category === "top_rated") {
      data = await movieService.getTopRatedMovies(page);
    } else if (category === "popular") {
      data = await movieService.getPopularMovies(page);
    } else if (category === "top_hindi") {
      data = await movieService.getTopHindiMovies(page);
    } else {
      data = await movieService.getAllMovies(page);
    }

    const normalized = data.results.map((item) => ({
      ...item,
      media_type: "movie",
    }));

    return {
      data: { ...data, results: normalized },
      error: null,
    };
  } catch (error) {
    return { data: null, error: error.message };
  }
};
