// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import MovieInfo from "./MovieInfo";

export default function WatchContent({ activeTab, direction, movieDetails }) {
  const renderContent = () => {
    switch (activeTab) {
      case "info":
        return <MovieInfo movieDetails={movieDetails} />;
      case "episodes":
        return <div className="p-4">Episodes</div>;
      case "similar":
        return <div className="p-4">Similar</div>;
      case "trailers":
        return <div className="p-4">Trailers</div>;
      case "reviews":
        return <div className="p-4">Reviews</div>;
      default:
        return null;
    }
  };

  return (
    <motion.div layout className="relative mt-6 overflow-hidden">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={activeTab}
          custom={direction}
          initial={{ opacity: 0, x: direction * 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction * -40 }}
          transition={{ duration: 0.25 }}
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
