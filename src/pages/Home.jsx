import HeroSection from "../components/movie/HeroSection";
import MovieRow from "../components/movie/MovieRow";
import { useMovieContext } from "../context/useMovieContext";

export default function Home() {
  const { trending, popular, loading, error } = useMovieContext();
  return (
    <main className="relative">
      <HeroSection />
      <MovieRow
        movies={trending}
        loading={loading}
        error={error}
        rowheader="Trending Now"
      />
      <MovieRow
        movies={popular}
        loading={loading}
        error={error}
        rowheader="Popular Movies"
      />
      <MovieRow rowheader="Top Rated" />
    </main>
  );
}
