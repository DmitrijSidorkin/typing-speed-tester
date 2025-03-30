import "./TyperInput.css";

type TyperInputProps = {
  testText: string;
  note: string;
  setNote: React.Dispatch<React.SetStateAction<string>>;
  startTime: number;
  setStartTime: React.Dispatch<React.SetStateAction<number>>;
  isCounting: boolean;
  setIsCounting: React.Dispatch<React.SetStateAction<boolean>>;
  endTime: number;
  setEndTime: React.Dispatch<React.SetStateAction<number>>;
  setMistakesCount: React.Dispatch<React.SetStateAction<number>>;
  setLastInputTime: React.Dispatch<React.SetStateAction<number>>;
};

export const TyperInput: React.FC<TyperInputProps> = ({
  testText,
  note,
  setNote,
  startTime,
  setStartTime,
  isCounting,
  setIsCounting,
  endTime,
  setEndTime,
  setMistakesCount,
  setLastInputTime,
}) => {
  const handleChange = (event: any) => {
    setNote(event.target.value);
    let mistakes = 0;
    for (let i = 0; i < event.target.value.length; i++) {
      if (event.target.value[i] !== testText[i]) {
        mistakes++;
      }
    }
    setMistakesCount(mistakes);
    const currentInputTime = new Date().getTime();
    setLastInputTime(currentInputTime);
    if (!isCounting) {
      setIsCounting(true);
    }
    if (startTime === 0) {
      setStartTime(new Date().getTime());
    }
    if (event.target.value.length >= testText.length) {
      setIsCounting(false);
      if (endTime === 0) {
        setEndTime(new Date().getTime());
      }
    }
  };
  return (
    <label htmlFor="testinput" className="border-amber-300">
      <div className="input-box h-fit w-full mb-10 bg-gray-800 p-5 border-2 border-neutral-400 rounded-s focus:border-amber-400">
        <p className="select-none text-justify">
          {testText.split("").map((char, index) => (
            <span
              key={index}
              className={`${index > testText.length ? "typed" : ""} ${
                index === note.length ? "current" : ""
              } ${char === note[index] ? "correct" : ""}
              ${index < note.length && char !== note[index] ? "wrong" : ""}`}
            >
              {char}
            </span>
          ))}
        </p>
      </div>
      <input
        id="testinput"
        className="sr-only "
        onChange={handleChange}
        value={note}
        autoFocus
      ></input>
    </label>
  );
};
