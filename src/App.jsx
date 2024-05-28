import Display from "../Components/Display";
import ButtonContainer from "../Components/ButtonContainer";
import "./App.css";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");

  const onButtonClick = (event) => {
    let buttontext = event.target.innerText;

    if (buttontext === "=") {
      setCalVal(eval(calVal));
    }

     else if (buttontext === "x") {
      const newDisplayValue = calVal + "*";
      setCalVal(newDisplayValue);
    }

     else if (buttontext === "DEL") {
      setCalVal(calVal.slice(0,-1));
    } 

    else if (buttontext === "AC") {
      setCalVal("");
    } 
    else {
      const newDisplayValue = calVal + buttontext;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <div className="calculator">
      <Display displayValue={calVal}></Display>
      <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
    </div>
  );
}

export default App;
