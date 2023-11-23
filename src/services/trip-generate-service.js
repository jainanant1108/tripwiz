import tripApi from "./api";

export const generateTrip = async (trip) => {
  const tripUrl = `/trip`;
  const response = await tripApi.post(`${tripUrl}`, trip);

  return response?.data;
};
