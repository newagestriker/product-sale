import React, { useEffect } from "react";
import { connect } from "react-redux";
import Rows from "../Components/Rows";
import { incrementProductVisited } from "../actions";

const Product = (props) => {
  useEffect(() => {
    props.incrementProductVisited();
  }, []);
  const getCityRows = () => {
    const matchingCities = [];
    for (let city in props.productPerCity) {
      props.productPerCity[city].forEach((element, index) => {
        const key = Object.keys(element)[0];
        if (key === props.productName) {
          matchingCities.push(
            <li className="list" key={city}>
              <div className="text-divs">{city}</div>
              <div className="text-divs">{element[key]}</div>
            </li>
          ); //<Rows key={city} firstElement={city} />
        }
      });
    }
    return matchingCities;
  };

  return (
    <div className="card">
      <div className="title title--city">
        Cities containing {props.productName}
      </div>
      <div className="title title--city">
        <div className="text-divs">City</div>
        <div className="text-divs">No of Sales</div>
      </div>
      <ul>{getCityRows()}</ul>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { productPerCity: state.productPerCity };
};

export default connect(mapStateToProps, { incrementProductVisited })(Product);
