import { Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import { Button } from "../../components";
import { Logo } from "../../utils/images";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const handleLoginCLick = () => {
    navigate("/login");
  };
  return (
    <Grid container>
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
        <Grid item>
          <Button
            id="savedTrips"
            variant="link"
            onClick={() => {}}
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
      </Grid>
      <Grid
        container
        flex
        lg={4}
        gap={theme.spacing(5)}
        justifyContent={"flex-end"}
        alignItems={"center"}
      >
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
            onClick={() => {}}
            label="Sign up"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
