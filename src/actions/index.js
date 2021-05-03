export const RECEIVE_CITIES_DATA = "RECEIVE_CITIES_DATA";
export const RECEIVE_PRODUCTS_PER_CITY = "RECEIVE_PRODUCTS_PER_CITY";
export const INCREMENT_CITIES_VISITED = "INCREMENT_CITIES_VISITED";
export const INCREMENT_PRODUCTS_VISITED = "INCREMENT_PRODUCTS_VISITED";
export const REFRESH_ALL_DATA = "REFRESH_ALL_DATA";
export const SET_ERROR = "SET_ERROR";
export const GET_UNIQUE_PRODUCTS = "GET_UNIQUE_PRODUCTS";

export const receiveCitiesData = (cities) => {
  return {
    type: RECEIVE_CITIES_DATA,
    payload: cities,
  };
};
export const receiveProductsPerCity = (city, product) => {
  return {
    type: RECEIVE_PRODUCTS_PER_CITY,
    payload: { city, product },
  };
};
export const getUniqueProducts = (product) => {
  return {
    type: GET_UNIQUE_PRODUCTS,
    payload: product,
  };
};
export const incrementCityVisited = () => {
  return {
    type: INCREMENT_CITIES_VISITED,
  };
};
export const incrementProductVisited = () => {
  return {
    type: INCREMENT_PRODUCTS_VISITED,
  };
};
export const refreshAll = () => {
  return {
    type: REFRESH_ALL_DATA,
  };
};
export const setError = (error) => {
  return {
    type: SET_ERROR,
    payload: error,
  };
};
