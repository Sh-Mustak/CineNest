import { getImageUrl } from "../../utils/helper";

export default function MovieCard({ movie, fullWidth}) {
  return (
    <div
      className={`${fullWidth ? "w-full" : "flex-none w-38"} group cursor-pointer snap-start mb-4`}
    >
      <div className="relative aspect-2/3 rounded-[13px] overflow-hidden mb-2 sm:mb-3 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(230,10,13,0.3)]">
        <img
          alt={movie.title}
          className="w-full h-full object-cover"
          src={getImageUrl(movie.poster_path)}
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 sm:gap-3">
          <div className="bg-primary p-2 sm:p-3 rounded-full text-white shadow-lg">
            <span className="material-symbols-outlined fill-current text-base sm:text-2xl">
              play_arrow
            </span>
          </div>
          <div className="bg-white/20 backdrop-blur-md p-2 sm:p-3 rounded-full text-white">
            <span className="material-symbols-outlined text-base sm:text-2xl">
              add
            </span>
          </div>
        </div>
        <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-black/50 backdrop-blur-md px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md sm:rounded-lg text-[10px] sm:text-[12px] font-bold text-yellow-400 flex items-center gap-0.5 sm:gap-1">
          <span className="material-symbols-outlined text-[10px] sm:text-[12px] fill-current">
            star
          </span>
          {movie.vote_average.toFixed(1)}
        </div>
      </div>
      <h3 className="text-white font-bold text-xs sm:text-sm group-hover:text-primary transition-colors line-clamp-2">
        {movie.title}
      </h3>
      <p className="text-slate-500 text-[10px] sm:text-xs font-medium uppercase tracking-wider">
        {movie.release_date}
      </p>
    </div>
  );
}
