import { Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import { Button } from "../../components";
import { Logo } from "../../utils/images";
import { useSelector } from "react-redux";

const Header = () => {
  const theme = useTheme();
  const uid = useSelector((state) => state.user.uid);
  const handleLoginCLick = () => {
    window.location.href = "/login";
  };
  const handleSignupCLick = () => {
    window.location.href = "/signup";
  };
  const handleSavedTripsClick = () => {
    window.location.href = "saved-trips";
  };
  return (
    <Grid container flexWrap={"nowrap"}>
      <Grid container lg={4} gap={theme.spacing(5)}>
        <Logo />
        <Typography
          fontWeight={600}
          fontFamily={"Poppins"}
          fontSize={theme.spacing(9)}
        >
          TripWiz
        </Typography>
      </Grid>
      <Grid
        container
        flex
        lg={4}
        gap={theme.spacing(5)}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {uid && (
          <>
            <Grid item>
              <Button
                id="savedTrips"
                variant="link"
                onClick={handleSavedTripsClick}
                label="Saved Trips"
              />
            </Grid>
            <Grid item>
              <Button
                id="yourLocation"
                variant="link"
                onClick={() => {}}
                label="Your Location"
              />
            </Grid>
          </>
        )}
      </Grid>

      <Grid
        container
        flex
        lg={4}
        gap={theme.spacing(5)}
        justifyContent={"flex-end"}
        alignItems={"center"}
      >
        {!uid && (
          <>
            <Grid item>
              <Button
                id="login"
                variant="secondary"
                onClick={handleLoginCLick}
                label="Login"
              />
            </Grid>
            <Grid item>
              <Button
                id="signUp"
                variant="primary"
                onClick={handleSignupCLick}
                label="Sign up"
              />
            </Grid>
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default Header;
