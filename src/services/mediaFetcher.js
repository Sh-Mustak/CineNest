import { movieService } from "../api/movieService";
import { tvService } from "../api/tvSeriesService";
const mediaCache = new Map();

export const fetchMediaDetails = async (type, id) => {
  const key = `${type}-${id}`;

  try {
    if (mediaCache.has(key)) {
      return { data: mediaCache.get(key), error: null };
    }

    let data;

    if (type === "movie") {
      data = await movieService.getmediaDetails(id);
    } else {
      data = await tvService.getSeriesDetails(id);
    }

    mediaCache.set(key, data);

    return { data, error: null };
  } catch (error) {
    return { data: null, error: error.message };
  }
};
