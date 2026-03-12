import { useEffect } from "react";
import HeroSection from "../components/movie/HeroSection";
import MovieRow from "../components/movie/MovieRow";
import { useMovieContext } from "../context/useMovieContext";
export default function Home() {
  const { trending, popular, topRated, upcoming, airingToday, loading, error } =
    useMovieContext();
    console.log(airingToday)
  useEffect(() => {
    const savedScroll = sessionStorage.getItem("homeScroll");

    if (savedScroll) {
      window.scrollTo(0, Number(savedScroll));
    }
  }, []);
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
      <MovieRow
        movies={topRated}
        loading={loading}
        error={error}
        rowheader="Top Rated"
      />
      <MovieRow
        movies={upcoming}
        loading={loading}
        error={error}
        rowheader="Upcoming Movies"
      />
       <MovieRow
        movies={airingToday}
        loading={loading}
        error={error}
        rowheader="Airing today"
      />
    </main>
  );
}
