import React from "react";
import { Link } from "react-router-dom";

const elementStyles = {
  minWidth: "20rem",
  display: "inline-block",
  color: "#f5f5f5",
  backgroundColor: "#3fc1c9",
  borderRadius: "0.5rem",
  padding: "1rem",
  margin: "0.5rem",
};
//params
//link,firstElement,secondElement
//
const Rows = (props) => {
  return (
    <div style={{ margin: "3rem 6rem" }}>
      {!!props.createLink ? (
        <Link className={props.className} to={props.link}>
          <div className="text-divs">{props.firstElement}</div>
          {props.secondElement && (
            <div className="text-divs">{props.secondElement}</div>
          )}
        </Link>
      ) : (
        <div className="row">
          <div style={elementStyles}>{props.firstElement}</div>
          {props.secondElement && (
            <div style={elementStyles}>{props.secondElement}</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Rows;
