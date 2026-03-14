export const createWatchTabs = (mediaDetails) =>
  [
    {
      id: "info",
      label: "Info",
    },

    mediaDetails?.seasons?.length > 0 && {
      id: "episodes",
      label: "Episodes",
    },
    mediaDetails?.recommendations?.results?.length > 0 && {
      id: "similar",
      label: "Similar",
    },

    mediaDetails?.videos?.results?.length > 0 && {
      id: "trailers",
      label: "Trailers",
    },

    mediaDetails?.reviews?.results?.length > 0 && {
      id: "reviews",
      label: "Reviews",
    },
  ].filter(Boolean);
