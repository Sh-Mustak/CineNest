export default function MovieCard() {
  return (
    <div className="flex-none w-70 group cursor-pointer snap-start mb-4">
      <div className="relative aspect-2/3 rounded-xl overflow-hidden mb-3 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(230,10,13,0.3)]">
        <img
          alt="Dune"
          className="w-full h-full object-cover"
          data-alt="Cinematic movie poster of a desert planet"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgzPODX0W5B-cVV5jK4tMFyVILx27VKGblp-eijjo_DUk1PM5uDOnCEEE9lCoaEcFxwvsepWryWGc9kv8Ll8I84dpcXScGcwJOEHm3_VTevikNxJaVKJyKilYjkBDaY1UVJpxOk9Q2EPdplgAU0LbQGxsTfMNojyT0Nm81X05A4wGb8VCDq4I0HlY--6YDL9Q3og43AqHQotLde4ntCF-PM51MHC6jBep4Js0YhpgSuxQMYOGDSeAt66JyBdxABgeJf8f3B3VhQz9e"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
          <div className="bg-primary p-3 rounded-full text-white shadow-lg">
            <span className="material-symbols-outlined fill-current">
              play_arrow
            </span>
          </div>
          <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white">
            <span className="material-symbols-outlined">add</span>
          </div>
        </div>
        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg text-[10px] font-bold text-yellow-400 flex items-center gap-1">
          <span className="material-symbols-outlined text-[12px] fill-current">
            star
          </span>
          9.2
        </div>
      </div>
      <h3 className="text-white font-bold group-hover:text-primary transition-colors">
        Dune: Part Two
      </h3>
      <p className="text-slate-500 text-xs font-medium uppercase tracking-wider ">
        Sci-Fi • 2024
      </p>
    </div>
  );
}
