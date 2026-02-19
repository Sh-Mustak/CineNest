export default function SectionHeader({ rowheader }) {
  return (
    <div className="flex items-center justify-between pr-6 md:pr-12 ml-6">
      <h2 className="text-2xl font-bold text-white flex items-center gap-2">
        <span className="material-symbols-outlined text-primary">
          {rowheader === "Trending Now" ? "trending_up" : rowheader === "Popular Movies" ? "local_fire_department" : rowheader === "Top Rated" ? "award_star" : "new_releases"}
        </span>
        {rowheader}
      </h2>
      <a className="text-primary text-sm font-bold hover:underline" href="#">
        See All
      </a>
    </div>
  );
}
