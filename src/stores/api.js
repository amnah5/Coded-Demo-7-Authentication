import axios from "axios";

const api = axios.create({
  baseURL: "https://demo-7-authentication-be.herokuapp.com",
});
export default api;
