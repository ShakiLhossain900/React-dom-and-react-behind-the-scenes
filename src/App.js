///mainly this module need to use when i will see my application is slow
//or i need to improve my application than i may use this module to improve 


import { useState, useCallback } from "react";
import "./App.css";
import Button from "./components/UI/Button/Button";
 //import DemoOutput from "./components/UI/Button/Demo/DemoOutput";
function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log("App RUNNING");

  const toggleParagraphHandler = useCallback( () => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph); //if  i am using this setshowparagraph er vitor akta function use kore argument pass kori
    // !use korle same argument y tokhon akbar show korbe and arekbar click korle hide korbe show
    //setShowParagraph(true) // ami jodi setShowParagraph true kore dei tahole only one time shoow korbe but hide korte parbe na
  },[]);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {/* {showParagraph && <p>this is new</p>} */}
      {/* <DemoOutput show={false} /> */}
      <p>{showParagraph ? 'this is new!' : ''}</p>
      <Button buttonOnClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;


