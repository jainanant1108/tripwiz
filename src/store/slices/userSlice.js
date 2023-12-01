import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uid: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUID: (state, action) => {
      state.uid = action.payload;
    },
    resetUser: (state, action) => {
      state.uid = initialState.uid;
    },
  },
});

export const { setUID, resetUser } = userSlice.actions;
export default userSlice.reducer;
