import tripApi from "./api";

export const saveTrip = async (userId) => {
  const tripUrl = `/trip/save`;
  const response = await tripApi.post(`${tripUrl}`, userId);

  return response?.data;
};
