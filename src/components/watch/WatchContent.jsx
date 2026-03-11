// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import Episodes from "./episodes/Episodes.jsx";
import MovieInfo from "./movieInfo/MovieInfo.jsx";
import AudienceReview from "./review/AudienceReview.jsx";
import Similar from "./similar/Similar.jsx";
import Trailers from "./trailers/Trailers.jsx";

const TAB_COMPONENTS = {
  info: MovieInfo,
  episodes: Episodes,
  similar: Similar,
  trailers: Trailers,
  reviews: AudienceReview,
};

export default function WatchContent({
  activeTab,
  direction,
  movieDetails,
  loading,
}) {
  const Component = TAB_COMPONENTS[activeTab];

  if (!Component) return null;

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
          <Component
            movieDetails={movieDetails}
            loading={loading}
            similarMovies={movieDetails?.recommendations?.results}
            trailers={movieDetails?.videos?.results}
          />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
