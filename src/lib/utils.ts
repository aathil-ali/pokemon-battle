export const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
export const getRandomColor = (): string => {
    const colors = ["#ff6347", "#4682b4", "#32cd32", "#ffa500", "#800080"];
    return colors[Math.floor(Math.random() * colors.length)];
};

