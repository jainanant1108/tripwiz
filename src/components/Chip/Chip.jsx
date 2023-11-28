import React from "react";
import { Chip, useTheme } from "@mui/material";

const ChipComponent = ({ label, variant }) => {
  const theme = useTheme();
  return (
    <Chip
      label={label}
      variant={variant || "outlined"}
      size="medium"
      sx={{
        padding: "10px 20px",
        border: `1px solid ${theme.palette.primary.main}`,
        color: "#000",
      }}
    />
  );
};

export default ChipComponent;
