import SafeEmbed from "../../components/SafeEmbe"; // ← Add

export default function VideoPlayer({ playerUrl }) {
  if (!playerUrl) return null;

  return (
    <div className="relative w-full aspect-video max-h-[60vh] rounded-2xl overflow-hidden shadow-xl mb-3">
      <SafeEmbed
        src={playerUrl}
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
        onBlocked={(hostname) => console.warn(`Blocked: ${hostname}`)}
      />
    </div>
  );
}