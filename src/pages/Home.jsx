

import { useEffect } from "react";
import HeroSection from "../components/movie/HeroSection";
import MovieRow    from "../components/movie/MovieRow";
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


  const heroSlides = adaptMoviesForHero(trending, 10);

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
        mediaType="movie"
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
        mediaType="movie"
      />
      <MovieRow
        movies={upcoming}
        loading={loading}
        error={error}
        rowheader="Upcoming Movies"
        mediaType="movie"
      />
      <MovieRow
        movies={airingToday}
        loading={loading}
        error={error}
        rowheader="Airing Today"
        mediaType="tv"
      />
      <MovieRow
        movies={topRatedTvShows}
        loading={loading}
        error={error}
        rowheader="Top Rated TV Shows"
        mediaType="tv"
      />
      <MovieRow
        movies={topRatedHindiTvShows}
        loading={loading}
        error={error}
        rowheader="Top Rated Hindi TV Shows"
        mediaType="tv"
      />

    </main>
  );
}