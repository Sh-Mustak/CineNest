export default function PageHeader() {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 h-full mt-20">
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <h2 class="text-4xl sm:text-5xl font-black text-white mb-2">
            Movies
          </h2>
          <p class="text-slate-400 text-lg">
            Browse thousands of titles from around the world.
          </p>
        </div>
        <div class="flex items-center gap-3">
          <button class="flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
            <span class="material-symbols-outlined text-xl">tune</span>
            <span>Filters</span>
          </button>
        </div>
      </div>
    </div>
  );
}
