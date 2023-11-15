import "@fontsource/poppins/100.css";
import "@fontsource/poppins/200.css";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";
import "@fontsource/recursive";
import "@fontsource/recursive/400.css";
import { ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import theme from "./utils/theme/theme";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers"; // Create this file
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPKBTlohuOXARS56ARA3xLSrJwbyfJUn0",
  authDomain: "tripwiz-r.firebaseapp.com",
  databaseURL: "https://tripwiz-r-default-rtdb.firebaseio.com",
  projectId: "tripwiz-r",
  storageBucket: "tripwiz-r.appspot.com",
  messagingSenderId: "358069767776",
  appId: "1:358069767776:web:e399bacd43bbd420ca7d05",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = createStore(
  rootReducer,
  applyMiddleware(/* any middleware you need */)
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
