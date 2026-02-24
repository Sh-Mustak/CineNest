import HeroSection from "../components/movie/HeroSection";
import MovieRow from "../components/movie/MovieRow";
import {useContext} from "react";
import {MovieContext} from "../context/MovieContextDefinition"

export default function Home() {
  const {trending, popular} = useContext(MovieContext);
  return (
    <main className="relative">
      <HeroSection />
      <MovieRow movies={trending} rowheader="Trending Now" />
      <MovieRow movies={popular} rowheader="Popular Movies" />
      <MovieRow rowheader="Top Rated" />
    </main>
  );
}
