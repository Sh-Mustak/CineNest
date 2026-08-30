const ProfileStats = ({
  watchlistCount = 0,
  favoritesCount = 0,
  historyCount = 0,
}) => {
  const stats = [
    {
      label: "Watchlist",
      value: watchlistCount,
      icon: "bookmark",
    },
    {
      label: "Favorites",
      value: favoritesCount,
      icon: "favorite",
    },
    {
      label: "Watched",
      value: historyCount,
      icon: "history",
    },
  ];

  return (
    <div className="mt-8 grid grid-cols-3 gap-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4 text-center"
        >
          <span className="material-symbols-outlined text-primary">
            {stat.icon}
          </span>

          <p className="mt-2 text-xl font-bold text-white">
            {stat.value}
          </p>

          <p className="mt-1 text-xs text-zinc-500">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProfileStats;