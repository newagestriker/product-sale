import React, { useEffect } from "react";
import { connect } from "react-redux";
import Rows from "../Components/Rows";
import { incrementCityVisited } from "../actions";

const City = (props) => {
  useEffect(() => {
    props.incrementCityVisited();
  }, []);

  const getProductRows = () => {
    return props.productPerCity?.[props.cityName]?.map((product, index) => {
      const key = Object.keys(product)[0];

      return (
        <Rows
          className="darken-button darken-button--link"
          createLink={true}
          link={`/product/${key}`}
          key={index}
          firstElement={key}
          secondElement={product[key]}
        />
      );
    });
  };
  return (
    <div className="card">
      <div className="title title">{props.cityName}</div>
      <div className="title title--city">
        <div className="text-divs">Product Name</div>
        <div className="text-divs">No of Sales</div>
      </div>

      <div>{getProductRows()}</div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    productPerCity: state.productPerCity,
  };
};

export default connect(mapStateToProps, { incrementCityVisited })(City);
