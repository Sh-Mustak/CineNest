export default function HeroSection() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-alt="Cinematic deep space background with stars and nebula"
        style={{
          backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuC8CIaDKDe7W-5YV49Xy-X_WOR5q_vQbVgBVtj4G_DBgHv_GqFXglH9sojUwlQ1isJgMW4PeRnSzoJwY0KcPk_OaK8ZNY692a1YoQSslpp65TefQ4I5bADVDJ743K29T3CSc6-grigszWHygM_pKsLFL9IQ134Pw80_6iz6l2T_0x00kCWZ5QJzWFu_BnKcId1O6yGlKi8yvwIiqX9MD64UYUrSDeVaU2z5ZIx6mV9BEexIM_RaTx3nZ9hlvHlE9KFRIVUCxQaWBhsr")`,
        }}
      ></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_top,#0a0505_0%,rgba(10,5,5,0.4)_50%,rgba(10,5,5,0.1)_100%)]"></div>
      <div className="relative h-full max-w-[1440px] mx-auto px-6 flex flex-col justify-end pb-32">
        <div className="max-w-2xl space-y-6">
          <div className="flex items-center gap-3">
            <span className="bg-primary text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest">
              Featured Movie
            </span>
            <div className="flex items-center text-yellow-500">
              <span className="material-symbols-outlined text-sm fill-current">
                star
              </span>
              <span className="material-symbols-outlined text-sm fill-current">
                star
              </span>
              <span className="material-symbols-outlined text-sm fill-current">
                star
              </span>
              <span className="material-symbols-outlined text-sm fill-current">
                star
              </span>
              <span className="material-symbols-outlined text-sm">
                star_half
              </span>
              <span className="ml-2 text-white font-bold text-sm">9.8/10</span>
            </div>
          </div>
          <h1 className="text-7xl font-black text-white tracking-tight leading-[0.9]">
            INTERSTELLAR
          </h1>
          <div className="flex items-center gap-4 text-slate-300 font-medium">
            <span>2014</span>
            <span className="h-1 w-1 rounded-full bg-primary"></span>
            <span>2h 49m</span>
            <span className="h-1 w-1 rounded-full bg-primary"></span>
            <span>Sci-Fi, Adventure</span>
          </div>
          <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
            A team of explorers travel through a wormhole in space in an attempt
            to ensure humanity's survival as Earth faces a global crop blight.
          </p>
          <div className="flex items-center gap-4 pt-4">
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-transform active:scale-95 group">
              <span className="material-symbols-outlined fill-current">
                play_arrow
              </span>
              Watch Now
            </button>
            <button className="bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all">
              <span className="material-symbols-outlined">add</span>
              Watchlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
