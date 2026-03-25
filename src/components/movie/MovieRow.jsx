import MovieCard from "./MovieCard";
import SectionHeader from "./SectionHeader";

export default function MovieRow({
  rowheader,
  movies,
  loading,
  error,
  showHeader,
  mediaType
}) {
  return (
    <div className={`relative  ${showHeader && "-mt-31"} space-y-16`}>
      <section className="mt-4">
        {showHeader ?? <SectionHeader rowheader={rowheader} />}
        <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-8 snap-x pt-6 scroll-pl-6 pl-6 pr-6 ">
          {loading ? (
            <div className="flex items-center justify-center w-full h-48">
              <p className="text-gray-500 text-lg">Loading...</p>
            </div>
          ) : error ? (
            <div className="flex items-center justify-center w-full h-48">
              <p className="text-red-500 text-lg">Error: {error}</p>
            </div>
          ) : (
            movies?.map((movie) => (
              <MovieCard key={movie.id} movie={movie} mediaType={mediaType} fullWidth={false} />
            ))
          )}
        </div>
      </section>
    </div>
  );
}
