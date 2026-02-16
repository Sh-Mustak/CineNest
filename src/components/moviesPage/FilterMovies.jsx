export default function FilterMovies() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 mb-10 glass rounded-2xl border border-white/5">
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold uppercase tracking-widest text-slate-500 px-1">
          Genre
        </label>
        <div className="relative">
          <select className="w-full bg-white/5 border-white/10 rounded-lg text-sm text-white focus:ring-primary focus:border-primary appearance-none py-2.5">
            <option>All Genres</option>
            <option>Action</option>
            <option>Sci-Fi</option>
            <option>Drama</option>
            <option>Thriller</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold uppercase tracking-widest text-slate-500 px-1">
          Release Year
        </label>
        <select className="w-full bg-white/5 border-white/10 rounded-lg text-sm text-white focus:ring-primary focus:border-primary py-2.5">
          <option>Any Year</option>
          <option>2024</option>
          <option>2023</option>
          <option>2020-2022</option>
          <option>2010s</option>
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold uppercase tracking-widest text-slate-500 px-1">
          Rating
        </label>
        <select className="w-full bg-white/5 border-white/10 rounded-lg text-sm text-white focus:ring-primary focus:border-primary py-2.5">
          <option>All Ratings</option>
          <option>8.0+</option>
          <option>7.0+</option>
          <option>6.0+</option>
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold uppercase tracking-widest text-slate-500 px-1">
          Sort By
        </label>
        <select className="w-full bg-white/5 border-white/10 rounded-lg text-sm text-white focus:ring-primary focus:border-primary py-2.5">
          <option>Popularity</option>
          <option>Newest</option>
          <option>Oldest</option>
          <option>Box Office</option>
        </select>
      </div>
    </div>
  );
}
