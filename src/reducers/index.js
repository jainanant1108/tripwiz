// @ts-ignore
import { combineReducers } from "redux";
// @ts-ignore
import userReducer from "./user"; // Import your user reducer

const rootReducer = combineReducers({
  user: userReducer, // Add other reducers here
});

export default rootReducer;
