const useRatings = (stars) => {
  const starPercentage = (stars / 5) * 100;

  const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

  return starPercentageRounded;
};

export default useRatings;
