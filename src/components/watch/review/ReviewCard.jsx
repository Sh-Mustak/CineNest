export default function ReviewCard({ review }) {
  const { author, author_details, content, created_at, url } = review;

  const date = new Date(created_at).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  // Split content by line breaks and trim each line
  const paragraphs = content
    ? content.split(/\r?\n/).map((line) => line.trim()).filter(Boolean)
    : [];

  return (
    <div className="p-4 sm:p-5 rounded-md bg-background-light/5 border border-white/[.07] hover:border-white/[.13] transition-colors">
      {/* Header */}
      <div className="flex justify-between items-start flex-wrap gap-2 mb-3">
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-display font-bold text-sm border border-white/[.07]"
            style={{
              background: "linear-gradient(135deg, #e8151a, #c9a84c)",
            }}
          >
            {author?.charAt(0).toUpperCase() || "A"}
          </div>

          <div>
            <div className="text-xs sm:text-[14px] text-white font-semibold">
              {author || author_details?.username || "Anonymous"}
            </div>
            <div className="text-[10px] sm:text-[11px] text-white/50">
              {date}
            </div>
          </div>
        </div>

        <div className="flex gap-0.5 text-amber-400">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="text-xs sm:text-[13px]">
              {i < Math.round(author_details?.rating || 0) ? "★" : "☆"}
            </span>
          ))}
        </div>
      </div>

      {/* Content with paragraphs */}
      <div className="text-[11px] sm:text-[13px] leading-[1.7] text-white/62 space-y-2">
        {paragraphs.map((para, index) => (
          <p key={index}>
            {para.startsWith(">") ? (
              <span className="text-white/50 italic">{para}</span>
            ) : (
              para
            )}
          </p>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center text-white/60 gap-3 mt-3 pt-3 border-t border-white/[.07]">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-[10px] sm:text-[11px] text-ctm hover:text-ct"
        >
          <span className="material-symbols-outlined text-[13px]">open_in_new</span> Full Review
        </a>
      </div>
    </div>
  );
}