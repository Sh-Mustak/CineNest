import { tvService } from "../api/tvSeriesService";

export const fetchAiringTodayTvSeries = async () => {
  try {
    const data = await tvService.getAiringTvSeries(); // ✅ call the function
    return { data, error: null };
  } catch (error) {
    return { data: [], error: error.message };
  }
};
