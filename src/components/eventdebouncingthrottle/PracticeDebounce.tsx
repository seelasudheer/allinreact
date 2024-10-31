import React, { useState, useCallback, useEffect } from "react";

function debounce(cb: any) {
  let timerId: any;
  return () => {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(() => {
      cb();
      console.log("Called", timerId);
    }, 5000);
  };
}
function throttle(cb: any) {
  let status = true;
  return () => {
    if (status) cb();
    status = false;

    setTimeout(() => {
      status = true;
    }, 5000);
  };
}
const PracticeDebounce = () => {
  const [counter, setCounter] = useState(0);
  const [luckyNum, setLuckyNum] = useState(0);
  const incrementCounter = () => {
    setCounter(counter + 1);
    console.log("called");
  };
  const incrementLucky = () => {
    setLuckyNum(luckyNum + 1);
    console.log("luckyyyyyyy");
  };
  // useEffect(() => {
  //   console.log(counter, "counter");
  // }, [counter]);
  const enhancedCallback = useCallback(debounce(incrementCounter), []);
  const enhancedThrottle = useCallback(throttle(incrementLucky), []);
  return (
    <div>
      <button onClick={enhancedCallback}>Click Debounce - {counter}</button>
      <button onClick={enhancedThrottle}>Click Throttle - {luckyNum}</button>
    </div>
  );
};

export default PracticeDebounce;
