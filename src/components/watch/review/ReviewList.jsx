import ReviewCard from "./ReviewCard";

export default function ReviewList() {
  return (
    <div className="flex flex-col gap-3">
      <ReviewCard />
      <ReviewCard />
    </div>
  );
}
