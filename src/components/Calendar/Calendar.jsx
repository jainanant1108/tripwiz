import React, { useState, useEffect } from "react";
import { RangePicker as ReactRangePicker } from "react-trip-date";
import dayjs from "dayjs";
import { useTheme } from "@mui/material";

const Calendar = ({
  initialRangeValuesProps,
  onRangeChange,
  initialMonthAndYear,
  setOnRangeDateInScreen,
}) => {
  const [rangeValues, setRangeValues] = useState(initialRangeValuesProps);
  const theme = useTheme();
  useEffect(() => {
    setRangeValues(initialRangeValuesProps);
  }, [initialRangeValuesProps]);

  const rangePickerProps = {
    initialMonthAndYear: initialMonthAndYear,
    selectedDays: rangeValues,
    autoResponsive: false,
    numberOfMonths: 2,
    disabledBeforeToday: true,
    disabledBeforeDate: initialRangeValuesProps?.from
      ? dayjs(initialRangeValuesProps?.from)
      : null,
    onRangeDateInScreen: (e) => setOnRangeDateInScreen(e),
  };

  const onChange = (e) => {
    setRangeValues(e);
    onRangeChange(e);
  };

  return (
    <ReactRangePicker
      {...rangePickerProps}
      onChange={onChange}
      disabledAfterDate={
        initialRangeValuesProps?.from &&
        dayjs(initialRangeValuesProps?.from).add(4, "days")
      }
      autoResponsive={true}
    />
  );
};

export default Calendar;
