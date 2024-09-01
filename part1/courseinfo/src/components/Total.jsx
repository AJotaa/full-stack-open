export const Total = ({data}) => {
  const { exercises1, exercises2, exercises3 } = data;
  return <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>;
};
