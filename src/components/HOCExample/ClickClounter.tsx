import React from "react";
import HOCComponent from "./HOCComponent";

const ClickClounter: React.FC = ({ incrementCounter, counterValue, ...props }: any) => {
  return (
    <div>
      <button onClick={incrementCounter}> On Click - {counterValue}</button>
    </div>
  );
};

export default HOCComponent(ClickClounter);
