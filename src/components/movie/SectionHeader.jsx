import { useNavigate } from "react-router-dom";

export default function SectionHeader({ rowheader, category, mediaType }) {
  const navigate = useNavigate();

  const handleSeeAll = () => {
    navigate(
      `/${mediaType === "movie" ? "movies" : "tvshows"}?category=${category}`,
    );
  };

  return (
    <div className="flex items-center justify-between pr-6 md:pr-12 ml-6">
      <h2 className="text-xl font-bold text-white flex items-center gap-2">
        {rowheader}
      </h2>

      <button
        onClick={handleSeeAll}
        className="text-primary text-sm font-bold hover:underline"
      >
        See All
      </button>
    </div>
  );
}
