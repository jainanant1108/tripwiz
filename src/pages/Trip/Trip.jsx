import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {
  Button,
  Grid,
  useTheme,
  Backdrop,
  Alert,
  Snackbar,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import { geocodeByPlaceId } from "react-places-autocomplete";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Header, LocationSearchBar } from "../../components";
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
import CloseIcon from "@mui/icons-material/Close";

const Trip = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [isDateSelection, setIsDateSelection] = useState(true);
  const [startDate, setStartDate] = useState("Start Date");
  const [endDate, setEndDate] = useState("End Date");
  const [tripType, setTripType] = useState("");
  const [errorMessage, setErrorMessage] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [open, setOpen] = useState(false);
  const trip = useSelector((state) => state.trip);
  const uid = useSelector((state) => state.user.uid);
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
      if (
        startDate &&
        endDate &&
        startDate !== "Start Date" &&
        endDate !== "End Date"
      ) {
        dispatch(setDates({ startDate, endDate }));
        setIsDateSelection(false);
        setErrorMessage("");
      } else {
        setErrorMessage("Please Select Dates");
        setOpen(true);
      }
    }
  };

  const handleSubmit = async () => {
    dispatch(setTripPurpose({ tripType: tripType }));
    if (tripType !== "") {
      try {
        setIsSubmitting(true);
        const numberOfDays = dayjs(trip.endDate).diff(trip.startDate, "day");
        const placesToVisit = numberOfDays * 3;
        const response = await generateTrip({
          uid: uid,
          destination: trip.name,
          startDate: dayjs(trip.startDate).format("DD/MM/YYYY"),
          endDate: dayjs(trip.endDate).format("DD/MM/YYYY"),
          tripType: tripType,
          numberOfDays,
          placesToVisit,
        });

        dispatch(setItinerary(JSON.parse(response.itinerary)));
        setIsSubmitting(false);
        navigate("/itinerary");
      } catch (error) {
        setIsSubmitting(false);
        setErrorMessage(
          error?.response?.data?.message ||
            "Something went worng please try again"
        );
        <Snackbar
          key={errorMessage}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert severity="error">{errorMessage}</Alert>
        </Snackbar>;
      }
    } else {
      setErrorMessage("Please Select a trip type");
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
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
          <Grid item sm={12}>
            {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
          </Grid>
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
        <Snackbar
          key={errorMessage}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message={errorMessage}
          action={
            <React.Fragment>
              <IconButton
                aria-label="close"
                color="inherit"
                sx={{ p: 0.5 }}
                onClick={handleClose}
              >
                <CloseIcon />
              </IconButton>
            </React.Fragment>
          }
        />
      </div>
    </>
  );
};

export default Trip;
