import {
  RECEIVE_CITIES_DATA,
  RECEIVE_PRODUCTS_PER_CITY,
  INCREMENT_CITIES_VISITED,
  INCREMENT_PRODUCTS_VISITED,
  REFRESH_ALL_DATA,
  SET_ERROR,
  GET_UNIQUE_PRODUCTS,
} from "../actions";
import { combineReducers } from "redux";

const cities = (receivedCities = [], action) => {
  if (action.type === RECEIVE_CITIES_DATA) {
    return action.payload;
  } else if (action.type === REFRESH_ALL_DATA) {
    return [];
  }
  return receivedCities;
};

const productPerCity = (productsPerCity = {}, action) => {
  if (action.type === RECEIVE_PRODUCTS_PER_CITY) {
    const { city, product } = action.payload;
    const newProductsPerCity = { ...productsPerCity };
    newProductsPerCity[city] = productsPerCity[city] || [];
    newProductsPerCity[city].push(product);
    return newProductsPerCity;
  } else if (action.type === REFRESH_ALL_DATA) {
    return {};
  }
  return productsPerCity;
};

const products = (products = new Set(), action) => {
  if (action.type === GET_UNIQUE_PRODUCTS) {
    const newProductSet = new Set(products);
    newProductSet.add(action.payload);
    return newProductSet;
  } else if (action.type === REFRESH_ALL_DATA) {
    return new Set();
  }
  return products;
};

const visitedCityCount = (count = 0, action) => {
  if (action.type === INCREMENT_CITIES_VISITED) {
    return count + 1;
  } else if (action.type === REFRESH_ALL_DATA) {
    return 0;
  }
  return count;
};

const visitedProductCount = (count = 0, action) => {
  if (action.type === INCREMENT_PRODUCTS_VISITED) {
    return count + 1;
  } else if (action.type === REFRESH_ALL_DATA) {
    return 0;
  }
  return count;
};

const refreshCount = (count = 0, action) => {
  if (action.type === REFRESH_ALL_DATA) {
    return count + 1;
  }

  return count;
};
const error = (error = "", action) => {
  if (action.type === SET_ERROR) {
    return action.payload;
  } else if (action.type === REFRESH_ALL_DATA) {
    return "";
  }

  return error;
};
export default combineReducers({
  cities,
  productPerCity,
  visitedCityCount,
  visitedProductCount,
  refreshCount,
  error,
  products,
});
