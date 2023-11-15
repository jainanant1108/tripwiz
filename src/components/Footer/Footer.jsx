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
      }}
    >
      <div id="footerMainWrapper" className="container">
        <Grid
          container
          md={12}
          lg={12}
          id="gridMainWrapper"
          sx={{
            height: "fit-content",
            padding: theme.spacing(2),
          }}
        >
          <Grid
            sm={6}
            item
            id="gridColumn1"
            sx={{
              paddingTop: theme.spacing(1),
              paddingLeft: theme.spacing(5),
            }}
          >
            <div id="column1OuterWrapper">
              <div id="column1Row1Wrapper">
                <div id="column1LogoWrapper">
                  <img src={Logo} style={{ display: "block" }} />
                  <Typography
                    fontWeight={400}
                    fontFamily={"Recursive"}
                    fontSize={theme.spacing(3)}
                    sx={{ marginTop: "20px" }}
                  >
                    @2023 Trip Wiz All Rights Reserved
                  </Typography>
                </div>
                <div id="column1LinksWrapper">
                  <ul class="linksList">
                    <li>
                      <Typography
                        fontWeight={400}
                        fontFamily={"Recursive"}
                        fontSize={theme.spacing(3)}
                      >
                        Terms Of use
                      </Typography>
                    </li>
                    <li>
                      <Typography
                        fontWeight={400}
                        fontFamily={"Recursive"}
                        fontSize={theme.spacing(3)}
                      >
                        Privacy and cookies
                      </Typography>
                    </li>
                  </ul>
                </div>
              </div>
              <div id="column1Row2Wrapper">
                <Typography
                  fontWeight={400}
                  fontFamily={"Recursive"}
                  fontSize={theme.spacing(2)}
                  marginTop={5}
                >
                  This is the version of our website addressed to speakers of
                  English in Canada. The application follows the English-US
                  standards.
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid
            md={6}
            item
            id="gridColumn1"
            sx={{
              paddingTop: theme.spacing(1),
              paddingRight: theme.spacing(4),
            }}
          >
            <div id="column2OuterWrapper">
              <div id="column2InnerWrapper">
                <Typography
                  fontWeight={600}
                  fontFamily={"Recursive"}
                  fontSize={theme.spacing(4)}
                  color={theme.palette.secondary.main}
                  marginLeft={3}
                  align="right"
                >
                  About Trip Wiz
                </Typography>
                <ul class="linksList">
                  <li>
                    <Typography
                      fontWeight={400}
                      fontFamily={"Recursive"}
                      fontSize={theme.spacing(3)}
                      align="right"
                    >
                      About Us
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      fontWeight={400}
                      fontFamily={"Recursive"}
                      fontSize={theme.spacing(3)}
                      align="right"
                    >
                      Contact Us
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      fontWeight={400}
                      fontFamily={"Recursive"}
                      fontSize={theme.spacing(3)}
                      align="right"
                    >
                      Help Center
                    </Typography>
                  </li>
                </ul>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
};

export default Footer;
