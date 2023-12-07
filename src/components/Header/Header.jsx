import {
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
  Backdrop,
} from "@mui/material";
import { useState, useEffect } from "react";
import { Button, Snackbar } from "../../components";
import { Logo } from "../../utils/images";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn, logoutUser } from "../../services";
import { resetItinerary, resetTrip, resetUser } from "../../store/slices";
import { useNavigate } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";

const Header = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const uid = useSelector((state) => state.user.uid);
  const userDetails = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const mobileDevice = useMediaQuery((theme) =>
    theme.breakpoints.between("sm", "md")
  );
  const handleLoginCLick = () => {
    window.location.href = "/login";
  };
  const handleSignupCLick = () => {
    window.location.href = "/signup";
  };
  const handleSavedTripsClick = () => {
    window.location.href = "saved-trips";
  };

  const handleSignoutClick = async () => {
    try {
      setIsSubmitting(true);
      await logoutUser({ uid });
      dispatch(resetUser());
      dispatch(resetItinerary());
      dispatch(resetTrip());
      setIsSubmitting(false);
      navigate("/", { replace: true });
    } catch (error) {
      setIsSubmitting(false);
      setMessage("Error while signing out. Please try again later");
      setOpen(true);
    }
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  useEffect(() => {
    if (uid) {
      async function getLoggedInStatus() {
        const isUserLogIn = await isUserLoggedIn(uid);
        setIsLoggedIn(isUserLogIn?.isLoggedin);
      }
      getLoggedInStatus();
    }
  }, []);

  return (
    <Grid container flexWrap={"nowrap"}>
      <Grid container lg={4} gap={theme.spacing(5)} alignItems={"center"}>
        <a href="/">
          <Logo />
        </a>
        {!mobileDevice && (
          <Typography
            fontWeight={600}
            fontFamily={"Poppins"}
            fontSize={theme.spacing(9)}
          >
            TripWiz
          </Typography>
        )}
      </Grid>
      <Grid
        container
        flex
        lg={4}
        gap={theme.spacing(5)}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {uid && isLoggedIn ? (
          <Grid item>
            <Button
              id="savedTrips"
              variant="link"
              onClick={handleSavedTripsClick}
              label="Saved Trips"
            />
          </Grid>
        ) : null}
      </Grid>

      <Grid
        container
        flex
        lg={4}
        gap={theme.spacing(5)}
        justifyContent={"flex-end"}
        alignItems={"center"}
        flexWrap={"nowrap"}
      >
        {!uid && (
          <>
            <Grid item>
              <Button
                id="login"
                variant="secondary"
                onClick={handleLoginCLick}
                label="Login"
                fontSize={{ sm: "14px", md: "16px" }}
              />
            </Grid>
            <Grid item>
              <Button
                id="signUp"
                variant="primary"
                onClick={handleSignupCLick}
                label="Sign up"
                fontSize={{ sm: "14px", md: "16px" }}
                sx={{ textWrap: "nowrap" }}
              />
            </Grid>
          </>
        )}
        {uid && isLoggedIn && (
          <>
            {!mobileDevice && (
              <Grid item>
                <Typography
                  fontSize={"18px"}
                  color={theme.palette.error.main}
                  fontFamily={"Recursive"}
                >
                  {"Hello, " + userDetails?.displayName}
                </Typography>
              </Grid>
            )}

            <Grid item>
              <Button
                id="signout"
                variant="link"
                onClick={handleSignoutClick}
                label="Signout"
              />
            </Grid>
          </>
        )}
      </Grid>
      <Snackbar open={open} handleClose={handleClose} message={message} />
      <Backdrop open={isSubmitting}>
        <InfinitySpin width="200" color={theme.palette.secondary.main} />
      </Backdrop>
    </Grid>
  );
};

export default Header;
