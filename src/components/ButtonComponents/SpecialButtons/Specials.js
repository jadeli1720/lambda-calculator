import React from "react";

//import any components needed
// import { specials } from '../../../data';//moved to App.js
//Import your array data to from the provided data file
import SpecialButton from './SpecialButton';

const Specials = (props) => {
  // STEP 2 - add the imported data to state
  const {specialState, setSpecialState} = props;
 
  return (
    <div className = "specials-container">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       specialState.map((props) => SpecialButton(props))
       }
    </div>
  );
};

export default Specials;