import React from "react";
import { connect } from "react-redux";
const Footer = (props) => {
  return (
    <footer style={{ textAlign: "center", fontSize: "xx-large" }}>
      {props.error}
    </footer>
  );
};
const mapStateToProps = (state) => ({
  error: state.error,
});
export default connect(mapStateToProps)(Footer);
