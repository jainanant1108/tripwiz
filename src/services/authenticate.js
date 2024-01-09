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

export const logoutUser = async (user) => {
  const tripUrl = `authenticate/logout`;
  const response = await tripApi.post(`${tripUrl}`, user);

  return response?.data;
};

export const isUserLoggedIn = async (userId) => {
  const tripUrl = `authenticate`;
  const response = await tripApi.post(`${tripUrl}`, { uid: userId });
  if (response?.data?.error) {
    return false;
  }
  return response?.data;
};

export const googleLogin = async (user) => {
  const tripUrl = `authenticate/google`;
  const response = await tripApi.post(`${tripUrl}`, user);

  return response?.data;
};
