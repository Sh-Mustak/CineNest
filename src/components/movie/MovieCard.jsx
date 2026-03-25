import { Link } from "react-router-dom";
import { prefetchMovie } from "../../services/prefetchMovie";
import { getImageUrl } from "../../utils/helper";

export default function MovieCard({ movie, mediaType, fullWidth }) {
  return (
    <Link
      to={`/watch/${mediaType}/${movie.id}`}
      onMouseEnter={() => prefetchMovie(mediaType, movie.id)}
      onClick={() => {
        sessionStorage.setItem("homeScroll", window.scrollY);
      }}
      className={`${fullWidth ? "w-full" : "flex-none w-38"} group cursor-pointer snap-start mb-2`}
    >
      <div className="relative aspect-[2/3] rounded-md overflow-hidden bg-slate-800 shadow-lg transition-all duration-300 group-hover:shadow-2xl ">
        {/* Poster */}
        <img
          src={getImageUrl(movie.poster_path)}
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

        {/* Rating Badge */}
        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg text-xs font-semibold text-yellow-400 flex items-center gap-1 shadow-md">
          <span className="material-symbols-outlined text-sm fill-current">
            star
          </span>
          {movie.vote_average.toFixed(1)}
        </div>

        {/* Hover Buttons */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-primary p-2 text-white shadow-md flex items-center gap-1 rounded-full">
            <span className="material-symbols-outlined text-sm">
              play_arrow
            </span>
          </button>

          <button className="bg-background-dark/60 p-2 rounded-full text-white flex items-center gap-1 rounded-full">
            <span className="material-symbols-outlined text-sm">add</span>
          </button>
        </div>
        {/* Bottom Info */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="font-semibold text-sm line-clamp-2  transition">
            {movie.title || movie.name}
          </h3>
          {/* <p className="text-xs text-slate-300 mt-1">{releaseYear}</p> */}
        </div>
      </div>
    </Link>
  );
}
