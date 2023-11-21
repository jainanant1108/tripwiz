import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import userReducer from "./slices/userSlice";
import tripReducer from "./slices/tripSlice";

const tripPersistConfig = {
  key: "trip",
  storage,
};

export const rootReducer = combineReducers({
  trip: persistReducer(tripPersistConfig, tripReducer),
  user: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
export const persistor = persistStore(store);

export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};
