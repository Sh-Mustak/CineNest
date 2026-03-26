import axiosInstance from "./axiosInstance";
import { tmdb_endpoints } from "./endpoints";

export const movieService = {
  getTrendingMovies: async () => {
    try {
      const response = await axiosInstance.get(tmdb_endpoints.trending);
      return response.data.results;
    } catch (error) {
      console.error("Error fetching trending movies:", error);
      throw error;
    }
  },
  getPopularMovies: async () => {
    try {
      const response = await axiosInstance.get(tmdb_endpoints.popular);
      return response.data.results;
    } catch (error) {
      console.error("Error fetching popular movies:", error);
      throw error;
    }
  },
  getTopRatedMovies: async () => {
    try {
      const response = await axiosInstance.get(tmdb_endpoints.topRated);
      return response.data.results;
    } catch (error) {
      console.error("Error fetching top rated movies:", error);
      throw error;
    }
  },
  getUpcomingMovies: async () => {
    try {
      const response = await axiosInstance.get(tmdb_endpoints.upcoming);
      return response.data.results;
    } catch (error) {
      console.error("Error fetching upcoming movies:", error);
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
  getAllMovies: async()=>{
   try{
     const response = await axiosInstance.get(tmdb_endpoints.discoverMovies)
    return response.data.results;
   }catch(error){
    console.error("Error Fetching Movies", error);
    throw error;
   }
  },
};
