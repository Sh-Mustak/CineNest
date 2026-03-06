import { getImageUrl } from "../../utils/helper";

export default function CastDetaislCircle({ cast }) {
  return (
    <div className="flex-shrink-0 w-[88px] sm:w-[100px] text-center cursor-pointer mt-2">
      <div
        className="cast-img-ring w-[72px] sm:w-[84px] h-[72px] sm:h-[84px] rounded-full overflow-hidden border-2 border-white/[.07] mx-auto mb-2 transition-all duration-300"
        style={{ filter: "grayscale(20%)" }}
      >
        <img
          src={
            cast.profile_path
              ? getImageUrl(cast.profile_path)
              : "https://via.placeholder.com/150?text=No+Image"
          }
          alt={cast.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="cast-name text-[10px] sm:text-xs font-semibold mb-0.5 transition-colors">
        {cast.name}
      </div>
      <div className="text-[9px] sm:text-[10px] text-ctm">
        {cast.character || "Unknown"}
      </div>
    </div>
  );
}