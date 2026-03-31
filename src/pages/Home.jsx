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

  const heroSlides = adaptMoviesForHero(trending?.results, 10, "tv");

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
        movies={trending?.results}
        loading={loading}
        error={error}
        rowheader="Trending Now"
        category="trending"
        mediaType="movie"
      />
      <MovieRow
        movies={popular?.results}
        loading={loading}
        error={error}
        rowheader="Popular Movies"
        category="popular"
        mediaType="movie"
      />
      <MovieRow
        movies={topRated?.results}
        loading={loading}
        error={error}
        rowheader="Top Rated"
        category="top_rated"
        mediaType="movie"
      />
      <MovieRow
        movies={upcoming?.results}
        loading={loading}
        error={error}
        rowheader="Upcoming Movies"
        category="upcoming"
        mediaType="movie"
      />
      <MovieRow
        movies={airingToday?.results}
        loading={loading}
        error={error}
        rowheader="Airing Today"
        category="airing_today"
        mediaType="tv"
      />
      <MovieRow
        movies={topRatedTvShows?.results}
        loading={loading}
        error={error}
        rowheader="Top TV Shows"
        category="top_rated_tv"
        mediaType="tv"
      />
      <MovieRow
        movies={topRatedHindiTvShows?.results}
        loading={loading}
        error={error}
        rowheader="Top Hindi TV"
        category="top_rated_hindi_tv"
        mediaType="tv"
      />
    </main>
  );
}
