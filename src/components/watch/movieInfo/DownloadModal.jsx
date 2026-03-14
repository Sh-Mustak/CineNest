export default function DownloadModal({ mediaDetails, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{
        backgroundColor: "rgba(0,0,0,0.75)",
        backdropFilter: "blur(4px)",
      }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="relative w-full sm:w-[90%] md:w-[75%] lg:w-[60%] xl:w-[50%] bg-s2 border border-white/[0.13] rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.65)] flex flex-col"
        style={{ maxHeight: "90vh" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-white/[0.13] flex-shrink-0">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px] sm:text-[20px] text-ct">
              download
            </span>
            <span className="text-ct text-sm sm:text-base font-semibold">
              Download
            </span>
            {mediaDetails?.title && (
              <span className="hidden sm:inline text-ctd text-xs sm:text-sm truncate max-w-[200px] lg:max-w-[300px]">
                — {mediaDetails.title}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-ctd hover:text-ct hover:bg-white/10 transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* iframe */}
        <div className="flex-1 overflow-hidden" style={{ minHeight: "60vh" }}>
          <iframe
            src={`https://dl.vidsrc.vip/movie/${mediaDetails?.id}`}
            className="w-full h-full"
            style={{ border: "none", minHeight: "60vh" }}
          />
        </div>
      </div>
    </div>
  );
}
