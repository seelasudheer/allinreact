import React, { useMemo, useState } from "react";

const UseMemoComponent = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);
  const incrementCounterOne = () => {
    setCounterOne(counterOne + 1);
  };
  const incrementCounterTwo = () => {
    setCounterTwo(counterTwo + 1);
  };
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return counterOne % 2 == 0 ? "even" : "odd";
  }, [counterOne]);
  return (
    <div>
      <button onClick={incrementCounterOne}>
        Counter 1 - {counterOne} - {isEven}
      </button>
      <br />
      <br />
      <button onClick={incrementCounterTwo}>Counter 2 -{counterTwo}</button>
    </div>
  );
};

export default UseMemoComponent;
