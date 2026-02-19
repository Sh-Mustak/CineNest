export default function MovieHeader() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <h1 className="text-4xl md:text-5xl text-white font-bold tracking-tight">
        The Midnight Echo
      </h1>
      <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-lg">
        <span
          className="material-symbols-outlined text-yellow-400 text-lg"
         style={{ fontVariationSettings: '"FILL" 1' }}
        >
          star
        </span>
        <span className="font-bold text-yellow-400">8.4</span>
        <span className="text-yellow-400 text-sm font-normal">/ 10</span>
      </div>
    </div>
  );
}
