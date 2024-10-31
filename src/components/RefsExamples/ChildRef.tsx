import React, { useRef, forwardRef, useImperativeHandle } from "react";

const ChildRef = forwardRef((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const focusInput = () => {
    inputRef.current?.focus();
  };
  useImperativeHandle(ref, () => ({
    focusInput: focusInput,
  }));
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          console.log(ref);
        }}
      >
        Click Me To Focus Parent Input
      </button>
    </div>
  );
});

export default ChildRef;
