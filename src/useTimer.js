import { useState, useRef } from "react";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(ini);
  const active = useRef();
  const refInterval = useRef(null);

  const startTimer = () => {
    refInterval.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    active.current.disabled = true;
  };
  const stopTimer = () => {
    clearInterval(refInterval.current);
    active.current.disabled = false;
  };
  const resetTimer = () => {
    stopTimer();
    setTime(0);
    active.current.disabled = false;
  };

  return { time, startTimer, stopTimer, resetTimer, active };
};
export default useTimer;
