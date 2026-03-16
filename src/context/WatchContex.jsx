import { useState } from "react";
import { WatchContext } from "./WatchContextDefinition";

export const WatchProvider = ({ children }) => {
  const [seasonNumber, setSeasonNumber] = useState(1);
  const [episodeNumber, setEpisodeNumber] = useState(1);

  return (
    <WatchContext.Provider
      value={{ seasonNumber, setSeasonNumber, episodeNumber, setEpisodeNumber }}
    >
      {children}
    </WatchContext.Provider>
  );
};
