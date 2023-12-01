import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  lat: "",
  lng: "",
  startDate: "",
  endDate: "",
  tripType: "",
};

const tripSlice = createSlice({
  name: "trip",
  initialState,
  reducers: {
    setTrip: (state, action) => {
      state.name = action.payload.name;
      state.lat = action.payload.lat;
      state.lng = action.payload.lng;
    },
    setDates: (state, action) => {
      state.startDate = action.payload.startDate;
      state.endDate = action.payload.endDate;
    },
    setTripPurpose: (state, action) => {
      state.tripType = action.payload.tripType;
    },
    resetTrip: (state) => {
      state.name = initialState.name;
      state.lat = initialState.lat;
      state.lng = initialState.lng;
      state.tripType = initialState.tripType;
      state.startDate = initialState.startDate;
      state.endDate = initialState.endDate;
    },
  },
});

export const { setTrip, setDates, setTripPurpose, resetTrip } =
  tripSlice.actions;
export default tripSlice.reducer;
