import { Content } from "./components/Content ";
import { Header } from "./components/Header";
import { Total } from "./components/Total";

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  const data = {
    part1,
    exercises1,
    part2,
    exercises2,
    part3,
    exercises3,
  };

  return (
    <div>
      <Header course={course} />
      <Content data={data} />
      <Total data={data} />
    </div>
  );
};

export default App;
