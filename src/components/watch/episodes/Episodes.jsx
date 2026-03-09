import EpisodeCarousel from "./EpisodeCarousel";
import SeasonBtn from "./SeasonBtn";
import SeasonHero from "./SeasonHero";

export default function Episodes() {
  return (
    <div>
      {/* <!-- Season pills --> */}
      <SeasonBtn />
      {/* <!-- Season hero --> */}
      <SeasonHero />

      {/* <!-- Horizontal episode scroll --> */}
   <EpisodeCarousel/>

      {/* <!-- Already watched --> */}
      <div className="mt-5">
        <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-bold tracking-[.1em] uppercase text-ctm mb-3">
          <span className="material-symbols-outlined text-[13px]">
            check_circle
          </span>{" "}
          Already Watched
          <div className="flex-1 h-px bg-white/[.07]"></div>
        </div>
        <div
          className="flex gap-3 sm:gap-4 overflow-x-auto noscroll pb-3 opacity-50"
          //   style="-webkit-overflow-scrolling: touch"
        >
          {/* <!-- Watched cards (same structure, smaller opacity) --> */}
          <div className="flex-shrink-0 w-[200px] sm:w-[250px] rounded-[14px] bg-s2 border border-white/[.07] overflow-hidden">
            <div className="relative aspect-video bg-s3 flex items-center justify-center">
              <span className="material-symbols-outlined text-ctm text-[32px]">
                check_circle
              </span>
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/10">
                <div className="h-full w-full bg-red/70"></div>
              </div>
              <div className="absolute top-2 left-2 flex gap-1">
                <span className="bg-s1 text-ctd text-[9px] font-black px-1.5 py-0.5 rounded-[5px]">
                  EP: 1
                </span>
              </div>
            </div>
            <div className="p-3">
              <div className="text-xs font-bold text-ct mb-1">Departure</div>
              <div className="text-[10px] text-ctd line-clamp-1">
                The crew assembles for their final briefing.
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 w-[200px] sm:w-[250px] rounded-[14px] bg-s2 border border-white/[.07] overflow-hidden">
            <div className="relative aspect-video bg-s3 flex items-center justify-center">
              <span className="material-symbols-outlined text-ctm text-[32px]">
                check_circle
              </span>
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/10">
                <div className="h-full w-full bg-red/70"></div>
              </div>
              <div className="absolute top-2 left-2 flex gap-1">
                <span className="bg-s1 text-ctd text-[9px] font-black px-1.5 py-0.5 rounded-[5px]">
                  EP: 2
                </span>
              </div>
            </div>
            <div className="p-3">
              <div className="text-xs font-bold text-ct mb-1">
                Into the Deep
              </div>
              <div className="text-[10px] text-ctd line-clamp-1">
                Beyond Jupiter, the crew faces the mission weight.
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 w-[200px] sm:w-[250px] rounded-[14px] bg-s2 border border-white/[.07] overflow-hidden">
            <div className="relative aspect-video bg-s3 flex items-center justify-center">
              <span className="material-symbols-outlined text-ctm text-[32px]">
                check_circle
              </span>
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/10">
                <div className="h-full w-full bg-red/70"></div>
              </div>
              <div className="absolute top-2 left-2 flex gap-1">
                <span className="bg-s1 text-ctd text-[9px] font-black px-1.5 py-0.5 rounded-[5px]">
                  EP: 3
                </span>
              </div>
            </div>
            <div className="p-3">
              <div className="text-xs font-bold text-ct mb-1">The Silence</div>
              <div className="text-[10px] text-ctd line-clamp-1">
                Communications with Earth go dark.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
