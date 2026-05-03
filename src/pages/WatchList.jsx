"use client";

import { useWatchlistContext } from "../context/useWatchlistContext";
import MovieCard from "../components/movie/MovieCard";

export default function WatchList() {
  const { watchlist } = useWatchlistContext();

  return (
    <div className="mt-20 w-full px-4 sm:px-6 lg:px-10 text-amber-50">

      <h1 className="text-2xl sm:text-3xl font-bold mb-6">
        My Watchlist
      </h1>

      {watchlist.length === 0 ? (
        <p className="text-gray-400">No movies in your watchlist</p>
      ) : (
        <div className="flex flex-wrap gap-4">
          {watchlist.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              fullWidth={false}
            />
          ))}
        </div>
      )}

    </div>
  );
}