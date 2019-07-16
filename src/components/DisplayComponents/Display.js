import React, {useState} from "react";
const Display = (props) => {

  const [displayState, setDisplayState] = useState(props)
  return <div className="display">{/* Display any props data here */props}</div>;
};
 export default Display;