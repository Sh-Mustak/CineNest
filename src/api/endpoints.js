const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
const IMAGE_BASE_URL = import.meta.env.VITE_TMDB_IMAGE_BASE_URL;

// Endpoints for fetching movie data from TMDB
export const tmdb_endpoints = {
  // Endpoints for movies
  trending: `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`,
  popular: `${BASE_URL}/movie/popular?api_key=${API_KEY}`,
  topRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`,
  upcoming: `${BASE_URL}/movie/upcoming?api_key=${API_KEY}`,
  movieDetails: `${BASE_URL}/movie/{movie_id}?api_key=${API_KEY}&append_to_response=credits,videos,recommendations,reviews`,

  // Endpoints for tv series
  airingTody: `${BASE_URL}/tv/airing_today?api_key=${API_KEY}`,
  seriesDetails: `${BASE_URL}/tv/{series_id}?api_key=${API_KEY}&append_to_response=credits,videos,recommendations,reviews`,
};

// Endpoints for fetching movie streaming players
export const embed_endpoints = {
  movie: (id) => `https://player.autoembed.cc/embed/movie/${id}`,
  tv: (id, season, episode) =>
    `https://player.autoembed.cc/embed/tv/${id}/${season}/${episode}`,
};
