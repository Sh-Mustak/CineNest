import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import SearchInput from "./SearchInput";

function CineNestLogo() {
  return (
    <Link to="/" className="flex items-center flex-shrink-0">
      <span
        className="text-[32px] tracking-[4px] leading-none"
        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
      >
        <span className="text-white">Cine</span>
        <span className="text-primary">Nest</span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const location = useLocation();

  const HandleMenu = () => setOpenMenu(!openMenu);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [openMenu]);

  // Close drawer on route change
  useEffect(() => {
    setOpenMenu(false);
  }, [location.pathname]);

  const navLinks = [
    { label: "Home", to: "/", icon: "home" },
    { label: "Movies", to: "/movies", icon: "movie" },
    { label: "Tv Shows", to: "/tvshows", icon: "tv" },
    { label: "Watchlist", to: "/watchlist", icon: "bookmark" },
  ];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
        rel="stylesheet"
      />

      <nav className="fixed left-0 top-0 w-full z-50 bg-[#0a0505]/70 backdrop-blur-md border-b border-primary/10">
        <div className="max-w-[1440px] mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo */}
          <CineNestLogo />

          {/* Desktop Links */}
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

          {/* Right Side */}
          <div className="flex items-center gap-2 ml-auto md:ml-0">
            <SearchInput />
            {/* Profile Icon */}
            <button className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white hover:bg-primary/80 active:scale-95 transition-all duration-200 shadow-lg shadow-primary/30">
              <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>
                account_circle
              </span>
            </button>
            {/* Hamburger — mobile only */}
            <button
              onClick={HandleMenu}
              className="flex md:hidden items-center justify-center w-8 h-8 rounded-full bg-primary text-white hover:bg-primary/80 active:scale-95 transition-all duration-200 shadow-lg shadow-primary/30"
            >
              <span
                className="material-symbols-outlined transition-transform duration-300"
                style={{ fontSize: "20px" }}
              >
                menu
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        onClick={HandleMenu}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          openMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Right Side Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 z-50 bg-[#0d0d0d] border-l border-white/5 flex flex-col transition-transform duration-300 ease-in-out md:hidden ${
          openMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 h-20 border-b border-white/5">
          <CineNestLogo />
          <button
            onClick={HandleMenu}
            className="flex items-center justify-center w-8 h-8 rounded-full border border-white/10 text-slate-400 hover:text-white hover:border-white/30 active:scale-95 transition-all duration-200"
          >
            <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
              close
            </span>
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto py-4">

          {/* BROWSE section */}
          <div className="px-4 mb-2">
            <p className="text-[10px] font-semibold tracking-widest text-slate-500 uppercase px-2 mb-2">
              Browse
            </p>
            <div className="flex flex-col gap-1">
              {navLinks.slice(0, 3).map((link) => {
                const isActive = location.pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={HandleMenu}
                    className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 ${
                      isActive
                        ? "bg-primary/15 text-primary"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <div
                      className={`flex items-center justify-center w-9 h-9 rounded-lg ${
                        isActive ? "bg-primary/20" : "bg-white/5"
                      }`}
                    >
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: "18px" }}
                      >
                        {link.icon}
                      </span>
                    </div>
                    <span className="text-sm font-medium">{link.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="mx-4 my-3 border-t border-white/5" />

          {/* ACCOUNT section */}
          <div className="px-4">
            <p className="text-[10px] font-semibold tracking-widest text-slate-500 uppercase px-2 mb-2">
              Account
            </p>
            <div className="flex flex-col gap-1">
              {navLinks.slice(3).map((link) => {
                const isActive = location.pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={HandleMenu}
                    className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 ${
                      isActive
                        ? "bg-primary/15 text-primary"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <div
                      className={`flex items-center justify-center w-9 h-9 rounded-lg ${
                        isActive ? "bg-primary/20" : "bg-white/5"
                      }`}
                    >
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: "18px" }}
                      >
                        {link.icon}
                      </span>
                    </div>
                    <span className="text-sm font-medium">{link.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
