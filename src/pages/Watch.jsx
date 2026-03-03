import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieInfo from "../components/watch/MovieInfo";
import MovieTabs from "../components/watch/MovieTabs";
import ServerBar from "../components/watch/ServerBar";
import VideoPlayer from "../components/watch/VideoPlayer";
import { fetchMovieDetails } from "../services/movieFetcher";

export default function Watch() {
  const { id } = useParams();
  
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
      <ServerBar />
      <MovieTabs />
      <MovieInfo movieDetails={movieDetails} />
    </main>
  );
}
