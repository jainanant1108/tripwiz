import React from "react";
import {
  ToggleButtonGroup,
  Typography,
  ToggleButton,
  Grid,
} from "@mui/material";
const ToggleGroup = ({ view, handleChange, list }) => {
  return (
    <ToggleButtonGroup
      orientation="horizontal"
      value={view}
      exclusive
      onChange={handleChange}
      sx={{ display: "flex", justifyContent: "space-between" }}
    >
      {list.map((item) => {
        <ToggleButton
          value={item.value}
          aria-label="list"
          sx={{
            padding: "120px 80px",
            display: "flex",
            justifyContent: "center",
          }}
          key={item.name}
        >
          <Grid container gap="16px">
            <img src={item?.image} alt="" />
            <Typography fontSize="24px" fontWeight={600}>
              {item?.title}
            </Typography>
          </Grid>
        </ToggleButton>;
      })}
    </ToggleButtonGroup>
  );
};

export default ToggleGroup;
