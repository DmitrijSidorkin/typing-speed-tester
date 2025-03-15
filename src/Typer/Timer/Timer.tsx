import React, { useEffect } from "react";

type TimerProps = {
  isCounting: boolean;
  setLastInputTime: React.Dispatch<React.SetStateAction<number>>;
  startTime: number;
  endTime: number;
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
};

export const Timer: React.FC<TimerProps> = ({
  isCounting,
  setLastInputTime,
  startTime,
  endTime,
  time,
  setTime,
}) => {
  useEffect(() => {
    let intervalId = null;

    if (isCounting) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
      const updatedTime = new Date().getTime();
      setLastInputTime(updatedTime);
    } else {
      if (intervalId) {
        clearInterval(intervalId);
      }
    }
    if (endTime !== 0) {
      setTime((endTime - startTime) / 1000);
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isCounting, startTime, endTime, setLastInputTime, setTime]);

  return <span>{time}</span>;
};
