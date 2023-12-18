import Approuter from "./Approuter";
import "./App.css";
import { Header, Footer, Popup } from "./components";
import { useTheme } from "@mui/material";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import { ping } from "./services";
import { useEffect, useState } from "react";

function App() {
  const theme = useTheme();
  const [isServerOnline, setIsServerOnline] = useState(true);
  const checkServerStatus = async () => {
    try {
      await ping();
      setIsServerOnline(true);
    } catch (error) {
      setIsServerOnline(false);
    }
  };
  useEffect(() => {
    checkServerStatus();
  }, [5000]);
  return (
    <>
      <div
        className="main"
        style={{
          backgroundColor:
            "linear-gradient(122deg, #F6F6F6 0%, #F2F3FF 95.15%)",
        }}
      >
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Approuter />
          </PersistGate>
        </Provider>
      </div>
      <Footer id="footer" />
      <Popup isPopupVisible={!isServerOnline} />
    </>
  );
}

export default App;
