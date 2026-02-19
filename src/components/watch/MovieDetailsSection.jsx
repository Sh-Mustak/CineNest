import MovieRow from "../movie/MovieRow";
import CastDetails from "./CastDetails";
import MovieActions from "./MovieActions";
import MovieHeader from "./MovieHeader";
import MovieMeta from "./MovieMeta";

export default function MovieDetailsSection() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-12 mb-25">
      <div className="lg:col-span-2 space-y-6">
        <MovieHeader />
        <MovieMeta />
        <p className="text-lg text-white/80 leading-relaxed max-w-3xl">
          In the year 2084, a deep-space communications officer picks up a
          signal that shouldn't exist. As the frequency grows stronger, the
          boundaries between reality and the echo begin to blur, forcing a
          choice that could redefine humanity's place in the cosmos.
        </p>
        <MovieActions />
      </div>
      <CastDetails />
      
    </div>
  );
}
