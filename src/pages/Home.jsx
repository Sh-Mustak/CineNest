import HeroSection from "../components/movie/HeroSection";
import MovieRow from "../components/movie/MovieRow";
import { useMovies } from "../hooks/useMovies";

export default function Home() {
  const {trending, loading,error} = useMovies();
  const {popular} = useMovies();
  console.log(popular, loading, error);
  return (
    <main className="relative">
      <HeroSection />
      <MovieRow movies={trending} rowheader="Trending Now" />
      <MovieRow movies={popular} rowheader="Popular Movies" />
      <MovieRow rowheader="Top Rated" />
    </main>
  );
}
