import React from "react";
import Counter from "./Counter";
import { connect } from "react-redux";
import RefreshButton from "./RefreshButton";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="hdr">
      <div>
        <Counter name="Cities" count={props.visitedCityCount} />
        <Counter name="Products" count={props.visitedProductCount} />
      </div>

      <div style={{ marginLeft: "1rem" }}>
        <RefreshButton />
      </div>
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "#e8ffff",
          fontSize: "large",
          margin: "1rem",
        }}
      >
        Home
      </Link>
    </header>
  );
};

const mapStateToProps = (state) => ({
  visitedCityCount: state.visitedCityCount,
  visitedProductCount: state.visitedProductCount,
});

export default connect(mapStateToProps)(Header);
