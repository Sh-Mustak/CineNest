import axiosInstance from "./axiosInstance";
import { tmdb_endpoints } from "./endpoints";

export const searchService = {
  getSearchItems: async (query) => {
    try {
      const response = await axiosInstance.get(
        `${tmdb_endpoints.search}&query=${encodeURIComponent(query)}`,
      );

      return response.data.results;
    } catch (error) {
      console.error("Error fetching search results:", error);
      throw error;
    }
  },
};
