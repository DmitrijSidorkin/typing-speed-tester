import { useEffect, useState } from "react";
import "./App.css";
import { Typer } from "./Typer/Typer";
import paragraphs from "./paragraphs.tsx";

function App() {
  const [testText, setTestText] = useState<string>("");
  useEffect(() => {
    setTestText(paragraphs[Math.floor(Math.random() * paragraphs.length)]);
  }, []);
  return (
    <>
      <Typer testText={testText} setTestText={setTestText} />
    </>
  );
}

export default App;
