import React from "react";
import { connect } from "react-redux";
import Rows from "../Components/Rows";

const Home = (props) => {
  const getCityRows = () => {
    return props.cities.map((city, index) => (
      <Rows
      className="btn btn--blue-20 row"
        createLink={true}
        link={`/city/${city}`}
        key={index}
        firstElement={city}
      />
    ));
  };

  return (
    <div className="card">
      <div className="title">Cities</div>
      <div>
      {getCityRows()}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { cities: state.cities };
};

export default connect(mapStateToProps)(Home);
