import MovieCard from "./MovieCard";
import SectionHeader from "./SectionHeader";

export default function MovieRow({ rowheader, movies, loading, error }) {
  return (
    <div className="relative -mt-24 space-y-16 pb-20">
      <section className="">
        <SectionHeader rowheader={rowheader} />
        <div className="flex gap-8 overflow-x-auto hide-scrollbar pb-8 snap-x pt-6 scroll-pl-6 pl-6 pr-6 ">
          
            { loading ? (
              <div className="flex items-center justify-center w-full h-48">
                <p className="text-gray-500 text-lg">Loading...</p>
              </div>
            ) : error ? (
              <div className="flex items-center justify-center w-full h-48">
                <p className="text-red-500 text-lg">Error: {error}</p>
              </div>
            ) : (
              movies?.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))
            )}

        </div>
      </section>
    </div>
  );
}
