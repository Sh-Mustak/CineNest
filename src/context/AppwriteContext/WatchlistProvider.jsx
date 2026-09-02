import { WatchlistContext } from "./WatchlistContextDefinition";
import useWatchlist from "../../features/watchlist/hooks/useWatchlist";


export default function WatchlistProvider({ children }) {
  const watchlistData = useWatchlist();

  return (
    <WatchlistContext.Provider value={watchlistData}>
      {children}
    </WatchlistContext.Provider>
  );
}