import Approuter from "./Approuter";
import "./App.css";
import { useTheme } from "@mui/material";

function App() {
  const theme = useTheme();

  return (
    <div
      className="main"
      style={{ background: theme.palette.secondary.main, height: "100vh" }}
    >
      <div className="container">
        <Approuter />
      </div>
    </div>
  );
}

export default App;
