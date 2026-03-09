import EpisodeCarousel from "./EpisodeCarousel";

export default function WatchedEpisodes() {
  return (
    <div className="mt-5">
      <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-bold tracking-[.1em] uppercase text-white/70 mb-3">
        <span className="material-symbols-outlined"
        style={{fontSize:"17px"}}
        >
          check_circle
        </span>
        Already Watched
        <div className="flex-1 h-px bg-white/[.07]"></div>
      </div>
     <EpisodeCarousel/>
    </div>
  );
}
