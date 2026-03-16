import { getImageUrl } from "../../../utils/helper";
import { calculateHours } from "../../../utils/minToHour";
import { isNewEpisode } from "../../../utils/newEpisode";
export default function EpisodeCard({ episode, setSelectedEpisode }) {
  return (
    <div
      className="flex-shrink-0 w-[220px] sm:w-[270px] rounded-[14px] bg-white/[.05] border-[1.5px] border-white/[.07] overflow-hidden cursor-pointer transition-all duration-300  hover:border-red-600 hover:shadow-[0_18px_50px_rgba(0,0,0,.7),0_0_0_1px_rgba(232,21,26,1)] relative"
      style={{ scrollSnapAlign: "start" }}
      onClick={() => setSelectedEpisode(episode?.episode_number)}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-zinc-800">
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900">
          {/* <span
        className="material-symbols-outlined text-white/20 leading-none select-none"
        style={{ fontSize: 38, fontVariationSettings: "'OPSZ' 38, 'wght' 400" }}
      >
        movie
      </span> */}
          <img
            className="material-symbols-outlined text-white/20 leading-none select-none"
            src={getImageUrl(episode.still_path)}
            alt=""
          />
        </div>

        {/* Top-left: EP badge + duration */}
        <div className="absolute top-2 left-2 flex items-center gap-1.5">
          <span className="bg-red-600 text-white text-[9px] font-black px-1.5 py-0.5 rounded-[5px]">
            {`EP: ${episode?.episode_number}`}
          </span>
          <span className="flex items-center gap-1 bg-black/65 backdrop-blur-sm border border-white/15 text-white/85 text-[9px] font-semibold px-1.5 py-0.5 rounded-[5px]">
            <span
              className="material-symbols-outlined text-white/70 leading-none select-none"
              style={{
                fontSize: 10,
                fontVariationSettings: "'OPSZ' 10, 'wght' 400",
              }}
            >
              schedule
            </span>
            {calculateHours(episode?.runtime)}
          </span>
        </div>

        {/* Top-right: rating */}
        <div className="absolute top-2 right-2 flex items-center gap-1 bg-black/65 backdrop-blur-sm border border-white/15 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-[5px]">
          <span
            className="material-symbols-outlined text-yellow-400 leading-none select-none"
            style={{
              fontSize: 10,
              fontVariationSettings: "'OPSZ' 10, 'wght' 400",
            }}
          >
            star
          </span>
          {episode?.vote_average?.toFixed(1)}
        </div>

        {/* Bottom-left: label badge */}
        {isNewEpisode(episode?.air_date) && (
          <span className="absolute bottom-2 left-2 bg-yellow-400 text-black text-[9px] font-black px-1.5 py-0.5 rounded-[5px]">
            NEW
          </span>
        )}

        {/* Hover play overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/35 opacity-0 hover:opacity-100 transition-opacity duration-200">
          <span
            className="material-symbols-outlined text-white leading-none select-none"
            style={{
              fontSize: 42,
              fontVariationSettings: "'OPSZ' 42, 'wght' 400",
              filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.6))",
            }}
          >
            play_circle
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-3 sm:p-3.5">
        <div className="text-[11px] sm:text-[13px] font-bold text-white/95 mb-1 truncate transition-colors duration-200 hover:text-red-500">
          {episode?.name}
        </div>
        <div className="text-[10px] sm:text-[11px] leading-[1.5] text-white/50 mb-2.5 line-clamp-2">
          {episode?.overview}
        </div>
        <div className="flex gap-1.5">
          <button className="flex-1 flex items-center justify-center gap-1 py-2 rounded-[7px] bg-red-600 border-none text-white text-[10px] sm:text-xs font-bold hover:bg-red-500 active:scale-95 transition-all">
            <span
              className="material-symbols-outlined leading-none select-none"
              style={{
                fontSize: 14,
                fontVariationSettings: "'OPSZ' 14, 'wght' 400",
              }}
            >
              play_arrow
            </span>
            Play
          </button>
          <button className="flex items-center gap-1 px-2.5 py-2 rounded-[7px] bg-white/[.06] border border-white/[.07] text-white/50 text-[10px] font-semibold hover:border-white/[.13] hover:text-white/80 transition-all">
            <span
              className="material-symbols-outlined leading-none select-none"
              style={{
                fontSize: 13,
                fontVariationSettings: "'OPSZ' 13, 'wght' 400",
              }}
            >
              download
            </span>
            <span className="hidden sm:inline">DL</span>
          </button>
        </div>
      </div>
    </div>
  );
}
