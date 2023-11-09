import React from "react";
import "./Home.css";
import { Grid, Typography, useTheme } from "@mui/material";
import HomePageImage from "../../utils/images/HomePage.png";
import HomePageSection1 from "../../utils/images/HomaPageSection1.png";
import HomePageSection2 from "../../utils/images/HomaPageSection2.png";

function Home() {
  const theme = useTheme();
  return (
    <>
      <Grid m={`${theme.spacing(5)} 0px`}>
        <Grid container justifyContent={"space-between"}>
          <Grid
            item
            container
            sm={4}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography
              fontSize={{ sm: theme.spacing(3), md: theme.spacing(12) }}
              fontWeight={700}
            >
              {"Fuel your imagined trip with "}
              <span style={{ color: theme.palette.error.main }}>{"AI"}</span>
            </Typography>
          </Grid>
          <Grid item sm={7}>
            <img src={HomePageImage} alt="" style={{ maxWidth: "100%" }} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid container sm={6} alignItems={"center"}>
            <Typography
              fontSize={{ sm: theme.spacing(3), md: theme.spacing(12) }}
              fontWeight={600}
            >
              {"The endless possibilities encompassed in "}
              <span style={{ color: theme.palette.error.main }}>{"AI "}</span>
              {"possibility"}
            </Typography>
          </Grid>
          <Grid item sm={6}>
            <img src={HomePageSection1} alt="" style={{ maxWidth: "100%" }} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item sm={6}>
            <img src={HomePageSection2} alt="" style={{ maxWidth: "100%" }} />
          </Grid>
          <Grid
            item
            container
            sm={6}
            justifyItems={"flex-end"}
            alignItems={"center"}
          >
            <Typography
              fontSize={{ sm: theme.spacing(3), md: theme.spacing(12) }}
              fontWeight={600}
              textAlign={"end"}
            >
              {"Get your camera ready for some amazing Tripping!!"}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
