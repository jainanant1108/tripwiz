import {
  useTheme,
  Grid,
  Typography,
  Button,
  Stack,
  Box,
  Rating,
  useMediaQuery,
  Tooltip,
  styled,
} from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import {
  AccordionIcon,
  SunIcon,
  KeyboardArrowUpIcon,
} from "../../utils/images";
import ChipComponent from "../Chip/Chip";
import { Accordion } from "..";
import { toPascalCase } from "../../utils/pascalCase";
import { Person } from "@mui/icons-material";

const TripDisplay = ({ trip, handleSaveClick, isTripSaved, getPlaceImage }) => {
  const API_KEY = `AIzaSyBPKBTlohuOXARS56ARA3xLSrJwbyfJUn0`;
  const theme = useTheme();
  const mobileDevice = useMediaQuery((theme) =>
    theme.breakpoints.between("sm", "md")
  );
  const getCrowd = (crowdLevel) => {
    console.log(crowdLevel);
    if (crowdLevel === "Not") {
      return 1;
    }
    if (crowdLevel === "highly crowded") {
      return 3;
    }
    if (crowdLevel === "moderately crowded") {
      return 2;
    }
    return 1;
  };
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: theme.palette.error.main,
    },
  });

  return (
    <>
      <Grid
        container
        mb={"80px"}
        p={"32px 40px"}
        sx={{ backgroundColor: theme.palette.secondary.main }}
        boxShadow={"0px 4px 20px 7px rgba(0, 0, 0, 0.11)"}
        borderRadius={"20px"}
        justifyContent={"space-between"}
        gap={{ sm: "20px", md: "0px" }}

      >
        {!mobileDevice && (
          <Grid item sm={2} md={1}>
            <SunIcon fontSize={"60px"} />
          </Grid>
        )}

        <Grid item container sm={12} md={9} alignItems={"center"}>
          <Typography
            fontSize={"20px"}
            fontWeight={600}
          >{`Presenting Trip to ${trip.destination}
           on ${trip?.start_date}`}</Typography>
        </Grid>
        <Grid
          container
          item
          sm={12}
          md={2}
          justifyContent={{ sm: "flex-start", md: "flex-end" }}
          alignItems={"center"}
        >
          <Button
            variant="contained"
            startIcon={<FavoriteIcon />}
            onClick={handleSaveClick}
            sx={{ padding: "16px 20px" }}
          >
            {isTripSaved ? "Saved" : "Save Itinerary"}
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={{ sm: "20px", md: "40px" }}>
        <Grid
          container
          item
          sm={12}
          md={7}
          gap={"48px"}
          mb={{ sm: "50px", md: "120px" }}
        >
          <Grid item>
            <Typography
              fontSize={"24px"}
              fontWeight={600}
              color={theme.palette.error.main}
            >
              {trip.destination}
            </Typography>
            <Typography fontSize={"16px"} fontWeight={400} mt={"16px"}>
              {trip.description}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              fontSize={"24px"}
              fontWeight={600}
              color={theme.palette.error.main}
            >
              {"Includings"}
            </Typography>
            <Stack
              direction="row"
              spacing={5}
              mt={"16px"}
              flexWrap={"wrap"}
              gap={"10px"}
            >
              {trip.includings.map((including) => (
                <ChipComponent label={toPascalCase(including)} />
              ))}
            </Stack>
          </Grid>
          <Grid container item>
            {trip.itinerary.map((day) => (
              <Accordion
                title={
                  <Typography
                    fontSize={"24px"}
                    fontWeight={600}
                    color={theme.palette.error.main}
                  >
                    {day?.day} - {day?.date}
                  </Typography>
                }
                icon={<AccordionIcon />}
                accordionStyle={{
                  width: "100%",
                  border: "none",
                  boxShadow: "none",
                }}
                accordionSummaryStyle={{
                  flexDirection: "row-reverse",
                  gap: "20px",
                }}
              >
                {
                  <Grid>
                    <Typography fontSize={"18px"} color={"#000"} mb={"30px"}>
                      {day.highlights}
                    </Typography>
                    <Grid container gap={"30px"}>
                      {day?.places?.map((place, index) => (
                        <Grid
                          container
                          justifyContent={"space-between"}
                          flexWrap={"nowrap"}
                          gap={"10px"}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              background: `${theme.palette.primary.main}`,
                              color: `${theme.palette.secondary.main}`,
                              borderRadius: "50%",
                              justifyContent: "center",
                              alignItems: "center",
                              fontSize: "24px",
                            }}
                            height={"64px"}
                            width={"64px"}
                          >
                            {index + 1}
                          </Box>
                          <Accordion
                            icon={<KeyboardArrowUpIcon />}
                            accordionStyle={{
                              width: "90%",
                              border: "1px solid #000",
                              borderRadius: "10px",
                            }}
                            title={
                              <Typography
                                fontSize={{ sm: "16px", md: "24px" }}
                                fontWeight={600}
                              >
                                {place.name}
                              </Typography>
                            }
                          >
                            <Grid
                              container
                              justifyContent={"center"}
                              gap={"10px"}
                              flexDirection={"column"}
                            >
                              <img
                                loading="lazy"
                                src={place.photoUrl}
                                style={{
                                  borderRadius: "20px",
                                  width: "100%",
                                  height: "250px",
                                  objectFit: "cover",
                                }}
                                alt={`Photo of ${place.name}`}
                              />
                              <Typography fontSize={"18px"} color={"#000"}>
                                {place?.description}
                              </Typography>
                              <Grid
                                container
                                justifyContent={"flex-end"}
                                width={"100%"}
                              >
                                <Tooltip
                                  title={
                                    place?.crowded === "variable"
                                      ? `This place is ${place?.crowded} crowded`
                                      : `This place is ${place?.crowded}`
                                  }
                                >
                                  <StyledRating
                                    name="customized-10"
                                    defaultValue={getCrowd(place?.crowded)}
                                    max={3}
                                    readOnly
                                    icon={<PersonIcon fontSize="inherit" />}
                                    emptyIcon={
                                      <PersonOutlineIcon fontSize="inherit" />
                                    }
                                  />
                                </Tooltip>
                              </Grid>
                            </Grid>
                          </Accordion>
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                }
              </Accordion>
            ))}
          </Grid>
        </Grid>
        <Grid
          container
          item
          sm={12}
          md={5}
          justifyContent={"flex-end"}
          mt={{ sm: "20px", md: "0px" }}
        >
          <iframe
            width="60%"
            height="600px"
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${trip.destination}`}
            style={{
              margin: "auto",
              marginBottom: "320px",
              borderRadius: "0.5rem",
              boxShadow: `
                        1.6px 4.3px 7px rgba(0, 0, 0, 0.024),
                        4.4px 11.9px 19.3px rgba(0, 0, 0, 0.035),
                        10.6px 28.6px 46.4px rgba(0, 0, 0, 0.046),
                        35px 95px 154px rgba(0, 0, 0, 0.07)
                        `,
              border: `2px solid ${theme.palette.primary.main}`,
            }}
          ></iframe>
        </Grid>
      </Grid>
    </>
  );
};

export default TripDisplay;   
