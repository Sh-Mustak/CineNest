import axiosInstance from "./axiosInstance";
import { tmdb_endpoints } from "./endpoints";

export const tvService = {
  getAiringTvSeries: async (page = 1) => {
    try {
      const response = await axiosInstance.get(
        `${tmdb_endpoints.airingToday}&page=${page}`
      );
      return response.data; // return full data for pagination
    } catch (error) {
      console.error("Error fetching Airing Today Tv Series:", error);
      throw error;
    }
  },
  getToRatedTvShows: async (page = 1) => {
    try {
      const response = await axiosInstance.get(
        `${tmdb_endpoints.topRatedTvShows}&page=${page}`
      );
      return response.data; // return full data for pagination
    } catch (error) {
      console.error("Error fetching Top Rated Tv Shows:", error);
      throw error;
    }
  },
  getToRatedHindiTvShows: async (page = 1) => {
    try {
      const response = await axiosInstance.get(
        `${tmdb_endpoints.topRatedHindiTvShows}&page=${page}`
      );
      return response.data; // return full data for pagination
    } catch (error) {
      console.error("Error fetching Top Rated Hindi Tv Shows:", error);
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
  getAllTvShows: async (page = 1) => {
    try {
      const response = await axiosInstance.get(
        `${tmdb_endpoints.discoverTv}&page=${page}`,
      );
      return response.data;
    } catch (error) {
      console.error("Error Fetching Tv Shows", error);
      throw error;
    }
  },
};
