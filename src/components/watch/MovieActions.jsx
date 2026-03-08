import { useEffect, useState } from "react";

export default function MovieActions({ movieDetails }) {
  const [showDownload, setShowDownload] = useState(false);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (showDownload) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showDownload]);

  return (
    <>
      <div className="flex flex-wrap gap-2">
        <button className="flex items-center gap-1.5 sm:gap-2 px-4 sm:px-7 py-2.5 sm:py-3 rounded-[9px] bg-red border-none text-white text-xs sm:text-[13px] font-bold shadow-[0_6px_24px_rgba(232,21,26,.3)] cursor-pointer hover:bg-[#ff2227] hover:-translate-y-px transition-all">
          <span className="material-symbols-outlined text-[16px] sm:text-[18px]">
            play_arrow
          </span>{" "}
          WATCH NOW
        </button>
        <button className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2.5 sm:py-3 rounded-[9px] bg-s2 border border-white/[0.13] text-ct text-xs sm:text-[13px] cursor-pointer font-semibold hover:bg-s3 hover:border-white/25 transition-all">
          <span className="material-symbols-outlined text-[15px] sm:text-[17px]">
            add
          </span>{" "}
          Watchlist
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

      {/* Modal Overlay */}
      {showDownload && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
          style={{
            backgroundColor: "rgba(0,0,0,0.75)",
            backdropFilter: "blur(4px)",
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowDownload(false);
          }}
        >
          {/* Modal Box */}
          <div
            className="relative w-full sm:w-[90%] md:w-[75%] lg:w-[60%] xl:w-[50%] bg-s2 border border-white/[0.13] rounded-t-2xl sm:rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.65)] flex flex-col"
            style={{ maxHeight: "90vh" }}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-white/[0.13] flex-shrink-0">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] sm:text-[20px] text-ct">
                  download
                </span>
                <span className="text-ct text-sm sm:text-base font-semibold">
                  Download
                </span>
                {movieDetails?.title && (
                  <span className="hidden sm:inline text-ctd text-xs sm:text-sm truncate max-w-[200px] lg:max-w-[300px]">
                    — {movieDetails.title}
                  </span>
                )}
              </div>
              <button
                onClick={() => setShowDownload(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-ctd hover:text-ct hover:bg-white/10 transition-all"
              >
                <span className="material-symbols-outlined text-[18px]">
                  close
                </span>
              </button>
            </div>

            {/* iframe */}
            <div
              className="flex-1 overflow-hidden"
              style={{ minHeight: "60vh" }}
            >
              <iframe
                src={`https://dl.vidsrc.vip/movie/${movieDetails?.id}`}
                className="w-full h-full"
                style={{ border: "none", minHeight: "60vh" }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
