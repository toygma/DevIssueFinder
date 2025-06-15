import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_REACT_APP_URL}/`,
  withCredentials: true,
});

export { axiosInstance as axios };