export default function TrailersCard({ trailer }) {
  return (
    <div className="min-w-[400px]">
      <iframe
        width="100%"
        height="225"
        src={`https://www.youtube.com/embed/${trailer.key}`}
        title={trailer.name}
        allowFullScreen
        className="rounded-lg"
      />
    </div>
  );
}