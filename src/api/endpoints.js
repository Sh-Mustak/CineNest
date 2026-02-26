const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
const IMAGE_BASE_URL = import.meta.env.VITE_TMDB_IMAGE_BASE_URL;

export const endpoints = {
    trending: `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`,
    popular: `${BASE_URL}/movie/popular?api_key=${API_KEY}`,
    topRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`,
    upcoming: `${BASE_URL}/movie/upcoming?api_key=${API_KEY}`,
    watch: `${BASE_URL}/movie/{movie_id}?api_key=${API_KEY}`,
}