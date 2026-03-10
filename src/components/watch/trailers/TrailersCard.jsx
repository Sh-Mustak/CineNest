export default function TrailersCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
      <div className="rounded-xl overflow-hidden bg-background-light/5 border border-white/[.07] hover:border-white/[.13]  hover:shadow-[0_16px_40px_rgba(0,0,0,.5)] transition-all duration-300 cursor-pointer group">
        <div className="aspect-video overflow-hidden relative">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIQ61hRdrziiUiJfgYojpbyWGSypon9AkHB3k_3JhAk1I5BDTffOPoGDx25OM9lAzE6Aspkpih_D_7mW3lynW_yY1PcQ6ZFgmw-XZr0M3idQ2rG4aU1R8Npz27NqxiJqbr-CFsUncjkFYvwzb02aYELpGQb8jgEGxlaspOu51Y6GQ4VWwWZLxcHFLnEOqptmdVKfZX3ySVK2RZmBoagMWaPSrA5vlCZHUnnOYHgFmT0BcegZOsxlHGMygcDeASXx865ku_OnPJCopf"
            alt=""
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
            //////style="filter: brightness(0.7)"
          />
          <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-[5px] text-[9px] font-bold tracking-wider uppercase bg-red/[.15] text-red border border-red/30">
            Official
          </span>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center group-hover:bg-red group-hover:border-red transition-all">
            <span className="material-symbols-outlined text-white text-[22px] ml-0.5">
              play_arrow
            </span>
          </div>
          <span className="absolute bottom-2.5 right-2.5 px-1.5 py-0.5 rounded-[5px] bg-black/80 font-mono text-[9px] font-semibold text-white">
            2:45
          </span>
        </div>
        <div className="px-3.5 py-3">
          <div className="text-white sm:text-[14px] font-semibold mb-0.5">
            Official Trailer #1
          </div>
          <div className="text-[10px] sm:text-[11px] text-white/50">
            Nov 2023 · 42M views
          </div>
        </div>
      </div>
    </div>
  );
}
