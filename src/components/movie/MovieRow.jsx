import MovieCard from "./MovieCard";
import SectionHeader from "./SectionHeader";

export default function MovieRow() {
  return (
    <div class="relative -mt-24 space-y-16 pb-20">
      <section className="">
        <SectionHeader />
        <div className="flex gap-8 overflow-x-auto hide-scrollbar pb-8 snap-x pt-6 scroll-pl-6 pl-6 pr-6 ">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </section>
    </div>
  );
}
