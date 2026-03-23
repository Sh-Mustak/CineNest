import { Link } from "react-router-dom";
import { getImageUrl } from "../../utils/helper";

export default function ResultItem({ item, closeModal }) {
  return (
    <Link
      to={`/watch/${item?.media_type}/${item.id}`}
      onClick={closeModal}
      className="flex items-center gap-4 px-4 py-3 rounded-md cursor-pointer hover:bg-white/5 transition-colors"
    >
      {/* Image */}
      <div className="w-8 h-15 rounded-md overflow-hidden bg-gray-800">
        <img
          src={getImageUrl(item.poster_path)}
          alt={item.title || item.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info */}
      <div>
        <p className="text-white text-sm font-semibold">
          {item.title || item.name}
        </p>

        <p className="text-gray-400 text-xs">
          {(item.release_date || item.first_air_date)?.slice(0, 4)} •{" "}
          {item.media_type === "tv" ? "TV Show" : "Movie"}
        </p>
      </div>
    </Link>
  );
}
