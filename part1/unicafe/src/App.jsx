import { useState } from "react";
import { Header } from "./components/Header";
import { Statistics } from "./components/Statistics";

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => setGood((prev) => prev + 1);
  const handleNeutral = () => setNeutral((prev) => prev + 1);
  const handleBad = () => setBad((prev) => prev + 1);

  return (
    <div>
      <Header
        handleGood={handleGood}
        handleNeutral={handleNeutral}
        handleBad={handleBad}
      />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
