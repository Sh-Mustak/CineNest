export const getDirector = function (mediaDetails) {
  const director = mediaDetails?.credits?.crew?.find(
    (person) => person.job === "Director",
  );
  return director?.name || "N/A";
};
