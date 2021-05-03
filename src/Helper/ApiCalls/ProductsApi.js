import axios from "axios";

export const getProducts = (cityName) => {
  return axios.get(`https://assessments.reliscore.com/api/sales/${cityName}/`);
};

export default getProducts;
