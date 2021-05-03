import "./App.css";
import React from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import City from "./Pages/City";
import NotFound from "./Pages/404Notfound";

import getCities from "./Helper/ApiCalls/CitiesApi";
import getProducts from "./Helper/ApiCalls/ProductsApi";
import { connect } from "react-redux";
import {
  receiveCitiesData,
  receiveProductsPerCity,
  setError,
  getUniqueProducts,
} from "./actions";
import Products from "./Pages/Products";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const App = (props) => {
  useEffect(() => {
    let mount = true;
    getCities()
      .then((response) => {
        if (mount) {
          props.receiveCitiesData(response.data.data);
          response.data.data.forEach((city) => {
            getProducts(city)
              .then((response) => {
                const products = response.data.data;
                for (let product in products) {
                  props.getUniqueProducts(product);
                  props.receiveProductsPerCity(city, {
                    [product]: products[product],
                  });
                }
              })
              .catch((e) => props.setError("Some Error occurred!!"));
          });
        }
      })
      .catch((e) => props.setError("Some Error occurred!!"));
    return () => {
      mount = false;
    };
  }, [props.refreshCount]);

  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route
            exact
            path="/city/:cityName"
            render={({ match }) => {
              return props.cities.indexOf(match.params.cityName) === -1 ? (
                <NotFound />
              ) : (
                <City cityName={match.params.cityName} />
              );
            }}
          />
          <Route
            exact
            path="/product/:productName"
            render={({ match }) => {
              return props.products.has(match.params.productName) ? (
                <Products productName={match.params.productName} />
              ) : (
                <NotFound />
              );
            }}
          />
          <Route path="">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    refreshCount: state.refreshCount,
    cities: state.cities,
    products: state.products,
  };
};

export default connect(mapStateToProps, {
  receiveCitiesData,
  receiveProductsPerCity,
  setError,
  getUniqueProducts,
})(App);
