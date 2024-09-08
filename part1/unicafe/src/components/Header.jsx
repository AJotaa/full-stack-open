import { Button } from "./Button";

export const Header = ({ handleGood, handleNeutral, handleBad }) => (
  <div>
    <h1>Give Feedback</h1>
    <div>
      <Button onClick={handleGood} text="good" />
      <Button onClick={handleNeutral} text="neutral" />
      <Button onClick={handleBad} text="bad" />
    </div>
  </div>
);
