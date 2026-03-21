import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SearchInput from "./SearchInput";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const location = useLocation();

  const HandleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Movies", to: "/movies" },
    { label: "TV Series", to: "/tv-series" },
    { label: "Watchlist", to: "/watchlist" },
  ];

  return (
    <nav className="fixed left-0 top-0 w-full z-50 bg-[#0a0505]/70 backdrop-blur-md border-b gap-1 border-primary/10">
      <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-3xl font-bold">
            movie
          </span>
          <h1 className="text-primary text-base md:text-2xl font-black tracking-tighter uppercase">
            CineNest
          </h1>
        </div>

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
        <div className="flex items-center gap-3 ml-auto md:ml-0">
          {/* Search — always visible */}

          <SearchInput />

          {/* Profile Icon — always visible */}
          <button className="p-2 rounded-xl bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "20px" }}
            >
              account_circle
            </span>
          </button>

          {/* Hamburger — mobile only */}
          <div
            onClick={HandleMenu}
            className="p-1.5 rounded-xl bg-primary/10 text-primary hover:bg-primary/20 transition cursor-pointer md:hidden"
          >
            <span
              className="material-symbols-outlined transition-transform duration-300"
              style={{ fontSize: "20px" }}
            >
              {openMenu ? "close" : "menu"}
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${openMenu ? "max-h-[400px] opacity-100 py-4" : "max-h-0 opacity-0 py-0"}
          bg-[#0a0505]/95 backdrop-blur-md border-t border-primary/10 px-6
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
  );
}
