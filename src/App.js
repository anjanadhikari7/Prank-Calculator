import "./App.css";
import Button from "./components/Button";
import DisplayBox from "./components/DisplayBox";
import { useState } from "react";
import { getRandomNumber } from "./utility/getRandomNumber";
const OPERATORS = ["%", "/", "*", "-", "+"];

function App() {
  const [displayValue, setDisplayValue] = useState("");
  const [lastOperator, setLastOperator] = useState("");
  const [isPrank, setIsPrank] = useState(false);
  // FUnction to handle the butoon click
  const handleOnClick = (buttonText) => {
    //Set prank false
    setIsPrank(false);
    // Implement AC button
    if (buttonText === "AC") {
      setDisplayValue("");
      return;
    }
    // Implement C button
    if (buttonText === "C") {
      const updatedDisplayValue = displayValue.slice(0, -1);
      setDisplayValue(updatedDisplayValue);
      return;
    }

    //Implement handling the operators
    // do not allow consecutive multiple operator
    if (OPERATORS.includes(buttonText)) {
      //Dont allow some operators at the beginning of operation
      if (!displayValue || displayValue === "+" || displayValue === "-") {
        if (["%", "/", "*"].includes(buttonText)) {
          return;
        }
      }
      setLastOperator(buttonText);
      //get last character
      const lastCharacter = displayValue[displayValue.length - 1];
      console.log(lastCharacter);

      if (OPERATORS.includes(lastCharacter)) {
        // remove the last character which is existing operator
        setDisplayValue(displayValue.slice(0, -1) + buttonText);
        return;
      }
    }
    // Handle decimal issue
    if (buttonText === ".") {
      if (!lastOperator && displayValue.includes(".")) {
        return;
      }

      const lastOperatorIndex = displayValue.lastIndexOf(lastOperator);

      const lastNumberSet = displayValue.slice(lastOperatorIndex);

      if (lastNumberSet.includes(".")) {
        return;
      }
    }
    if (buttonText === "=") {
      // Eval needs a proper expression to work on
      // For that we clean last operator i.e. =
      try {
        const result = eval(displayValue);
        setDisplayValue(result);
      } catch (error) {
        const result = "ERROR!!";
        setDisplayValue(result);
      }
      // Logic for prank
      const prankValue = getRandomNumber;
      // // in JS 0 is false
      if (prankValue) {
        setIsPrank(true);
        //   prankAudio.play();
      }

      return;
    }
    setDisplayValue(String(displayValue + buttonText));
  };
  return (
    <div className="wrapper">
      <div className="calculator-container">
        <DisplayBox displayValue={displayValue} prank={isPrank} />
        <div className="flex-container">
          <Button
            buttonText="AC"
            className="ac"
            handleOnClick={handleOnClick}
          />
          <Button buttonText="C" handleOnClick={handleOnClick} />
          <Button buttonText="%" handleOnClick={handleOnClick} />
          <Button buttonText="/" handleOnClick={handleOnClick} />
        </div>
        <div className="flex-container">
          <Button buttonText="9" handleOnClick={handleOnClick} />
          <Button buttonText="8" handleOnClick={handleOnClick} />
          <Button buttonText="7" handleOnClick={handleOnClick} />
          <Button buttonText="*" handleOnClick={handleOnClick} />
        </div>
        <div className="flex-container">
          <Button buttonText="6" handleOnClick={handleOnClick} />
          <Button buttonText="5" handleOnClick={handleOnClick} />
          <Button buttonText="4" handleOnClick={handleOnClick} />
          <Button buttonText="-" handleOnClick={handleOnClick} />
        </div>
        <div className="flex-container">
          <Button buttonText="3" handleOnClick={handleOnClick} />
          <Button buttonText="2" handleOnClick={handleOnClick} />
          <Button buttonText="1" handleOnClick={handleOnClick} />
          <Button buttonText="+" handleOnClick={handleOnClick} />
        </div>
        <div className="flex-container">
          <Button buttonText="0" handleOnClick={handleOnClick} />
          <Button buttonText="." handleOnClick={handleOnClick} />
          <Button
            buttonText="="
            className="equal-button"
            handleOnClick={handleOnClick}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
