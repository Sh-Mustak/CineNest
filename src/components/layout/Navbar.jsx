export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 w-full z-50 bg-[#0a0505]/70 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-3xl font-bold">
              movie
            </span>
            <h1 className="text-primary text-2xl font-black tracking-tighter uppercase">
              CineNest
            </h1>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              className="text-white hover:text-primary transition-colors text-sm font-semibold border-b-2 border-primary pb-1"
              href="#"
            >
              Home
            </a>
            <a
              className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
              href="#"
            >
              Movies
            </a>
            <a
              className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
              href="#"
            >
              TV Series
            </a>
            <a
              className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
              href="#"
            >
              Watchlist
            </a>
          </div>
        </div>
        <div className="flex items-center gap-6">
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
          <button className="p-2 rounded-xl bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
            <span className="material-symbols-outlined">dark_mode</span>
          </button>
          <div className="h-10 w-10 rounded-full border-2 border-primary/20 overflow-hidden cursor-pointer hover:border-primary transition-colors">
            <img
              alt="Profile"
              className="w-full h-full object-cover"
              data-alt="User profile avatar illustration"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdDmAk2eE_re8awmoyNQynNHI9nZVyQ0_3u9OQGVQlLCP-Hva10z5GhakF1P2c_t1oMGyIui3h4aDXfgA_vR_LLuoZeHv8TuL-vfbFV2D7zd38tE-IMmt-SsDZjOinA5bjKdNiwIPXb3ZMUdcMDkCUXO81lLW7smWJKQD7_fN_QBKJCj46UD66ZCVtoKj2_iUjgX8U-sdeDUCl8Fjvhi5mUsaa6tihka-hXwaeJdwQLLJMYVCQUUnnCh_FPxxmOAdZ5tYThA0goHwl"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
