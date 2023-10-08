import { Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import { Logo } from "../../utils/images";
import { Button } from "../../components";

const Header = () => {
  const theme = useTheme();
  return (
    <Grid container>
      <Grid container lg={4} gap={theme.spacing(5)}>
        <Logo />
        <Typography fontSize={theme.spacing(9)}>TripWiz</Typography>
      </Grid>
      <Grid item lg={4}>
        <Button
          id="savedTrips"
          key="savedTrips"
          variant="link"
          onClick={() => {}}
          label="Hi"
        />
      </Grid>
    </Grid>
  );
};

export default Header;
