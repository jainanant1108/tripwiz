import tripApi from "./api";

export const getUserDetails = async (userId) => {
  const tripUrl = `/users`;
  const response = await tripApi.post(`${tripUrl}`, userId);

  return JSON.parse(response?.data?.user);
};
