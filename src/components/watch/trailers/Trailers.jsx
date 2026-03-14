import TrailersCard from "./TrailersCard";

export default function Trailers({ mediaDetails }) {
  return (
    <div className="">
      <h2 className="font-display text-lg font-bold mb-4 sm:mb-5 text-white">
        Trailers & Featurettes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {mediaDetails?.videos?.results?.map((trailer) => (
          <TrailersCard key={trailer.key} trailer={trailer} />
        ))}
      </div>
    </div>
  );
}
