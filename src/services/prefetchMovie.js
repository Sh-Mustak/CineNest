import { fetchMovieDetails } from "./movieFetcher"; 

export const prefetchMovie = async (id) => {
  try {
    await fetchMovieDetails(id);
  } catch (err) {
    console.error("Prefetch failed", err);
  }
};
