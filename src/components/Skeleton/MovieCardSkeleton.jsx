export default function MovieCardSkeleton() {
  return (
    <div className="animate-pulse">
      {/* Poster */}
      <div className="bg-gray-700 rounded-lg w-full aspect-[2/3]" />

      {/* Title */}
      <div className="mt-2 h-3 bg-gray-700 rounded w-3/4" />

      {/* Subtitle */}
      <div className="mt-1 h-3 bg-gray-700 rounded w-1/2" />
    </div>
  );
}
