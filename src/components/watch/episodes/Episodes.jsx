import { useState } from "react";
import { useEpisodes } from "../../../hooks/useEpisodes";
import EpisodeCarousel from "./EpisodeCarousel";
import SeasonBtn from "./SeasonBtn";
import SeasonHero from "./SeasonHero";
import WatchedEpisodes from "./WatchedEpisodes";

export default function Episodes({ mediaDetails }) {
  const seasons = mediaDetails?.seasons?.filter((s) => s.season_number !== 0);

  const [selectedSeason, setSelectedSeason] = useState(
    seasons?.[0]?.season_number || 1,
  );

  const [selectedEpisode, setSelectedEpisode] = useState(1);

  const { episodes, loading, error } = useEpisodes(
    mediaDetails.id,
    selectedSeason,
  );
  console.log(episodes)

  return (
    <div>
      {/* Season Buttons */}
      <div className="flex gap-2 flex-wrap mb-4">
        {seasons?.map((season) => (
          <SeasonBtn
            key={season.id}
            season={season}
            selectedSeason={selectedSeason}
            setSelectedSeason={setSelectedSeason}
            setSelectedEpisode={setSelectedEpisode}
          />
        ))}
      </div>

      {/* Season hero */}
      <SeasonHero season={selectedSeason} episodes={episodes} />

      {/* Episode list */}
      <EpisodeCarousel
        episodes={episodes}
        loading={loading}
        error={error}
        selectedEpisode={selectedEpisode}
        setSelectedEpisode={setSelectedEpisode}
      />

      {/* Watched episodes */}
      <WatchedEpisodes episodes={episodes} />
    </div>
  );
}
