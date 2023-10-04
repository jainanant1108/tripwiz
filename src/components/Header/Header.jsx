import { Grid } from "@mui/material";
import React from "react";
import { Logo } from "../../utils/images";

const Header = () => {
  return (
    <Grid container>
      <Grid item lg={4}>
        <Logo />
      </Grid>
    </Grid>
  );
};

export default Header;
