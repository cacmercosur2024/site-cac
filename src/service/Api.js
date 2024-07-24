import axios from 'axios';

const Api = axios.create({
  // baseURL: 'http://localhost:3333',
  baseURL: "https://api-cac.onrender.com"
})

export default Api
