// src/components/BlockCounter.jsx
import { useEffect, useRef } from "react";

const positionStyles = {
  "bottom-right": { bottom: 20, right: 20 },
  "bottom-left": { bottom: 20, left: 20 },
  "top-right": { top: 20, right: 20 },
  "top-left": { top: 20, left: 20 },
};

export default function BlockCounter({ count = 0, position = "bottom-right" }) {
  const ref = useRef(null);

  // ✅ No setState — directly manipulates the DOM (that's what effects are for)
  useEffect(() => {
    if (count === 0 || !ref.current) return;
    const el = ref.current;
    el.style.transform = "scale(1.12)";
    const t = setTimeout(() => {
      el.style.transform = "scale(1)";
    }, 300);
    return () => clearTimeout(t);
  }, [count]);

  return (
    <div
      ref={ref}
      style={{
        position: "fixed",
        ...positionStyles[position],
        display: "flex",
        alignItems: "center",
        gap: 6,
        background: "#1a1a2e",
        border: "1px solid #e94560",
        borderRadius: 30,
        padding: "6px 14px",
        fontFamily: "system-ui, sans-serif",
        fontSize: 12,
        color: "#fff",
        zIndex: 99999,
        boxShadow: "0 4px 20px rgba(233,69,96,0.25)",
        transform: "scale(1)",
        transition: "transform 0.15s ease",
        userSelect: "none",
        pointerEvents: "none",
      }}
    >
      <span>🛡️</span>
      <span style={{ fontWeight: 700, color: "#e94560" }}>{count}</span>
      <span style={{ color: "#888" }}>blocked</span>
    </div>
  );
}
