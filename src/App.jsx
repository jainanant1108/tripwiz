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
      await Promise.race([ping(), new Promise((_, reject) => setTimeout(() => reject('Timeout'), 3000))]);
      setIsServerOnline(true);
      console.log("server is online");
    } catch (error) {
      console.log("server is offline");
      setIsServerOnline(false);
    }
  };

  useEffect(() => {
    checkServerStatus();
      console.log("checking server status for the first time");
      console.log(isServerOnline);
      const intervalId = setInterval(() => {
        console.log("checking server status");
        if (!isServerOnline) {
        checkServerStatus();
        }
      }, 5000);
        // Cleanup function to clear the interval when the component is unmounted
  
    
  
    return () => clearInterval(intervalId);
  }, [isServerOnline]);
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
