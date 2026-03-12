import axiosInstance from "./axiosInstance";
import { tmdb_endpoints } from "./endpoints";

export const tvService = {
  getAiringTvSeries: async () => {
    try {
      const response = await axiosInstance.get(tmdb_endpoints.airingTody);
      return response.data.results;
    } catch (error) {
      console.error("Error fetching Airing Today Tv Series:", error);
      throw error;
    }
  },
};
