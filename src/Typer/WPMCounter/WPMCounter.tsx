import React from "react";

type WPMCounterProps = {
  mistakes: number;
  startTime: number;
  lastInputTime: number;
  endTime: number;
  note: string;
};

export const WPMCounter: React.FC<WPMCounterProps> = ({
  mistakes,
  startTime,
  lastInputTime,
  endTime,
  note,
}) => {
  const countTime = endTime === 0 ? lastInputTime : endTime;
  const WPM =
    ((note.length / ((countTime - startTime) / 1000)) * 60) / 5.1 -
    mistakes * 5.1;

  return <span>{WPM > 0 ? WPM.toFixed(2) : 0}</span>;
};
