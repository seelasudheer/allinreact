import React from "react";

type MyComponentProps = {
  passMessage: (msg: any) => void;
  incrementAmount: () => void;
};

const ExampleTwo: React.FC<MyComponentProps> = React.memo(({ passMessage, incrementAmount }) => {
  return (
    <div>
      <button onClick={incrementAmount}>ExampleTwo</button>
      <button onClick={() => passMessage(Math.round(Math.random() * 100) + "cool")}>Pass Two</button>
    </div>
  );
});

export default ExampleTwo;
