import { Link } from "react-router-dom";
import { getImageUrl } from "../../utils/helper";

export default function ResultItem({ item, closeModal }) {
  return (
    <Link
      to={`/watch/${item?.media_type}/${item.id}`}
      onClick={closeModal}
      className="flex items-center gap-3 px-4 py-1.5 rounded-md cursor-pointer hover:bg-zinc-800 transition-colors"
    >
      {/* Poster */}
      <div className="w-8 h-12 flex-shrink-0 rounded overflow-hidden bg-zinc-700">
        <img
          src={getImageUrl(item.poster_path)}
          alt={item.title || item.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info */}
      <div className="min-w-0">
        <p className="text-white text-sm font-medium truncate">
          {item.title || item.name}
        </p>
        <p className="text-zinc-400 text-xs mt-0.5">
          {(item.release_date || item.first_air_date)?.slice(0, 4)} •{" "}
          {item.media_type === "tv" ? "TV Show" : "Movie"}
        </p>
      </div>
    </Link>
  );
}