import { StatisticLine } from "./StatisticLine";

export const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const avg = (good - bad) / total;
  const positive = (good / total) * 100;

  return (
    <div>
      <h2>Statistics</h2>
      {total === 0 ? (
        <div>
          <p>No Feedback Given</p>
        </div>
      ) : (
        <table>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={total} />
            <StatisticLine text="average" value={avg} />
            <StatisticLine text="positive" value={positive + " %"} />
          </tbody>
        </table>
      )}
    </div>
  );
};
