import React, { useEffect, useState } from "react";
import { Grid, useTheme, Typography } from "@mui/material";
import dayjs from "dayjs";
import { Calendar } from "../../../components";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const DateSelection = ({ startDate, setStartDate, endDate, setEndDate }) => {
  const theme = useTheme();
  const [selectedRange, setSelectedRange] = useState(null);
  const [initialMonthAndYear, setInitialMonthAndYear] = useState(dayjs());

  useEffect(() => {
    if (selectedRange?.from) {
      setStartDate(selectedRange?.from);
    }
    if (selectedRange?.to) {
      setEndDate(selectedRange?.to);
    }
  }, [selectedRange]);

  return (
    <>
      <Grid container columnGap={theme.spacing(2)}>
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
            {"When do you want to start your awesome journey ?"}
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
            {"Choose start and end date, up to 7 days"}
          </Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent={"center"}>
        <Grid
          item
          bgcolor={"#fff"}
          p={`${theme.spacing(6)} ${theme.spacing(10)}`}
          boxShadow={"10px 20px 50px 20px rgba(0, 0, 0, 0.06)"}
          borderRadius={"10px"}
          sm={10}
        >
          <Grid container justifyContent={"space-between"}>
            <Grid
              item
              container
              gap={"28px"}
              fontSize={theme.spacing(4)}
              fontWeight={600}
              sm={6}
            >
              <Grid item>{startDate}</Grid>
              <Grid>
                <ArrowForwardIcon />
              </Grid>
              <Grid item>{endDate}</Grid>
            </Grid>
            <Grid item alignSelf={"center"}>
              {"Your exciting trip awaits your flag to start..."}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justifyContent={"center"}>
        <Grid item sm={10}>
          <Calendar
            initialRangeValuesProps={selectedRange}
            onRangeChange={(e) => setSelectedRange(e)}
            setOnRangeDateInScreen={(e) => setInitialMonthAndYear(e.start)}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default DateSelection;
