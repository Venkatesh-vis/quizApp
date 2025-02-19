import { useEffect, useState } from "react";

export default function Timer({ setTime, questionNumber }) {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (timer === 0) return setTime(true);
    const interval = setInterval(() => {
      setTimer(prev => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [setTime, timer]);

  useEffect(() => {
    setTimer(30);
  }, [questionNumber]);

  return <div className="timer">{timer}</div>;
}
