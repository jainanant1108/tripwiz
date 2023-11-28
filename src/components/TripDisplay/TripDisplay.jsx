import { useTheme, Grid, Typography, Button, Stack, Box } from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  AccordionIcon,
  SunIcon,
  KeyboardArrowUpIcon,
} from "../../utils/images";
import dayjs from "dayjs";
import ChipComponent from "../Chip/Chip";
import { Accordion } from "..";

const TripDisplay = ({ trip, handleSaveClick }) => {
  const theme = useTheme();
  console.log(trip.start_date);
  console.log(dayjs(trip.start_date, "DD/MM/YYYY").format("DD MMMM, YYYY"));
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
      >
        <Grid item sm={1}>
          <SunIcon fontSize={"60px"} />
        </Grid>
        <Grid item container sm={9} alignItems={"center"}>
          <Typography
            fontSize={"20px"}
            fontWeight={600}
          >{`Presenting Trip to ${trip.destination}
           on ${trip?.start_date}`}</Typography>
        </Grid>
        <Grid
          container
          item
          sm={2}
          justifyContent={"flex-end"}
          alignItems={"center"}
        >
          <Button
            variant="contained"
            startIcon={<FavoriteIcon />}
            onClick={handleSaveClick}
            sx={{ padding: "16px 20px" }}
          >
            Save Itinerary
          </Button>
        </Grid>
      </Grid>
      <Grid container>
        <Grid container item sm={12} md={7} gap={"48px"}>
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
            <Stack direction="row" spacing={5} mt={"16px"}>
              {trip.includings.map((including) => (
                <ChipComponent label={including} />
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
                          display={"inline-flex"}
                          justifyContent={"space-between"}
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
                              <Typography fontSize={"24px"} fontWeight={600}>
                                {place.name}
                              </Typography>
                            }
                          >
                            <img />
                            <Typography fontSize={"18px"} color={"#000"}>
                              {place?.description}
                            </Typography>
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
        <Grid container item sm={12} md={5} justifyContent={"flex-end"}>
          <iframe
            width="80%"
            height="400px"
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCf3nqGvk1Kikwyj7O88LV8tYtzCDz7Q4E
    &q=${trip.destination}`}
          ></iframe>
        </Grid>
      </Grid>
    </>
  );
};

export default TripDisplay;
