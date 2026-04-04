export const GENRES = [
  { id: 28, label: "Action" },
  { id: 35, label: "Comedy" },
  { id: 18, label: "Drama" },
  { id: 27, label: "Horror" },
  { id: 878, label: "Sci-Fi" },
  { id: 53, label: "Thriller" },
  { id: 10749, label: "Romance" },
  { id: 16, label: "Animation" },
  { id: 99, label: "Documentary" },
  { id: 14, label: "Fantasy" },
];

export const LANGUAGES = [
  { code: "", label: "Any" },
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
  { code: "ko", label: "KO" },
  { code: "ja", label: "JA" },
  { code: "es", label: "ES" },
];

export const SORT_OPTIONS = [
  { value: "popularity.desc",   label: "Most Popular" },
  { value: "vote_average.desc", label: "Highest Rated" },
  { value: "release_date.desc", label: "Newest First" },
  { value: "release_date.asc",  label: "Oldest First" },
  { value: "revenue.desc",      label: "Box Office" },
];

export const DEFAULT_FILTERS = {
  genres: [],
  language: "",
  sortBy: "popularity.desc",
  minRating: 0,
  fromYear: 1980,
  maxRuntime: 240,
};