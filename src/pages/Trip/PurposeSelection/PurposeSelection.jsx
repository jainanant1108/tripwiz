import {
  Grid,
  Typography,
  useTheme,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import React from "react";
import { ToggleGroup } from "../../../components";
import {
  AdventureIcon,
  LeisureIcon,
  ExplorationIcon,
  EnjoymentIcon,
} from "../../../utils/images";

const PurposeSelection = ({ tripPurpose, setTripPurpose }) => {
  const theme = useTheme();

  const handleChange = (event, nextView) => {
    setTripPurpose(nextView);
  };
  return (
    <Grid container gap={theme.spacing(10)}>
      <Grid
        container
        item
        sm={12}
        md={12}
        lg={12}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography
          color={theme.palette.error.main}
          fontSize={theme.spacing(6)}
          fontWeight={600}
        >
          {"What are your expectations from this trip?"}
        </Typography>
      </Grid>
      <Grid
        container
        item
        sm={12}
        md={12}
        lg={12}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography
          color={theme.palette.grey[100]}
          fontSize={theme.spacing(4)}
          fontWeight={600}
        >
          {"Choose your preferences for upcoming journey..."}
        </Typography>
      </Grid>
      <Grid container>
        <ToggleButtonGroup
          orientation="horizontal"
          value={tripPurpose}
          exclusive
          onChange={handleChange}
          sx={{
            display: "flex",
            gap: "50px",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <ToggleButton
            value={"adventurous"}
            aria-label={"adventurous"}
            sx={{
              display: "flex",
              justifyContent: "center",
              padding: "50px 50px",
            }}
          >
            <Grid
              container
              gap="16px"
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <AdventureIcon />
              <Typography fontSize="24px" fontWeight={600}>
                {"Adventure"}
              </Typography>
            </Grid>
          </ToggleButton>
          <ToggleButton
            value={"leisure"}
            aria-label={"leisure"}
            sx={{
              display: "flex",
              justifyContent: "center",
              padding: "50px 50px",
            }}
          >
            <Grid
              container
              gap="16px"
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <LeisureIcon />
              <Typography fontSize="24px" fontWeight={600}>
                {"Leisure"}
              </Typography>
            </Grid>
          </ToggleButton>
          <ToggleButton
            value={"exploration"}
            aria-label={"exploration"}
            sx={{
              display: "flex",
              justifyContent: "center",
              padding: "50px 50px",
            }}
          >
            <Grid
              container
              gap="16px"
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <ExplorationIcon />
              <Typography fontSize="24px" fontWeight={600}>
                {"Exploration"}
              </Typography>
            </Grid>
          </ToggleButton>
          <ToggleButton
            value={"enjoyment"}
            aria-label={"enjoyment"}
            sx={{
              display: "flex",
              justifyContent: "center",
              padding: "50px 50px",
            }}
          >
            <Grid
              container
              gap="16px"
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <EnjoymentIcon />
              <Typography fontSize="24px" fontWeight={600}>
                {"Enjoyment"}
              </Typography>
            </Grid>
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
    </Grid>
  );
};

export default PurposeSelection;
