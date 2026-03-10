export default function ReviewCard() {
  return (
    <div className="p-4 sm:p-5 rounded-md bg-background-light/5 border border-white/[.07] hover:border-white/[.13] transition-colors">
      <div className="flex justify-between items-start flex-wrap gap-2 mb-3">
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-display font-bold text-sm border border-white/[.07]"
            style={{
              background: "linear-gradient(135deg, #e8151a, #c9a84c)",
            }}
          >
            C
          </div>

          <div>
            <div className="text-xs sm:text-[14px] text-white font-semibold">
              CineMaster_99
            </div>
            <div className="text-[10px] sm:text-[11px] text-white/50">
              February 15, 2024
            </div>
          </div>
        </div>

        <div className="flex gap-0.5 text-amber-400">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="text-xs sm:text-[13px]">
              ★
            </span>
          ))}
        </div>
      </div>

      <p className="text-[11px] sm:text-[13px] leading-[1.7] text-white/62">
        An absolute masterpiece of modern science fiction. The visuals are
        breathtaking and the emotional weight stayed with me for days.
      </p>

      <div className="flex items-center gap-3 mt-3 pt-3 border-t border-white/[.07]">
        <button className="flex items-center gap-1 text-[10px] sm:text-[11px] text-ctm hover:text-ct">
          <span className="mi text-[13px]">thumb_up</span> 482
        </button>

        <button className="flex items-center gap-1 text-[10px] sm:text-[11px] text-ctm hover:text-ct">
          <span className="mi text-[13px]">thumb_down</span>
        </button>

        <button className="flex items-center gap-1 text-[10px] sm:text-[11px] text-ctm hover:text-ct">
          <span className="mi text-[13px]">flag</span> Report
        </button>

        <span className="flex-1"></span>

        <span className="text-[9px] text-ctm">Verified</span>
      </div>
    </div>
  );
}
