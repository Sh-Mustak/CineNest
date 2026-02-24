import axiosInstance from "./axiosInstance";
import { endpoints } from "./endpoints";

export const movieService = {
  getTrendingMovies: async () => {
    try {
      const response = await axiosInstance.get(endpoints.trending);
      return response.data.results;
    } catch (error) {
      console.error("Error fetching trending movies:", error);
      throw error;
    }
  },
  getPopularMovies: async () => {
    try {
      const response = await axiosInstance.get(endpoints.popular);
      return response.data.results;
    } catch (error) {
      console.error("Error fetching popular movies:", error);
      throw error;
    }
  },
  getTopRatedMovies: async () => {
    try {
      const response = await axiosInstance.get(endpoints.topRated);
      return response.data.results;
    } catch (error) {
      console.error("Error fetching top rated movies:", error);
      throw error;
    }
  },
  getUpcomingMovies: async () => {
    try {
      const response = await axiosInstance.get(endpoints.upcoming);
      return response.data.results;
    } catch (error) {
      console.error("Error fetching upcoming movies:", error);
      throw error;
    }
  }
};
