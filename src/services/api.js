import axios from "axios";

const tripApi = axios.create({
  baseURL: "http://localhost:9000",
});

tripApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    return Promise.reject(error);
  }
);

export default tripApi;
