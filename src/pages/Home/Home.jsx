import React from "react";
import { Header } from "../../components";
import "./Home.css";
import { Grid, Typography, useTheme } from "@mui/material";
import Footer from "../../components/Footer/Footer";

function Home() {
  const theme = useTheme();
  return <div id="homePage">
    <Header />
    <div id="wipWrapper">
      <Typography
        fontWeight={600}
        fontFamily={"Poppins"}
        fontSize={theme.spacing(9)}
      >
        Work in progress
      </Typography>
    </div>
    <Footer id="footer" />
  </div>;
}

export default Home;
