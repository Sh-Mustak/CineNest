import { useEffect } from "react";
import HeroSection from "../components/movie/HeroSection";
import MovieRow from "../components/movie/MovieRow";
import { useMovieContext } from "../context/useMovieContext";

import { adaptMoviesForHero } from "../utils/adaptMoviesForHero";

export default function Home() {
  const {
    trending,
    popular,
    topRated,
    upcoming,
    airingToday,
    topRatedTvShows,
    topRatedHindiTvShows,
    loading,
    error,
  } = useMovieContext();

  const heroSlides = adaptMoviesForHero(trending, 10, "tv");

  useEffect(() => {
    const savedScroll = sessionStorage.getItem("homeScroll");
    if (savedScroll) {
      window.scrollTo(0, Number(savedScroll));
    }
  }, []);

  return (
    <main className="relative">
      {/* ← Pass heroSlides as the movies prop */}
      <HeroSection movies={heroSlides} />

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
        mediaType="movie"
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
        rowheader="Airing Today"
      />
      <MovieRow
        movies={topRatedTvShows}
        loading={loading}
        error={error}
        rowheader="Top TV Shows"
      />
      <MovieRow
        movies={topRatedHindiTvShows}
        loading={loading}
        error={error}
        rowheader="Top Hindi TV"
      />
    </main>
  );
}
