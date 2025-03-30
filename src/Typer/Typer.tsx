import React, { useState } from "react";
import { TyperInput } from "./TyperInput/TyperInput";
import { Timer } from "./Timer/Timer";
import { WPMCounter } from "./WPMCounter/WPMCounter";
import paragraphs from "../paragraphs.tsx";

type TyperProps = {
  testText: string;
  setTestText: React.Dispatch<React.SetStateAction<string>>;
};

export const Typer: React.FC<TyperProps> = ({ testText, setTestText }) => {
  const [note, setNote] = useState<string>("");
  const [isCounting, setIsCounting] = useState<boolean>(false);
  const [startTime, setStartTime] = useState<number>(0);
  const [endTime, setEndTime] = useState<number>(0);
  const [mistakes, setMistakesCount] = useState<number>(0);
  const [lastInputTime, setLastInputTime] = useState<number>(0);
  const [time, setTime] = useState<number>(0);

  const reset = () => {
    setNote("");
    setTestText(paragraphs[Math.floor(Math.random() * paragraphs.length)]);
    setIsCounting(false);
    setStartTime(0);
    setEndTime(0);
    setMistakesCount(0);
    setLastInputTime(0);
    setTime(0);
  };

  return (
    <div className="bg-gray-600 p-10 rounded-xl">
      <TyperInput
        testText={testText}
        note={note}
        setNote={setNote}
        startTime={startTime}
        setStartTime={setStartTime}
        isCounting={isCounting}
        setIsCounting={setIsCounting}
        endTime={endTime}
        setEndTime={setEndTime}
        setMistakesCount={setMistakesCount}
        setLastInputTime={setLastInputTime}
      />
      <div className="flex flex-col">
        <div className="flex text-2xl justify-between">
          <p className="select-none grow-1 self-center">
            WPM:{" "}
            <WPMCounter
              mistakes={mistakes}
              startTime={startTime}
              lastInputTime={lastInputTime}
              endTime={endTime}
              note={note}
            />
          </p>
          <p className="select-none grow-1 self-center">
            Time:{" "}
            <Timer
              isCounting={isCounting}
              setLastInputTime={setLastInputTime}
              endTime={endTime}
              startTime={startTime}
              time={time}
              setTime={setTime}
            />
          </p>
        </div>
        <button
          className="size-fit self-center mt-5 max-w-60 w-full"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
