import MovieRow from "../components/movie/MovieRow";
import MovieDetailsSection from "../components/watch/MovieDetailsSection";
import VideoPlayer from "../components/watch/VideoPlayer";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMovieDetails } from "../services/movieFetcher";

export default function Watch() {
  const { id } = useParams();
  console.log("Movie ID from URL:", id);
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    if (!id) return;
    const loadMovieDetails = async () => {
      const { details, detailsError } = await fetchMovieDetails(id);
      if (detailsError) {
        console.error("Failed to load movie details:", detailsError);
        return;
      }
      setMovieDetails(details);
    };
    loadMovieDetails();
  }, [id]);
  console.log(movieDetails)
  return (
    <main className="mt-20 min-h-screen">
      <VideoPlayer />
      <MovieDetailsSection movieDetails={movieDetails} />

      <MovieRow rowheader="More Like This" />
    </main>
  );
}
