export default function SectionHeader() {
  return (
    <div className="flex items-center justify-between pr-6 md:pr-12 pl-10">
      <h2 className="text-2xl font-bold text-white flex items-center gap-2">
        <span className="material-symbols-outlined text-primary">
          trending_up
        </span>
        Trending Now
      </h2>
      <a className="text-primary text-sm font-bold hover:underline" href="#">
        See All
      </a>
    </div>
  );
}
