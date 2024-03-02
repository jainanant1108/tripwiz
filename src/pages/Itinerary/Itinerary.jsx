import { Backdrop, useTheme } from "@mui/material";
import React, { useState } from "react";
import { InfinitySpin } from "react-loader-spinner";
import { useSelector } from "react-redux";
import { Header, Snackbar, TripDisplay } from "../../components";
import { saveTrip } from "../../services";
import TripImage from "../../utils/images/TripImage.png";

const Itinerary = () => {
  const [open, setOpen] = useState(false);
  const { trip_details } = useSelector((state) => state.itinerary.itinerary);
  const [tripSavedButton, setTripSavedButton] = useState(false);
  const [isTripSaved, setIsTripSaved] = useState(false);
  const uid = useSelector((state) => state.user.uid);
  const theme = useTheme();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleSaveClick = async () => {
    try {
      setIsTripSaved(true);
      await saveTrip({
        uid,
      });
      setIsTripSaved(false);
      setTripSavedButton(true);
    } catch (error) {
      setIsTripSaved(false);

      setOpen(true);
      return (
        <Snackbar
          message={error?.response?.data?.message}
          open={open}
          handleClose={handleClose}
        />
      );
    }
  };

  return (
    <>
      <div className="container">
        <Header />
      </div>
      <img
        src={TripImage}
        alt=""
        style={{
          width: "99vw",
          height: "20vh",
          objectFit: "cover",
        }}
      />
      <div className="container">
        <TripDisplay
          trip={trip_details}
          handleSaveClick={handleSaveClick}
          isTripSaved={tripSavedButton}
        />
      </div>
      <Backdrop open={isTripSaved}>
        <InfinitySpin width="200" color={theme.palette.secondary.main} />
      </Backdrop>
    </>
  );
};

export default Itinerary;
