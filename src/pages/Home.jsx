import HeroSection from "../components/movie/HeroSection";
import MovieRow from "../components/movie/MovieRow";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <MovieRow />
      <MovieRow />
      <MovieRow />
    </main>
  );
}
