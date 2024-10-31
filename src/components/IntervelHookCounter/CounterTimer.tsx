import React, { useEffect, useRef, useState } from "react";

const CounterTimer = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef<NodeJS.Timeout | null>(null);
  const handleClick = () => {
    if (!countRef.current) {
      countRef.current = setInterval(() => {
        setCount((precCount) => precCount + 1);
      }, 1000);
    }
  };
  const stopCountTimer = () => {
    if (countRef.current) {
      clearInterval(countRef.current);
      countRef.current = null;
    }
  };
  useEffect(() => {
    return () => {
      if (countRef.current) {
        console.log(countRef.current, "countRef.current");
        clearInterval(countRef.current);
        countRef.current = null;
      }
    };
  }, []);
  return (
    <div>
      {count}
      <button onClick={handleClick}>Start Timer</button>
      <button onClick={stopCountTimer}>Stop Timer</button>
    </div>
  );
};

export default CounterTimer;
