import CastDetaislCircle from "../CastDetailsCircle";

export default function CastDetails({ movieDetails }) {
  return (
    <div className="mt-10 sm:mt-12">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-display text-base sm:text-[19px] font-bold flex items-center gap-2">
          <span className="material-symbols-outlined text-red text-[18px]">
            groups
          </span>
          Top Cast
        </h3>
        <a
          href="#"
          className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-red hover:opacity-70 transition-opacity"
        >
          Full Cast →
        </a>
      </div>
      <div className="flex flex-row gap-3 overflow-x-auto noscroll pb-2">
        {movieDetails?.credits?.cast?.map((cast) => (
          <CastDetaislCircle key={cast.cast_id} cast={cast} />
        ))}
      </div>
    </div>
  );
}
