import { useState } from "react";
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
  console.log(selectedSeason)
  return (
    <div>
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
      {/* <!-- Season hero --> */}
      <SeasonHero season={selectedSeason} />

      {/* <!-- Horizontal episode scroll --> */}
      <EpisodeCarousel
        seasonNmbr={selectedSeason}
        selectedEpisode={selectedEpisode}
        setSelectedEpisode={setSelectedEpisode}
        seriesId={mediaDetails.id}
      />

      {/* <!-- Already watched --> */}
      <WatchedEpisodes />
    </div>
  );
}
