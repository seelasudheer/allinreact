import React from "react";

const Child2 = ({ incrementCounter, counter }: any) => {
  return (
    <div>
      <button onClick={() => incrementCounter(counter)}> On Click - {counter}</button>
    </div>
  );
};

export default Child2;
