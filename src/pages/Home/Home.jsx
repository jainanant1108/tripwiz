import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Button, Grid, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { geocodeByPlaceId } from "react-places-autocomplete";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PAUSE, PERSIST, PURGE, FLUSH } from "redux-persist";
import { Header, LocationSearchBar, Snackbar } from "../../components";
import { resetTrip, setTrip } from "../../store/slices";
import HomePageImage from "../../utils/images/HomePage.png";
import HomePageSection1 from "../../utils/images/HomePageSection1.png";
import HomePageSection2 from "../../utils/images/HomePageSection2.png";
import "./Home.css";
import { ping } from "../../services";

function Home() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [address, setAddress] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSelect = (address) => {
    console.log(address);
    // Fetch location details by place ID

    setSelectedLocation({
      name: address?.formatted_address,
    });
  };

  const handleGoClick = () => {
    if (selectedLocation) {
      dispatch(resetTrip());
      dispatch(setTrip(selectedLocation));
      navigate(`/${selectedLocation.name}`);
    }
  };
  // useEffect(() => {
  //   ping();
  // }, []);

  const theme = useTheme();
  return (
    <>
      <div className="container">
        <Header />
        <Grid
          container
          m={`${theme.spacing(5)} 0px`}
          gap={{ sm: "20px", md: "0px" }}
        >
          <Grid
            container
            justifyContent={"space-between"}
            gap={{ sm: "20px", md: "0px" }}
            mt={{ sm: "20px" }}
          >
            <Grid
              item
              container
              sm={12}
              md={4}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography
                fontSize={{ sm: theme.spacing(6), md: theme.spacing(12) }}
                fontWeight={700}
              >
                {"Fuel your imagined trip with "}
                <span style={{ color: theme.palette.error.main }}>{"AI"}</span>
              </Typography>
            </Grid>
            <Grid item sm={12} md={7}>
              <img src={HomePageImage} alt="" style={{ maxWidth: "100%" }} />
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent={"center"}
            mt={{ sm: "36px", md: "60px" }}
          >
            <LocationSearchBar
              address={address}
              setAddress={setAddress}
              handleSelect={handleSelect}
              handleGoClick={handleGoClick}
            />
          </Grid>
          <Grid
            container
            mt={{ sm: "36px", md: "60px" }}
            gap={{ sm: "20px", md: "0px" }}
          >
            <Grid container sm={12} md={6} alignItems={"center"}>
              <Typography
                fontSize={{ sm: theme.spacing(5), md: theme.spacing(12) }}
                fontWeight={600}
                textAlign={{ sm: "center", md: "left" }}
              >
                {"The endless possibilities encompassed in "}
                <span style={{ color: theme.palette.error.main }}>{"AI "}</span>
                {"possibility"}
              </Typography>
            </Grid>
            <Grid item sm={12} md={6}>
              <img src={HomePageSection1} alt="" style={{ maxWidth: "100%" }} />
            </Grid>
          </Grid>
          <Grid container gap={{ sm: "20px", md: "0px" }}>
            <Grid item sm={12} md={6}>
              <img src={HomePageSection2} alt="" style={{ maxWidth: "100%" }} />
            </Grid>
            <Grid
              item
              container
              sm={12}
              md={6}
              justifyItems={"flex-end"}
              alignItems={"center"}
            >
              <Typography
                fontSize={{ sm: theme.spacing(5), md: theme.spacing(12) }}
                fontWeight={600}
                textAlign={{ sm: "center", md: "end" }}
              >
                {"Get your camera ready for some amazing Tripping!!"}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Home;
