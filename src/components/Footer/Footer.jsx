import React from "react";
import { Grid, Typography, useTheme, Box } from "@mui/material";
import { Logo } from "../../utils/images";
import "./Footer.css";

const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        bgcolor: theme.palette.primary.main,
        color: theme.palette.grey[200],
        paddingTop:'40px'
      }}
    >
      <div id="footerMainWrapper" className="container">
        <Grid
          container
          color={theme.palette.secondary.main}
          gap={{ sm: "20px", md: "0px" }}
        >
          <Grid container item sm={12} md={6} flexDirection={"column"}>
            <Grid item container gap={"10px"} alignItems={"center"}>
              <Logo fill={theme.palette.secondary.main} />
              <Typography fontSize={"16px"}>{"TripWiz"}</Typography>
            </Grid>
            <Grid item>
              <Typography
                fontWeight={400}
                fontFamily={"Recursive"}
                fontSize={theme.spacing(3)}
                sx={{ marginTop: "20px" }}
              >
                @2023 Trip Wiz All Rights Reserved
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            item
            sm={12}
            md={6}
            justifyContent={{ sm: "flex-start", md: "flex-end" }}
            flexDirection={{ sm: "row", md: "column" }}
          >
            <Grid
              item
              container
              justifyContent={{ sm: "flex-start", md: "flex-end" }}
            >
              <Typography
                fontWeight={600}
                fontFamily={"Recursive"}
                fontSize={theme.spacing(4)}
                color={theme.palette.secondary.main}
              >
                About Trip Wiz
              </Typography>
            </Grid>
            <Grid item>
              <ul class="linksList">
                <li>
                  <Typography
                    fontWeight={400}
                    fontFamily={"Recursive"}
                    fontSize={theme.spacing(3)}
                    textAlign={{ sm: "left", md: "right" }}
                  >
                    About Us
                  </Typography>
                </li>
                <li>
                  <Typography
                    fontWeight={400}
                    fontFamily={"Recursive"}
                    fontSize={theme.spacing(3)}
                    textAlign={{ sm: "left", md: "right" }}
                  >
                    Contact Us
                  </Typography>
                </li>
                <li>
                  <Typography
                    fontWeight={400}
                    fontFamily={"Recursive"}
                    fontSize={theme.spacing(3)}
                    textAlign={{ sm: "left", md: "right" }}
                  >
                    Help Center
                  </Typography>
                </li>
              </ul>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
};

export default Footer;
