import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trip: null,
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
  },
});

export const { setTrip, setDates } = tripSlice.actions;
export default tripSlice.reducer;
