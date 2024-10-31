import React from "react";
import HOCComponent from "./HOCComponent";

const HoverCounter: React.FC = ({ incrementCounter, counterValue }: any) => {
  return (
    <div>
      <button onMouseOver={incrementCounter}> On Hover - {counterValue}</button>
    </div>
  );
};

export default HOCComponent(HoverCounter);
