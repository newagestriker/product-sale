import axios from "axios";

export const getCities = () => {
  return axios.get("https://assessments.reliscore.com/api/cities/");
};

export default getCities;
