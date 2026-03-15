export default function VideoPlayer({ playerUrl }) {
  if (!playerUrl) return null;

  return (
    <div className="relative w-full aspect-video h-[50vh] rounded-2xl overflow-hidden  shadow-xl mb-3">
      <iframe
        key={playerUrl}
        src={playerUrl}
        title="Movie Player"
        className="w-full h-full"
        allowFullScreen
        // referrerPolicy="no/-referrer"
      />
    </div>
  );
}
