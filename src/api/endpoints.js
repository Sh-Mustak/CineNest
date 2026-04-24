const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
const IMAGE_BASE_URL = import.meta.env.VITE_TMDB_IMAGE_BASE_URL;

// Endpoints for fetching movie data from TMDB
export const tmdb_endpoints = {
  // Endpoints for movies
  trending: `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`,
  popular: `${BASE_URL}/movie/popular?api_key=${API_KEY}`,
  topRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`,
  topHindiMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_original_language=hi&sort_by=vote_average.desc&vote_count.gte=50`,  
  upcoming: `${BASE_URL}/movie/upcoming?api_key=${API_KEY}`,
  mediaDetails: `${BASE_URL}/movie/{movie_id}?api_key=${API_KEY}&append_to_response=credits,videos,recommendations,reviews`,
  bangladeshiMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&region=BD&with_original_language=bn&sort_by=popularity.desc`,
  discoverMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}`,

  // Endpoints for tv series
  airingToday: `${BASE_URL}/tv/airing_today?api_key=${API_KEY}`,
  topRatedTvShows: `${BASE_URL}/tv/top_rated?api_key=${API_KEY}`,
  topRatedHindiTvShows: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_original_language=hi&sort_by=vote_average.desc&vote_count.gte=50`,
  crime: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=80,18&with_original_language=es&sort_by=vote_average.desc&vote_count.gte=100}`,
  bangladeshiTv: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_origin_country=BD&sort_by=popularity.desc`,
  seriesDetails: `${BASE_URL}/tv/{series_id}?api_key=${API_KEY}&append_to_response=credits,videos,recommendations,reviews`,
  episodes: `${BASE_URL}/tv/{series_id}/season/{season_number}?api_key=${API_KEY}`,
  discoverTv: `${BASE_URL}/discover/tv?api_key=${API_KEY}`,

  // Endpoint for Search media
  search: `${BASE_URL}/search/multi?api_key=${API_KEY}`,
};

