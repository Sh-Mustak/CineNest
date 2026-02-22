// Base URL for TMDB images
const IMAGE_BASE_URL = import.meta.env.VITE_TMDB_IMAGE_BASE_URL;

// Sizes: w200, w300, w500, w780, original
export const getImageUrl = (path) => {
  if (!path) return "/fallback.jpg"; 
  return `${IMAGE_BASE_URL}${path}`;
};