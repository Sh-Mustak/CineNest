import { tvService } from "../api/tvSeriesService";

export const fetchAiringTodayTvSeries = async () => {
  try {
    const data = await tvService.getAiringTvSeries();
    return { data, error: null };
  } catch (error) {
    return { data: [], error: error.message };
  }
};

export const fetchTopRatedTvShows = async () => {
  try {
    const data = await tvService.getToRatedTvShows();
    return { data, error: null };
  } catch (error) {
    return { data: [], error: error.message };
  }
};

export const fetchTopRatedHindiTvShows = async () => {
  try {
    const data = await tvService.getToRatedHindiTvShows();
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

export const fetchAllTvShows = async (
  page = 1,
  sort_by = "popularity.desc",
) => {
  try {
    const data = await tvService.getAllTvShows(page, sort_by);

    const normalized = data.results.map((item) => ({
      ...item,
      media_type: "tv",
    }));

    return { data: { ...data, results: normalized }, error: null };
  } catch (error) {
    return { data: null, error: error.message };
  }
};
