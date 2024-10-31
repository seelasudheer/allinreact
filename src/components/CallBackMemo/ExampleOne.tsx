import React from "react";

type MyComponentProps = {
  passMessage: (msg: any) => void;
  incrementSalary: () => void;
};

const ExampleOne: React.FC<MyComponentProps> = React.memo(({ passMessage, incrementSalary }) => {
  return (
    <div>
      <button onClick={incrementSalary}>ExampleOne</button>
      <button onClick={() => passMessage(Math.round(Math.random() * 1000) + "Hot")}>Pass One</button>
    </div>
  );
});

export default ExampleOne;
