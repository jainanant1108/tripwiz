import axios from "axios";

const tripApi = axios.create({
  baseURL: "https://trip-wiz-service.onrender.com",
});

tripApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    return Promise.reject(error);
  }
);



export default tripApi;
