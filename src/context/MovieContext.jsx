import { useMedia } from "../hooks/useMedia";
import { MovieContext } from "./MovieContextDefinition";

export const MovieProvider = ({ children }) => {
  const movies = useMedia();

  return (
    <MovieContext.Provider value={movies}>{children}</MovieContext.Provider>
  );
};
