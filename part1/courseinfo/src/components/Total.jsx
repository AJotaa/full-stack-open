export const Total = ({ parts }) => {
  const totalValue = parts.reduce((acc, curr) => acc + curr.exercises, 0);
  return <p>Number of exercises {totalValue}</p>;
};
