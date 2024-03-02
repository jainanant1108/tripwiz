import {
  Backdrop,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { GoogleIcon, Logo } from "../../utils/images";
import LoginImage from "../../utils/images/LoginImage.png";
// import { Button } from "../../components";
import {
  GoogleAuthProvider,
  getAuth,
  getRedirectResult,
  signInWithRedirect,
} from "firebase/auth";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { InfinitySpin } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Snackbar } from "../../components";
import ButtonComponent from "../../components/Button/Button";
import { getUserDetails, googleLogin, loginUser, ping } from "../../services";
import { setUID, setUser } from "../../store/slices";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const methods = useForm({
    mode: "onBlur",
  });
  const {
    control,
    formState: { errors },
  } = methods;
  const theme = useTheme();
  const handleSignInWithGoogle = () => {
    const auth = getAuth(); // Get the Firebase Auth instance
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const handleRedirectCallback = async () => {
    const auth = getAuth();

    try {
      setIsSubmitting(true);
      const result = await getRedirectResult(auth);
      const user = result.user;

      // Check if the user is signed in
      if (user) {
        // Store the UID in Firestore Realtime Database

        // Dispatch actions to update Redux store or perform other actions
        dispatch(setUID(user.uid));
        dispatch(
          setUser({
            displayName: user.displayName,
            username: user.email,
            uid: user.uid,
          })
        );
        await googleLogin({
          displayName: user.displayName,
          username: user.email,
          uid: user.uid,
        });
        console.log("User logged in:", user);
        setIsSubmitting(false);
        navigate("/", { replace: true });
      }
    } catch (error) {
      setIsSubmitting(false);
      // Handle errors here.
      console.error(error);
    }
  };

  useEffect(() => {
    handleRedirectCallback();
    ping();
  }, []);

  const onSubmit = async (formData) => {
    try {
      setIsSubmitting(true);
      const user = await loginUser({
        username: formData?.email,
        password: formData?.password,
      });
      console.log("user", user);

      dispatch(setUID(user?.uid));
      const userDetails = await getUserDetails({
        uid: user?.uid,
      });
      console.log(userDetails);
      dispatch(
        setUser({
          displayName: userDetails.displayName,
          username: userDetails.username,
          uid: user.uid,
        })
      );
      setIsSubmitting(false);
      navigate("/", { replace: true });
      // The user is signed up.
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
      setMessage(error.response.data.message);
      setOpen(true);
    }
  };

  const handleSignupClick = () => {
    navigate("/signup");
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <FormProvider {...methods}>
      <form noValidate onSubmit={methods.handleSubmit(onSubmit)}>
        <div
          className="container"
          style={{
            minHeight: window.screen.availHeight - 268,
            alignItems: "center",
          }}
        >
          <Box
            my={{
              sm: `auto`,
              md: `60px`,
            }}
          >
            <Grid container justifyContent={"space-between"}>
              <Grid
                container
                lg={4}
                flexDirection={"column"}
                gap={theme.spacing(10)}
                justifyContent={"space-evenly"}
                mx={`auto`}
              >
                <Grid item>
                  <Grid
                    container
                    mt={theme.spacing(4)}
                    justifyContent={"center"}
                    gap={theme.spacing(5)}
                  >
                    <Logo />
                    <Typography
                      fontWeight={600}
                      fontFamily={"Poppins"}
                      fontSize={theme.spacing(9)}
                    >
                      TripWiz
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item alignSelf={"center"}>
                  <Typography
                    fontFamily={"Recursive"}
                    fontSize={"26px"}
                    fontWeight={400}
                    color={theme.palette.grey[100]}
                    textAlign={"center"}
                  >
                    {"Welcome back to the experience of ease of mind"}
                  </Typography>
                </Grid>
                <Grid container gap={theme.spacing(6)}>
                  <Grid container justifyContent={"center"} lg={12}>
                    <Controller
                      name="email"
                      control={control}
                      rules={{
                        required: "Please enter email address",
                        pattern: {
                          value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-z]{2,7}$/,
                          message: "Please enter a valid email address",
                        },
                      }}
                      render={({ field }) => (
                        <TextField
                          id="email"
                          name="email"
                          sx={{
                            width: "90%",
                          }}
                          placeholder="Email"
                          type="email"
                          field={field}
                          value={field.value}
                          inputRef={field.ref}
                          onChange={field.onChange}
                          onBlur={field.onBlur}
                          error={errors?.email?.message}
                          helperText={errors?.email?.message}
                        />
                      )}
                    />
                  </Grid>
                  <Grid container justifyContent={"center"} lg={12}>
                    <Controller
                      name="password"
                      control={control}
                      rules={{
                        required: "Please enter password",
                      }}
                      render={({ field }) => (
                        <TextField
                          id="password"
                          name="password"
                          sx={{
                            width: "90%",
                            borderRadius: "20px",
                          }}
                          type="password"
                          autoComplete="current-password"
                          placeholder="Password"
                          field={field}
                          value={field.value}
                          inputRef={field.ref}
                          onChange={field.onChange}
                          onBlur={field.onBlur}
                          error={errors?.password?.message}
                          helperText={errors?.password?.message}
                        />
                      )}
                    />
                  </Grid>
                </Grid>
                <Grid container justifyContent={"center"}>
                  <ButtonComponent
                    id={"login"}
                    label={"Login"}
                    variant={"primary"}
                    sx={{ width: "90%", padding: "20px" }}
                    labelFontSize={"24px"}
                    buttonType="submit"
                  />
                </Grid>
                <Grid container gap={theme.spacing(6)}>
                  <Grid container item justifyContent={"center"}>
                    <Button
                      id="googleSigning"
                      sx={{
                        width: "90%",
                        background: theme.palette.primary.main,
                        borderRadius: "15px",
                        boxShadow: "4px 4px 10px 5px rgba(0, 0, 0, 0.07)",
                        "&:hover": {
                          background: theme.palette.primary.main,
                        },
                        p: `${theme.spacing(3)} 0px`,
                      }}
                      onClick={handleSignInWithGoogle}
                    >
                      <GoogleIcon />
                      <Typography
                        fontFamily={"Poppins"}
                        fontSize={theme.spacing(4)}
                        fontWeight={600}
                        marginLeft={theme.spacing(10)}
                        color={theme.palette.secondary.main}
                      >
                        {"Continue with Google"}
                      </Typography>
                    </Button>
                  </Grid>
                </Grid>
                <Grid container gap={theme.spacing(2)} flexDirection={"column"}>
                  <Grid
                    container
                    justifyContent={"center"}
                    sx={{
                      color: `${theme.palette.grey[100]}`,
                      fontSize: "18px",
                      fontFamily: "Recursive",
                    }}
                  >
                    {"Don’t have an account ?"}
                  </Grid>
                  <Grid container justifyContent={"center"}>
                    <ButtonComponent
                      variant="link"
                      label={"Sign Up"}
                      onClick={handleSignupClick}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid container lg={3} mx={`auto`}>
                <img src={LoginImage} alt="" srcset="" width={"100%"} />
              </Grid>
            </Grid>
            <Snackbar open={open} handleClose={handleClose} message={message} />
          </Box>
        </div>
      </form>
      <Backdrop open={isSubmitting}>
        <InfinitySpin width="200" color={theme.palette.secondary.main} />
      </Backdrop>
    </FormProvider>
  );
};

export default Login;
