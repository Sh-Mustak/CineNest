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
  mediaDetails: `${BASE_URL}/movie/{movie_id}?api_key=${API_KEY}&append_to_response=credits,videos,recommendations,reviews`,

  // Endpoints for tv series
  airingTody: `${BASE_URL}/tv/airing_today?api_key=${API_KEY}`,
  seriesDetails: `${BASE_URL}/tv/{series_id}?api_key=${API_KEY}&append_to_response=credits,videos,recommendations,reviews`,
  episodes: `https://api.themoviedb.org/3/tv/{series_id}/season/{season_number}`,
};

// Endpoints for fetching movie streaming players
export const embed_endpoints = {
  server1: {
    movie: (id) => `https://www.2embed.online/embed/movie/${id}`,
    tv: (id, season, episode) =>
      `https://www.2embed.online/embed/tv/${id}/${season}/${episode}`,
  },

  server2: {
    movie: (id) => `https://www.2embed.cc/embed/${id}`,
    tv: (id, season, episode) =>
      `https://www.2embed.cc/embedtv/${id}&s=${season}&e=${episode}`,
  },
  server3: {
    movie: (id) => `https://godriveplayer.com/player.php?tmdb=${id}`,
    tv: (id, season, episode) =>
      `https://godriveplayer.com/player.php?type=series&tmdb=${id}&season=${season}&episode=${episode}`,
  },

  server4: {
    movie: (id) => `https://multiembed.mov/?video_id=${id}&tmdb=1`,
    tv: (id, season, episode) =>
      `https://multiembed.mov/?video_id=${id}&tmdb=1&s=${season}&e=${episode}`,
  },

  server5: {
    movie: (id) => `https://vidsrc-embed.ru/embed/movie?tmdb=${id}&autoplay=1`,
    tv: (id, season, episode) =>
      `https://vidsrc-embed.ru/embed/tv?tmdb=${id}&season=${season}&episode=${episode}&autoplay=1&autonext=1`,
  },
  server6: {
    movie: (id) => `https://vidlink.pro/movie/${id}`,
    tv: (id, season, episode) =>
      `https://vidlink.pro/tv/${id}/${season}/${episode}`,
  },
  server7: {
    movie: (id) => `https://player.vidplus.to/embed/movie/${id}`,
    tv: (id, season, episode) =>
      `https://player.vidplus.to/embed/tv/${id}/${season}/${episode}`,
  },
    server8: {
    movie: (id) => `https://vidrock.net/movie/${id}`,
    tv: (id, season, episode) =>
      `https://vidrock.net/tv//${id}/${season}/${episode}`,
  },
};
