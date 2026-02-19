export default function VideoPlayer() {
  return (
    <div className="relative w-full aspect-video max-h-[85vh] bg-black group overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 blur-[120px] pointer-events-none"></div>
      <div
        className="w-full h-full bg-cover bg-center flex items-center justify-center"
        data-alt="Cinematic still from a sci-fi movie featuring a space station"
        style={{
          backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAitWe7RRkbVfszuDi4DA7_ZGYdViU8jg7SOyHb6JBUd8-utBwkko2qAyF9BJxo8j86MY2TN4Bmsz_D5DTCEy329AIZsK1gdwabkUwLyM1vQAupJ0UHjb0eqYh-lL8FtbeY0jtVo18OlVK_TasB1ZkL442TD9AIJnDDN7eW-2mkheYHAtl6rTvhI0x36cllyEO0QP4TLxy2RNK4QVb2XnHmCSkvJAyVZ52jRxtC0vCJ9spbc4AUqQkuzKdXAz6o_kAqe7CMgR-MgOjF")`,
        }}
      >
        <button className="size-20 rounded-full bg-primary/90 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-2xl shadow-primary/20">
          <span
            className="material-symbols-outlined text-4xl"
            style={{ fontVariationSettings: '"FILL" 1' }}
          >
            play_arrow
          </span>
        </button>
      </div>
      <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-full h-1.5 bg-white/20 rounded-full mb-6 cursor-pointer relative">
          <div className="absolute top-0 left-0 h-full bg-primary rounded-full w-[35%]"></div>
          <div className="absolute top-1/2 -translate-y-1/2 left-[35%] size-4 bg-primary rounded-full border-2 border-white shadow-md"></div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button className="text-white hover:text-primary transition-colors">
              <span
                className="material-symbols-outlined text-2xl"
                style={{ fontVariationSettings: '"FILL" 1' }}
              >
                play_arrow
              </span>
            </button>
            <button className="text-white hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-2xl">
                skip_next
              </span>
            </button>
            <div className="flex items-center gap-3 group/volume">
              <span className="material-symbols-outlined text-white text-2xl">
                volume_up
              </span>
              <div className="w-20 h-1 bg-white/20 rounded-full">
                <div className="h-full bg-white rounded-full w-[70%]"></div>
              </div>
            </div>
            <span className="text-sm font-medium text-white/80 tabular-nums">
              12:45 / 02:14:00
            </span>
          </div>
          <div className="flex items-center gap-6">
            <button className="text-white hover:text-primary transition-colors flex items-center gap-1">
              <span className="material-symbols-outlined text-2xl">
                subtitles
              </span>
            </button>
            <button className="text-white hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-2xl">
                settings
              </span>
            </button>
            <button className="text-white hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-2xl">
                fullscreen
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
