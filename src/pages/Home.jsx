import HeroSection from "../components/movie/HeroSection";
import MovieRow from "../components/movie/MovieRow";
import { useMovies } from "../hooks/useMovies";

export default function Home() {
  const {trending, loading,error} = useMovies();
  console.log(trending, loading, error);
  return (
    <main className="relative">
      <HeroSection />
      <MovieRow movies={trending} rowheader="Trending Now" />
      <MovieRow rowheader="Popular Movies" />
      <MovieRow rowheader="Top Rated" />
    </main>
  );
}
