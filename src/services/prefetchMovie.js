import { fetchmediaDetails } from "./movieFetcher";

export const prefetchMovie = async (id) => {
  try {
    await fetchmediaDetails(id);
  } catch (err) {
    console.error("Prefetch failed", err);
  }
};
