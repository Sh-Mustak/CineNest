// src/components/SafeEmbed.jsx
import { useRef } from "react";

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

function validateSrc(src) {
  if (!src) return { isValid: false, error: "No embed URL provided." };
  try {
    const { hostname } = new URL(src);
    const trusted = TRUSTED_EMBED_DOMAINS.some(
      (d) => hostname === d || hostname.endsWith(`.${d}`),
    );
    if (!trusted) {
      return {
        isValid: false,
        error: `Blocked: ${hostname} is not a trusted embed source.`,
        hostname,
      };
    }
    return { isValid: true, error: null };
  } catch {
    return { isValid: false, error: "Invalid embed URL." };
  }
}

export default function SafeEmbed({
  src,
  className = "",
  style = {},
  onBlocked,
}) {
  const iframeRef = useRef(null);

  // ✅ Derived directly — no useEffect, no setState
  const { isValid, error, hostname } = validateSrc(src);

  // Side effect for onBlocked callback — only if needed
  if (!isValid && hostname) {
    console.warn(`[CineNest SafeEmbed] Blocked untrusted domain: ${hostname}`);
    onBlocked?.(hostname);
  }

  if (error) {
    return (
      <div
        className={`cinenest-embed-error ${className}`}
        style={errorContainerStyle}
      >
        <span style={{ fontSize: 32 }}>🚫</span>
        <p style={{ color: "#e94560", fontWeight: 600, margin: "8px 0 4px" }}>
          Embed Blocked
        </p>
        <p style={{ color: "#888", fontSize: 13 }}>{error}</p>
      </div>
    );
  }

  if (!isValid) return null;

  return (
    <div
      className={`cinenest-safe-embed ${className}`}
      style={{ position: "relative", width: "100%", height: "100%", ...style }}
    >
      <iframe
        ref={iframeRef}
        src={src}
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          display: "block",
        }}
        sandbox="allow-scripts allow-same-origin allow-forms allow-presentation allow-fullscreen allow-popups allow-popups-to-escape-sandbox"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer"
        title="CineNest Video Player"
      />
    </div>
  );
}

const errorContainerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  minHeight: 200,
  background: "rgba(0,0,0,0.6)",
  borderRadius: 12,
  fontFamily: "system-ui, sans-serif",
  textAlign: "center",
  padding: 24,
};
