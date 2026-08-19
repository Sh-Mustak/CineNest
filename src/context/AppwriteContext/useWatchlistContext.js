import {useContext} from "react";
import {WatchlistContext} from "./WatchlistContextDefinition";

export const useWatchlistContext = () => useContext(WatchlistContext);