export const isNewEpisode = (airDate) => {
  if (!airDate) return false;

  const today = new Date();
  const releaseDate = new Date(airDate);

  const diffTime = today - releaseDate;
  const diffDays = diffTime / (1000 * 60 * 60 * 24);

  return diffDays <= 7;
};
 