export const Content = ({ parts }) => {
  return (
    <>
      {parts.map((e) => (
        <p>
          {e.name} {e.exercises}
        </p>
      ))}
    </>
  );
};
