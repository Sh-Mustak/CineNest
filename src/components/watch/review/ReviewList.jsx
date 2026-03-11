import ReviewCard from "./ReviewCard";

export default function ReviewList({ reviews }) {
  if (!reviews || reviews.length === 0) {
    return <div className="text-white/60 text-sm">No reviews yet.</div>;
  }

  return (
    <div className="flex flex-col gap-3">
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
}
