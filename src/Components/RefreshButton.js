import React from "react";
import { connect } from "react-redux";
import { refreshAll } from "../actions";
const RefreshButton = (props) => {
  const handleClick = () => {
    props.refreshAll();
  };
  return (
    <button className="darken-button" onClick={handleClick}>
      Refresh
    </button>
  );
};

export default connect(null, { refreshAll })(RefreshButton);
