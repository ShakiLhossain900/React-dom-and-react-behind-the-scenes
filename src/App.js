import { useState } from "react";
import "./App.css";
import Button from "./components/UI/Button/Button";
function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  const toggleParagraphHandler = () => {
    setShowParagraph((shakil) => !shakil);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p>this is new</p>}
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
