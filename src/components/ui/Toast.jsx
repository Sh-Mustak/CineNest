import { useWatchlistContext } from "../../context/useWatchlistContext";
import { useEffect, useRef, useState } from "react";

const TOAST_DURATION = 4000;

function ToastItem({ id, message, type = "default", onRemove }) {
  const [progress, setProgress] = useState(100);
  const [exiting, setExiting] = useState(false);
  const intervalRef = useRef(null);
  const startTimeRef = useRef(null);
  const remainingRef = useRef(TOAST_DURATION);

  const handleClose = () => {
    clearInterval(intervalRef.current);
    setExiting(true);
    setTimeout(() => onRemove(id), 320);
  };

  const startTimer = () => {
    startTimeRef.current = Date.now();
    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const pct = Math.max(0, 100 - (elapsed / remainingRef.current) * 100);
      setProgress(pct);
      if (pct <= 0) {
        clearInterval(intervalRef.current);
        handleClose();
      }
    }, 16);
  };

  const pauseTimer = () => {
    clearInterval(intervalRef.current);
    remainingRef.current -= Date.now() - startTimeRef.current;
  };

  const resumeTimer = () => {
    startTimer();
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(intervalRef.current);
  }, []);

  const icons = {
    success: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
    error: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" />
      </svg>
    ),
    warning: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    default: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  };

  const typeStyles = {
    success: {
      bg: "#f0fdf4",
      border: "#bbf7d0",
      icon: "#16a34a",
      bar: "#16a34a",
      text: "#14532d",
    },
    error: {
      bg: "#fef2f2",
      border: "#fecaca",
      icon: "#dc2626",
      bar: "#dc2626",
      text: "#7f1d1d",
    },
    warning: {
      bg: "#fffbeb",
      border: "#fde68a",
      icon: "#d97706",
      bar: "#d97706",
      text: "#78350f",
    },
    default: {
      bg: "#ffffff",
      border: "#e2e8f0",
      icon: "#6366f1",
      bar: "#6366f1",
      text: "#1e293b",
    },
  };

  const s = typeStyles[type] || typeStyles.default;

  return (
    <>
      <style>{`
        @keyframes toast-in {
          from { opacity: 0; transform: translateX(110%) scale(0.92); }
          to   { opacity: 1; transform: translateX(0) scale(1); }
        }
        @keyframes toast-out {
          from { opacity: 1; transform: translateX(0) scale(1); max-height: 100px; margin-bottom: 10px; }
          to   { opacity: 0; transform: translateX(110%) scale(0.92); max-height: 0; margin-bottom: 0; }
        }
        .toast-item {
          animation: toast-in 0.35s cubic-bezier(0.21, 1.02, 0.73, 1) forwards;
        }
        .toast-item.exiting {
          animation: toast-out 0.32s cubic-bezier(0.06, 0.71, 0.55, 1) forwards;
        }
        .toast-close-btn {
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 4px;
          border-radius: 6px;
          opacity: 0.5;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.15s, background 0.15s;
          flex-shrink: 0;
        }
        .toast-close-btn:hover {
          opacity: 1;
          background: rgba(0,0,0,0.08);
        }
      `}</style>

      <div
        className={`toast-item${exiting ? " exiting" : ""}`}
        onMouseEnter={pauseTimer}
        onMouseLeave={resumeTimer}
        style={{
          background: s.bg,
          border: `1px solid ${s.border}`,
          borderRadius: "14px",
          padding: "14px 16px 0",
          minWidth: "340px",
          maxWidth: "420px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.10), 0 2px 6px rgba(0,0,0,0.06)",
          overflow: "hidden",
          marginBottom: "10px",
          fontFamily: "'Inter', system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", paddingBottom: "12px" }}>
          <span style={{ color: s.icon, marginTop: "1px", flexShrink: 0 }}>
            {icons[type] || icons.default}
          </span>

          <span style={{ fontSize: "14px", fontWeight: 500, color: s.text, flex: 1, lineHeight: "1.5" }}>
            {message}
          </span>

          <button className="toast-close-btn" onClick={handleClose} aria-label="Dismiss">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={s.text} strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div style={{ height: "3px", background: `${s.bar}22`, margin: "0 -16px" }}>
          <div
            style={{
              height: "100%",
              width: `${progress}%`,
              background: s.bar,
              transition: "width 16ms linear",
              borderRadius: "0 2px 2px 0",
            }}
          />
        </div>
      </div>
    </>
  );
}

export default function Toast() {
  const { toast } = useWatchlistContext();
  const [toasts, setToasts] = useState([]);
  const counterRef = useRef(0);

  useEffect(() => {
    if (!toast) return;
    const message = typeof toast === "string" ? toast : toast.message;
    const type = typeof toast === "object" ? toast.type : "default";
    const id = ++counterRef.current;
    setToasts((prev) => [...prev, { id, message, type }]);
  }, [toast]);

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  if (!toasts.length) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        pointerEvents: "none",
      }}
    >
      {toasts.map((t) => (
        <div key={t.id} style={{ pointerEvents: "auto" }}>
          <ToastItem id={t.id} message={t.message} type={t.type} onRemove={removeToast} />
        </div>
      ))}
    </div>
  );
}