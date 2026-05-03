import { Link } from "react-router-dom";
import { useWatchlistContext } from "../../context/useWatchlistContext";
import { prefetchMovie } from "../../services/prefetchMovie";
import { getImageUrl } from "../../utils/helper";

export default function MovieCard({ movie, fullWidth }) {
  const type = movie?.media_type;

  const { watchlist, toggleWatchlist, showToast } = useWatchlistContext();

  const isSaved = watchlist?.some((item) => item.id === movie.id);

  const handleWatchlist = (e) => {
    e.preventDefault();

    toggleWatchlist(movie);

    showToast(
      isSaved
        ? "Removed from Watchlist 🗑️"
        : "Added to Watchlist ❤️"
    );
  };

  return (
    <div className={`${fullWidth ? "w-full" : "flex-none w-38"} group cursor-pointer snap-start mb-2`}>

      {/* IMAGE (ONLY NAVIGATION) */}
      <Link
        to={`/watch/${type}/${movie.id}`}
        onMouseEnter={() => prefetchMovie(type, movie.id)}
        onClick={() => sessionStorage.setItem("homeScroll", window.scrollY)}
      >
        <div className="relative aspect-[2/3] rounded-md overflow-hidden bg-slate-800 shadow-lg transition-all duration-300 group-hover:shadow-2xl">

          {/* Poster */}
          <img
            src={getImageUrl(movie.poster_path)}
            alt={movie.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

          {/* Rating */}
          <div className="absolute top-1 left-1 bg-black/60 backdrop-blur-md px-2 py-1 rounded-md text-[12px] font-semibold text-yellow-400 flex items-center gap-1 shadow-md">
            <span className="material-symbols-outlined text-sm" style={{ fontSize: "15px" }}>
              star
            </span>
            {movie.vote_average?.toFixed(1)}
          </div>

        </div>
      </Link>

      {/* CENTER ACTION BUTTON */}
      <div className="relative flex justify-center mt-[-20px] z-10">

        <button
          onClick={handleWatchlist}
          className="bg-black/70 backdrop-blur-md p-3 rounded-full text-white shadow-lg hover:scale-110 transition flex items-center justify-center"
        >
          <span className="material-symbols-outlined text-sm">
            {isSaved ? "bookmark_remove" : "bookmark_add"}
          </span>
        </button>

      </div>

      {/* TITLE */}
      {/* <div className="mt-2 text-white text-center">
        <h3 className="font-semibold text-sm line-clamp-2">
          {movie.title || movie.name}
        </h3>
      </div> */}

    </div>
  );
}