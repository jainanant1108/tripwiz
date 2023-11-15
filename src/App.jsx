import Approuter from "./Approuter";
import "./App.css";
import { Header, Footer } from "./components";
import { useTheme } from "@mui/material";

function App() {
  const theme = useTheme();

  return (
    <>
      <div
        className="main"
        style={{ background: theme.palette.secondary.main }}
      >
        <div className="container">
          <Approuter />
        </div>
      </div>
      <Footer id="footer" />
    </>
  );
}

export default App;
