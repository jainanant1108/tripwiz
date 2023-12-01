import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itinerary: null,
};

const itinerarySlice = createSlice({
  name: "itinerary",
  initialState,
  reducers: {
    setItinerary: (state, action) => {
      state.itinerary = action.payload;
    },
    resetItinerary: (state) => {
      state.itinerary = initialState.itinerary;
    },
  },
});

export const { setItinerary, resetItinerary } = itinerarySlice.actions;
export default itinerarySlice.reducer;
