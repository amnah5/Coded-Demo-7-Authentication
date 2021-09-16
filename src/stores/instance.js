import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://demo-7-authentication-be.herokuapp.com',
});

export default instance;
