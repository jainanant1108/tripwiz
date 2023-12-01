import { Button, Typography, useTheme, styled } from "@mui/material";
import React from "react";

const Label = ({ variant, label, labelFontSize }) => {
  const theme = useTheme();
  if (variant === "link") {
    return (
      <Typography
        sx={{
          fontWeight: "600",
          fontFamily: "Recursive",
          fontSize: labelFontSize || "16px",
        }}
      >
        {label}
      </Typography>
    );
  }
  if (variant === "primary") {
    return (
      <Typography
        sx={{
          fontWeight: "600",
          fontFamily: "Poppins",
          fontSize: labelFontSize || "16px",
          "&:hover": {
            color: theme.palette.secondary.main,
            background: theme.palette.primary.main,
          },
        }}
        color={theme.palette.secondary.main}
      >
        {label}
      </Typography>
    );
  }

  return (
    <Typography
      sx={{
        fontWeight: "600",
        fontFamily: "Poppins",
        fontSize: labelFontSize || "16px",
      }}
      color={theme.palette.primary.main}
    >
      {label}
    </Typography>
  );
};

const ButtonComponent = ({
  id,
  variant,
  disabled,
  onClick,
  startIcon,
  sx,
  label,
  labelFontSize,
  buttonType = "button",
}) => {
  const theme = useTheme();
  const PrimaryStyledButton = styled(Button)(({ theme }) => ({
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.secondary.main,
    },
  }));

  if (variant === "link") {
    return (
      <Button
        id={id}
        name={id}
        disabled={disabled}
        onClick={onClick}
        startIcon={startIcon}
        sx={sx}
        type={buttonType}
      >
        <Label variant={variant} label={label} />
      </Button>
    );
  }
  if (variant === "primary") {
    return (
      <PrimaryStyledButton
        id={id}
        name={id}
        disabled={disabled}
        onClick={onClick}
        startIcon={startIcon}
        type={buttonType}
        sx={{
          ...sx,
          backgroundColor: theme.palette.primary.main,
          padding: `${theme.spacing(5)} ${theme.spacing(6)}`,
          borderRadius: "10px",
        }}
      >
        <Label variant={variant} label={label} />
      </PrimaryStyledButton>
    );
  }
  if (variant === "secondary") {
    return (
      <Button
        id={id}
        name={id}
        disabled={disabled}
        onClick={onClick}
        startIcon={startIcon}
        type={buttonType}
        sx={{ ...sx, backgroundColor: "transparent" }}
      >
        <Label variant={variant} label={label} labelFontSize={labelFontSize} />
      </Button>
    );
  }
};

export default ButtonComponent;
