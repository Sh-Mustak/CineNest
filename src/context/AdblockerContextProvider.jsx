import { useAdBlocker } from "../hooks/useAdBlocker";
import { AdBlockerContext } from "./AdBlockerContext";

export function AdBlockerProvider({ children }) {
  const adBlocker = useAdBlocker();
  return (
    <AdBlockerContext.Provider value={adBlocker}>
      {children}
    </AdBlockerContext.Provider>
  );
}
