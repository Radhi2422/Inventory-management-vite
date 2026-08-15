import axios from "axios";
 const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;
     
const api = axios.create({
  baseURL: `${VITE_BASE_URL}`
});
console.log("API base URL:", api);

export default api;