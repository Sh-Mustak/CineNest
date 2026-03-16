import { useContext } from "react";
import { WatchContext } from "./WatchContextDefinition";

export const useWatchContext = () => useContext(WatchContext);
