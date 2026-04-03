import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", to: "/", icon: "home" },
  { label: "Movies", to: "/movies", icon: "movie" },
  { label: "TV Shows", to: "/tvshows", icon: "tv" },
  { label: "My List", to: "/watchlist", icon: "bookmark" },
];

export default function BottomNav() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 md:hidden bg-[#0a0505]/90 backdrop-blur-md border-t border-white/10 safe-area-inset-bottom">
      <div className="flex items-center justify-around h-16 px-2">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.to;
          return (
            <Link
              key={link.to}
              to={link.to}
              className={`relative flex flex-col items-center justify-center gap-0.5 flex-1 h-full transition-all duration-200 active:scale-90 ${
                isActive ? "text-primary" : "text-slate-500"
              }`}
            >
              {/* Active top indicator bar */}
              <span
                className={`absolute top-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-primary transition-all duration-300 ${
                  isActive ? "w-8 opacity-100" : "w-0 opacity-0"
                }`}
              />

              {/* Icon container */}
              <div
                className={`flex items-center justify-center w-10 h-7 rounded-xl transition-all duration-200 ${
                  isActive ? "bg-primary/15" : "bg-transparent"
                }`}
              >
                <span
                  className="material-symbols-outlined"
                  style={{
                    fontSize: "22px",
                    fontVariationSettings: isActive
                      ? "'FILL' 1, 'wght' 400"
                      : "'FILL' 0, 'wght' 300",
                  }}
                >
                  {link.icon}
                </span>
              </div>

              {/* Label */}
              <span
                className={`text-[10px] font-semibold tracking-wider uppercase transition-all duration-200 ${
                  isActive ? "opacity-100" : "opacity-50"
                }`}
              >
                {link.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
