export default function SectionHeader({ rowheader }) {
  const getIcon = () => {
    switch (rowheader) {
      case "Trending Now":
        return "trending_up";
      case "Popular Movies":
        return "local_fire_department";
      case "Top Rated":
        return "award_star";
      case "Upcoming Movies":
        return "event";
      case "More Like This":
        return "new_releases";
      default:
        return "movie";
    }
  };

  return (
    <div className="flex items-center justify-between pr-6 md:pr-12 ml-6">
      <h2 className="text-xl font-bold text-white flex items-center gap-2">
        <span className="material-symbols-outlined text-primary">
          {getIcon()}
        </span>
        {rowheader}
      </h2>
      <a className="text-primary text-sm font-bold hover:underline" href="#">
        See All
      </a>
    </div>
  );
}
