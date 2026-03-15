import { tvService } from "../api/tvSeriesService";

export const fetchAiringTodayTvSeries = async () => {
  try {
    const data = await tvService.getAiringTvSeries(); // ✅ call the function
    return { data, error: null };
  } catch (error) {
    return { data: [], error: error.message };
  }
};

export const FetchEpisodes = async (seriesId, seasonNmbr) => {
  try {
    const data = await tvService.getSeasonEpisodes(seriesId, seasonNmbr);
    return { data, error: null };
  } catch (error) {
    return { data: [], error: error.message };
  }
};
