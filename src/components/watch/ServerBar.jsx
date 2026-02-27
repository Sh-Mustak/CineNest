export default function ServerBar() {
  return (
    <div className="flex items-center gap-2 flex-wrap px-3 py-2 bg-s1 border border-white/[0.07] rounded-[10px] mb-4">
      <span className="flex items-center gap-1.5 text-[9px] sm:text-[10px] font-bold tracking-[.12em] uppercase text-ctm flex-shrink-0">
        <span className="mi text-red text-[13px]">dns</span> Server:
      </span>
      <div className="flex gap-1.5 flex-wrap" id="srvBtns">
        <button
        //   onclick="setSrv(this)"
          className="srv-b px-3 py-1 rounded-[6px] border border-red bg-red text-white text-[10px] sm:text-xs font-bold shadow-[0_2px_14px_rgba(232,21,26,.3)] transition-all"
        >
          S1 · 4K
        </button>
        <button
        //   onclick="setSrv(this)"
          className="srv-b px-3 py-1 rounded-[6px] border border-white/[0.07] bg-transparent text-ctd hover:text-ct hover:bg-s2 hover:border-white/[0.13] text-[10px] sm:text-xs font-bold transition-all"
        >
          S2 · HD
        </button>
        <button
        //   onclick="setSrv(this)"
          className="srv-b px-3 py-1 rounded-[6px] border border-white/[0.07] bg-transparent text-ctd hover:text-ct hover:bg-s2 hover:border-white/[0.13] text-[10px] sm:text-xs font-bold transition-all"
        >
          {/* S3 · 720p */}
        </button>
        <button
        //   onclick="setSrv(this)"
          className="srv-b px-3 py-1 rounded-[6px] border border-white/[0.07] bg-transparent text-ctd hover:text-ct hover:bg-s2 hover:border-white/[0.13] text-[10px] sm:text-xs font-bold transition-all"
        >
          S4 · Fast
        </button>
      </div>
      <div className="ml-auto hidden sm:flex items-center gap-1.5 font-mono text-[10px] text-grn flex-shrink-0">
        <span className="w-1.5 h-1.5 rounded-full bg-grn animate-pulse2"></span>{" "}
        24ms
      </div>
    </div>
  );
}
