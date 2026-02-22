import { useContext } from 'react';
import { MovieContext } from './MovieContextDefinition';

export const useMovieContext = () => useContext(MovieContext);
