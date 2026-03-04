export default function VideoPlayer() {
  return (
    <div className="relative w-full aspect-video h-[50vh]  rounded-2xl overflow-hidden bg-black shadow-[0_24px_70px_rgba(0,0,0,.75),0_0_0_1px_rgba(255,255,255,.07)] mb-3 group">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-55 group-hover:opacity-35 transition-opacity duration-500"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBbv53cflzoZwoABsCRHBktVnbOaXxSXVXa-JFNDCiJ_xRnP3i1WOZUQPIBqKggysC6eaLyVXtGsx85WbdnFScGDkGqvvDqXQmtgEIaz0DaPlIK-ZvCBAgDs6B6-wN-oxVMfIlXrlsGd8a26DWhSWB95V8prk6Bbfxmp7FDHU4_l3w3h2gfqiyc0LUlecOiQnlXY7hRZ3zN5yNdX332QnJuWF3yyKm2JcCBLAEP3oPDXIioLr4XN-F1bWpEQ3KndT2j0A1pl-T2J9Ei')",
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/10 to-transparent"></div>
      {/* <!-- Badges top --> */}
      <div className="absolute top-2 sm:top-3 left-2 sm:left-3 right-2 sm:right-3 flex justify-between flex-wrap gap-1.5">
        <div className="flex items-center gap-1.5 bg-black/65 backdrop-blur-md border border-white/[0.13] rounded-[7px] px-2 py-1 text-[9px] sm:text-[11px] font-semibold tracking-wider text-gold">
          <span className="w-1.5 h-1.5 rounded-full bg-red animate-pulse2 flex-shrink-0"></span>
          4K ULTRA HD
        </div>
        <div className="flex gap-1.5">
          <div className="flex items-center gap-1 bg-black/65 backdrop-blur-md border border-white/[0.13] rounded-[7px] px-2 py-1 text-[9px] sm:text-[11px] font-semibold text-gold">
            <span className="material-symbols-outlined  text-[11px] sm:text-[13px]">
              closed_caption
            </span>
            <span className="hidden sm:inline">CC</span>
          </div>
          <div className="flex items-center gap-1 bg-black/65 backdrop-blur-md border border-white/[0.13] rounded-[7px] px-2 py-1 text-[9px] sm:text-[11px] font-semibold text-gold">
            <span className="material-symbols-outlined material-symbols-outlined text-[11px] sm:text-[13px]">hd</span>
            <span className="hidden sm:inline">IMAX</span>
          </div>
        </div>
      </div>
      {/* <!-- Center play --> */}
      <button
        // onclick="this.style.display='none'"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-red/90 flex items-center justify-center shadow-[0_0_0_10px_rgba(232,21,26,.15),0_0_50px_rgba(232,21,26,.4)] hover:scale-110 hover:shadow-[0_0_0_16px_rgba(232,21,26,.2),0_0_70px_rgba(232,21,26,.5)] transition-all border-none"
      >
        <span className="material-symbols-outlined text-white text-[28px] sm:text-[36px] ml-1">
          play_arrow
        </span>
      </button>
      {/* <!-- Controls --> */}
      <div className="absolute bottom-0 left-0 right-0 px-2.5 sm:px-4 pb-3 sm:pb-4 pt-2 bg-gradient-to-t from-black/80 to-transparent">
        <div className="prog-track relative h-[3px] bg-white/15 rounded-full cursor-pointer mb-2">
          <div className="prog-fill relative h-full w-[35%] bg-red rounded-full"></div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <button className="text-white/65 hover:text-white transition-colors border-none bg-transparent p-0">
              <span className="material-symbols-outlined text-[16px] sm:text-[19px]">
                skip_previous
              </span>
            </button>
            <button className="bg-red/20 rounded-[6px] px-2 py-1 border-none">
              <span className="material-symbols-outlined text-white text-[20px] sm:text-[22px]">
                play_arrow
              </span>
            </button>
            <button className="text-white/65 hover:text-white transition-colors border-none bg-transparent p-0">
              <span className="material-symbols-outlined text-[16px] sm:text-[19px]">skip_next</span>
            </button>
            <div className="hidden sm:flex items-center gap-2">
              <button className="text-white/65 hover:text-white border-none bg-transparent p-0">
                <span className="material-symbols-outlined text-[18px]">volume_up</span>
              </button>
              <div className="w-[52px] h-[3px] bg-white/20 rounded-full">
                <div className="h-full w-3/4 bg-white rounded-full"></div>
              </div>
            </div>
            <span className="font-mono text-[9px] sm:text-[11px] text-white/50 hidden sm:block">
              01:12:45 / 02:45:00
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <button className="text-white/65 hover:text-white border-none bg-transparent p-0 hidden sm:block">
              <span className="material-symbols-outlined text-[18px]">subtitles</span>
            </button>
            <button className="text-white/65 hover:text-white border-none bg-transparent p-0 hidden sm:block">
              <span className="material-symbols-outlined text-[18px]">settings</span>
            </button>
            <button className="text-white/65 hover:text-white border-none bg-transparent p-0">
              <span className="material-symbols-outlined text-[18px] sm:text-[19px]">fullscreen</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
