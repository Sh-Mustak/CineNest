/* eslint-disable no-unused-vars */
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieInfo from "../components/watch/MovieInfo";
import MovieTabs from "../components/watch/MovieTabs";
import ServerBar from "../components/watch/ServerBar";
import VideoPlayer from "../components/watch/VideoPlayer";
import { fetchMovieDetails } from "../services/movieFetcher";
import { tabs } from "../utils/tabs";

export default function Watch() {
  const { id } = useParams();

  const [movieDetails, setMovieDetails] = useState(null);
  const [activeTab, setActiveTab] = useState("info");
  const [direction, setDirection] = useState(0);

  // Fetch movie details
  useEffect(() => {
    if (!id) return;

    const loadMovieDetails = async () => {
      const { details, detailsError } = await fetchMovieDetails(id);

      if (detailsError) {
        console.error("Failed to load movie details:", detailsError);
        return;
      }

      setMovieDetails(details);
    };

    loadMovieDetails();
  }, [id]);

  // Handle tab change with direction detection
  const handleTabChange = (newTab) => {
    const currentIndex = tabs.findIndex((t) => t.id === activeTab);
    const newIndex = tabs.findIndex((t) => t.id === newTab);

    setDirection(newIndex > currentIndex ? 1 : -1);
    setActiveTab(newTab);
  };

  // Render tab content
  const renderContent = () => {
    switch (activeTab) {
      case "info":
        return <MovieInfo movieDetails={movieDetails} />;
      case "episodes":
        return <div className="p-4">Episodes Content</div>;
      case "similar":
        return <div className="p-4">Similar Movies</div>;
      case "trailers":
        return <div className="p-4">Trailers Section</div>;
      case "reviews":
        return <div className="p-4">Reviews Section</div>;
      default:
        return null;
    }
  };

  return (
    <main className="max-w-[1440px] mx-auto px-3 sm:px-5 pt-4 sm:pt-6 pb-20 min-h-screen mt-20">
      <VideoPlayer />
      <ServerBar />

      <MovieTabs
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={handleTabChange}
      />

      {/* Premium Animated Content */}
      <motion.div
        layout
        className="relative mt-6 overflow-hidden"
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeTab}
            custom={direction}
            initial={{ opacity: 0, x: direction * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -40 }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
            }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </main>
  );
}