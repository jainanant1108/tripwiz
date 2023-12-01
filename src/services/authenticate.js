import tripApi from "./api";

export const signupUser = async (user) => {
  const tripUrl = `authenticate/signup`;
  const response = await tripApi.post(`${tripUrl}`, user);

  return response?.data;
};

export const loginUser = async (user) => {
  const tripUrl = `authenticate/login`;
  const response = await tripApi.post(`${tripUrl}`, user);

  return response?.data;
};
