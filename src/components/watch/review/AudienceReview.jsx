export default function AudienceReview() {
  return (
    <>
      <div className="flex justify-between items-start flex-wrap gap-4 sm:gap-5 mb-6 ">
        <div className="flex items-center gap-5 sm:gap-7 flex-wrap">
          <div>
            <div className="font-display font-black text-5xl sm:text-[62px] text-white">
              8.8
            </div>
            <div className="text-[10px] sm:text-[11px] text-white/55 mt-1">
              Based on 24,812 reviews
            </div>
            <div className="flex gap-0.5 mt-1.5 text-white">
              <span className="text-gold text-sm sm:text-[17px]">★</span>
              <span className="text-gold text-sm sm:text-[17px]">★</span>
              <span className="text-gold text-sm sm:text-[17px]">★</span>
              <span className="text-gold text-sm sm:text-[17px]">★</span>
              <span className="text-s3 text-sm sm:text-[17px]">★</span>
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2 text-[10px] sm:text-[11px]">
              <span className="text-white/50 w-3 text-right">5</span>
              <div className="h-1 bg-white/[.07] rounded-full overflow-hidden min-w-[60px] sm:min-w-[80px] flex-1">
                <div
                  className="h-full bg-gradient-to-r from-amber-400 to-primary rounded-full"
                  style={{ width: "72%" }}
                ></div>
              </div>
              <span className="text-white/60 text-[9px] w-7">17.8k</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] sm:text-[11px]">
              <span className="text-white/50 w-3 text-right">4</span>
              <div className="h-1 bg-white/[.07] rounded-full overflow-hidden min-w-[60px] sm:min-w-[80px] flex-1">
                <div
                  className="h-full bg-gradient-to-r from-amber-400 to-primary rounded-full"
                  style={{ width: "42%" }}
                ></div>
              </div>
              <span className="text-white/60 text-[9px] w-7">4.5k</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] sm:text-[11px]">
              <span className="text-white/50 w-3 text-right">3</span>
              <div className="h-1 bg-white/[.07] rounded-full overflow-hidden min-w-[60px] sm:min-w-[80px] flex-1">
                <div
                  className="h-full bg-gradient-to-r from-amber-400 to-primary rounded-full"
                  style={{ width: "72%" }}
                ></div>
              </div>
              <span className="text-white/60 text-[9px] w-7">17.8k</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] sm:text-[11px]">
              <span className="text-white/50 w-3 text-right">2</span>
              <div className="h-1 bg-white/[.07] rounded-full overflow-hidden min-w-[60px] sm:min-w-[80px] flex-1">
                <div
                  className="h-full bg-gradient-to-r from-amber-400 to-primary rounded-full"
                  style={{ width: "72%" }}
                ></div>
              </div>
              <span className="text-white/60 text-[9px] w-7">17.8k</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] sm:text-[11px]">
              <span className="text-white/50 w-3 text-right">1</span>
              <div className="h-1 bg-white/[.07] rounded-full overflow-hidden min-w-[60px] sm:min-w-[80px] flex-1">
                <div
                  className="h-full bg-gradient-to-r from-amber-400 to-primary rounded-full"
                  style={{ width: "72%" }}
                ></div>
              </div>
              <span className="text-white/60 text-[9px] w-7">17.8k</span>
            </div>
          </div>
        </div>
        <button className="flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-[9px] bg-transparent border border-white/[.13] text-ct text-xs sm:text-[13px] font-semibold hover:bg-s2 hover:border-red hover:text-red transition-all whitespace-nowrap">
          <span className="mi text-[15px] sm:text-[16px]">edit</span> Write a
          Review
        </button>
      </div>
      <div className="flex flex-col gap-3">
        <div className="p-4 sm:p-5 rounded-md bg-background-light/5 border border-white/[.07] hover:border-white/[.13] transition-colors">
          <div className="flex justify-between items-start flex-wrap gap-2 mb-3">
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-display font-bold text-sm border border-white/[.07] flex-shrink-0"
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
              <span className="text-gold text-xs sm:text-[13px]">★</span>
              <span className="text-gold text-xs sm:text-[13px]">★</span>
              <span className="text-gold text-xs sm:text-[13px]">★</span>
              <span className="text-gold text-xs sm:text-[13px]">★</span>
              <span className="text-s3 text-xs sm:text-[13px]">★</span>
            </div>
          </div>
          <p className="text-[11px] sm:text-[13px] leading-[1.7] text-white/62">
            An absolute masterpiece of modern science fiction. The visuals are
            breathtaking and the emotional weight stayed with me for days. Elena
            Varkas has outdone herself!
          </p>
          <div className="flex items-center gap-3 mt-3 pt-3 border-t border-white/[.07]">
            <button className="flex items-center gap-1 text-[10px] sm:text-[11px] text-ctm hover:text-ct bg-none border-none font-body transition-colors">
              <span className="mi text-[13px]">thumb_up</span> 482
            </button>
            <button className="flex items-center gap-1 text-[10px] sm:text-[11px] text-ctm hover:text-ct bg-none border-none font-body transition-colors">
              <span className="mi text-[13px]">thumb_down</span>
            </button>
            <button className="flex items-center gap-1 text-[10px] sm:text-[11px] text-ctm hover:text-ct bg-none border-none font-body transition-colors">
              <span className="mi text-[13px]">flag</span> Report
            </button>
            <span className="flex-1"></span>
            <span className="text-[9px] text-ctm">Verified</span>
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-md bg-background-light/5 border border-white/[.07] hover:border-white/[.13] transition-colors">
          <div className="flex justify-between items-start flex-wrap gap-2 mb-3">
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-display font-bold text-sm border border-white/[.07] flex-shrink-0"
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
              <span className="text-gold text-xs sm:text-[13px]">★</span>
              <span className="text-gold text-xs sm:text-[13px]">★</span>
              <span className="text-gold text-xs sm:text-[13px]">★</span>
              <span className="text-gold text-xs sm:text-[13px]">★</span>
              <span className="text-s3 text-xs sm:text-[13px]">★</span>
            </div>
          </div>
          <p className="text-[11px] sm:text-[13px] leading-[1.7] text-white/62">
            An absolute masterpiece of modern science fiction. The visuals are
            breathtaking and the emotional weight stayed with me for days. Elena
            Varkas has outdone herself!
          </p>
          <div className="flex items-center gap-3 mt-3 pt-3 border-t border-white/[.07]">
            <button className="flex items-center gap-1 text-[10px] sm:text-[11px] text-ctm hover:text-ct bg-none border-none font-body transition-colors">
              <span className="mi text-[13px]">thumb_up</span> 482
            </button>
            <button className="flex items-center gap-1 text-[10px] sm:text-[11px] text-ctm hover:text-ct bg-none border-none font-body transition-colors">
              <span className="mi text-[13px]">thumb_down</span>
            </button>
            <button className="flex items-center gap-1 text-[10px] sm:text-[11px] text-ctm hover:text-ct bg-none border-none font-body transition-colors">
              <span className="mi text-[13px]">flag</span> Report
            </button>
            <span className="flex-1"></span>
            <span className="text-[9px] text-ctm">Verified</span>
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
        <button className="flex items-center gap-2 px-5 py-2.5 rounded-[9px] bg-s2 border border-white/[.13] text-ct text-xs sm:text-[13px] font-semibold hover:bg-s3 transition-all mx-auto">
          Load More Reviews
        </button>
      </div>
    </>
  );
}
