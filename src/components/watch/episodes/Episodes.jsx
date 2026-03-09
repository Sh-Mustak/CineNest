import EpisodeCarousel from "./EpisodeCarousel";
import SeasonBtn from "./SeasonBtn";
import SeasonHero from "./SeasonHero";
import WatchedEpisodes from "./WatchedEpisodes";

export default function Episodes() {
  return (
    <div>
      {/* <!-- Season pills --> */}
      <SeasonBtn />
      {/* <!-- Season hero --> */}
      <SeasonHero />

      {/* <!-- Horizontal episode scroll --> */}
   <EpisodeCarousel/>

      {/* <!-- Already watched --> */}
     <WatchedEpisodes/>
    </div>
  );
}
