import { fetchMediaDetails } from "./mediaFetcher";

export const prefetchMovie = async (type, id) => {
  try {
    await fetchMediaDetails(type, id);
  } catch (err) {
    console.error("Prefetch failed", err);
  }
};
