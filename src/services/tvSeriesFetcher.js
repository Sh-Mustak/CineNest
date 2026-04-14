import { tvService } from "../api/tvSeriesService";

const normalizeTvShows = (data) => {
  return {
    ...data,
    results: data.results.map((item) => ({
      ...item,
      media_type: "tv",
    })),
  };
};

export const fetchAiringTodayTvSeries = async () => {
  try {
    const data = await tvService.getAiringTvSeries();
    return { data: normalizeTvShows(data), error: null };
  } catch (error) {
    return { data: [], error: error.message };
  }
};

export const fetchTopRatedTvShows = async () => {
  try {
    const data = await tvService.getToRatedTvShows();
    return { data: normalizeTvShows(data), error: null };
  } catch (error) {
    return { data: [], error: error.message };
  }
};

export const fetchTopRatedHindiTvShows = async () => {
  try {
    const data = await tvService.getToRatedHindiTvShows();
    return { data: normalizeTvShows(data), error: null };
  } catch (error) {
    return { data: [], error: error.message };
  }
};
export const fetchCrimeTvShows = async () => {
  try {
    const data = await tvService.getCrimeTvShows();
    return { data: normalizeTvShows(data), error: null };
  } catch (error) {
    return { data: [], error: error.message };
  }
};

export const fetchBangladeshiTvShows = async () => {
  try {
    const data = await tvService.getBangladeshiTvShows();
    return { data: normalizeTvShows(data), error: null };
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

export const fetchAllTvShows = async (page = 1, category = null) => {
  try {
    let data;

    if (category === "airing_today") {
      data = await tvService.getAiringTvSeries(page);
    } else if (category === "top_rated_tv") {
      data = await tvService.getToRatedTvShows(page);
    } else if (category === "crime_tv") {
      data = await tvService.getCrimeTvShows(page);
    } else if (category === "top_rated_hindi_tv") {
      data = await tvService.getToRatedHindiTvShows(page);
    } else if (category === "bangladeshi_tv") {
      data = await tvService.getBangladeshiTvShows(page);
    } else {
      data = await tvService.getAllTvShows(page);
    }

    const normalized = data.results.map((item) => ({
      ...item,
      media_type: "tv",
    }));

    return {
      data: { ...data, results: normalized },
      error: null,
    };
  } catch (error) {
    return { data: null, error: error.message };
  }
};
