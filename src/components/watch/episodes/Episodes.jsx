import EpisodeCarousel from "./EpisodeCarousel";
import SeasonBtn from "./SeasonBtn";
import SeasonHero from "./SeasonHero";
import WatchedEpisodes from "./WatchedEpisodes";

export default function Episodes({ mediaDetails }) {
  return (
    <div>
      <div className="flex gap-2 flex-wrap mb-4">
        {mediaDetails?.seasons
          ?.filter((s) => s.season_number !== 0)
          .map((season) => (
            <SeasonBtn key={season.id} season={season} />
          ))}
      </div>
      {/* <!-- Season hero --> */}
      <SeasonHero />

      {/* <!-- Horizontal episode scroll --> */}
      <EpisodeCarousel />

      {/* <!-- Already watched --> */}
      <WatchedEpisodes />
    </div>
  );
}
