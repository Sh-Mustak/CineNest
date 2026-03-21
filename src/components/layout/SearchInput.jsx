import { useEffect, useRef, useState } from "react";

const placeholders = ["movies...", "TV shows...", "Anime...", "Actors..."];

export default function SearchInput() {
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const timeoutRef = useRef(null);

  useEffect(() => {
    const cycle = () => {
      setVisible(false);
      timeoutRef.current = setTimeout(() => {
        setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
        setVisible(true);
        timeoutRef.current = setTimeout(cycle, 2500);
      }, 400);
    };

    timeoutRef.current = setTimeout(cycle, 2500);
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <div className="relative group">
      <span
        className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 transition-colors duration-300 text-white/80 group-focus-within:text-primary"
        style={{ fontSize: "22px" }}
      >
        search
      </span>
      <input
        className="
          text-white text-sm
          rounded-2xl border border-white/10
          pl-9 pr-4 py-[4px]
          w-30
          outline-none
          transition-all duration-300 ease-in-out
        "
        style={{
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          caretColor: "white",
          transition: "all 0.3s ease",
        }}
        onFocus={(e) => {
          setIsFocused(true);
          e.target.style.background = "rgba(255, 255, 255, 0.08)";
          e.target.style.borderColor = "rgba(220, 38, 38, 0.6)";
          e.target.style.boxShadow =
            "0 0 0 3px rgba(220,38,38,0.12), 0 0 20px rgba(220,38,38,0.15), inset 0 1px 0 rgba(255,255,255,0.1)";
        }}
        onBlur={(e) => {
          setIsFocused(false);
          e.target.style.background = "rgba(255, 255, 255, 0.05)";
          e.target.style.borderColor = "rgba(255, 255, 255, 0.1)";
          e.target.style.boxShadow = "none";
        }}
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        type="text"
      />

      {!isFocused && !inputValue && (
        <span
          className="absolute left-9 top-1/2 -translate-y-1/2 text-sm text-slate-500 pointer-events-none"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
        >
          {placeholders[placeholderIndex]}
        </span>
      )}
    </div>
  );
}
