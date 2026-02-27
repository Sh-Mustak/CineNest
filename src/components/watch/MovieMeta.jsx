export default function MovieMeta() {
  return (
    <div className="flex flex-wrap gap-3 sm:gap-4 items-center mb-4">
      <div className="flex flex-col gap-1">
        <span className="text-[9px] font-bold tracking-[.1em] uppercase text-ctm">
          Score
        </span>
        <div className="flex items-center gap-2">
          <div className="w-[70px] sm:w-[80px] h-[3px] bg-white/10 rounded-full overflow-hidden">
            <div className="h-full w-[88%] bg-gradient-to-r from-red to-gold rounded-full"></div>
          </div>
          <span className="text-xs sm:text-[13px] font-bold font-mono">
            8.8
          </span>
        </div>
      </div>
      <div className="w-px h-5 bg-white/[.07]"></div>
      <div className="flex flex-col gap-0.5">
        <span className="text-[9px] font-bold tracking-[.1em] uppercase text-ctm">
          Year
        </span>
        <span className="text-xs sm:text-[13px] font-medium">2024</span>
      </div>
      <div className="w-px h-5 bg-white/[.07]"></div>
      <div className="flex flex-col gap-0.5">
        <span className="text-[9px] font-bold tracking-[.1em] uppercase text-ctm">
          Runtime
        </span>
        <span className="text-xs sm:text-[13px] font-medium">2h 45m</span>
      </div>
      <div className="w-px h-5 bg-white/[.07]"></div>
      <div className="flex flex-col gap-0.5">
        <span className="text-[9px] font-bold tracking-[.1em] uppercase text-ctm">
          Rated
        </span>
        <span className="text-xs sm:text-[13px] font-medium">PG-13</span>
      </div>
      <div className="w-px h-5 bg-white/[.07]"></div>
      <div className="flex flex-col gap-1">
        <span className="text-[9px] font-bold tracking-[.1em] uppercase text-ctm">
          Genre
        </span>
        <div className="flex gap-1.5">
          <span className="px-2 py-0.5 rounded-[5px] text-[10px] sm:text-[11px] font-medium border border-white/[.07] text-ctd bg-s2 hover:border-red hover:text-red transition-colors">
            Sci-Fi
          </span>
          <span className="px-2 py-0.5 rounded-[5px] text-[10px] sm:text-[11px] font-medium border border-white/[.07] text-ctd bg-s2 hover:border-red hover:text-red transition-colors">
            Drama
          </span>
        </div>
      </div>
    </div>
  );
}
