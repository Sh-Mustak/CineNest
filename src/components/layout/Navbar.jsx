import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const location = useLocation();

  const HandleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Movies", to: "/movies" },
    { label: "Watch", to: "/watch" },
    { label: "TV Series", to: "/tv-series" },
    { label: "Watchlist", to: "/watchlist" },
  ];

  return (
    <nav className="fixed left-0 top-0 w-full z-50 bg-[#0a0505]/70 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-3xl font-bold">
            movie
          </span>
          <h1 className="text-primary text-2xl font-black tracking-tighter uppercase">
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

        {/* Right Icons */}
        <div className="flex items-center gap-6">
          {/* Search */}
          <div className="relative group hidden lg:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">
              search
            </span>
            <input
              className="bg-primary/5 border-none rounded-xl pl-10 pr-4 py-2 w-64 text-sm focus:ring-1 focus:ring-primary/50 text-white placeholder:text-slate-500"
              placeholder="Search movies, actors..."
              type="text"
            />
          </div>

          {/* Dark Mode */}
          <button className="p-2 rounded-xl bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
            <span className="material-symbols-outlined">dark_mode</span>
          </button>

          {/* Mobile Menu Toggle */}
          <div
            onClick={HandleMenu}
            className="p-2 rounded-xl bg-primary/10 text-primary hover:bg-primary/20 transition cursor-pointer md:hidden"
          >
            <span className="material-symbols-outlined transition-transform duration-300">
              {openMenu ? "close" : "menu"}
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Menu Animated */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${openMenu ? "max-h-[500px] opacity-100 py-4 scale-100" : "max-h-0 opacity-0 py-0 scale-95"}
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

          {/* Mobile Search */}
          <div className="relative group mt-2 w-full">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">
              search
            </span>
            <input
              className="bg-primary/5 border-none rounded-xl pl-10 pr-4 py-2 w-full text-sm focus:ring-1 focus:ring-primary/50 text-white placeholder:text-slate-500"
              placeholder="Search movies, actors..."
              type="text"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
