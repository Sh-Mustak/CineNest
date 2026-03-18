import { useWatchContext } from "../../../context/useWatchContext";
import { useEpisodes } from "../../../hooks/useEpisodes";
import EpisodeCarousel from "./EpisodeCarousel";
import SeasonBtn from "./SeasonBtn";
import SeasonHero from "./SeasonHero";
import WatchedEpisodes from "./WatchedEpisodes";

export default function Episodes({ mediaDetails }) {
  const seasons = mediaDetails?.seasons?.filter((s) => s.season_number !== 0);
  const { seasonNumber, setSeasonNumber, setEpisodeNumber } = useWatchContext();

  const { episodes, loading, error } = useEpisodes(
    mediaDetails.id,
    seasonNumber,
  );

  return (
    <div>
      {/* Season Buttons */}
      <div className="flex gap-2 flex-wrap mb-4">
        {seasons?.map((season) => (
          <SeasonBtn
            key={season.id}
            season={season}
            selectedSeason={seasonNumber}
            setSelectedSeason={setSeasonNumber}
            setSelectedEpisode={setEpisodeNumber}
          />
        ))}
      </div>

      {/* Season hero */}
      <SeasonHero
        seasonNumber={seasonNumber}
        episodes={episodes}
        setSeasonNumber={setSeasonNumber}
        setEpisodeNumber={setEpisodeNumber}
      />

      {/* Episode list */}
      <EpisodeCarousel
        episodes={episodes}
        loading={loading}
        error={error}
        // selectedEpisode={episodeNumber}
        setSelectedEpisode={setEpisodeNumber}
      />

      {/* Watched episodes */}
      <WatchedEpisodes episodes={episodes} />
    </div>
  );
}
