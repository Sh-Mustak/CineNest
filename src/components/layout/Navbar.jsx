import { useState } from "react";
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

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Movies", to: "/movies" },
    { label: "Tv Shows", to: "/tvshows" },
    { label: "Watchlist", to: "/watchlist" },
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
                {openMenu ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`
            md:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${openMenu ? "max-h-[400px] opacity-100 py-4" : "max-h-0 opacity-0 py-0"}
            bg-[#0a0505]/95 backdrop-blur-md border-t border-primary/10 px-4
          `}
        >
          <div className="flex flex-col items-center gap-4">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={HandleMenu}
                  className={`transition-colors text-sm font-medium pb-1 border-b-2 w-fit ${
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
        </div>
      </nav>
    </>
  );
}
