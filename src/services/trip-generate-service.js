import tripApi from "./api";

export const generateTrip = async (trip) => {
  const tripUrl = `/trip`;
  const response = await tripApi.post(`${tripUrl}`, trip);

  return response?.data;
};

export const ping = async () => {
  const pingUrl = "/ping";
  try {
    const response = await tripApi.get(`${pingUrl}`);
    return response?.data;
  }
  catch(err){
    
    console.log("trip-generate-service.js : ping : ", err);
    return {message: "server inactive.."};
  }
};
