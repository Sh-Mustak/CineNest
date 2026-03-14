export default function SeasonBtn({ season }) {
  return (
    <button
      // //onclick="setSeason(this)"
      className="px-3 py-1.5 rounded-[7px] border border-white/30 bg-red text-white/70 hover:text-white hover:bg-primary hover:border-primary text-[10px] sm:text-xs font-bold transition-all"
    >
      {`S${season?.season_number}`}
    </button>
  );
}
