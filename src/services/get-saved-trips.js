import tripApi from "./api";

export const getSavedTrips = async (userId) => {
  const tripUrl = `/trip/trips`;
  const response = await tripApi.post(`${tripUrl}`, userId);

  return response?.data;
};
