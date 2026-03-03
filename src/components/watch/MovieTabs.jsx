export default function MovieTabs() {
  return (
    <div className="flex border-b border-white/[0.07] mb-6 sm:mb-8 overflow-x-auto noscroll text-white/60">
      <button className="tab-item tab-act relative px-3 sm:px-5 py-3 bg-transparent border-none text-[10px] sm:text-[12px] font-bold tracking-[.1em] uppercase text-ct transition-colors whitespace-nowrap flex-shrink-0">
        Info
      </button>
      <button className="tab-item relative px-3 sm:px-5 py-3 bg-transparent border-none text-[10px] sm:text-[12px] font-bold tracking-[.1em] uppercase text-ctm hover:text-ctd transition-colors whitespace-nowrap flex-shrink-0">
        Episodes
      </button>
      <button className="tab-item relative px-3 sm:px-5 py-3 bg-transparent border-none text-[10px] sm:text-[12px] font-bold tracking-[.1em] uppercase text-ctm hover:text-ctd transition-colors whitespace-nowrap flex-shrink-0">
        Similar
      </button>
      <button className="tab-item relative px-3 sm:px-5 py-3 bg-transparent border-none text-[10px] sm:text-[12px] font-bold tracking-[.1em] uppercase text-ctm hover:text-ctd transition-colors whitespace-nowrap flex-shrink-0">
        Trailers
      </button>
      <button className="tab-item relative px-3 sm:px-5 py-3 bg-transparent border-none text-[10px] sm:text-[12px] font-bold tracking-[.1em] uppercase text-ctm hover:text-ctd transition-colors whitespace-nowrap flex-shrink-0">
        Reviews
      </button>
    </div>
  );
}
