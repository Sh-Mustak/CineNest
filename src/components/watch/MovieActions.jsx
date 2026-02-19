export default function MovieActions() {
  return (
    <div classname="flex flex-wrap gap-4 pt-4">
      <button classname="flex items-center gap-2 px-6 py-3 bg- rounded-xl font-bold hover:bg-primary/90 transition-all active:scale-95">
        <span
          classname="material-symbols-outlined"
          style={{ fontVariationSettings: '"FILL" 1' }}
        >
          play_arrow
        </span>
        Resume Movie
      </button>
      <button classname="flex items-center gap-2 px-6 py-3 bg-white/10 rounded-xl font-bold hover:bg-white/20 transition-all">
        <span classname="material-symbols-outlined">add</span>
        Watchlist
      </button>
      <div classname="h-12 w-px bg-white/10 mx-2"></div>
      <button
        classname="p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
        title="Download"
      >
        <span classname="material-symbols-outlined">download</span>
      </button>
      <button
        classname="p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
        title="Share"
      >
        <span classname="material-symbols-outlined">share</span>
      </button>
      <button
        classname="p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
        title="Favorite"
      >
        <span classname="material-symbols-outlined">favorite</span>
      </button>
    </div>
  );
}
