import { getImageUrl } from "../../utils/helper";
import CastDetails from "./CastDetails";
import MovieActions from "./MovieActions";
import MovieMeta from "./MovieMeta";
import MovieMetaGrid from "./MovieMetaGrid";
export default function MovieInfo({ movieDetails }) {
  return (
    <div className="panel act text-white" id="panel-info">
      <div className="grid grid-cols-1 md:grid-cols-[190px_1fr] gap-6 sm:gap-8">
        {/* Poster */}
        <div className="hidden md:block">
          <div className="poster-wrap relative aspect-[2/3] rounded-xl2 overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,.65),0_0_0_1px_rgba(255,255,255,.07)] max-w-[160px] sm:max-w-none">
            <img
              src={getImageUrl(movieDetails?.poster_path)}
              alt="Poster"
              className="w-full h-full object-cover block"
            />
          </div>
        </div>

        {/* Details */}
        <div>
          <h1 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl leading-[1.05] mb-2">
            {movieDetails?.title}
          </h1>

          <p className="font-display italic text-sm sm:text-base text-primary opacity-85 mb-4">
            {movieDetails?.tagline}
          </p>

          <MovieMeta movieDetails={movieDetails} />
          <MovieMetaGrid movieDetails={movieDetails} />
          <MovieActions movieDetails={movieDetails} />
        </div>
      </div>

      <CastDetails movieDetails={movieDetails} />
    </div>
  );
}
