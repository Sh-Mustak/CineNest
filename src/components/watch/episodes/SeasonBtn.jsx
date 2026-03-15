export default function SeasonBtn({
  season,
  selectedSeason,
  setSelectedSeason,
  setSelectedEpisode,
}) {
  const active = selectedSeason === season.season_number;
  const handleClick = () => {
    setSelectedSeason(season.season_number);
    setSelectedEpisode(1);
  };

  return (
    <button
      onClick={handleClick}
      className={`px-3 py-1.5 rounded-[7px] border ${active ? "text-white hover:text-white bg-primary" : "text-white/70"} border-white/30 bg-red   hover:bg-primary hover:border-primary text-[10px] sm:text-xs font-bold transition-all `}
    >
      {`S${season?.season_number}`}
    </button>
  );
}
