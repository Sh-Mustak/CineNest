import { useEffect } from "react";

export function useScrollLock(isLocked) {
  useEffect(() => {
    document.body.style.overflow = isLocked ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLocked]);
}
