import { useState } from "react";
import { useScrollLock } from "../../../hooks/useScrollLock";
import DownloadModal from "./DownloadModal";
import useAuth from "../../../features/auth/hooks/useAuth";
import { useWatchlistContext } from "../../../context/AppwriteContext/useWatchlistContext";
import requireAuth from "../../../features/auth/services/requireAuth";
import {useNavigate} from "react-router-dom"
import { useParams } from "react-router-dom";

export default function MovieActions({ mediaDetails }) {
  const [showDownload, setShowDownload] = useState(false);
  const navigate = useNavigate();

  const {
    addMovie,
    removeMovie,
    isInWatchlist,
  } = useWatchlistContext();

  const { isAuthenticated } = useAuth();
  const { type } = useParams();

  useScrollLock(showDownload);

  const inWatchlist = isInWatchlist(mediaDetails.id);

  const handleWatchlist = async (e) => {
    e.preventDefault();

    const allowed = requireAuth({
      isAuthenticated,
      navigate,
    });

    if (!allowed) return;

    try {
      if (!inWatchlist) {
        await addMovie({
          ...mediaDetails,
          mediaType: type,
        });
      } else {
        await removeMovie(mediaDetails.id);
      }
    } catch (error) {
      console.error(
        `Error ${inWatchlist ? "removing" : "adding"} movie to watchlist:`,
        error
      );
    }
  };

  return (
    <>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={handleWatchlist}
          className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2.5 sm:py-3 rounded-[9px] bg-s2 border border-white/[0.13] text-ct text-xs sm:text-[13px] cursor-pointer font-semibold hover:bg-s3 hover:border-white/25 transition-all"
        >
          <span className="material-symbols-outlined text-[15px] sm:text-[17px]">
            {inWatchlist ? "bookmark_added" : "bookmark_add"}
          </span>

          {inWatchlist ? "In Watchlist" : "Add to Watchlist"}
        </button>

        <button
          onClick={() => setShowDownload(true)}
          className="dl-btn-el cursor-pointer flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2.5 sm:py-3 rounded-[9px] bg-s2 border border-white/[0.13] text-ct text-xs sm:text-[13px] font-semibold hover:bg-s3 transition-all relative overflow-hidden"
        >
          <span className="material-symbols-outlined text-[15px] sm:text-[17px] dl-icon">
            download
          </span>

          <span>Download</span>

          <div className="dl-bar"></div>
          <div className="dl-ripple-el absolute inset-0 pointer-events-none"></div>
        </button>

        <button className="w-9 h-9 sm:w-[42px] sm:h-[42px] rounded-[9px] cursor-pointer bg-s2 border border-white/[0.13] flex items-center justify-center text-ctd hover:border-white/25 hover:text-ct transition-all">
          <span className="material-symbols-outlined text-[16px] sm:text-[18px]">
            share
          </span>
        </button>
      </div>

      {showDownload && (
        <DownloadModal
          mediaDetails={mediaDetails}
          onClose={() => setShowDownload(false)}
        />
      )}
    </>
  );
}
