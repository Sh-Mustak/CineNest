import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import SearchInput from "./SearchInput";
import AuthMenu from "../../features/auth/components/AuthMenu";

function CineNestLogo() {
  return (
    <Link to="/" className="flex items-center flex-shrink-0">
      <span
        className="text-[28px] sm:text-[32px] tracking-[3px] sm:tracking-[4px] leading-none"
        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
      >
        <span className="text-white">Cine</span>
        <span className="text-primary">Nest</span>
      </span>
    </Link>
  );
}

const navLinks = [
  {
    label: "Home",
    mobileLabel: "Home",
    to: "/",
    icon: "home",
  },
  {
    label: "Movies",
    mobileLabel: "Movies",
    to: "/movies",
    icon: "movie",
  },
  {
    label: "TV Shows",
    mobileLabel: "TV",
    to: "/tvshows",
    icon: "tv",
  },
  {
    label: "Watchlist",
    mobileLabel: "My List",
    to: "/watchlist",
    icon: "bookmark",
  },
];

export default function Navbar() {
  const location = useLocation();

  // Prevent mobile bottom navigation from overlapping page content
  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      document.body.style.paddingBottom = "72px";
    }

    return () => {
      document.body.style.paddingBottom = "";
    };
  }, []);

  return (
    <>
      {/* Google Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
        rel="stylesheet"
      />

      {/* ================= DESKTOP / MOBILE TOP NAVBAR ================= */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0505]/90 backdrop-blur-xl border-b border-primary/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between">

          {/* Logo */}
          <CineNestLogo />

          {/* ================= DESKTOP NAV LINKS ================= */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`transition-colors text-sm font-medium pb-1 border-b-2 ${
                    isActive
                      ? "text-primary border-primary font-semibold"
                      : "text-slate-400 hover:text-white border-transparent"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="flex items-center gap-2 ml-auto">

            {/* Desktop Search */}
            <div className="hidden sm:block">
              <SearchInput />
            </div>

            {/* Mobile Search Icon */}
            <Link
              to="/search"
              className="sm:hidden flex items-center justify-center w-9 h-9 rounded-full bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:bg-white/10 transition active:scale-95"
            >
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "21px" }}
              >
                search
              </span>
            </Link>

            {/* Profile */}
            <AuthMenu />

          </div>
        </div>
      </nav>

      {/* ================= MOBILE BOTTOM NAVIGATION ================= */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-[100] bg-[#0a0505]/95 backdrop-blur-xl border-t border-primary/10">

        <div className="h-[68px] grid grid-cols-4">

          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;

            return (
              <Link
                key={link.to}
                to={link.to}
                className={`relative flex flex-col items-center justify-center gap-1 transition-all ${
                  isActive
                    ? "text-primary"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >

                {/* Active indicator */}
                {isActive && (
                  <span className="absolute top-0 w-8 h-[2px] bg-primary rounded-full" />
                )}

                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "21px" }}
                >
                  {link.icon}
                </span>

                <span className="text-[10px] font-medium tracking-wide">
                  {link.mobileLabel}
                </span>

              </Link>
            );
          })}

        </div>
      </nav>
    </>
  );
}
