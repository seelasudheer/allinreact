import React, { useState, useCallback } from "react";
import axios from "axios";

function debounce(func: any, delay: any) {
  let timeoutId: any;
  return (...args: any) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}
function throttle(func: any, delay: any) {
  let needToWait = true;
  return (...args: any) => {
    if (needToWait) func(...args);
    needToWait = false;
    setTimeout(() => {
      needToWait = true;
    }, delay);
  };
}

const Debounce = () => {
  const [usersCheck, setUsersCheck] = useState(false);

  const fetchJsonData = async (params: any) => {
    let data = await axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => res.data);
  };

  const debouncedClick = useCallback(debounce(fetchJsonData, 1000), []);
  const throttleClick = useCallback(throttle(fetchJsonData, 5000), []);

  return (
    <div>
      <h6>Debounce</h6>
      <button onClick={debouncedClick}>Debounce Click</button>
      <button onClick={throttleClick}>Throttle Click</button>
    </div>
  );
};

export default Debounce;
