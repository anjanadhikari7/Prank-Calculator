export const getRandomNumber = () => {
  const randomNumber = Math.round(Math.random() * 10);

  return randomNumber <= 3 ? randomNumber : 0;
};
