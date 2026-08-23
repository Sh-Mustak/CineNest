import { useMemo, useState } from "react";
import MovieCard from "../components/movie/MovieCard";

import useAuth from "../features/auth/hooks/useAuth";
import useWatchlist from "../features/auth/hooks/useWatchlist";

export default function WatchList() {
  const { isAuthenticated } = useAuth();
  const { watchlist, loading } = useWatchlist();
  console.log("Watchlist:", watchlist); // Log the watchlist to check its contents

  const [search, setSearch] = useState("");

  // Filter watchlist based on search text
  const filteredWatchlist = useMemo(() => {
    if (!search.trim()) {
      return watchlist;
    }

    return watchlist.filter((item) =>
      (item.title || item.name || "")
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [watchlist, search]);

  // Not authenticated
  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-[#0b0b0f] px-4 pt-28 pb-16 text-amber-50 sm:px-6 lg:px-10">
        <div className="mx-auto flex min-h-[60vh] max-w-7xl items-center justify-center">
          <div className="text-center">
            <div className="mb-6 text-6xl">🔒</div>

            <h1 className="mb-3 text-3xl font-bold sm:text-4xl">
              Your Watchlist
            </h1>

            <p className="max-w-md text-sm text-gray-400 sm:text-base">
              Please log in to save movies and TV shows to your personal
              watchlist.
            </p>
          </div>
        </div>
      </main>
    );
  }

  // Loading
  if (loading) {
    return (
      <main className="min-h-screen bg-[#0b0b0f] px-4 pt-28 pb-16 text-amber-50 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <div className="mb-3 h-10 w-48 animate-pulse rounded bg-white/10" />
            <div className="h-5 w-64 animate-pulse rounded bg-white/10" />
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {Array.from({ length: 12 }).map((_, index) => (
              <div key={index} className="overflow-hidden rounded-xl">
                <div className="aspect-[2/3] animate-pulse bg-white/10" />
                <div className="mt-3 h-4 animate-pulse rounded bg-white/10" />
                <div className="mt-2 h-3 w-2/3 animate-pulse rounded bg-white/10" />
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  }

  // Empty watchlist
  if (watchlist.length === 0) {
    return (
      <main className="min-h-screen bg-[#0b0b0f] px-4 pt-28 pb-16 text-amber-50 sm:px-6 lg:px-10">
        <div className="mx-auto flex min-h-[65vh] max-w-7xl items-center justify-center">
          <div className="max-w-lg text-center">
            <div className="mb-6 flex justify-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-amber-400/10">
                <span className="material-symbols-outlined text-5xl text-amber-400">
                  bookmark
                </span>
              </div>
            </div>

            <h1 className="mb-3 text-3xl font-bold sm:text-4xl">
              Your Watchlist is Empty
            </h1>

            <p className="mb-8 text-sm leading-6 text-gray-400 sm:text-base">
              Movies and TV shows you save will appear here. Start exploring
              CineNest and build your personal collection.
            </p>

            <button
              onClick={() => (window.location.href = "/")}
              className="rounded-lg bg-amber-400 px-6 py-3 font-semibold text-black transition hover:bg-amber-300"
            >
              Explore Movies
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0b0b0f] px-4 pt-28 pb-16 text-amber-50 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <section className="mb-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

            <div>
              <div className="mb-2 flex items-center gap-3">
                <span className="h-8 w-1 rounded-full bg-amber-400" />

                <h1 className="text-3xl font-bold sm:text-4xl">
                  My Watchlist
                </h1>
              </div>

              <p className="text-sm text-gray-400 sm:text-base">
                Movies and shows you want to watch later.
              </p>

              <p className="mt-2 text-sm text-gray-500">
                {watchlist.length}{" "}
                {watchlist.length === 1 ? "title" : "titles"} saved
              </p>
            </div>

            {/* Search */}
            <div className="relative w-full md:w-72">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                search
              </span>

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search your watchlist..."
                className="w-full rounded-lg border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-amber-400/50 focus:bg-white/10"
              />
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="mb-8 h-px bg-white/10" />

        {/* No search results */}
        {filteredWatchlist.length === 0 ? (
          <div className="flex min-h-[40vh] items-center justify-center">
            <div className="text-center">
              <span className="material-symbols-outlined mb-4 text-5xl text-gray-600">
                search_off
              </span>

              <h2 className="mb-2 text-xl font-semibold text-white">
                No titles found
              </h2>

              <p className="text-sm text-gray-500">
                Try searching with a different title.
              </p>
            </div>
          </div>
        ) : (
          /* Movie Grid */
          <section>
            <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
              {filteredWatchlist.map((item) => (
                <MovieCard
                  key={item.id}
                  movie={item}
                  type={item.media_type}
                  imagePath={item.poster_path}
                  
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}