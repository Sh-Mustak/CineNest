export default function SearchMovies() {
  return (
    <div className="relative w-full md:w-64">
      <input
        type="text"
        id="searchInput"
        placeholder="Search movies..."
        className="w-full bg-black bg-opacity-50 text-white text-sm px-3 md:px-4 py-2 rounded border border-gray-600 focus:outline-none focus:border-red-600 transition-colors duration-200 placeholder-gray-400"
      />
      <svg
        className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );
}
