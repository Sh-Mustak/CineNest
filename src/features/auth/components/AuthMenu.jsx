import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useProfile } from "../../profile/hooks/useProfile";
import authService from "../services/authService";

const AuthMenu = () => {
  const { user, loading, setUser } = useAuth();
  const {profile} = useProfile();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  
  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  const handleLogout = async () => {
    try {
      await authService.logout();

      setUser(null);
      setOpen(false);

      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // ================= LOADING =================

  if (loading) {
    return (
      <div className="w-9 h-9 rounded-full bg-zinc-800 animate-pulse" />
    );
  }

  // ================= LOGGED OUT =================

  if (!user) {
    return (
      <div
        className="relative"
        ref={menuRef}
      >
        {/* Desktop Login/Register */}
        <div className="hidden md:flex items-center gap-2">

          <Link
            to="/login"
            className="px-4 py-2 text-sm font-medium text-zinc-300 hover:text-white transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90 transition active:scale-95"
          >
            Register
          </Link>

        </div>

        {/* Mobile Profile Button */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden flex items-center justify-center w-9 h-9 rounded-full bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary/90 active:scale-95 transition"
        >
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "21px" }}
          >
            person
          </span>
        </button>

        {/* Mobile Auth Dropdown */}
        <div
          className={`md:hidden absolute right-0 top-[calc(100%+10px)] w-56 origin-top-right transition-all duration-200 ${
            open
              ? "visible opacity-100 scale-100"
              : "invisible opacity-0 scale-95 pointer-events-none"
          }`}
        >
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111111]/95 backdrop-blur-xl shadow-2xl">

            {/* Header */}
            <div className="px-4 py-4 border-b border-white/10">
              <p className="text-sm font-semibold text-white">
                Welcome to CineNest
              </p>

              <p className="mt-1 text-xs text-zinc-500">
                Login to access your account
              </p>
            </div>

            {/* Actions */}
            <div className="p-2">

              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm text-zinc-300 hover:text-white hover:bg-white/5 transition"
              >
                <span className="material-symbols-outlined text-lg">
                  login
                </span>

                Login
              </Link>

              <Link
                to="/register"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm text-primary hover:bg-primary/10 transition"
              >
                <span className="material-symbols-outlined text-lg">
                  person_add
                </span>

                Register
              </Link>

            </div>

          </div>
        </div>
      </div>
    );
  }

  // ================= LOGGED IN =================

  return (
    <div
      className="relative"
      ref={menuRef}
    >

      {/* Profile Button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-1.5 py-1.5 hover:bg-white/10 transition active:scale-95"
      >

        {/* Avatar */}
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white font-semibold text-sm">
          {profile?.displayName ?.charAt(0)?.toUpperCase() || "U"}
        </div>

        {/* Desktop Name */}
        <span className="hidden lg:block max-w-24 truncate text-sm font-medium text-white">
          {profile?.displayName}
        </span>

        {/* Desktop Arrow */}
        <span
          className={`hidden sm:block material-symbols-outlined text-zinc-400 text-lg transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        >
          expand_more
        </span>

      </button>

      {/* ================= DROPDOWN ================= */}

      <div
        className={`absolute right-0 top-[calc(100%+10px)] w-64 origin-top-right transition-all duration-200 ${
          open
            ? "visible scale-100 opacity-100"
            : "invisible scale-95 opacity-0 pointer-events-none"
        }`}
      >

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111111]/95 shadow-2xl backdrop-blur-xl">

          {/* User Info */}
          <div className="border-b border-white/10 px-4 py-4">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white font-semibold">
                {profile?.displayName?.charAt(0)?.toUpperCase() || "U"}
              </div>

              <div className="min-w-0">

                <p className="truncate text-sm font-semibold text-white">
                  {profile?.displayName}
                </p>

                <p className="truncate text-xs text-zinc-500">
                  {user.email}
                </p>

              </div>

            </div>

          </div>

          {/* Menu */}
          <div className="p-2">

            <Link
              to="/profile"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-zinc-300 hover:bg-white/5 hover:text-white transition"
            >
              <span className="material-symbols-outlined text-lg">
                person
              </span>

              Profile
            </Link>

            <Link
              to="/watchlist"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-zinc-300 hover:bg-white/5 hover:text-white transition"
            >
              <span className="material-symbols-outlined text-lg">
                bookmark
              </span>

              Watchlist
            </Link>

          </div>

          {/* Logout */}
          <div className="border-t border-white/10 p-2">

            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-red-400 hover:bg-red-500/10 hover:text-red-300 transition"
            >
              <span className="material-symbols-outlined text-lg">
                logout
              </span>

              Logout
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default AuthMenu;