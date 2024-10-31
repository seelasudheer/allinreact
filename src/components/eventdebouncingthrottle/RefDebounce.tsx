import React, { useCallback, useState } from "react";

// function debounce(cb: (...args: any[]) => void) {
//   let timeTracker: ReturnType<typeof setTimeout>;
//   return (...arg: any[]) => {
//     console.log(arg, "arg");
//     if (timeTracker) clearTimeout(timeTracker);
//     timeTracker = setTimeout(() => {
//       cb(...arg);
//     }, 5000);
//   };
// }
function debounce(cb: (...args: any[]) => void, delay: number) {
  let timeTracker: ReturnType<typeof setTimeout>;
  return (...args: any[]) => {
    if (timeTracker) clearTimeout(timeTracker);
    timeTracker = setTimeout(() => {
      cb(...args); // Pass the arguments to the callback
    }, delay);
  };
}
const RefDebounce = () => {
  const [random, setRandom] = useState("");
  const [count, setCount] = useState(0);
  const handleChange = (value: any) => {
    console.log(value, "value");
    setRandom((prev) => prev + value);
  };
  const handleCount = () => {
    setCount((prev) => prev + 1);
  };
  const cacheChange = useCallback(debounce(handleChange, 3000), []);
  const cacheClick = useCallback(debounce(handleCount, 3000), []);
  return (
    <div>
      <input type="text" onChange={(e) => cacheChange(e.target.value)} name="random" value={random} />
      <button onClick={cacheClick}>Count Number {count}</button>
    </div>
  );
};

export default RefDebounce;
