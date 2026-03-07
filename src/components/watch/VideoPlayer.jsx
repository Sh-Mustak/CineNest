export default function VideoPlayer({ playerUrl }) {
  return (
    <div className="relative w-full aspect-video h-[50vh] rounded-2xl overflow-hidden bg-black shadow-xl mb-3">
      <iframe
        src={playerUrl}
        title="Movie Player"
        className="w-full h-full"
        allowFullScreen
        frameBorder="0"
      />
    </div>
  );
}
