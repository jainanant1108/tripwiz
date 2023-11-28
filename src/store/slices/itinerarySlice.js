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
  },
});

export const { setItinerary } = itinerarySlice.actions;
export default itinerarySlice.reducer;
