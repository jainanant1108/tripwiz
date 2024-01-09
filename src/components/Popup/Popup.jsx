import React, { useState } from "react";
import "./Popup.css";
import AiImage from "../../utils/images/ai_image.png";
import { Button, useTheme } from "@mui/material";

const PopUp = ({ togglePopup, isPopupVisible }) => {
  const theme = useTheme();
  const handlePopup = () => {};
  return (
    <div>
      {isPopupVisible && (
        <div className="overlay">
          <div className="popup">
            {/* <Button onClick={togglePopup} style={{
            position:'absolute', 
            top:theme.spacing(6), 
            right:theme.spacing(6), 
            color:theme.palette.secondary.main,
            fontSize:theme.spacing(4),
            fontWeight:'bold',
            backgroundColor:theme.palette.primary.main,
            }}>X</Button> */}
            <div className="popup-content">
              <h2 style={{ color: theme.palette.error.main }}>
                Just a moment,
              </h2>
              <h4 style={{ color: theme.palette.primary.main }}>
                We are starting our servers just for you :)
              </h4>
              <p
                style={{
                  letterSpacing: theme.spacing(0.1),
                  color: theme.palette.primary.main,
                }}
              >
                Our servers are hosted on render platform for free. Our server
                gets put to sleep if not used for for some time. So, we are
                starting our servers just for you... We ask you to be patient
                for a moment more. You are our priority so hangon. In mean time,
                you are always welcome to check the server status at the bottom
                of the website.{" "}
                <span
                  style={{ fontWeight: 500, color: theme.palette.error.main }}
                >
                  This popup will disappear once the server is up and running.
                </span>
              </p>
              <p
                style={{
                  letterSpacing: theme.spacing(0.1),
                  color: theme.palette.primary.main,
                }}
              >
                {"Thank you :"}
              </p>
            </div>
            <img src={AiImage} />
          </div>
        </div>
      )}
    </div>
  );
};

export default PopUp;
