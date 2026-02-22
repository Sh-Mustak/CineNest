import { useMovieContext } from "../context/useMovieContext";

export const useMovies = () => {
  return useMovieContext();
};