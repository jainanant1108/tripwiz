import React, { useEffect, useState } from "react";
import { Header, Button } from "../../components";
import { getSavedTrips } from "../../services";
import { Grid, Typography, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setItinerary } from "../../store/slices";
import { useNavigate } from "react-router-dom";
import TripImage from "../../utils/images/TripImage.png";

const SavedTrips = () => {
  const uid = useSelector((state) => state.user.uid);
  const [trips, setTrips] = useState();
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const response = await getSavedTrips({
        uid: uid,
      });
      setTrips(response?.itineraries);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [uid]);

  const handleShowClick = (trip) => {
    dispatch(setItinerary(trip));
    navigate("/itinerary");
  };
  return (
    <>
      <div className="container">
        <Header />
      </div>
      <img src={TripImage} alt="" style={{ maxWidth: "100vw" }} />
      <div className="container">
        <Typography
          fontSize={"40px"}
          fontWeight={600}
          color={theme.palette.error.main}
          mt={"20px"}
        >
          {"Saved Trips"}
        </Typography>
        <Grid container gap={"40px"} mt={"20px"}>
          {trips?.length > 0 ? (
            trips?.map((trip) => (
              <Grid
                container
                sx={{
                  border: "1px solid #000",
                  width: "100%",
                  borderRadius: "20px",
                  padding: "20px",
                }}
                columnSpacing={{ sm: "10px", md: "20px" }}
              >
                <Grid container item sm={10}>
                  <Typography
                    color={theme.palette.error.main}
                    fontSize={{ sm: "16px", md: "18px" }}
                    fontWeight={600}
                  >
                    {"Trip to " +
                      trip.trip_details.destination +
                      " between " +
                      trip.trip_details.start_date +
                      "-" +
                      trip.trip_details.end_date}
                  </Typography>
                </Grid>
                <Grid container item sm={2} justifyContent={"flex-end"}>
                  <Button
                    id="show"
                    variant="secondary"
                    onClick={() => handleShowClick(trip)}
                    label="Show"
                  />
                </Grid>
              </Grid>
            ))
          ) : (
            <Grid
              container
              sx={{ minHeight: "400px" }}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography fontSize={"24px"}>{"No Saved Trips"}</Typography>
            </Grid>
          )}
        </Grid>
      </div>
    </>
  );
};

export default SavedTrips;
