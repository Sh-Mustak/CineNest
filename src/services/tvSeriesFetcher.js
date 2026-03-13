import { tvService } from "../api/tvSeriesService";

export const fetchAiringTodayTvSeries = async () => {
  try {
    const data = await tvService.getAiringTvSeries(); // ✅ call the function
    return { data, error: null };
  } catch (error) {
    return { data: [], error: error.message };
  }
};

// const seriesDetailsCache = new Map();

// export const fetchSeriesDetails = async (seriesId) => {
//   try {
//     if (seriesDetailsCache.has(seriesId)) {
//       return { details: seriesDetailsCache.get(seriesId), error: null };
//     }

//     const details = await tvService.getSeriesDetails(seriesId);

//     seriesDetailsCache.set(seriesId, details);

//     return { details, error: null };
//   } catch (error) {
//     return { details: null, error: error.message };
//   }
// };
