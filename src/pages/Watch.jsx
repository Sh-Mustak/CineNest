import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { servers } from "../api/servers";
import MovieTabs from "../components/watch/MovieTabs";
import ServerBar from "../components/watch/ServerBar";
import VideoPlayer from "../components/watch/VideoPlayer";
import WatchContent from "../components/watch/WatchContent";
import { useWatchContext } from "../context/useWatchContext";
import { useMediaDetails } from "../hooks/useMediaDetails";
import { createWatchTabs } from "../utils/watchTabs";

export default function Watch() {
  const { type, id } = useParams();
  const { seasonNumber, episodeNumber } = useWatchContext();
  const { data, loading } = useMediaDetails(type, id);

  const [serverIndex, setServerIndex] = useState(0);

  // 🎯 Player URL
  const playerUrl = useMemo(() => {
    const current = servers[serverIndex];

    return type === "movie"
      ? current.movie(id)
      : current.tv(id, seasonNumber, episodeNumber);
  }, [serverIndex, type, id, seasonNumber, episodeNumber]);

  // ✅ Only scroll (no auto server change)
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
    <main className="max-w-[1440px] mx-auto px-3 pt-6 pb-20 mt-20">
      {/* Video */}
      <VideoPlayer playerUrl={playerUrl} />

      {/* Current Server */}
      <p className="text-xs text-white/60 mt-2 mb-2">
        Server: {servers[serverIndex].name}
      </p>

      {/* Manual Switch Only */}
      <ServerBar serverIndex={serverIndex} setServerIndex={setServerIndex} />

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
