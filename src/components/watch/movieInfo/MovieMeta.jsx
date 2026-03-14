import { calculateHours } from "../../../utils/minToHour";
import Genre from "./Genre";

export default function MovieMeta({ mediaDetails }) {
  const yy_mm_dd = mediaDetails?.release_date || mediaDetails?.first_air_date;
  const year = yy_mm_dd ? yy_mm_dd?.split("-")[0] : "N/A";
  return (
    <div className="flex flex-wrap gap-3 sm:gap-4 items-center mb-4 p-3  rounded-sm">
      <div className="flex flex-col gap-1">
        <span className="text-[9px] font-bold tracking-[.1em] uppercase text-white/60">
          Audience Score
        </span>
        <div className="flex items-center gap-2">
          <div className="w-[70px] sm:w-[80px] h-[4px] bg-white/40 rounded-full overflow-hidden">
            <div className="h-full w-[88%] bg-gradient-to-r from-red-400 to-red-700 rounded-full"></div>
          </div>
          <span className="text-xs sm:text-[13px] font-bold font-mono">
            {mediaDetails?.vote_average.toFixed(1)}
          </span>
        </div>
      </div>
      <div className="w-px h-5 bg-primary"></div>
      <div className="flex flex-col gap-0.5">
        <span className="text-[9px] font-bold tracking-[.1em] uppercase text-white/60">
          Release Year
        </span>
        <span className="text-xs sm:text-[13px] font-medium">
          {/* {(mediaDetails?.release_date) || mediaDetails?.first_air_date} */}
          {year}
        </span>
      </div>
      <div className="w-px h-5 bg-primary"></div>
      <div className="flex flex-col gap-0.5">
        <span className="text-[9px] font-bold tracking-[.1em] uppercase text-white/60">
          Runtime
        </span>
        <span className="text-xs sm:text-[13px] font-medium">
          {calculateHours(
            mediaDetails?.runtime || mediaDetails?.episode_run_time,
          )}
        </span>
      </div>
      {/* <div className="w-px h-5 bg-primary"></div> */}
      {/* <div className="flex flex-col gap-0.5">
        <span className="text-[9px] font-bold tracking-[.1em] uppercase text-white/60">
          Rated
        </span>
        <span className="text-xs sm:text-[13px] font-medium">PG-13</span>
      </div> */}
      <div className="w-px h-5 bg-primary"></div>
      <div className="flex flex-col gap-1">
        <span className="text-[9px] font-bold tracking-[.1em] uppercase text-white/60">
          Genre
        </span>
        <div className="flex gap-1.5">
          {mediaDetails?.genres?.map((genre) => (
            <Genre key={genre.id} genre={genre} />
          ))}
        </div>
      </div>
    </div>
  );
}
