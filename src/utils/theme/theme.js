import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1B1B1B",
    },
    secondary: {
      main: "#F6F6F6",
    },
    grey: {
      100: "#969696",
      200: "#C2C2C2",
    },
  },
  breakpoints: {
    values: {
      sm: 320,
      md: 768,
      lg: 1200,
    },
  },
  spacing: 4,
  typography: {
    htmlFontSize: 18,
    fontSize: 18,
    fontFamily: ["Poppins", "Recursive"].join(","),
    fontWeightBold: 700,
    fontWeightLight: 300,
    fontWeightMedium: 600,
    fontWeightRegular: 400,
    pxToRem: (size) => `${(size / 18).toFixed(2)}rem`,
  },
});

export default theme;
