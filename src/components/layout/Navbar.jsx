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
    label: "TV",
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
      {/* Google Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
        rel="stylesheet"
      />

      {/* =========================
          TOP NAVBAR
      ========================== */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-primary/10 bg-[#0a0505]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 sm:h-20 max-w-[1440px] items-center px-4 sm:px-6">

          {/* =========================
              LOGO
          ========================== */}
          <CineNestLogo />

          {/* =========================
              DESKTOP NAVIGATION
          ========================== */}
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

          {/* =========================
              RIGHT SIDE
          ========================== */}
          <div className="ml-auto flex items-center gap-2 sm:gap-3">

            {/* SEARCH
                Keep your existing search feature.
                It is hidden on very small screens only
                if SearchInput itself is too wide.
            */}
            <div className="hidden sm:block">
              <SearchInput />
            </div>

            {/* AUTH / PROFILE */}
            <AuthMenu />

          </div>
        </div>
      </nav>

      {/* =========================
          MOBILE BOTTOM NAVIGATION
      ========================== */}
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

                <span className="text-[10px] font-medium">
                  {link.label}
                </span>
              </Link>
            );
          })}

        </div>
      </nav>

      {/* =========================
          MOBILE SEARCH BUTTON
      ========================== */}

      {/* 
        IMPORTANT:

        We are NOT creating a new search system here.

        Your existing SearchInput remains the actual search
        implementation.

        If your SearchInput component is already responsive,
        we can simply show it on mobile here as well.
      */}

      <div className="fixed bottom-[78px] right-4 z-40 sm:hidden">
        <div className="rounded-full border border-white/10 bg-[#111]/95 p-1 shadow-xl backdrop-blur-xl">
          <SearchInput />
        </div>
      </div>

      {/* 
        Extra bottom spacing so page content doesn't get
        hidden behind the mobile bottom navigation.
      */}
      <div className="h-[68px] md:hidden" />
    </>
  );
}
