import axiosInstance from "./axiosInstance";
import { tmdb_endpoints } from "./endpoints";

export const tvService = {
  getAiringTvSeries: async () => {
    try {
      const response = await axiosInstance.get(tmdb_endpoints.airingToday);
      return response.data.results;
    } catch (error) {
      console.error("Error fetching Airing Today Tv Series:", error);
      throw error;
    }
  },
  getToRatedTvShows: async () => {
    try {
      const response = await axiosInstance.get(tmdb_endpoints.topRatedTvShows);
      return response.data.results;
    } catch (error) {
      console.error("Error fetching Top Rated Tv Shows:", error);
      throw error;
    }
  },
  getSeriesDetails: async (seriesId) => {
    try {
      const response = await axiosInstance.get(
        tmdb_endpoints.seriesDetails.replace("{series_id}", seriesId),
      );

      return response.data;
    } catch (error) {
      console.error("Error fetching series details:", error);
      throw error;
    }
  },
  getSeasonEpisodes: async (seriesId, seasonNmbr) => {
    try {
      const endpoint = tmdb_endpoints.episodes
        .replace("{series_id}", seriesId)
        .replace("{season_number}", seasonNmbr);

      const response = await axiosInstance.get(endpoint);

      return response.data;
    } catch (error) {
      console.error("Error Fetching Episodes", error);
      throw error;
    }
  },
};
