import { getImageUrl } from "../../../utils/helper";

export default function SeasonHero({ season, episodes }) {
  const year = episodes?.air_date?.split("-")[0];
  const episodeCount = episodes?.episodes?.length ;

  return (
    <div className="relative rounded-xl overflow-hidden border border-white/[.07] mb-5 min-h-[280px] sm:min-h-[250px] bg-zinc-900">
      <div
        className="absolute inset-0 bg-cover bg-right opacity-90"
        style={{
          backgroundImage: `url(${getImageUrl(episodes?.poster_path, "original")})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/8 to-black/75" />

      <div className="relative z-10 p-4 sm:p-6">
        <div className="flex gap-1.5 flex-wrap mb-3">
          {[
           
            { icon: "calendar_month", label: year, iconColor: "text-red-500" },
            { icon: "video_library", label: `${episodeCount} Eps`, iconColor: "text-red-500" },
            { icon: "star", label: episodes?.vote_average?.toFixed(1) ?? "N/A", iconColor: "text-yellow-400" },
          ].map(({ icon, label, iconColor }) => (
            <div
              key={icon}
              className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/[.08] border border-white/[.07] text-[12px] font-semibold text-white/50"
            >
              <span className={`material-symbols-outlined ${iconColor}`} style={{ fontSize: "17px" }}>
                {icon}
              </span>
              {label}
            </div>
          ))}
        </div>

        <h2 className="font-black text-md sm:text-xl md:text-2xl text-white mb-2 leading-tight">
          {episodes?.name}
        </h2>

        <p className="hidden sm:block text-xs sm:text-[13px] leading-[1.6] text-white/55 max-w-xs sm:max-w-sm md:max-w-md mb-4">
          {episodes?.overview}
        </p>

        <div className="flex gap-2 flex-wrap">
          <button className="flex items-center gap-1.5 px-4 sm:px-6 py-2 sm:py-2.5 rounded-[9px] bg-red-600 border-none text-white text-xs sm:text-[13px] font-bold shadow-[0_6px_24px_rgba(232,21,26,.3)] hover:bg-red-500 active:scale-95 transition-all">
            <span className="material-symbols-outlined text-[15px] leading-none">play_arrow</span>
            Play from Start
          </button>

          <button className="flex items-center gap-1.5 px-3 sm:px-5 py-2 sm:py-2.5 rounded-[9px] bg-white/[.08] border border-white/[.13] text-white text-xs sm:text-[13px] font-semibold hover:bg-white/[.13] active:scale-95 transition-all">
            <span className="material-symbols-outlined text-[15px] leading-none">download</span>
            <span className="hidden sm:inline">Download Season</span>
          </button>
        </div>
      </div>
    </div>
  );
}