import React, { useState, useEffect } from "react";

const useDebouncedValue = (value: string, delay: number) => {
  const [searchTerm, setSearchTerm] = useState(value);
  useEffect(() => {
    let timeRef = setTimeout(() => {
      setSearchTerm(value);
      console.log("called");
    }, 3000);
    return () => {
      clearTimeout(timeRef);
    };
  }, [value]);
  return searchTerm;
};

const InputDebounceCustomHook = () => {
  const [fname, setFname] = useState("");
  const memoziedHandleChnage = useDebouncedValue(fname, 2000);
  console.log(memoziedHandleChnage, "memoziedHandleChnage");

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <input type="text" name="fname" value={fname} onChange={(e) => setFname(e.target.value)} />
    </div>
  );
};

export default InputDebounceCustomHook;
