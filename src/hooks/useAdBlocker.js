// src/hooks/useAdBlocker.js
import { useEffect, useRef, useState } from "react";

const TRUSTED_EMBED_DOMAINS = [
  "vidsrc.me",
  "vidsrc.net",
  "vidsrc.to",
  "2embed.online",
  "vidlink.pro",
  "vidrock.cc",
  "autoembed.cc",
  "multiembed.mov",
  "moviesapi.club",
];

/**
 * CineNest AdBlocker Hook
 * Registers Service Worker, blocks popups, and provides safe iframe builder.
 *
 * Usage in App.jsx:
 *   const { blockedCount, createSafeEmbed } = useAdBlocker();
 */
export function useAdBlocker() {
  const [blockedCount, setBlockedCount] = useState(0);
  const [swReady, setSwReady] = useState(false);
  const originalOpenRef = useRef(null);

  // ── 1. Register Service Worker ─────────────────────────────────────────────
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    navigator.serviceWorker
      .register("/sw.js", { scope: "/" })
      .then((reg) => {
        setSwReady(true);
        console.log("[CineNest AdBlocker] SW registered:", reg.scope);
      })
      .catch((err) => {
        console.error("[CineNest AdBlocker] SW failed:", err);
      });

    // Listen for block events from Service Worker
    const handleMessage = (event) => {
      if (event.data?.type === "CN_BLOCKED") {
        setBlockedCount((prev) => prev + 1);
      }
    };
    navigator.serviceWorker.addEventListener("message", handleMessage);

    return () => {
      navigator.serviceWorker.removeEventListener("message", handleMessage);
    };
  }, []);

  // ── 2. Block Popups (window.open override) ────────────────────────────────
  useEffect(() => {
    originalOpenRef.current = window.open.bind(window);

    window.open = function (url, target, features) {
      if (!url) return null;
      try {
        const { hostname } = new URL(url);
        const isTrusted = TRUSTED_EMBED_DOMAINS.some(
          (d) => hostname === d || hostname.endsWith(`.${d}`),
        );
        if (isTrusted) {
          return originalOpenRef.current(url, target, features);
        }
        console.warn(`[CineNest AdBlocker] Popup blocked: ${hostname}`);
        setBlockedCount((prev) => prev + 1);
        return null;
      } catch {
        return null;
      }
    };

    return () => {
      // Restore original on unmount
      if (originalOpenRef.current) {
        window.open = originalOpenRef.current;
      }
    };
  }, []);

  // ── 3. Block top-level navigation from iframes ────────────────────────────
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (document.activeElement?.tagName === "IFRAME") {
        e.preventDefault();
        e.returnValue = "";
        setBlockedCount((prev) => prev + 1);
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  // ── 4. Validate embed URL ─────────────────────────────────────────────────
  function isTrustedEmbed(url) {
    try {
      const { hostname } = new URL(url);
      return TRUSTED_EMBED_DOMAINS.some(
        (d) => hostname === d || hostname.endsWith(`.${d}`),
      );
    } catch {
      return false;
    }
  }

  return {
    blockedCount,
    swReady,
    isTrustedEmbed,
    trustedDomains: TRUSTED_EMBED_DOMAINS,
  };
}
