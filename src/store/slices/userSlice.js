import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uid: null,
  username: null,
  displayname: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUID: (state, action) => {
      state.uid = action.payload;
    },
    setUser: (state, action) => {
      state.uid = action.payload.uid;
      state.username = action.payload.username;
      state.displayName = action.payload.displayName;
    },
    resetUser: (state, action) => {
      state.uid = initialState.uid;
      state.username = initialState.username;
      state.displayname = initialState.displayname;
    },
  },
});

export const { setUID, resetUser, setUser } = userSlice.actions;
export default userSlice.reducer;
