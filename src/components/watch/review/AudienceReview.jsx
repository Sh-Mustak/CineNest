import ReviewList from "./ReviewList";
import ReviewSummary from "./ReviewSummary";

export default function AudienceReview({ movieDetails }) {
   console.log(movieDetails);
  console.log(movieDetails?.reviews?.results);
  return (
    <>
      <ReviewSummary movieDetails={movieDetails} />

      <ReviewList reviews={movieDetails?.reviews?.results} />

      <div className="text-center mt-5">
        <button className="flex items-center gap-2 px-5 py-2.5 rounded-[9px] bg-s2 border border-white/[.13] text-xs sm:text-[13px] font-semibold hover:bg-s3 transition-all mx-auto">
          Load More Reviews
        </button>
      </div>
    </>
  );
}
