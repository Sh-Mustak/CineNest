export const calculateHours = (min) => {
  const hours = Math.floor(min / 60);
  const minutes = min % 60;
  if (hours === 0) {
    return `${minutes} min`;
  } else {
    return `${hours} h ${minutes} min`;
  }
};
