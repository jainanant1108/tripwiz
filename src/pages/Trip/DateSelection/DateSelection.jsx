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
            fontSize={{ sm: theme.spacing(4), md: theme.spacing(6) }}
            fontWeight={600}
            sx={{ textAlign: "center" }}
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
            fontSize={{ sm: theme.spacing(3), md: theme.spacing(4) }}
            fontWeight={600}
          >
            {"Choose start and end date, up to 5 days"}
          </Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent={"center"}>
        <Grid
          container
          item
          bgcolor={"#fff"}
          p={`${theme.spacing(6)} ${theme.spacing(10)}`}
          boxShadow={"10px 20px 50px 20px rgba(0, 0, 0, 0.06)"}
          borderRadius={"10px"}
          sm={12}
          md={10}
        >
          <Grid
            container
            justifyContent={"space-between"}
            gap={{ sm: "10px", md: "0px" }}
            flexWrap={{ sm: "wrap", md: "nowrap" }}
          >
            <Grid
              item
              container
              gap={"28px"}
              fontSize={theme.spacing(4)}
              fontWeight={600}
              sm={12}
              md={6}
              flexWrap={"nowrap"}
              justifyContent={{ sm: "space-evenly", md: "normal" }}
            >
              <Grid item>{startDate}</Grid>
              <Grid>
                <ArrowForwardIcon />
              </Grid>
              <Grid item>{endDate}</Grid>
            </Grid>
            <Grid
              item
              container
              justifyContent={{ sm: "center", md: "flex-end" }}
              textAlign={"center"}
              sm={12}
            >
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
