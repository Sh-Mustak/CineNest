import { searchService } from "../api/searchService";

export const fetchSearchItems = async (query) => {
  try {
    const data = await searchService.getSearchItems(query);

    const filtered = data.filter((item) => {
      const isMovie = item.media_type === "movie";
      const isTv =
        item.media_type === "tv" ||
        (!item.media_type && item.first_air_date !== undefined);

      return isMovie || isTv;
    });

    // Normalize media_type in case it was missing
    const normalized = filtered.map((item) => ({
      ...item,
      media_type:
        item.media_type || (item.first_air_date !== undefined ? "tv" : "movie"),
    }));

    return { data: normalized, error: null };
  } catch (error) {
    return { data: [], error: error.message };
  }
};
