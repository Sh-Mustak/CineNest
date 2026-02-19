export default function MovieActions() {
  return (
    <div className="flex flex-wrap gap-4 pt-4">
      <button className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold bg-primary hover:bg-primary/90 transition-all text-white active:scale-95">
        <span
          className="material-symbols-outlined"
          style={{ fontVariationSettings: '"FILL" 1' }}
        >
          play_arrow
        </span>
        Resume Movie
      </button>
      <button className="flex items-center gap-2 px-6 py-3 bg-white/10 rounded-xl font-bold bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm text-white transition-all">
        <span className="material-symbols-outlined">add</span>
        Watchlist
      </button>
      <div className="h-12 w-px bg-white/10 mx-2"></div>
      <button
        className="p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
        title="Download"
      >
        <span className="material-symbols-outlined">download</span>
      </button>
      <button
        className="p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
        title="Share"
      >
        <span className="material-symbols-outlined">share</span>
      </button>
      <button
        className="p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
        title="Favorite"
      >
        <span className="material-symbols-outlined">favorite</span>
      </button>
    </div>
  );
}
