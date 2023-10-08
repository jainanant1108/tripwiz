import { Button, Typography } from "@mui/material";
import React from "react";

const Label = ({ variant, label }) => {
  if (variant === "link") {
    return (
      <Typography sx={{ textDecorationLine: "underline", fontWeight: "600" }}>
        {label}
      </Typography>
    );
  }

  return <Typography>{label}</Typography>;
};

const ButtonComponent = ({
  id,
  key,
  variant,
  materialVariant,
  disabled,
  onClick,
  startIcon,
  sx,
  label,
}) => {
  return (
    <Button
      id={id}
      name={id}
      key={key}
      variant={materialVariant ?? "contained"}
      disabled={disabled}
      onClick={onClick}
      startIcon={startIcon}
      sx={sx}
    >
      <Label variant={variant} label={label} />
    </Button>
  );
};

export default ButtonComponent;
