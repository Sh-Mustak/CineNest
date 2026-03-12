import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { embededService } from "../api/embedService";
import MovieTabs from "../components/watch/MovieTabs";
import ServerBar from "../components/watch/ServerBar";
import VideoPlayer from "../components/watch/VideoPlayer";
import WatchContent from "../components/watch/WatchContent";
import { useMovieDetails } from "../hooks/useMovieDetails";
import { createWatchTabs } from "../utils/watchTabs";

export default function Watch() {
  const { id } = useParams();
  const { movieDetails, loading } = useMovieDetails(id);
  const playerUrl = embededService.getMoviePlayer(id);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [id]);
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [id]);
  const tabs = createWatchTabs(movieDetails, loading);

  // console.log("movies", movieDetails);

  const [activeTab, setActiveTab] = useState("info");
  const [direction, setDirection] = useState(0);

  const handleTabChange = (newTab) => {
    const currentIndex = tabs.findIndex((t) => t.id === activeTab);
    const newIndex = tabs.findIndex((t) => t.id === newTab);

    setDirection(newIndex > currentIndex ? 1 : -1);
    setActiveTab(newTab);
  };
  

  return (
    <main className="max-w-[1440px] mx-auto px-3 sm:px-5 pt-4 sm:pt-6 pb-20 min-h-screen mt-20">
      <VideoPlayer playerUrl={playerUrl} />
      <ServerBar />

      <MovieTabs
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={handleTabChange}
      />

      <WatchContent
        movieDetails={movieDetails}
        activeTab={activeTab}
        direction={direction}
        loading={loading}
      />
    </main>
  );
}
