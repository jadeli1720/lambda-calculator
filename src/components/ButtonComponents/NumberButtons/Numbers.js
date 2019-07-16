import React, {useState} from "react";
//import any components needed
import { numbers } from '../../../data';
//Import your array data to from the provided data file
import NumberButton from './NumberButton';

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers);
  return (
    <div className = "numbers-container">
        
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component */
       numberState.map((props) => NumberButton(props))
      };
    </div>
  );
};

export default Numbers;

// {useState}