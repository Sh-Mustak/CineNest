import axiosInstance from "./axiosInstance";
import { tmdb_endpoints } from "./endpoints";

export const movieService = {
  getTrendingMovies: async (page = 1) => {
    try {
      const response = await axiosInstance.get(
        `${tmdb_endpoints.trending}&page=${page}`,
      );
      return response.data; // return full data for pagination
    } catch (error) {
      console.error("Error fetching trending movies:", error);
      throw error;
    }
  },
  getPopularMovies: async (page = 1) => {
    try {
      const response = await axiosInstance.get(
        `${tmdb_endpoints.popular}&page=${page}`,
      );
      return response.data; // return full data for pagination
    } catch (error) {
      console.error("Error fetching popular movies:", error);
      throw error;
    }
  },
  getTopRatedMovies: async (page = 1) => {
    try {
      const response = await axiosInstance.get(
        `${tmdb_endpoints.topRated}&page=${page}`,
      );
      return response.data; // return full data for pagination
    } catch (error) {
      console.error("Error fetching top rated movies:", error);
      throw error;
    }
  },
  getUpcomingMovies: async (page = 1) => {
    try {
      const response = await axiosInstance.get(
        `${tmdb_endpoints.upcoming}&page=${page}`,
      );
      return response.data; // return full data for pagination
    } catch (error) {
      console.error("Error fetching upcoming movies:", error);
      throw error;
    }
  },
  getTopHindiMovies: async (page = 1) => {
    try {
      const response = await axiosInstance.get(
        `${tmdb_endpoints.topHindiMovies}&page=${page}`,
      );
      return response.data; // return full data for pagination
    } catch (error) {
      console.error("Error fetching top Hindi movies:", error);
      throw error;
    }
  },
  getmediaDetails: async (movieId) => {
    try {
      const response = await axiosInstance.get(
        tmdb_endpoints.mediaDetails.replace("{movie_id}", movieId),
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching movie details:", error);
      throw error;
    }
  },
  getAllMovies: async (page = 1) => {
    try {
      const response = await axiosInstance.get(
        `${tmdb_endpoints.discoverMovies}&page=${page}`,
      );
      return response.data;
    } catch (error) {
      console.error("Error Fetching Movies", error);
      throw error;
    }
  },
};
