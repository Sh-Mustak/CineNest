import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieRow from "../components/movie/MovieRow";
import MovieDetailsSection from "../components/watch/MovieDetailsSection";
import ServerBar from "../components/watch/ServerBar";
import VideoPlayer from "../components/watch/VideoPlayer";
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
  console.log(movieDetails);
  return (
    <main className=" max-w-[1440px] mx-auto px-3 sm:px-5 pt-4 sm:pt-6 pb-20 min-h-screen mt-20">
      <VideoPlayer />
      
      <MovieDetailsSection movieDetails={movieDetails} />

      <MovieRow rowheader="More Like This" />
    </main>
  );
}
