export default function VideoPlayer({ playerUrl }) {
  if (!playerUrl) return null;
  return (
    <div className="relative w-full aspect-video max-h-[60vh] rounded-2xl overflow-hidden shadow-xl mb-3">
      <iframe
        key={playerUrl}
        src={playerUrl}
        title="Movie Player"
        className="absolute top-0 left-0 w-full h-full"
        allowFullScreen
      />
    </div>
  );
}
