import CastDetails from "./CastDetails";
import MovieActions from "./MovieActions";
import MovieMeta from "./MovieMeta";
import MovieMetaGrid from "./MovieMetaGrid";
export default function MovieInfo(  {movieDetails} ){
    <div className="panel act text-white" id="panel-info">
      <div className="grid grid-cols-1 md:grid-cols-[190px_1fr] gap-6 sm:gap-8">
        {/* <!-- Poster --> */}
        <div>
          <div className="poster-wrap relative aspect-[2/3] rounded-xl2 overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,.65),0_0_0_1px_rgba(255,255,255,.07)] max-w-[160px] sm:max-w-none">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuASrXUaGqZ83fc9IpGN6__vouZ2ezhE7PPE8DUQlE5iusXNAjnR9Af13omCFPqc1XvfQ3Nh81sdHuhxiocFg_ouLnfWJDv0rTmy0EYcvOqRYbV6fRAsJ1JRASN4Y3hP4OPCKGN0AXo4IQlCdo0xiVRAglrU18JhLEWbfQWz3_Sf29rjLJLItt1egqx95eEti8DaohiH49oYWtsLWLtJp2qNsoex4-SIPRfzojdxdbz5Yz549_56WF9xTcF6XLbmhgO4TchOMtc0Bp2k"
              alt="Poster"
              className="w-full h-full object-cover block"
            />
            <div className="poster-ov-inner absolute inset-0 bg-gradient-to-t from-black/75 to-transparent flex items-end p-3 opacity-0 transition-opacity duration-300">
              <button className="w-full py-2 bg-red border-none rounded-[7px] text-white text-xs font-bold flex items-center justify-center gap-1.5">
                <span className="mi text-[16px]">play_arrow</span>Watch Now
              </button>
            </div>
          </div>
        </div>
        {/* <!-- Details --> */}
        <div>
          <h1 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl leading-[1.05] mb-2">
            {movieDetails.original_title}
          </h1>
          <p className="font-display italic text-sm sm:text-base text-primary opacity-85 mb-4">
            {movieDetails.tagline}
          </p>
          {/* <!-- Meta --> */}
          <MovieMeta />
          {/* <!-- Stat grid --> */}
          <MovieMetaGrid />
          {/* <!-- Actions --> */}
          <MovieActions />
        </div>
      </div>

      {/* <!-- Cast --> */}
      <CastDetails />
    </div>
  );
}
