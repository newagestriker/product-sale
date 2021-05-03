import React from "react";

const Counter = (props) => {
 
  return (
    <div className="light-text" style={{ display: "inline-block" }}>
      {props.name} {props.count}
    </div>
  );
};



export default Counter;
