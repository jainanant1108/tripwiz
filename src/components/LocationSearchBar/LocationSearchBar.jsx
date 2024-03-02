import React from "react";
import AutoComplete from "react-google-autocomplete";
import { Grid, Button, useTheme, useMediaQuery } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import "./LocationSearchBar.css";

const LocationSearchBar = ({ handleSelect, defaultValue, handleGoClick }) => {
  const theme = useTheme();
  const mobileDevice = useMediaQuery((theme) =>
    theme.breakpoints.between("sm", "md")
  );
  return (
    <Grid
      container
      maxWidth={{ sm: "100%", md: "70%" }}
      justifyContent={"center"}
      alignSelf={"center"}
      width={"100%"}
      flexWrap={{ md: "nowrap" }}
      columnGap={{ sm: "0px", md: "40px" }}
      p={{ sm: "10px", md: "35px 50px" }}
      sx={{
        boxShadow: "10px 20px 50px 20px rgba(0, 0, 0, 0.15)",
        // border: `1px solid ${theme.palette.primary.main}`,
        background: theme.palette.secondary.main,
        borderRadius: "20px",
      }}
    >
      <Grid container item sm={10}>
        <AutoComplete
          apiKey={"AIzaSyBPKBTlohuOXARS56ARA3xLSrJwbyfJUn0"}
          onPlaceSelected={handleSelect}
          defaultValue={defaultValue}
          style={{
            border: "none",
            width: "100%",
            color: theme.palette.primary.main,
            fontWeight: "600",
          }}
          placeholder={
            mobileDevice
              ? "Where do you wanna go?"
              : "Where would you like to go ?"
          }
        />
      </Grid>
      <Grid container item sm={2} justifyContent={"flex-end"}>
        <Button
          variant="contained"
          endIcon={<NavigateNextIcon />}
          onClick={handleGoClick}
          sx={{ padding: "10px 20px" }}
        >
          Go
        </Button>
      </Grid>
    </Grid>
  );
};

export default LocationSearchBar;
