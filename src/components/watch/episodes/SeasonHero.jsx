export default function SeasonHero() {
  return (
    <div className="relative rounded-xl overflow-hidden border border-white/[.07] mb-5 min-h-[160px] sm:min-h-[180px] bg-zinc-900">
      <div
        className="absolute inset-0 bg-cover bg-right opacity-90"
        style={{
          backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBbv53cflzoZwoABsCRHBktVnbOaXxSXVXa-JFNDCiJ_xRnP3i1WOZUQPIBqKggysC6eaLyVXtGsx85WbdnFScGDkGqvvDqXQmtgEIaz0DaPlIK-ZvCBAgDs6B6-wN-oxVMfIlXrlsGd8a26DWhSWB95V8prk6Bbfxmp7FDHU4_l3w3h2gfqiyc0LUlecOiQnlXY7hRZ3zN5yNdX332QnJuWF3yyKm2JcCBLAEP3oPDXIioLr4XN-F1bWpEQ3KndT2j0A1pl-T2J9Ei")`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/1 to-black/70" />

      <div className="relative z-10 p-4 sm:p-6">
        {/* Meta badges */}
        <div className="flex gap-1.5 flex-wrap mb-3">
          {[
            { icon: "label", label: "Season 1", iconColor: "text-red-500" },
            {
              icon: "calendar_month",
              label: "2024",
              iconColor: "text-red-500",
            },
            {
              icon: "video_library",
              label: "8 Eps",
              iconColor: "text-red-500",
            },
            { icon: "star", label: "8.8", iconColor: "text-yellow-400" },
          ].map(({ icon, label, iconColor }) => (
            <div
              key={label}
              className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/[.08] border border-white/[.07] text-[12px]  font-semibold text-white/50"
            >
              <span
                className={`material-symbols-outlined ${iconColor}`}
                style={{ fontSize: "17px" }}
              >
                {icon}
              </span>
              {label}
            </div>
          ))}
        </div>

        {/* Title */}
        <h2 className="font-black text-md sm:text-xl md:text-2xl text-white mb-2 leading-tight">
          Season 1
        </h2>

        {/* Description */}
        <p className="hidden sm:block text-xs sm:text-[13px] leading-[1.6] text-white/55 max-w-xs sm:max-w-sm md:max-w-md mb-4">
          Captain Miller leads a crew of astronauts across unknown space and
          time — confronting their deepest fears and the secrets of the cosmos.
        </p>

        {/* Actions */}
        <div className="flex gap-2 flex-wrap">
          <button className="flex items-center gap-1.5 px-4 sm:px-6 py-2 sm:py-2.5 rounded-[9px] bg-red-600 border-none text-white text-xs sm:text-[13px] font-bold shadow-[0_6px_24px_rgba(232,21,26,.3)] hover:bg-red-500 active:scale-95 transition-all">
            <span className="material-symbols-outlined text-[15px] leading-none">
              play_arrow
            </span>
            Play from Start
          </button>

          <button className="flex items-center gap-1.5 px-3 sm:px-5 py-2 sm:py-2.5 rounded-[9px] bg-white/[.08] border border-white/[.13] text-white text-xs sm:text-[13px] font-semibold hover:bg-white/[.13] active:scale-95 transition-all relative overflow-hidden">
            <span className="material-symbols-outlined text-[15px] leading-none">
              download
            </span>
            <span className="hidden sm:inline">Download Season</span>
          </button>
        </div>
      </div>
    </div>
  );
}
