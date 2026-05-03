import { useWatchlistLogic } from "../hooks/useWatchlistLogic";
import { WatchlistContext } from "./watchlistContextDefinition";

export const WatchlistProvider = ({ children }) => {
  const value = useWatchlistLogic();

  return (
    <WatchlistContext.Provider value={value}>
      {children}
    </WatchlistContext.Provider>
  );
};
