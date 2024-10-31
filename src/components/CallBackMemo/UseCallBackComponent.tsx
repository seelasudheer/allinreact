import React, { useCallback, useState } from "react";
import ExampleOne from "./ExampleOne";
import ExampleTwo from "./ExampleTwo";

const UseCallBackComponent = () => {
  const [message, setMessage] = useState("");
  const [salary, setSalary] = useState(0);
  const [amount, setAmount] = useState(0);
  const passMessage = useCallback((msg: any): void => {
    setMessage(msg);
  }, []);
  const incrementSalary = useCallback(() => {
    setSalary(salary + Math.round(Math.random() * 1000));
  }, [salary]);
  const incrementAmount = useCallback(() => {
    setAmount(amount + Math.round(Math.random() * 10));
  }, [amount]);

  // const enhancedPassMessage = useCallback(passMessage, []);
  return (
    <div>
      UseCallBackComponent -{message}
      <p>Amount - {amount}</p>
      <p>Salary - {salary}</p>
      <ExampleOne passMessage={passMessage} incrementSalary={incrementSalary} />
      <ExampleTwo passMessage={passMessage} incrementAmount={incrementAmount} />
    </div>
  );
};

export default UseCallBackComponent;
