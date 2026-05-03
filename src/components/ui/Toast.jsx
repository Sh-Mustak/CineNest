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
      bg: "#1a0c0c",
      border: "#e60a0d44",
      icon: "#e60a0d",
      bar: "#e60a0d",
      text: "#f8f5f5",
      iconBg: "#e60a0d18",
    },
    error: {
      bg: "#1a0c0c",
      border: "#e60a0d66",
      icon: "#e60a0d",
      bar: "#e60a0d",
      text: "#f8f5f5",
      iconBg: "#e60a0d22",
    },
    warning: {
      bg: "#1a0c0c",
      border: "#e60a0d44",
      icon: "#ff6b6b",
      bar: "#ff6b6b",
      text: "#f8f5f5",
      iconBg: "#e60a0d18",
    },
    default: {
      bg: "#1a0c0c",
      border: "#e60a0d33",
      icon: "#e60a0d",
      bar: "#e60a0d",
      text: "#f8f5f5",
      iconBg: "#e60a0d18",
    },
  };

  const s = typeStyles[type] || typeStyles.default;

  return (
    <>
      <style>{`
        @keyframes toast-in {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes toast-out {
          from { opacity: 1; transform: translateY(0) scale(1); max-height: 120px; margin-bottom: 10px; }
          to   { opacity: 0; transform: translateY(20px) scale(0.95); max-height: 0; margin-bottom: 0; }
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
          background: rgba(230,10,13,0.15);
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
          width: "100%",
          boxShadow: "0 8px 32px rgba(230,10,13,0.15), 0 2px 8px rgba(0,0,0,0.4)",
          overflow: "hidden",
          marginBottom: "10px",
          fontFamily: "'Inter', system-ui, sans-serif",
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", paddingBottom: "12px" }}>
          <span
            style={{
              color: s.icon,
              marginTop: "1px",
              flexShrink: 0,
              background: s.iconBg,
              borderRadius: "8px",
              padding: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {icons[type] || icons.default}
          </span>

          <span style={{ fontSize: "14px", fontWeight: 500, color: s.text, flex: 1, lineHeight: "1.5", wordBreak: "break-word" }}>
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
    setToasts([{ id, message, type }]);
  }, [toast]);

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  if (!toasts.length) return null;

  return (
    <>
      <style>{`
        .toast-container {
          position: fixed;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 9999;
          display: flex;
          flex-direction: column;
          align-items: center;
          pointer-events: none;
          width: 420px;
          max-width: calc(100vw - 32px);
        }
        .toast-container > * {
          pointer-events: auto;
          width: 100%;
        }
      `}</style>
      <div className="toast-container">
        {toasts.map((t) => (
          <ToastItem key={t.id} id={t.id} message={t.message} type={t.type} onRemove={removeToast} />
        ))}
      </div>
    </>
  );
}