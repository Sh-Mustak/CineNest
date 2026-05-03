import { useContext } from "react";
import { WatchlistContext } from "./watchlistContextDefinition";

export const useWatchlistContext = () => useContext(WatchlistContext);
