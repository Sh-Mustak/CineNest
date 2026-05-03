import { useState } from "react";

export const useWatchlistLogic = () => {
  // Load once during initial render (NO useEffect needed)
  const [watchlist, setWatchlist] = useState(() => {
    if (typeof window === "undefined") return []; // SSR safety

    const data = localStorage.getItem("watchlist");
    return data ? JSON.parse(data) : [];
  });

  // Toggle function (safe + functional update)
  const toggleWatchlist = (movie) => {
    setWatchlist((prev) => {
      const exists = prev.find((item) => item.id === movie.id);

      let updated;

      if (exists) {
        updated = prev.filter((item) => item.id !== movie.id);
      } else {
        updated = [
          ...prev,
          {
            id: movie.id,
            title: movie.title,
            poster: movie.poster_path,
          },
        ];
      }

      localStorage.setItem("watchlist", JSON.stringify(updated));
      return updated;
    });
  };

  return { watchlist, toggleWatchlist };
};
