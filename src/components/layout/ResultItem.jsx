import { getImageUrl } from "../../utils/helper";
import {Link} from "react-router-dom"
const qualityColor = (q) => {
  if (q === "4K HD") return "bg-blue-600 text-white";
  if (q === "HD") return "bg-blue-500 text-white";
  return "bg-gray-500 text-white";
};

export default function ResultItem({ item }) {
  return (
    <Link 
    to={`/watch/${item?.media_type}/${item.id}`}
    className="flex items-center  gap-4 px-4 py-3 rounded-md cursor-pointer transition-colors hover:bg-white/5">
      {/* Thumbnail */}
      <div className="w-13 h-20 rounded-md overflow-hidden flex-shrink-0 bg-gray-800 flex items-center justify-center">
        <img
          src={getImageUrl(item.poster_path)}
          alt={item.title || item.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = "none";
            e.target.parentElement.innerHTML = `<span class="text-gray-500 text-xs text-center px-1">${(item.title || item.name)?.[0]}</span>`;
          }}
        />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1 ">
        <span className="font-semibold text-base text-white truncate">
          {item.title || item.name}
        </span>

        <span className="text-gray-400 text-sm">
          {(item.release_date || item.first_air_date)?.slice(0, 4)} •{" "}
          {item.media_type === "tv" ? "TV Show" : "Movie"}
        </span>

        <div className="flex items-center gap-2 mt-0.5">
          {item.quality && (
            <span className={`text-xs font-bold px-2 py-0.5 rounded ${qualityColor(item.quality)}`}>
              {item.quality}
            </span>
          )}

          {item.vote_average > 0 && (
            <span className="flex items-center gap-1 text-sm text-yellow-400 font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 fill-yellow-400"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {item.vote_average.toFixed(1)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}