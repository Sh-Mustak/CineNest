import { useMovies } from "../hooks/useMovies";
import { MovieContext } from "./MovieContextDefinition";

export const MovieProvider = ({ children }) => {
  const movies = useMovies();

  return (
    <MovieContext.Provider value={movies}>
      {children}
    </MovieContext.Provider>
  );
};