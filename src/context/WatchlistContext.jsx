import { useState } from "react";
import { useWatchlistLogic } from "../hooks/useWatchlistLogic";
import { WatchlistContext } from "./watchlistContextDefinition";

export const WatchlistProvider = ({ children }) => {
  const value = useWatchlistLogic();

  const [toast, setToast] = useState(null);

  const showToast = (message) => {
    setToast(message);

    setTimeout(() => {
      setToast(null);
    }, 2000);
  };

  return (
    <WatchlistContext.Provider
      value={{
        ...value,
        toast,
        showToast,
      }}
    >
      {children}
    </WatchlistContext.Provider>
  );
};
