import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import userReducer from "./slices/userSlice";
import tripReducer from "./slices/tripSlice";
import itineraryReducer from "./slices/itinerarySlice";

const tripPersistConfig = {
  key: "trip",
  storage,
};

const userPersistConfig = {
  key: "user",
  storage,
};

const itineraryPersistConfig = {
  key: "itinerary",
  storage,
};

export const rootReducer = combineReducers({
  trip: persistReducer(tripPersistConfig, tripReducer),
  user: persistReducer(userPersistConfig, userReducer),
  itinerary: persistReducer(itineraryPersistConfig, itineraryReducer),
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
