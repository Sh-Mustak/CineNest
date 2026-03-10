// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import MovieInfo from "./movieInfo/MovieInfo.jsx";
import Episodes from "./episodes/Episodes.jsx";
import Similar from "./similar/Similar.jsx";
import Trailers from "./trailers/Trailers.jsx";
import AudienceReview from "./review/AudienceReview.jsx";

export default function WatchContent({ activeTab, direction, movieDetails }) {
  const renderContent = () => {
    switch (activeTab) {
      case "info":
        return <MovieInfo movieDetails={movieDetails} />;
      case "episodes":
        return <Episodes />;
      case "similar":
        return <Similar/>;
      case "trailers":
        return <Trailers/>;
      case "reviews":
        return <AudienceReview/>
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
