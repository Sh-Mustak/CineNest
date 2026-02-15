import MovieCard from "./MovieCard";
import SectionHeader from "./SectionHeader";

export default function MovieRow() {
  return (
    <div class="relative -mt-24 space-y-16 pb-20">
      <section className="pl-6 md:pl-12">
        <SectionHeader />
        <MovieCard />
      </section>
    </div>
  );
}
