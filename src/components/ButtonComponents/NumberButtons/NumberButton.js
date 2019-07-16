import React from "react";
import Numbers from "./Numbers"

const NumberButton = (props) => {
  return (
    <button onClick={() => setDisplayNum(props)} className="number-buttons">
      {/* Display a button element rendering the data being passed down from the parent container on props */props}
    </button>
  );
};

export default NumberButton;