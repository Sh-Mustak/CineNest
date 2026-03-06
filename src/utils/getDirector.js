export const getDirector = function (movieDetails) {
  const director = movieDetails?.credits?.crew?.find(
    (person) => person.job === "Director"
  );
  return director?.name || "N/A"
};
