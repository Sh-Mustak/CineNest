
const GENRE_MAP = {
  28:    "Action",
  12:    "Adventure",
  16:    "Animation",
  35:    "Comedy",
  80:    "Crime",
  99:    "Documentary",
  18:    "Drama",
  10751: "Family",
  14:    "Fantasy",
  36:    "History",
  27:    "Horror",
  10402: "Music",
  9648:  "Mystery",
  10749: "Romance",
  878:   "Sci-Fi",
  10770: "TV Movie",
  53:    "Thriller",
  10752: "War",
  37:    "Western",
  // TV specific
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

// Convert vote_average (0-10) → stars (1-5)
function toStars(vote) {
  if (!vote) return 3;
  return Math.min(5, Math.max(1, Math.round(vote / 2)));
}

// Pick a badge label based on position in the list
function toBadge(index) {
  const badges = [
    "Featured",
    "Trending Now",
    "Top Pick",
    "Fan Favourite",
    "Now Streaming",
  ];
  return badges[index % badges.length];
}

// Get up to 2 genre names from genre_ids array
function toGenre(genreIds = []) {
  const names = genreIds
    .slice(0, 2)
    .map((id) => GENRE_MAP[id])
    .filter(Boolean);
  return names.length > 0 ? names.join(" · ") : "Movie";
}

// Extract year from release_date or first_air_date
function toYear(movie) {
  const date = movie.release_date || movie.first_air_date || "";
  return date ? date.slice(0, 4) : "—";
}

/**
 * adaptMoviesForHero(movies, limit)
 *
 * @param {Array}  movies  — raw TMDB movie/tv objects from context
 * @param {number} limit   — how many to show in hero (default 5)
 * @returns {Array}        — hero-ready movie objects
 */
export function adaptMoviesForHero(movies = [], limit = 5) {
  return movies
    .filter((m) => m.backdrop_path && m.poster_path) // skip items with no images
    .slice(0, limit)
    .map((m, index) => ({
      id:     m.id,
      title:  (m.title || m.name || "Unknown").toUpperCase(),
      year:   toYear(m),
      dur:    toGenre(m.genre_ids),   // we use genre as "dur" since list API has no runtime
      rating: m.vote_average?.toFixed(1) ?? "N/A",
      stars:  toStars(m.vote_average),
      genre:  toGenre(m.genre_ids),
      badge:  toBadge(index),
      desc:   m.overview || "No description available.",
      bg:     `${TMDB_IMG}${m.backdrop_path}`,
      poster: `${TMDB_IMG}${m.poster_path}`,
    }));
}