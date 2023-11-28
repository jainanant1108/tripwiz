import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Button, Grid, useTheme, Backdrop } from "@mui/material";
import React, { useState } from "react";
import { geocodeByPlaceId } from "react-places-autocomplete";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Header, LocationSearchBar, Snackbar } from "../../components";
import {
  setTrip,
  setDates,
  setTripPurpose,
  setItinerary,
} from "../../store/slices";
import TripImage from "../../utils/images/TripImage.png";
import DateSelection from "./DateSelection/DateSelection";
import { generateTrip } from "../../services";
import PurposeSelection from "./PurposeSelection/PurposeSelection";
import dayjs from "dayjs";
import { InfinitySpin } from "react-loader-spinner";
const Trip = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [isDateSelection, setIsDateSelection] = useState(true);
  const [startDate, setStartDate] = useState("Start Date");
  const [endDate, setEndDate] = useState("End Date");
  const [tripType, setTripType] = useState("");
  const [errorMessage, setErrorMessage] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const trip = useSelector((state) => state.trip);
  const navigate = useNavigate();
  const theme = useTheme();
  const dispatch = useDispatch();
  // const generateTripHandler = generateTrip();

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

  const handleSubmit = async () => {
    dispatch(setTripPurpose({ tripType }));
    try {
      setIsSubmitting(true);
      const numberOfDays = dayjs(trip.endDate).diff(trip.startDate, "day");
      const placesToVisit = numberOfDays * 3;
      const response = await generateTrip({
        uid: "ixtsgm3xUQcdCak73O6Y22uoXhb2",
        destination: trip.name,
        startDate: dayjs(trip.startDate).format("DD/MM/YYYY"),
        endDate: dayjs(trip.endDate).format("DD/MM/YYYY"),
        tripType: trip.tripType,
        numberOfDays,
        placesToVisit,
      });

      dispatch(setItinerary(JSON.parse(response.itinerary)));
      setIsSubmitting(false);
      navigate("/itinerary");
    } catch (error) {
      <Snackbar message={error?.response?.data?.message} />;
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
          {!isDateSelection && (
            <PurposeSelection
              tripPurpose={tripType}
              setTripPurpose={setTripType}
            />
          )}

          <Grid container justifyContent={"center"}>
            <Grid container item sm={11.5} justifyContent={"flex-end"}>
              {isDateSelection && (
                <Button
                  variant="contained"
                  endIcon={<NavigateNextIcon />}
                  onClick={handleNextClick}
                  sx={{ padding: "15px" }}
                >
                  Next
                </Button>
              )}
              {!isDateSelection && (
                <Button
                  variant="contained"
                  endIcon={<NavigateNextIcon />}
                  onClick={handleSubmit}
                  sx={{ padding: "15px" }}
                >
                  Next
                </Button>
              )}
            </Grid>
          </Grid>
        </Grid>
        <Backdrop open={isSubmitting}>
          <InfinitySpin width="200" color={theme.palette.secondary.main} />
        </Backdrop>
      </div>
    </>
  );
};

export default Trip;
