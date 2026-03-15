/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { embededService } from "../api/embedService";
import MovieTabs from "../components/watch/MovieTabs";
import ServerBar from "../components/watch/ServerBar";
import VideoPlayer from "../components/watch/VideoPlayer";
import WatchContent from "../components/watch/WatchContent";
import { useMediaDetails } from "../hooks/useMediaDetails";
import { createWatchTabs } from "../utils/watchTabs";

export default function Watch() {
  const { type, id } = useParams();

  const { data, loading, error } = useMediaDetails(type, id);

  const playerUrl = type === "movie" ? embededService.getMoviePlayer(id) : null;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [id]);

  const tabs = createWatchTabs(data, loading);

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
        mediaDetails={data}
        activeTab={activeTab}
        direction={direction}
        loading={loading}
      />
    </main>
  );
}
