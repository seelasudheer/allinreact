import React, { useRef } from "react";
import ChildRef from "./ChildRef";
interface ChildRefHandle {
  focusInput: () => void;
}
const ParentRef = () => {
  const componentRef = useRef<ChildRefHandle>(null);
  const inputParentRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    console.log("logged", componentRef);
    if (componentRef?.current) componentRef?.current?.focusInput();
  };

  const focusParentInput = () => {
    inputParentRef.current?.focus();
  };
  return (
    <div>
      <ChildRef ref={componentRef} />
      <input type="text" ref={inputParentRef} />
      <button onClick={handleClick}>Click Me To Focus Child Input</button>
    </div>
  );
};

export default ParentRef;
