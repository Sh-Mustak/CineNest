export const createWatchTabs = (movieDetails) =>
  [
    {
      id: "info",
      label: "Info",
    },

    movieDetails?.seasons?.length > 0 && {
      id: "episodes",
      label: "Episodes",
    },
    movieDetails?.recommendations?.results?.length > 0 && {
      id: "similar",
      label: "Similar",
    },

    movieDetails?.videos?.results?.length > 0 && {
      id: "trailers",
      label: "Trailers",
    },

    movieDetails?.reviews?.results?.length > 0 && {
      id: "reviews",
      label: "Reviews",
    },
  ].filter(Boolean);
