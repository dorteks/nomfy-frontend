import axios from "axios";
import config from "./config";
import { getToken, removeToken } from "../utils";

const baseURL = config.server;
const axiosClient = axios.create({ baseURL });

axiosClient.interceptors.request.use((config) => {
  // Do something
  const token = getToken();
  const configInstance = { ...config };
  config.headers ? (config.headers.Authorization = `Bearer ${token}`) : "";
  return configInstance;
});

axiosClient.interceptors.request.use(
  (response) => {
    return response;
  },
  (error) => {
    // Do something
    const { response } = error;

    if (response && response.status === 403) {
      removeToken();
      return window.location.reload();
      // return (window.location.href = "/auth/login");
    }

    return Promise.reject(error);
  }
);

export default axiosClient;
