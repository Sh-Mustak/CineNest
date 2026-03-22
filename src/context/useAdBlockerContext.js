import { useContext } from "react";
import { AdBlockerContext } from "./AdBlockerContext";

export function useAdBlockerContext() {
  const ctx = useContext(AdBlockerContext);
  if (!ctx)
    throw new Error(
      "useAdBlockerContext must be used inside AdBlockerProvider",
    );
  return ctx;
}
