import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Button, Grid, useTheme } from "@mui/material";
import React, { useState } from "react";
import { geocodeByPlaceId } from "react-places-autocomplete";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Header, LocationSearchBar, Snackbar } from "../../components";
import { setTrip, setDates } from "../../store/slices";
import TripImage from "../../utils/images/TripImage.png";
import DateSelection from "./DateSelection/DateSelection";

const Trip = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const trip = useSelector((state) => state.trip);
  const navigate = useNavigate();
  const theme = useTheme();
  const dispatch = useDispatch();
  const [isDateSelection, setIsDateSelection] = useState(true);
  const [startDate, setStartDate] = useState("Start Date");
  const [endDate, setEndDate] = useState("End Date");
  const handleSelect = (address, placeId) => {
    // Fetch location details by place ID
    geocodeByPlaceId(placeId)
      .then((results) => {
        if (results && results[0]) {
          const location = results[0];

          // Extract latitude and longitude
          const lat = location.geometry.location.lat();
          const lng = location.geometry.location.lng();

          setSelectedLocation({
            name: address,
            lat: lat,
            lng: lng,
          });
        }
      })
      .catch((error) => {
        <Snackbar message={"Error fetching location details"} />;
      });
  };

  const handleGoClick = () => {
    if (selectedLocation) {
      dispatch(setTrip(selectedLocation));
      navigate(
        `/${selectedLocation.name}/${selectedLocation.lat}/${selectedLocation.lng}`
      );
    }
  };

  const handleNextClick = () => {
    if (isDateSelection) {
      if (startDate && endDate) {
        dispatch(setDates({ startDate, endDate }));
        setIsDateSelection(false);
      }
    }
  };

  return (
    <>
      <div className="container">
        <Header />
      </div>
      <img src={TripImage} alt="" style={{ maxWidth: "100vw" }} />
      <div className="container">
        <Grid container gap={theme.spacing(6)}>
          <Grid container justifyContent={"space-evenly"}>
            <Grid item sm={10}>
              <LocationSearchBar
                handleSelect={handleSelect}
                initialValue={trip?.name}
              />
            </Grid>
            <Grid container item sm={1} justifyContent={"flex-end"}>
              <Button
                variant="contained"
                endIcon={<NavigateNextIcon />}
                onClick={handleGoClick}
              >
                Go
              </Button>
            </Grid>
          </Grid>
          {isDateSelection && (
            <DateSelection
              startDate={startDate}
              endDate={endDate}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
            />
          )}

          <Grid container justifyContent={"center"}>
            <Grid container item sm={10} justifyContent={"flex-end"}>
              <Button
                variant="contained"
                endIcon={<NavigateNextIcon />}
                onClick={handleNextClick}
              >
                Next
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Trip;
