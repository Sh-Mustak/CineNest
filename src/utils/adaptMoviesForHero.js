// src/utils/adaptMoviesForHero.js

const GENRE_MAP = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Sci-Fi",
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western",
  10759: "Action & Adventure",
  10762: "Kids",
  10763: "News",
  10764: "Reality",
  10765: "Sci-Fi & Fantasy",
  10766: "Soap",
  10767: "Talk",
  10768: "War & Politics",
};

const TMDB_IMG = "https://image.tmdb.org/t/p/original";
const BADGES = [
  "Featured",
  "Trending Now",
  "Top Pick",
  "Fan Favourite",
  "Now Streaming",
];

function toGenre(genreIds = []) {
  const names = genreIds
    .slice(0, 2)
    .map((id) => GENRE_MAP[id])
    .filter(Boolean);
  return names.length > 0 ? names.join(" · ") : "Movie";
}

function toYear(m) {
  const date = m.release_date || m.first_air_date || "";
  return date ? date.slice(0, 4) : "—";
}

function toStars(vote) {
  if (!vote) return 3;
  return Math.min(5, Math.max(1, Math.round(vote / 2)));
}

/**
 * @param {Array}  movies            — raw TMDB objects from context
 * @param {number} limit             — max slides (default 5)
 * @param {string} fallbackMediaType — "movie" or "tv"
 *   • trending already has media_type per item → used as-is
 *   • dedicated endpoints (topRatedTvShows etc.) don't include it
 *     → pass "tv" so the watch page navigates correctly
 *
 * Usage:
 *   adaptMoviesForHero(trending, 5)           // trending has media_type built-in
 *   adaptMoviesForHero(topRatedTvShows, 5, "tv")  // no media_type → fallback "tv"
 */
export function adaptMoviesForHero(
  movies = [],
  limit = 5,
  fallbackMediaType = "movie",
) {
  return movies
    .filter((m) => m.backdrop_path && m.poster_path)
    .slice(0, limit)
    .map((m, i) => ({
      id: m.id,
      title: (m.title || m.name || "Unknown").toUpperCase(),
      year: toYear(m),
      genre: toGenre(m.genre_ids),
      rating: m.vote_average?.toFixed(1) ?? "N/A",
      stars: toStars(m.vote_average),
      badge: BADGES[i % BADGES.length],
      desc: m.overview || "No description available.",
      bg: `${TMDB_IMG}${m.backdrop_path}`,
      poster: `${TMDB_IMG}${m.poster_path}`,
      // trending includes media_type per item; other endpoints don't
      mediaType: m.media_type || fallbackMediaType,
    }));
}
