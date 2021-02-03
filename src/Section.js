import { useState } from "react";
import IncrementButton from "./Buttons/IncrementButton";
import DecrementButton from "./Buttons/DecrementButton";
import ResetButton from "./Buttons/ResetButton";

const Counter = (propos) => {
  const [counter, setState] = useState(1);

  return (
    <div className="section">
      <div className="operations">
        <DecrementButton counter={counter} setState={setState} />
        <div className="counter">{counter}</div>
        <IncrementButton counter={counter} setState={setState} />
      </div>
      <ResetButton counter={counter} setState={setState} />
    </div>
  );
};

export default Counter;
