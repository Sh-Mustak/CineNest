import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieInfo from "../components/watch/MovieInfo";
import MovieTabs from "../components/watch/MovieTabs";
import ServerBar from "../components/watch/ServerBar";
import VideoPlayer from "../components/watch/VideoPlayer";
import { fetchMovieDetails } from "../services/movieFetcher";
import { tabs } from "../utils/tabs";
import { motion, AnimatePresence } from "framer-motion";

export default function Watch() {
  const { id } = useParams();

  const [movieDetails, setMovieDetails] = useState(null);
  const [activeTab, setActiveTab] = useState("info");

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
    const renderContent = () => {
    switch (activeTab) {
      case "info":
        return ((<MovieInfo movieDetails={movieDetails} />));
      case "episodes":
        return <div>Episodes Content</div>;
      case "similar":
        return <div>Similar Movies</div>;
      case "trailers":
        return <div>Trailers Section</div>;
      case "reviews":
        return <div>Reviews Section</div>;
      default:
        return null;
    }
  };
  return (
    <main className=" max-w-[1440px] mx-auto px-3 sm:px-5 pt-4 sm:pt-6 pb-20 min-h-screen mt-20">
      <VideoPlayer />
      <ServerBar />
      <MovieTabs
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <div className="relative mt-6 min-h-[150px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </div>
  
      
    </main>
  );
}
