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
    to: "/",
    icon: "home",
  },
  {
    label: "Movies",
    to: "/movies",
    icon: "movie",
  },
  {
    label: "TV Shows",
    to: "/tvshows",
    icon: "tv",
  },
  {
    label: "My List",
    to: "/watchlist",
    icon: "bookmark",
  },
];

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Bebas Neue */}
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
        rel="stylesheet"
      />

      {/* ================= DESKTOP / MOBILE TOP NAVBAR ================= */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-background-dark backdrop-blur-xl border-b border-primary/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between">

          {/* =================================================
              LOGO
          ================================================= */}
          <CineNestLogo />

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const active = isActive(link.to);

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`border-b-2 pb-1 text-sm font-medium transition-colors ${
                    active
                      ? "border-primary font-semibold text-primary"
                      : "border-transparent text-slate-400 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* =================================================
              RIGHT SIDE
          ================================================= */}
          <div className="ml-auto flex items-center gap-2 sm:gap-3">

            {/* Existing Search Feature */}
            <SearchInput />

            {/* Existing Authentication/Profile Menu */}
            <AuthMenu />

          </div>
        </div>
      </nav>

      {/* =====================================================
          MOBILE BOTTOM NAVIGATION
      ====================================================== */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#0a0505]/95 backdrop-blur-xl md:hidden">
        <div className="mx-auto grid h-[68px] max-w-md grid-cols-4">

          {navLinks.map((link) => {
            const active = isActive(link.to);

            return (
              <Link
                key={link.to}
                to={link.to}
                className={`flex flex-col items-center justify-center gap-1 transition-colors ${
                  active
                    ? "text-primary"
                    : "text-zinc-500 hover:text-white"
                }`}
              >
                {/* Icon */}
                <div
                  className={`flex h-8 w-10 items-center justify-center rounded-xl transition-all ${
                    active ? "bg-primary/10" : ""
                  }`}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: "21px" }}
                  >
                    {link.icon}
                  </span>
                </div>

                {/* Label */}
                <span className="text-[10px] font-medium">
                  {link.label}
                </span>
              </Link>
            );
          })}

        </div>
      </nav>

      {/* =====================================================
          MOBILE CONTENT SPACING
          
          Prevents the last content from being hidden
          behind the bottom navigation.
      ====================================================== */}
      <div className="h-[68px] md:hidden" />
    </>
  );
}
