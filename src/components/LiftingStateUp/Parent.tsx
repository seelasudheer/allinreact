import React, { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

const Parent = () => {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h4>Lifting state up </h4>
      <Child1 incrementCounter={incrementCounter} counter={counter} />
      <p>===================</p>
      <Child2 incrementCounter={incrementCounter} counter={counter} />
    </div>
  );
};

export default Parent;
