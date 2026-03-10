export default function ReviewSummary() {
  return (
    <div className="flex justify-between items-start flex-wrap gap-4 sm:gap-5 mb-6">
      <div className="flex items-center gap-5 sm:gap-7 flex-wrap">
        <div>
          <div className="font-display font-black text-5xl sm:text-[62px] text-white">
            8.8
          </div>

          <div className="text-[10px] sm:text-[11px] text-white/55 mt-1">
            Based on 24,812 reviews
          </div>

          <div className="flex gap-0.5 mt-1.5 text-white">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={`text-sm sm:text-[17px] ${
                  i < 4 ? "text-gold" : "text-s3"
                }`}
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </div>

      <button className="flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-[9px] bg-transparent border border-white/[.13] text-xs sm:text-[13px] font-semibold hover:bg-s2 hover:border-red hover:text-red transition-all whitespace-nowrap">
        <span className="mi text-[15px] sm:text-[16px]">edit</span>
        Write a Review
      </button>
    </div>
  );
}
