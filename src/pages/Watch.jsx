/* eslint-disable no-unused-vars */
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import MovieTabs from "../components/watch/MovieTabs";
import ServerBar from "../components/watch/ServerBar";
import VideoPlayer from "../components/watch/VideoPlayer";
import WatchContent from "../components/watch/WatchContent";
import { useWatchContext } from "../context/useWatchContext";
import { useMediaDetails } from "../hooks/useMediaDetails";
import { createWatchTabs } from "../utils/watchTabs";
import { embed_endpoints } from "../api/endpoints";

export default function Watch() {
  const { type, id } = useParams();
  const { seasonNumber, episodeNumber } = useWatchContext();
  const { data, loading, error } = useMediaDetails(type, id);
  const [server, setServer] = useState("server1");

  const playerUrl = useMemo(() => {
    const selectedServer = embed_endpoints[server];

    return type === "movie"
      ? selectedServer.movie(id)
      : selectedServer.tv(id, seasonNumber, episodeNumber);
  }, [type, id, seasonNumber, episodeNumber, server]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id, episodeNumber]);

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
      <ServerBar server={server} setServer={setServer} />
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
