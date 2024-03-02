import axios from "axios";

const tripApi = axios.create({
  baseURL: "https://trip-wiz-service.onrender.com",
  //baseURL: "http://10.0.0.75:10000",
});

tripApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    return Promise.reject(error);
  }
);

export default tripApi;
