import React, { useEffect, useState } from "react";

function ProgressBar({ min, max, width, height, value, text }) {
  const [percentage, setPercentage] = useState();
  const [actualValue, setActualValue] = useState();
//STYLES
  const border = {
    position: "relative",
    backgroundColor: "grey",
    border: "1px solid black",
    width: width,
    height: height,
  };
  const progress = {
    position: "absolute",
    backgroundColor: "green",
    width: `${percentage}%`,
    height: "100%",
  };
  const innerText = {
    position: "absolute",
    margin: 0,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    fontSize: height / 2,
    zIndex: 10,
  };

//checks if value fits within min/max numbers
  const validateValue = () => {
    value > max
      ? setActualValue(max)
      : value < min
      ? setActualValue(min)
      : setActualValue(value);
  };

// calculates % of progress which is used to set CSS
  const getValuePercentage = () => {
    setPercentage(((actualValue - min) * 100) / (max - min));
  };
  
// runs after every rerender to update the values
  useEffect(() => {
    validateValue();
    getValuePercentage();
  });

  return (
    <div style={border}>
      <p style={innerText}>{typeof text === 'function' ? text(actualValue, min, max) : null}</p>
      <div style={progress}></div>
    </div>
  );
}

// props used if none are passed in
ProgressBar.defaultProps = {
  min: 0,
  max: 100,
  height: "50px",
  width: "100%",
};

export default ProgressBar;
