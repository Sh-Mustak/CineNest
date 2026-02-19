import MovieRow from "../components/movie/MovieRow";
import MovieDetailsSection from "../components/watch/MovieDetailsSection";
import VideoPlayer from "../components/watch/VideoPlayer";

export default function Watch() {
  return (
    <main className="mt-20 min-h-screen">
      <VideoPlayer />
      <MovieDetailsSection />

      <MovieRow rowheader="More Like This" />
    </main>
  );
}
