import { getDirector } from "../../utils/getDirector";

export default function MovieMetaGrid({ movieDetails }) {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/[.07] border border-white/[.07] rounded-[10px] overflow-hidden mb-4 ">
        <div className="bg-s1 px-3 sm:px-4 py-2.5 sm:py-3 flex flex-col gap-1">
          <span className="text-[8px] sm:text-[9px] font-bold tracking-[.1em] uppercase text-white/60">
            Budget
          </span>
          <span className="text-xs sm:text-[13px] font-semibold font-mono">
            {`$${movieDetails?.budget}m`}
          </span>
        </div>
        <div className="bg-s1 px-3 sm:px-4 py-2.5 sm:py-3 flex flex-col gap-1">
          <span className="text-[8px] sm:text-[9px] font-bold tracking-[.1em] uppercase text-white/60">
            Revenue
          </span>
          <span className="text-xs sm:text-[13px] font-semibold font-mono text-grn">
            {`$${movieDetails?.revenue}m`}
          </span>
        </div>
        <div className="bg-s1 px-3 sm:px-4 py-2.5 sm:py-3 flex flex-col gap-1">
          <span className="text-[8px] sm:text-[9px] font-bold tracking-[.1em] uppercase text-white/60">
            Director
          </span>
          <span className="text-xs sm:text-[13px] font-semibold">
            {getDirector(movieDetails)}
          </span>
        </div>
        <div className="bg-s1 px-3 sm:px-4 py-2.5 sm:py-3 flex flex-col gap-1">
          <span className="text-[8px] sm:text-[9px] font-bold tracking-[.1em] uppercase text-ctm text-white/60">
            Language
          </span>
          <span className="text-xs sm:text-[13px] font-semibold">{`${movieDetails?.spoken_languages?.map((ln) => ln.iso_639_1?.toUpperCase())}`}</span>
        </div>
      </div>
      <p className="text-xs sm:text-[14px] leading-[1.75] text-[#f0ece48c] mb-5 text-justify max-w-2xl">
        {movieDetails?.overview}
      </p>
    </>
  );
}
