import React from "react";

const Child1 = ({ incrementCounter, counter }: any) => {
  return (
    <div>
      <button onMouseOver={() => incrementCounter(counter)}> On Hover - {counter}</button>
    </div>
  );
};

export default Child1;
