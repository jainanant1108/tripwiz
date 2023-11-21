import Approuter from "./Approuter";
import "./App.css";
import { Header, Footer } from "./components";
import { useTheme } from "@mui/material";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  const theme = useTheme();

  return (
    <>
      <div
        className="main"
        style={{
          background: "linear-gradient(122deg, #F6F6F6 0%, #F2F3FF 95.15%);",
        }}
      >
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Approuter />
          </PersistGate>
        </Provider>
      </div>
      <Footer id="footer" />
    </>
  );
}

export default App;
