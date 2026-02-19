export default function MovieMeta() {
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-white/60 text-sm font-medium">
      <span>2024</span>
      <span>PG-13</span>
      <span>2h 14m</span>
      <div className="flex gap-2">
        <span className="border border-white/20 px-2 rounded">Sci-Fi</span>
        <span className="border border-white/20 px-2 rounded">Thriller</span>
      </div>
    </div>
  );
}
