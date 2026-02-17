export default function MovieCardSkeleton() {
  return (
    <div className="flex flex-col gap-3 opacity-60">
      <div className="aspect-[2/3] rounded-xl bg-white/5 shimmer"></div>
      <div className="h-5 w-3/4 rounded bg-white/5 shimmer"></div>
      <div className="h-4 w-1/2 rounded bg-white/5 shimmer"></div>
    </div>
  );
}
