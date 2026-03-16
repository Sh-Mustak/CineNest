/* eslint-disable no-unused-vars */
import EpisodeCard from "./EpisodeCard";

export default function EpisodeCarousel({
  episodes,
  loading,
  error,
  selectedEpisode,
  setSelectedEpisode,
}) {
  return (
    <div className="ep-scroll-wrap relative">
      {/* <!-- Desktop arrow buttons --> */}
      <button
        //   //onclick="scrollEps(-1)"
        className="scroll-arrow absolute left-0 top-1/2 -translate-y-1/2 z-10 w-9 h-14 flex items-center justify-center rounded-[9px] border border-white/[.13] text-ct hover:bg-red/20 hover:border-red transition-all opacity-0 pointer-events-none -ml-1 hidden lg:flex"
        //   style="background: rgba(10, 10, 10, 0.85)"
      >
        <span className="material-symbols-outlined text-[22px]">
          chevron_left
        </span>
      </button>
      <button
        //   //onclick="scrollEps(1)"
        className="scroll-arrow absolute right-0 top-1/2 -translate-y-1/2 z-10 w-9 h-14 flex items-center justify-center rounded-[9px] border border-white/[.13] text-ct hover:bg-red/20 hover:border-red transition-all opacity-0 pointer-events-none -mr-1 hidden lg:flex"
        //   style="background: rgba(10, 10, 10, 0.85)"
      >
        <span className="material-symbols-outlined text-[22px]">
          chevron_right
        </span>
      </button>

      <div
        className="flex gap-3 sm:gap-4 overflow-x-auto noscroll pb-4 pt-1 scroll-smooth "
        //   style="
        //       -webkit-overflow-scrolling: touch;
        //       scroll-snap-type: x mandatory;
        //     "
      >
        {/* <!-- Currently Watching --> */}
        {loading ? (
          <div className="text-white">Loading</div>
        ) : (
          episodes?.episodes?.map((episode) => (
            <EpisodeCard key={episode?.id} episode={episode} />
          ))
        )}
      </div>
    </div>
  );
}
