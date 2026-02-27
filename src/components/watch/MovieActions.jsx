export default function MovieActions() {
  return (
    <div className="flex flex-wrap gap-2">
      <button className="flex items-center gap-1.5 sm:gap-2 px-4 sm:px-7 py-2.5 sm:py-3 rounded-[9px] bg-red border-none text-white text-xs sm:text-[13px] font-bold shadow-[0_6px_24px_rgba(232,21,26,.3)] hover:bg-[#ff2227] hover:-translate-y-px transition-all">
        <span className="mi text-[16px] sm:text-[18px]">play_arrow</span> WATCH
        NOW
      </button>
      <button className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2.5 sm:py-3 rounded-[9px] bg-s2 border border-white/[0.13] text-ct text-xs sm:text-[13px] font-semibold hover:bg-s3 hover:border-white/25 transition-all">
        <span className="mi text-[15px] sm:text-[17px]">add</span> Watchlist
      </button>
      <button
        className="dl-btn-el flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2.5 sm:py-3 rounded-[9px] bg-s2 border border-white/[0.13] text-ct text-xs sm:text-[13px] font-semibold hover:bg-s3 transition-all relative overflow-hidden"
        onclick="startDl(this)"
      >
        <span className="mi text-[15px] sm:text-[17px] dl-icon">download</span>
        <span className="dl-lbl">Download</span>
        <div className="dl-bar"></div>
        <div className="dl-ripple-el absolute inset-0 pointer-events-none"></div>
      </button>
      <button className="w-9 h-9 sm:w-[42px] sm:h-[42px] rounded-[9px] bg-s2 border border-white/[0.13] flex items-center justify-center text-ctd hover:border-white/25 hover:text-ct transition-all">
        <span className="mi text-[16px] sm:text-[18px]">share</span>
      </button>
    </div>
  );
}
